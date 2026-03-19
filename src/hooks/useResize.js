// Copyright 2026 ResumeBuilder | Apache License 2.0
import { useRef, useCallback } from 'react';
import { useEditorContext } from '../context/EditorContext';
import { clamp } from '../utils/helpers';
import { A4_WIDTH, A4_HEIGHT } from '../data/templates';

const HANDLES = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];
const MIN_W = 40;
const MIN_H = 16;

/**
 * Returns { onResizeHandleMouseDown } to attach to resize handle divs.
 * `handle` is one of: nw n ne e se s sw w
 */
export function useResize(elementId) {
    const { state, updateElement, commitElement } = useEditorContext();
    const startRef = useRef(null);

    const onResizeHandleMouseDown = useCallback((e, handle) => {
        if (e.type !== 'touchstart') e.preventDefault();
        e.stopPropagation();

        const el = state.elements.find(el => el.id === elementId);
        if (!el) return;

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        startRef.current = {
            mouseX: clientX, mouseY: clientY,
            x: el.x, y: el.y, w: el.width, h: el.height || 40,
            handle,
            zoom: state.zoom,
        };

        function onMouseMove(e2) {
            if (e2.type === 'touchmove') e2.preventDefault();
            const cx = e2.touches ? e2.touches[0].clientX : e2.clientX;
            const cy = e2.touches ? e2.touches[0].clientY : e2.clientY;

            const s = startRef.current;
            const dx = (cx - s.mouseX) / s.zoom;
            const dy = (cy - s.mouseY) / s.zoom;

            let { x, y, w, h } = s;

            if (s.handle.includes('e')) { w = clamp(s.w + dx, MIN_W, A4_WIDTH - s.x); }
            if (s.handle.includes('s')) { h = clamp(s.h + dy, MIN_H, A4_HEIGHT - s.y); }
            if (s.handle.includes('w')) {
                const newW = clamp(s.w - dx, MIN_W, s.x + s.w);
                x = s.x + (s.w - newW); w = newW;
            }
            if (s.handle.includes('n')) {
                const newH = clamp(s.h - dy, MIN_H, s.y + s.h);
                y = s.y + (s.h - newH); h = newH;
            }

            updateElement(elementId, { x, y, width: w, height: h });
        }

        function onMouseUp() {
            const el2 = state.elements.find(el => el.id === elementId);
            if (el2) commitElement(elementId, { x: el2.x, y: el2.y, width: el2.width, height: el2.height });
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('touchmove', onMouseMove);
            window.removeEventListener('touchend', onMouseUp);
        }

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        window.addEventListener('touchmove', onMouseMove, { passive: false });
        window.addEventListener('touchend', onMouseUp);
    }, [elementId, state.elements, state.zoom, updateElement, commitElement]);

    return { onResizeHandleMouseDown, HANDLES };
}
