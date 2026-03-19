// Copyright 2026 ResumeBuilder | Apache License 2.0
import React from 'react';
import { useEditorContext } from '../../context/EditorContext';
import { ATS_TEMPLATES, PROFESSION_COLORS } from '../../data/templates';
import { formatDate } from '../../utils/helpers';
import {
    localLoadResumes, localSaveResumes, localLoadTrashed, localSaveTrashed,
    cloudDeleteResume, isOnlineMode
} from '../../utils/firebase';
import Logo from '../Logo';

const FORMAT_FILTERS = [
    { key: 'all', label: 'All' },
    { key: 'chronological', label: 'Chronological' },
    { key: 'functional', label: 'Functional' },
    { key: 'combination', label: 'Combination' },
];
const PROFESSION_FILTERS = [
    { key: 'all', label: 'All' },
    { key: 'it', label: '💻 IT' },
    { key: 'hr', label: '👥 HR' },
    { key: 'business', label: '📊 Business' },
    { key: 'universal', label: '📄 Universal' },
];
const DESIGN_FILTERS = [
    { key: 'all', label: 'All' },
    { key: 'creative', label: '🎨 Creative' },
    { key: 'corporate', label: '🏢 Corporate' },
    { key: 'minimal', label: '📝 Minimal' },
];

const PREVIEW_SCALE = 0.18; // Scale factor for mini previews

function MiniPreview({ elements, color, id }) {
    if (id === 'blank') {
        return (
            <div className="mini-preview-root">
                <div className="tmpl-mini-blank">
                    <i className="fa-solid fa-plus" />
                </div>
            </div>
        );
    }



    return (
        <div className="mini-preview-root">
            <div 
                className="mini-preview-container" 
                style={{ 
                    width: 794, 
                    height: 1123, 
                    transform: `scale(${PREVIEW_SCALE})`,
                    transformOrigin: 'top left',
                    position: 'absolute',
                    background: '#fff',
                    left: 0,
                    top: 0,
                    pointerEvents: 'none'
                }}
            >
                {elements.map(el => {
                    const style = {
                        position: 'absolute',
                        left: el.x,
                        top: el.y,
                        width: el.width,
                        height: el.height || 'auto',
                        opacity: el.opacity ?? 1,
                        display: el.visible === false ? 'none' : undefined,
                    };

                    if (el.type === 'line') {
                        return (
                            <div key={el.id} style={{ ...style, height: el.height || 2, background: el.lineColor || '#333' }} />
                        );
                    }

                    if (el.type === 'image') {
                        return (
                            <div key={el.id} style={{ ...style, background: '#eee', borderRadius: el.rounded ? '50%' : 4 }}>
                                {el.src ? <img src={el.src} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: el.rounded ? '50%' : 4 }} alt="" /> : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc', fontSize: 40 }}><i className="fa-solid fa-user" /></div>}
                            </div>
                        );
                    }

                    return (
                        <div 
                            key={el.id} 
                            style={{ 
                                ...style,
                                fontFamily: el.fontFamily,
                                fontSize: el.fontSize + 'px',
                                fontWeight: el.fontWeight,
                                fontStyle: el.fontStyle,
                                textDecoration: el.textDecoration,
                                textAlign: el.textAlign,
                                color: el.color,
                                lineHeight: el.lineHeight || 1.4,
                                letterSpacing: (el.letterSpacing || 0) + 'px',
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-word',
                                overflow: 'hidden'
                            }}
                        >
                            {el.text}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}


export default function HomeView() {
    const { state, openResume, setResumes } = useEditorContext();
    const [activeNav, setActiveNav] = React.useState('Home');
    const [formatFilter, setFormatFilter] = React.useState('all');
    const [professionFilter, setProfessionFilter] = React.useState('all');
    const [designFilter, setDesignFilter] = React.useState('all');
    const [trashed, setTrashed] = React.useState([]);
    const [theme, setTheme] = React.useState(() => localStorage.getItem('rb_theme') || 'dark');
    // Undo Toast State
    const [undoToast, setUndoToast] = React.useState(null);
    const undoTimeoutRef = React.useRef(null);

    // Load resumes & trashed on mount
    React.useEffect(() => {
        const saved = localLoadResumes();
        saved.sort((a, b) => b.updatedAt - a.updatedAt);
        setResumes(saved);
        setTrashed(localLoadTrashed());
    }, [setResumes]);

    // Apply theme
    React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('rb_theme', theme);
    }, [theme]);

    function toggleTheme() {
        setTheme(t => t === 'dark' ? 'light' : 'dark');
    }

    function handleCreateNew(template) {
        const resume = {
            id: Date.now().toString(),
            title: template.id === 'blank' ? 'Untitled Design' : `${template.name} Copy`,
            elements: JSON.parse(JSON.stringify(template.elements)),
            createdAt: Date.now(),
            updatedAt: Date.now(),
        };
        const existing = localLoadResumes();
        localSaveResumes([resume, ...existing]);
        openResume(resume);
    }

    async function handleDelete(id, e) {
        e.stopPropagation();

        // Find the resume being deleted
        const target = state.resumes.find(r => r.id === id);
        if (!target) return;

        // Optimistically remove from UI
        const next = state.resumes.filter(r => r.id !== id);
        localSaveResumes(next);
        setResumes(next);

        // Show Toast with Undo
        if (undoTimeoutRef.current) clearTimeout(undoTimeoutRef.current);

        setUndoToast({ id, title: target.title || 'Untitled', data: target });

        // Wait 5 seconds
        undoTimeoutRef.current = setTimeout(async () => {
            setUndoToast(null);
            // Actually move to trash
            if (isOnlineMode()) await cloudDeleteResume(id);
            const newTrash = [{ ...target, trashedAt: Date.now() }, ...localLoadTrashed()];
            localSaveTrashed(newTrash);
            setTrashed(newTrash);
        }, 5000);
    }

    function handleUndoDelete() {
        if (!undoToast) return;
        clearTimeout(undoTimeoutRef.current);

        // Restore to projects
        const restored = undoToast.data;
        const existing = localLoadResumes();
        localSaveResumes([restored, ...existing]);
        setResumes([restored, ...existing]);

        setUndoToast(null);
    }

    function handleRestore(id) {
        const target = trashed.find(r => r.id === id);
        const newTrash = trashed.filter(r => r.id !== id);
        localSaveTrashed(newTrash);
        setTrashed(newTrash);
        const existing = localLoadResumes();
        const restored = { ...target, updatedAt: Date.now() };
        delete restored.trashedAt;
        localSaveResumes([restored, ...existing]);
        setResumes([restored, ...existing]);
        setActiveNav('Home');
    }

    function handleDeleteForever(id) {
        const newTrash = trashed.filter(r => r.id !== id);
        localSaveTrashed(newTrash);
        setTrashed(newTrash);
    }

    function handleDeleteAllTrash() {
        localSaveTrashed([]);
        setTrashed([]);
    }

    const filteredTemplates = ATS_TEMPLATES.filter(t => {
        if (t.id === 'blank') return true;
        if (formatFilter !== 'all' && t.format !== formatFilter) return false;
        if (professionFilter !== 'all' && t.profession !== professionFilter) return false;
        if (designFilter !== 'all' && t.design !== designFilter) return false;
        return true;
    });

    function getAccentColor(t) {
        if (!t.profession || t.id === 'blank') return 'var(--accent-purple)';
        return PROFESSION_COLORS[t.profession]?.accent || '#7c3aed';
    }

    function getFormatLabel(format) {
        const map = { chronological: 'Chrono', functional: 'Funct', combination: 'Hybrid' };
        return map[format] || '';
    }

    const NAV_ITEMS = [
        { icon: 'fa-house', label: 'Home' },
        { icon: 'fa-layer-group', label: 'Templates' },
        { icon: 'fa-briefcase', label: 'Projects' },
        { icon: 'fa-trash', label: 'Trash', count: trashed.length },
    ];

    return (
        <div className="home-view">
            <div className="starfield" />

            {/* Header */}
            <header className="home-header">
                <div className="home-logo" style={{ color: '#4c1d97', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Logo size={32} />
                    <span className="home-logo-text" style={{ color: '#4c1d97' }}>
                        RESUME<span style={{ color: '#4c1d97' }}>BUILDER</span>
                    </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    {/* Theme Toggle */}
                    <button className="theme-toggle-btn" onClick={toggleTheme} title="Toggle dark/light mode">
                        <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} />
                        <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
                    </button>
                </div>
            </header>

            <div className="home-body">
                {/* Sidebar Nav */}
                <nav className="home-sidebar">
                    {NAV_ITEMS.map(n => (
                        <button
                            key={n.label}
                            className={`home-nav-item${activeNav === n.label ? ' active' : ''}`}
                            onClick={() => setActiveNav(n.label)}
                        >
                            <i className={`fa-solid ${n.icon}`} />
                            <span>{n.label}</span>
                            {n.count > 0 && <span className="nav-badge">{n.count}</span>}
                        </button>
                    ))}
                </nav>

                {/* Main Content */}
                <main className="home-main">

                    {/* ── HOME & TEMPLATES: Template Gallery ─────── */}
                    {(activeNav === 'Home' || activeNav === 'Templates') && (
                        <>
                            <h2 className="section-title animate-fade-up">Start from a template</h2>

                            {/* Filter Bar */}
                            <div className="filter-bar animate-fade-up">
                                <div className="filter-row">
                                    <span className="filter-row-label">Format</span>
                                    <div className="filter-pills">
                                        {FORMAT_FILTERS.map(f => (
                                            <button key={f.key} className={`filter-pill${formatFilter === f.key ? ' active' : ''}`} onClick={() => setFormatFilter(f.key)}>{f.label}</button>
                                        ))}
                                    </div>
                                </div>
                                <div className="filter-row">
                                    <span className="filter-row-label">Profession</span>
                                    <div className="filter-pills">
                                        {PROFESSION_FILTERS.map(f => (
                                            <button
                                                key={f.key}
                                                className={`filter-pill${professionFilter === f.key ? ' active' : ''}`}
                                                onClick={() => setProfessionFilter(f.key)}
                                                style={professionFilter === f.key && f.key !== 'all' ? { borderColor: PROFESSION_COLORS[f.key]?.accent, color: PROFESSION_COLORS[f.key]?.accent, background: PROFESSION_COLORS[f.key]?.accent + '15' } : {}}
                                            >{f.label}</button>
                                        ))}
                                    </div>
                                </div>
                                <div className="filter-row">
                                    <span className="filter-row-label">Design</span>
                                    <div className="filter-pills">
                                        {DESIGN_FILTERS.map(f => (
                                            <button key={f.key} className={`filter-pill${designFilter === f.key ? ' active' : ''}`} onClick={() => setDesignFilter(f.key)}>{f.label}</button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="filter-result-count animate-fade-up">{filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''}</div>

                            <div className="template-gallery animate-fade-up delay-100">
                                {filteredTemplates.map(t => {
                                    const color = getAccentColor(t);
                                    return (
                                        <div key={t.id} className="template-card-wrapper" data-template-id={t.id} onClick={() => handleCreateNew(t)}>

                                            <div className="template-card">
                                                <div className="template-card-front">
                                                    {t.id !== 'blank' && <div className="tmpl-accent-line" style={{ background: color }} />}
                                                    <MiniPreview elements={t.elements} color={color} id={t.id} />

                                                    <div className="tmpl-footer">
                                                        <div className="tmpl-label">{t.id === 'blank' ? 'Blank Canvas' : t.name}</div>
                                                        <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                                                            {t.id !== 'blank' && t.hasPhoto && <span title="Photo included" style={{ fontSize: 9 }}>📷</span>}
                                                            {t.id !== 'blank' && t.format && (
                                                                <div className="tmpl-badge" style={{ background: color + '22', color, borderColor: color + '44' }}>{getFormatLabel(t.format)}</div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {filteredTemplates.length === 0 && (
                                <div className="empty-state animate-fade-up">
                                    <i className="fa-regular fa-rectangle-list" />
                                    No templates match the selected filters.
                                </div>
                            )}
                        </>
                    )}

                    {/* ── HOME: Recent Designs (below gallery) ────── */}
                    {activeNav === 'Home' && (
                        <>
                            <h2 className="section-title animate-fade-up delay-200" style={{ marginTop: 32 }}>Recent designs</h2>
                            {state.resumes.length === 0 ? (
                                <div className="empty-state animate-fade-up delay-300">
                                    <i className="fa-regular fa-file-lines" />
                                    No designs yet. Pick a template above to get started!
                                </div>
                            ) : (
                                <div className="recent-grid animate-fade-up delay-200">
                                    {state.resumes.map(r => (
                                        <div key={r.id} className="recent-card" onClick={() => openResume(r)}>
                                            <div className="recent-card-thumb">
                                                <MiniPreview elements={r.elements} id={r.id} />
                                            </div>

                                            <div className="recent-card-footer">
                                                <div>
                                                    <div className="recent-card-title">{r.title || 'Untitled'}</div>
                                                    <div className="recent-card-date">{formatDate(r.updatedAt)}</div>
                                                </div>
                                                <button className="recent-card-delete" onClick={e => handleDelete(r.id, e)}>
                                                    <i className="fa-solid fa-trash" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}

                    {/* ── PROJECTS TAB ─────────────────────────────── */}
                    {activeNav === 'Projects' && (
                        <>
                            <h2 className="section-title animate-fade-up">My Projects</h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 20 }}>All your saved resume designs.</p>
                            {state.resumes.length === 0 ? (
                                <div className="empty-state animate-fade-up">
                                    <i className="fa-regular fa-folder-open" />
                                    No projects yet. Create one from the Templates tab.
                                </div>
                            ) : (
                                <div className="recent-grid animate-fade-up">
                                    {state.resumes.map(r => (
                                        <div key={r.id} className="recent-card project-card" onClick={() => openResume(r)}>
                                            <div className="recent-card-thumb project-thumb">
                                                <MiniPreview elements={r.elements} id={r.id} />
                                                <div className="project-edit-overlay"><i className="fa-solid fa-pen-to-square" /> Edit</div>
                                            </div>

                                            <div className="recent-card-footer">
                                                <div>
                                                    <div className="recent-card-title">{r.title || 'Untitled'}</div>
                                                    <div className="recent-card-date">Edited {formatDate(r.updatedAt)}</div>
                                                </div>
                                                <button className="recent-card-delete" onClick={e => handleDelete(r.id, e)} title="Move to Trash">
                                                    <i className="fa-solid fa-trash" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}

                    {/* ── TRASH TAB ─────────────────────────────────── */}
                    {activeNav === 'Trash' && (
                        <>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                                <h2 className="section-title animate-fade-up" style={{ marginBottom: 0 }}>Trash</h2>
                                {trashed.length > 0 && (
                                    <button
                                        onClick={handleDeleteAllTrash}
                                        style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#ef4444', padding: '6px 14px', borderRadius: 8, fontSize: 12, cursor: 'pointer', fontWeight: 600 }}
                                    >
                                        <i className="fa-solid fa-trash" style={{ marginRight: 6 }} />Delete All
                                    </button>
                                )}
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 20 }}>Deleted resumes are stored here. Restore or permanently delete them.</p>
                            {trashed.length === 0 ? (
                                <div className="empty-state animate-fade-up">
                                    <i className="fa-solid fa-trash" />
                                    Trash is empty.
                                </div>
                            ) : (
                                <div className="recent-grid animate-fade-up">
                                    {trashed.map(r => (
                                        <div key={r.id} className="recent-card trash-card">
                                            <div className="recent-card-thumb trash-thumb">
                                                <i className="fa-solid fa-file-lines" />
                                            </div>
                                            <div className="recent-card-footer">
                                                <div>
                                                    <div className="recent-card-title">{r.title || 'Untitled'}</div>
                                                    <div className="recent-card-date">Deleted {formatDate(r.trashedAt)}</div>
                                                </div>
                                                <div style={{ display: 'flex', gap: 6 }}>
                                                    <button className="trash-restore-btn" onClick={() => handleRestore(r.id)} title="Restore">
                                                        <i className="fa-solid fa-rotate-left" />
                                                    </button>
                                                    <button className="recent-card-delete" onClick={() => handleDeleteForever(r.id)} title="Delete forever">
                                                        <i className="fa-solid fa-xmark" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}

                    {/* ── Developer Footer ──────────── */}
                    <div className="home-footer-credit">
                        Built with <span style={{ color: '#ef4444' }}>❤</span> by{' '}
                        <a href="https://aswin.up.railway.app/" target="_blank" rel="noopener noreferrer">Aswin</a>
                        {' '}· <span style={{ color: '#4c1d97', fontWeight: 'bold' }}>RESUMEBUILDER</span> © 2026
                    </div>

                </main>
            </div>

            {/* ── Classic Undo Toast ──────────── */}
            {undoToast && (
                <div className="undo-toast">
                    <span>Deleted "{undoToast.title}"</span>
                    <button className="undo-toast-btn" onClick={handleUndoDelete}>Undo</button>
                    <div className="undo-toast-progress" />
                </div>
            )}
        </div>
    );
}
