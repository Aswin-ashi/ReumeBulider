// Copyright 2026 ResumeBuilder | Apache License 2.0
import React, { useEffect, useState } from 'react';
import { useEditorContext } from '../../context/EditorContext';
import { downloadPDF } from '../../utils/pdf';
import { localLoadResumes, localSaveResumes, cloudSaveResume, isOnlineMode } from '../../utils/firebase';
import Logo from '../Logo';

export default function EditorHeader() {
    const { state, closeEditor, setZoom } = useEditorContext();
    const [saving, setSaving] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const titleRef = React.useRef(null);
    const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme') || 'dark');
    const [isPreview, setIsPreview] = useState(false);
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('rb_theme', newTheme);
    };

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setTheme(document.documentElement.getAttribute('data-theme') || 'dark');
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
        return () => observer.disconnect();
    }, []);

    async function handleSave() {
        if (!state.currentResume) return;
        setSaving(true);
        const title = titleRef.current?.value || 'Untitled Design';
        const resumeData = {
            ...state.currentResume,
            title,
            elements: state.elements,
            updatedAt: Date.now(),
        };
        // Always save to local
        const all = localLoadResumes();
        const idx = all.findIndex(r => r.id === resumeData.id);
        if (idx !== -1) all[idx] = resumeData; else all.unshift(resumeData);
        localSaveResumes(all);
        if (isOnlineMode()) await cloudSaveResume(resumeData);
        setSaving(false);
        // Brief visual feedback
        titleRef.current && (titleRef.current.style.borderColor = '#22c55e');
        setTimeout(() => { if (titleRef.current) titleRef.current.style.borderColor = ''; }, 1000);

        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    }

    async function handleDownload() {
        // Download immediately without modal
        const prevZoom = state.zoom;
        setZoom(1);
        await new Promise(r => setTimeout(r, 150));
        const el = document.getElementById('print-area');
        const title = titleRef.current?.value || 'resume';
        await downloadPDF(el, title);
        setZoom(prevZoom);
    }

    function togglePreview() {
        const nextState = !isPreview;
        setIsPreview(nextState);
        if (nextState) {
            document.body.classList.add('preview-mode');
        } else {
            document.body.classList.remove('preview-mode');
        }
    }

    return (
        <header className="editor-header">
            <div className="editor-header-left">
                <button className="btn-icon" onClick={closeEditor} title="Back to Home">
                    <i className="fa-solid fa-arrow-left" />
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '4px', cursor: 'pointer' }} onClick={closeEditor}>
                    <Logo size={28} />
                    <span style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '1px', color: '#4c1d97' }}>
                        RESUME<span style={{ color: '#4c1d97' }}>BUILDER</span>
                    </span>
                </div>
                <span style={{ width: 1, height: 20, background: 'var(--glass-border)', display: 'inline-block', margin: '0 8px' }} />
                <input
                    ref={titleRef}
                    className="editor-title-input"
                    defaultValue={state.currentResume?.title || 'Untitled Design'}
                    placeholder="Resume title…"
                />
                {/* Undo / Redo */}
                <div className="undo-redo-group">
                    <button
                        className="undo-redo-btn"
                        onClick={() => document.dispatchEvent(new CustomEvent('editor:undo'))}
                        title="Undo (Ctrl+Z)"
                    ><i className="fa-solid fa-rotate-left" /></button>
                    <button
                        className="undo-redo-btn"
                        onClick={() => document.dispatchEvent(new CustomEvent('editor:redo'))}
                        title="Redo (Ctrl+Y)"
                    ><i className="fa-solid fa-rotate-right" /></button>
                </div>
            </div>

            <div className="editor-header-right">
                {isPreview && (
                    <button className="btn-glow" onClick={togglePreview} style={{ marginRight: 12 }}>
                        <i className="fa-solid fa-xmark" style={{ marginRight: 6 }} /> Exit Preview
                    </button>
                )}
                {!isPreview && (
                    <>
                        <button className="theme-toggle-btn" onClick={toggleTheme} title="Toggle Dark/Light Mode" style={{ border: 'none', background: 'transparent', padding: '6px' }}>
                            <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} style={{ fontSize: '16px', color: 'var(--text-secondary)' }} />
                        </button>
                        <span style={{ width: 1, height: 20, background: 'var(--glass-border)', display: 'inline-block', margin: '0 4px' }} />

                        <button className="btn-preview" onClick={togglePreview}>
                            <i className="fa-solid fa-eye" style={{ marginRight: 6 }} /><span>Preview</span>
                        </button>

                        <button className="btn-save" onClick={handleSave} disabled={saving}>
                            <i className={`fa-solid ${saving ? 'fa-spinner fa-spin' : 'fa-floppy-disk'}`} />
                            <span>{saving ? 'Saving…' : 'Save'}</span>
                        </button>
                        <button className="btn-glow" onClick={handleDownload} style={{ fontSize: 13 }}>
                            <i className="fa-solid fa-download" style={{ marginRight: 6 }} />
                            <span>Download PDF</span>
                        </button>
                    </>
                )}
            </div>

            {/* Save Toast Notification */}
            {showToast && (
                <div className="save-toast">
                    <i className="fa-solid fa-circle-check" style={{ color: '#22c55e', fontSize: 16 }} />
                    <span>Changes saved successfully</span>
                    <div className="save-toast-progress" />
                </div>
            )}
        </header>
    );
}
