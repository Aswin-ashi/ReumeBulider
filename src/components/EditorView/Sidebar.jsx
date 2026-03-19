// Copyright 2026 ResumeBuilder | Apache License 2.0
import React, { useState } from 'react';
import { useEditorContext } from '../../context/EditorContext';
import { ATS_TEMPLATES, SECTION_BLOCKS, DEFAULT_TEXT, PROFESSION_COLORS } from '../../data/templates';
import { uuid } from '../../utils/helpers';
import ATSChecker from './ATSChecker';

const TABS = [
    { id: 'design', icon: 'fa-layer-group', label: 'Design' },
    { id: 'text', icon: 'fa-t', label: 'Text' },
    { id: 'resume', icon: 'fa-file-lines', label: 'Resume' },
    { id: 'layers', icon: 'fa-bars-staggered', label: 'Layers' },
    { id: 'ats', icon: 'fa-check-double', label: 'ATS' },
];

const PROFESSION_ORDER = ['it', 'hr', 'business', 'universal'];
const PROFESSION_LABELS = { it: '💻 IT', hr: '👥 HR', business: '📊 Business', universal: '📄 Universal' };

export default function Sidebar() {
    const [activeTab, setActiveTab] = useState('design');
    const [groupBy, setGroupBy] = useState('none');
    const { state, addElement, addElements, loadTemplate, select, deleteElement, updateElement, addPage, deletePage } = useEditorContext();

    function handleTabClick(id) {
        if (activeTab === id) {
            setActiveTab(null);
        } else {
            setActiveTab(id);
        }
    }

    function handleAddLine() { return addElement({ type: 'line', x: 200, y: 200, width: 300, height: 0.1, color: '#000000' }); }
    function handleAddText(type) {
        let config = { ...DEFAULT_TEXT, id: uuid() };
        if (type === 'heading') config = { ...config, text: 'Add a heading', fontSize: 32, fontWeight: 'bold' };
        if (type === 'subheading') config = { ...config, text: 'Add a subheading', fontSize: 20, fontWeight: '600' };
        if (type === 'body') config = { ...config, text: 'Add body text.', fontSize: 12 };
        addElement(config);
    }

    function handleAddSection(block) {
        const newEls = block.elements.map(el => ({ ...el, id: uuid() }));
        addElements(newEls);
    }

    function handleLoadTemplate(t) {
        loadTemplate(JSON.parse(JSON.stringify(t.elements)));
    }

    const selectedEl = state.elements.find(e => e.id === state.selectedId);
    const nonBlankTemplates = ATS_TEMPLATES.filter(t => t.id !== 'blank');

    function renderTemplateList() {
        if (groupBy === 'profession') {
            return PROFESSION_ORDER.map(prof => {
                const group = nonBlankTemplates.filter(t => t.profession === prof);
                if (!group.length) return null;
                const color = PROFESSION_COLORS[prof]?.accent || 'var(--accent-purple)';
                return (
                    <div key={prof} className="sidebar-group">
                        <div className="sidebar-group-header" style={{ color }}>{PROFESSION_LABELS[prof]}</div>
                        {group.map(t => renderTemplateBtn(t))}
                    </div>
                );
            });
        }
        if (groupBy === 'format') {
            const formats = ['chronological', 'functional', 'combination'];
            const labels = { chronological: '⏱ Chronological', functional: '🔑 Functional', combination: '⚡ Combination' };
            return formats.map(fmt => {
                const group = nonBlankTemplates.filter(t => t.format === fmt);
                if (!group.length) return null;
                return (
                    <div key={fmt} className="sidebar-group">
                        <div className="sidebar-group-header">{labels[fmt]}</div>
                        {group.map(t => renderTemplateBtn(t))}
                    </div>
                );
            });
        }
        return nonBlankTemplates.map(t => renderTemplateBtn(t));
    }

    function renderTemplateBtn(t) {
        const color = PROFESSION_COLORS[t.profession]?.accent || 'var(--accent-purple)';
        return (
            <button key={t.id} className="tmpl-sidebar-btn" onClick={() => handleLoadTemplate(t)}>
                <i className="fa-solid fa-palette" style={{ marginRight: 8, color }} />
                <span style={{ flex: 1 }}>{t.name}</span>
                {t.format && (
                    <span className="sidebar-format-tag" style={{ color, borderColor: color + '44', background: color + '15' }}>
                        {t.format.slice(0, 5)}
                    </span>
                )}
                {t.hasPhoto && (
                    <span title="Includes photo" style={{ marginLeft: 4, fontSize: 10, opacity: 0.6 }}>📷</span>
                )}
            </button>
        );
    }

    return (
        <>
            {/* Icon Rail */}
            <aside className="sidebar-rail">
                {TABS.map(t => (
                    <button
                        key={t.id}
                        className={`rail-btn${activeTab === t.id ? ' active' : ''}`}
                        onClick={() => handleTabClick(t.id)}
                        title={t.label}
                    >
                        <i className={`fa-solid ${t.icon}`} />
                        {t.label}
                    </button>
                ))}

                {/* Page Controls — always in the rail */}
                <div className="rail-page-controls">
                    <button
                        className="rail-page-btn"
                        title="Add Page"
                        onClick={() => addPage()}
                    >
                        <i className="fa-solid fa-plus" />
                        <span>Add Page</span>
                    </button>
                    {(state.pageCount || 1) > 1 && (
                        <button
                            className="rail-page-btn delete"
                            title="Delete Last Page"
                            onClick={() => deletePage()}
                        >
                            <i className="fa-solid fa-trash" />
                            <span>Del Page</span>
                        </button>
                    )}
                    <span className="rail-page-count">{state.pageCount || 1}pg</span>
                </div>
            </aside>

            {/* Context Panel */}
            {activeTab && (
                <aside className="context-panel">
                    <div className="context-panel-inner">

                        {/* ── Design Tab ──────────────────────────── */}
                        {activeTab === 'design' && (
                            <>
                                <div className="panel-title">Templates</div>
                                <p className="panel-sub">Clicking a template replaces your current design.</p>
                                <div className="sidebar-groupby">
                                    <span className="sidebar-groupby-label">Group by:</span>
                                    {[['none', 'None'], ['profession', 'Profession'], ['format', 'Format']].map(([k, l]) => (
                                        <button key={k} className={`sidebar-groupby-btn${groupBy === k ? ' active' : ''}`} onClick={() => setGroupBy(k)}>{l}</button>
                                    ))}
                                </div>
                                <div style={{ marginTop: 8 }}>{renderTemplateList()}</div>
                            </>
                        )}

                        {/* ── Text Tab ────────────────────────────── */}
                        {activeTab === 'text' && (
                            <>
                                <div className="panel-title">Add Text</div>
                                <button className="add-text-btn heading" onClick={() => handleAddText('heading')}>Add a heading</button>
                                <button className="add-text-btn subheading" onClick={() => handleAddText('subheading')}>Add a subheading</button>
                                <button className="add-text-btn body" onClick={() => handleAddText('body')}>Add a little bit of body text</button>
                            </>
                        )}

                        {/* ── Resume Sections ─────────────────────── */}
                        {activeTab === 'resume' && (
                            <>
                                <div className="panel-title">Resume Content</div>
                                <p className="panel-sub">Click to add a pre-formatted section block.</p>
                                {SECTION_BLOCKS.map(block => (
                                    <button key={block.id} className="section-block-btn" onClick={() => handleAddSection(block)}>
                                        <i className={`fa-solid ${block.icon}`} />
                                        <div style={{ textAlign: 'left' }}>
                                            <div style={{ fontWeight: 600 }}>{block.name}</div>
                                            <div style={{ fontSize: 10, opacity: 0.7 }}>{block.description}</div>
                                        </div>
                                    </button>
                                ))}
                            </>
                        )}

                        {/* ── Layers Tab ──────────────────────────── */}
                        {activeTab === 'layers' && (
                            <>
                                <div className="panel-title">Layers</div>
                                {state.elements.length === 0 && <p className="panel-sub">No elements on canvas.</p>}
                                {state.elements.map(el => (
                                    <div key={el.id} className={`layer-item${state.selectedId === el.id ? ' selected' : ''}`} onClick={() => select(el.id)}>
                                        <i className={`fa-solid ${el.type === 'line' ? 'fa-minus' : el.type === 'image' ? 'fa-image' : 'fa-grip-lines'}`} />
                                        <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {el.type === 'line' ? 'Horizontal Line' : el.type === 'image' ? 'Photo' : (el.text || 'Element').slice(0, 28)}
                                        </span>
                                        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: el.visible === false ? 'var(--text-muted)' : 'var(--accent-cyan)', padding: '0 4px' }}
                                            onClick={e => { e.stopPropagation(); updateElement(el.id, { visible: el.visible === false ? true : false }); }} title="Toggle visibility">
                                            <i className={`fa-solid ${el.visible === false ? 'fa-eye-slash' : 'fa-eye'}`} style={{ fontSize: 12 }} />
                                        </button>
                                        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444', padding: '0 4px' }}
                                            onClick={e => { e.stopPropagation(); deleteElement(el.id); }} title="Delete">
                                            <i className="fa-solid fa-trash" style={{ fontSize: 11 }} />
                                        </button>
                                    </div>
                                ))}
                            </>
                        )}

                        {/* ── ATS Tab ─────────────────────────────── */}
                        {activeTab === 'ats' && <ATSChecker />}

                    </div>
                </aside>
            )}
        </>
    );
}
