// Copyright 2026 ResumeBuilder | Apache License 2.0
import React from 'react';
import { useEditorContext } from '../../context/EditorContext';
import { uuid } from '../../utils/helpers';

const FONTS = ['Arial', 'Times New Roman', 'Courier New', 'Georgia', 'Verdana', 'Helvetica', 'Trebuchet MS', 'Impact', 'Calibri'];
const LIST_STYLES = [
    { value: '', label: 'None' },
    { value: '• ', label: '• Bullet' },
    { value: '○ ', label: '○ Circle' },
    { value: '■ ', label: '■ Square' },
    { value: '▸ ', label: '▸ Arrow' },
    { value: '– ', label: '– Dash' },
    { value: '→ ', label: '→ Right' },
    { value: '1. ', label: '1. Number' },
];

export default function FormattingToolbar() {
    const { state, updateElement, commitElement, deleteElement, addElement } = useEditorContext();

    const el = state.elements.find(e => e.id === state.selectedId);
    const disabled = !el;

    function upd(key, val) { if (!el) return; updateElement(el.id, { [key]: val }); }
    function commit(key, val) { if (!el) return; commitElement(el.id, { [key]: val }); }

    function handleInsertLine() {
        addElement({
            id: uuid(),
            type: 'line',
            x: 40,
            y: 200,
            width: 714,
            height: 2,
            lineColor: el?.color || '#333333',
            opacity: 1,
            visible: true,
        });
    }

    function handleListStyle(e) {
        if (!el) return;
        const prefix = e.target.value;
        let text = el.text || '';
        // Remove existing prefix if any
        LIST_STYLES.slice(1).forEach(ls => {
            if (text.startsWith(ls.value)) text = text.slice(ls.value.length);
        });
        commitElement(el.id, { text: prefix + text, listStyle: prefix });
    }

    return (
        <div className={`formatting-toolbar${disabled ? ' disabled' : ''}`}>
            {/* Font Family */}
            <select className="tb-select" value={el?.fontFamily || 'Arial'} onChange={e => commit('fontFamily', e.target.value)}>
                {FONTS.map(f => <option key={f} value={f}>{f}</option>)}
            </select>

            <div className="tb-divider" />

            {/* Font Size */}
            <div className="tb-font-size-group">
                <button onClick={() => commit('fontSize', Math.max(6, (el?.fontSize || 12) - 1))}>−</button>
                <input
                    type="number" className="tb-font-size-input"
                    value={el?.fontSize || 12} min={6} max={200}
                    onChange={e => upd('fontSize', parseInt(e.target.value) || 12)}
                    onBlur={e => commit('fontSize', parseInt(e.target.value) || 12)}
                />
                <button onClick={() => commit('fontSize', (el?.fontSize || 12) + 1)}>+</button>
            </div>

            <div className="tb-divider" />

            {/* Color */}
            <div className="color-picker-wrapper">
                <div className="color-preview-btn" style={{ background: el?.color || '#000' }} />
                <input
                    type="color" className="hidden-color-input"
                    value={el?.color || '#000000'}
                    onChange={e => upd('color', e.target.value)}
                    onBlur={e => commit('color', e.target.value)}
                />
                <i className="fa-solid fa-caret-down" style={{ fontSize: 10, color: 'var(--text-muted)' }} />
            </div>

            <div className="tb-divider" />

            {/* Line Thickness (if line) */}
            {el?.type === 'line' && (
                <>
                    <div className="tb-font-size-group" title="Line Thickness">
                        <button onClick={() => commit('height', Math.max(0.1, (el.height || 2) - 0.1))}>−</button>
                        <input
                            type="number" className="tb-font-size-input"
                            value={el.height || 2} min={0.1} max={50} step={0.1}
                            onChange={e => upd('height', parseFloat(e.target.value) || 2)}
                            onBlur={e => commit('height', Math.max(0.1, parseFloat(e.target.value) || 2))}
                        />
                        <button onClick={() => commit('height', (el.height || 2) + 0.1)}>+</button>
                    </div>
                    <div className="tb-divider" />
                </>
            )}

            {/* Bold / Italic / Underline */}
            <button className={`btn-icon${el?.fontWeight === 'bold' ? ' active' : ''}`} onClick={() => commit('fontWeight', el?.fontWeight === 'bold' ? 'normal' : 'bold')} title="Bold"><i className="fa-solid fa-bold" /></button>
            <button className={`btn-icon${el?.fontStyle === 'italic' ? ' active' : ''}`} onClick={() => commit('fontStyle', el?.fontStyle === 'italic' ? 'normal' : 'italic')} title="Italic"><i className="fa-solid fa-italic" /></button>
            <button className={`btn-icon${el?.textDecoration === 'underline' ? ' active' : ''}`} onClick={() => commit('textDecoration', el?.textDecoration === 'underline' ? 'none' : 'underline')} title="Underline"><i className="fa-solid fa-underline" /></button>

            <div className="tb-divider" />

            {/* Alignment — Left / Center / Right / Justify */}
            <button className={`btn-icon${(el?.textAlign === 'left' || !el?.textAlign) ? ' active' : ''}`} onClick={() => commit('textAlign', 'left')} title="Align Left"><i className="fa-solid fa-align-left" /></button>
            <button className={`btn-icon${el?.textAlign === 'center' ? ' active' : ''}`} onClick={() => commit('textAlign', 'center')} title="Center"><i className="fa-solid fa-align-center" /></button>
            <button className={`btn-icon${el?.textAlign === 'right' ? ' active' : ''}`} onClick={() => commit('textAlign', 'right')} title="Align Right"><i className="fa-solid fa-align-right" /></button>
            <button className={`btn-icon${el?.textAlign === 'justify' ? ' active' : ''}`} onClick={() => commit('textAlign', 'justify')} title="Justify"><i className="fa-solid fa-align-justify" /></button>

            <div className="tb-divider" />

            {/* Line height */}
            <select className="tb-select" value={el?.lineHeight || 1.4} onChange={e => commit('lineHeight', parseFloat(e.target.value))} title="Line Height">
                {[1.0, 1.15, 1.4, 1.6, 2.0].map(v => <option key={v} value={v}>{v}×</option>)}
            </select>

            <div className="tb-divider" />

            {/* List Style */}
            <select
                className="tb-select"
                value={el?.listStyle || ''}
                onChange={handleListStyle}
                title="List Style"
                style={{ minWidth: 80 }}
            >
                {LIST_STYLES.map(ls => <option key={ls.value} value={ls.value}>{ls.label}</option>)}
            </select>

            <div className="tb-divider" />

            {/* Insert Horizontal Line */}
            <button className="btn-icon" onClick={handleInsertLine} title="Insert horizontal line">
                <i className="fa-solid fa-minus" />
                <span style={{ fontSize: 10, marginLeft: 3, letterSpacing: 0 }}>Line</span>
            </button>

            {/* Opacity */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginLeft: 4 }}>
                <i className="fa-solid fa-circle-half-stroke" style={{ fontSize: 12, color: 'var(--text-muted)' }} />
                <input
                    type="range" min={10} max={100} step={5}
                    value={Math.round((el?.opacity ?? 1) * 100)}
                    onChange={e => upd('opacity', e.target.value / 100)}
                    onMouseUp={e => commit('opacity', e.target.value / 100)}
                    style={{ width: 60, accentColor: 'var(--accent-purple)', cursor: 'pointer' }}
                />
                <span style={{ fontSize: 11, color: 'var(--text-muted)', minWidth: 28 }}>{Math.round((el?.opacity ?? 1) * 100)}%</span>
            </div>

            {/* Delete — far right */}
            <button className="btn-icon" style={{ marginLeft: 'auto', color: '#ef4444' }} onClick={() => el && deleteElement(el.id)} title="Delete element">
                <i className="fa-solid fa-trash" />
            </button>
        </div>
    );
}
