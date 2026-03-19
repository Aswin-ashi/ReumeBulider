// Copyright 2026 ResumeBuilder | Apache License 2.0
import React, { useRef, useCallback } from 'react';
import { useEditorContext } from '../../context/EditorContext';
import { useResize } from '../../hooks/useResize';
import { useDrag } from '../../hooks/useDrag';

export default function CanvasElement({ element, canvasRef, pageOffset = { x: 0, y: 0 } }) {
    const { state, select, updateElement, commitElement } = useEditorContext();
    const { onDragHandleMouseDown } = useDrag(element.id);
    const { onResizeHandleMouseDown, HANDLES } = useResize(element.id);
    const isSelected = state.selectedId === element.id;
    const contentRef = useRef(null);
    const fileRef = useRef(null);

    // Render position = page-relative coords + page's grid offset
    const style = {
        left: element.x + pageOffset.x,
        top: element.y + pageOffset.y,
        width: element.width,
        height: element.height || 'auto',
        opacity: element.opacity ?? 1,
        display: element.visible === false ? 'none' : undefined,
    };

    function handleWrapperMouseDown(e) {
        if (e.target.classList.contains('drag-handle') ||
            e.target.closest('.drag-handle') ||
            e.target.classList.contains('resize-handle')) return;

        e.stopPropagation();
        select(element.id);

        // Let the drag logic attach seamlessly to any wrapper drag.
        // We only stop dragging via e.stopPropagation() inside the actual editable text nodes.
        onDragHandleMouseDown(e, canvasRef.current, pageOffset);
    }

    // ── Horizontal Line element ──────────────────
    if (element.type === 'line') {
        return (
            <div
                id={element.id}
                className={`canvas-element${isSelected ? ' selected' : ''}`}
                style={{ ...style, height: Math.max(8, element.height || 2) }}
                onMouseDown={handleWrapperMouseDown}
            >
                {/* 
                  The outer wrapper maintains a minimum height of 8px so the user can easily grab/drag it.
                  The actual inner visual line gets the exact sub-pixel thickness requested.
                */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '100%',
                    height: element.height || 2,
                    background: element.lineColor || '#333333',
                }} />
                {isSelected && (
                    <div className="drag-handle" onMouseDown={e => onDragHandleMouseDown(e, canvasRef.current, pageOffset)}>
                        <i className="fa-solid fa-up-down-left-right" style={{ marginRight: 4 }} />Move
                    </div>
                )}
                {isSelected && HANDLES.map(h => (
                    <div key={h} className={`resize-handle ${h}`} onMouseDown={e => onResizeHandleMouseDown(e, h)} />
                ))}
            </div>
        );
    }

    // ── Image / Photo placeholder element ────────
    if (element.type === 'image') {
        return (
            <div
                id={element.id}
                className={`canvas-element${isSelected ? ' selected' : ''}`}
                style={{ ...style, overflow: 'hidden', borderRadius: element.rounded ? '50%' : 4 }}
                onMouseDown={handleWrapperMouseDown}
                onDoubleClick={() => fileRef.current?.click()}
            >
                {element.src ? (
                    <img src={element.src} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                    <div className="image-placeholder">
                        <i className="fa-solid fa-user" />
                        <span>Click to add photo</span>
                    </div>
                )}
                <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={e => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const reader = new FileReader();
                        reader.onload = ev => commitElement(element.id, { src: ev.target.result });
                        reader.readAsDataURL(file);
                    }}
                />
                {isSelected && (
                    <div className="drag-handle" onMouseDown={e => onDragHandleMouseDown(e, canvasRef.current, pageOffset)}>
                        <i className="fa-solid fa-up-down-left-right" style={{ marginRight: 4 }} />Move
                    </div>
                )}
                {isSelected && HANDLES.map(h => (
                    <div key={h} className={`resize-handle ${h}`} onMouseDown={e => onResizeHandleMouseDown(e, h)} />
                ))}
            </div>
        );
    }

    // ── Text element (default) ───────────────────
    const contentStyle = {
        fontFamily: element.fontFamily,
        fontSize: element.fontSize + 'px',
        fontWeight: element.fontWeight,
        fontStyle: element.fontStyle,
        textDecoration: element.textDecoration,
        textAlign: element.textAlign,
        color: element.color,
        lineHeight: element.lineHeight || 1.4,
        letterSpacing: (element.letterSpacing || 0) + 'px',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        minHeight: '1em',
    };

    function handleBlur(e) {
        commitElement(element.id, { text: e.currentTarget.innerText });
    }

    function handleDoubleClick(e) {
        e.stopPropagation();
        select(element.id);
        contentRef.current?.focus();
    }

    return (
        <div
            id={element.id}
            className={`canvas-element${isSelected ? ' selected' : ''}`}
            style={style}
            onMouseDown={handleWrapperMouseDown}
            onDoubleClick={handleDoubleClick}
        >
            {/* Drag Handle */}
            {isSelected && (
                <div className="drag-handle" onMouseDown={e => onDragHandleMouseDown(e, canvasRef.current, pageOffset)}>
                    <i className="fa-solid fa-up-down-left-right" style={{ marginRight: 4 }} />
                    Move
                </div>
            )}

            {/* Editable Content */}
            <div
                ref={contentRef}
                className="element-content"
                contentEditable
                suppressContentEditableWarning
                style={contentStyle}
                onBlur={handleBlur}
                onMouseDown={e => { if (isSelected) e.stopPropagation(); }}
            >
                {element.text}
            </div>

            {/* Resize handles */}
            {isSelected && HANDLES.map(h => (
                <div
                    key={h}
                    className={`resize-handle ${h}`}
                    onMouseDown={e => onResizeHandleMouseDown(e, h)}
                />
            ))}
        </div>
    );
}
