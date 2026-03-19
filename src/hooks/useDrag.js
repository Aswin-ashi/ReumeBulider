// Copyright 2026 ResumeBuilder | Apache License 2.0
import { useRef, useCallback } from 'react';
import { useEditorContext } from '../context/EditorContext';
import { clamp } from '../utils/helpers';
import { A4_WIDTH, A4_HEIGHT } from '../data/templates';

/**
 * Returns { onDragHandleMouseDown } to attach to a drag-handle element.
 * Handles mouse-move and mouse-up globally, updating element position.
 */
export function useDrag(elementId) {
    const { state, updateElement, commitElement, select } = useEditorContext();
    const dragging = useRef(false);
    const offset = useRef({ x: 0, y: 0 });
    const lastPos = useRef(null);
    const canvasRef = useRef(null);
    const pageOffsetRef = useRef({ x: 0, y: 0 });

    const onDragHandleMouseDown = useCallback((e, canvasEl, pageOffset = { x: 0, y: 0 }) => {
        e.preventDefault();
        e.stopPropagation();
        select(elementId);
        dragging.current = true;
        canvasRef.current = canvasEl;
        pageOffsetRef.current = pageOffset;

        const el = state.elements.find(el => el.id === elementId);
        if (!el) return;

        const rect = canvasEl.getBoundingClientRect();
        // mouseX/Y are in canvas-absolute space
        const mouseX = (e.clientX - rect.left) / state.zoom;
        const mouseY = (e.clientY - rect.top) / state.zoom;
        // el.x/y are page-relative; add page offset to compare with canvas coords
        offset.current = { x: mouseX - (el.x + pageOffset.x), y: mouseY - (el.y + pageOffset.y) };

        function onMouseMove(e2) {
            if (!dragging.current) return;
            const rect2 = canvasRef.current.getBoundingClientRect();
            const po = pageOffsetRef.current;
            const mx = (e2.clientX - rect2.left) / state.zoom;
            const my = (e2.clientY - rect2.top) / state.zoom;

            // Subtract page offset to get page-relative coords
            const newX = clamp(mx - offset.current.x - po.x, -50, A4_WIDTH - 20);
            const newY = Math.max(-50, my - offset.current.y - po.y);
            lastPos.current = { x: newX, y: newY };
            updateElement(elementId, { x: newX, y: newY });
        }

        function onMouseUp() {
            if (!dragging.current) return;
            dragging.current = false;
            if (lastPos.current) {
                commitElement(elementId, { x: lastPos.current.x, y: lastPos.current.y });
            }
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        }

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    }, [elementId, state.elements, state.zoom, updateElement, commitElement, select]);

    return { onDragHandleMouseDown };
}
