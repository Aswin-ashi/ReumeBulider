// Copyright 2026 ResumeBuilder | Apache License 2.0
import { useEffect, useRef } from 'react';
import { useEditorContext } from '../context/EditorContext';

/**
 * Keyboard shortcuts:
 *  Delete       – delete selected element
 *  Ctrl+Z       – undo
 *  Ctrl+Y       – redo
 *  Ctrl+Shift+Z – redo
 *  Escape       – deselect
 */
export function useKeyboard() {
    const { state, deleteElement, undo, redo, deselect } = useEditorContext();

    useEffect(() => {
        function onKeyDown(e) {
            if (state.view !== 'editor') return;
            const tag = document.activeElement?.tagName?.toUpperCase();
            const isEditing = tag === 'INPUT' || tag === 'TEXTAREA' ||
                document.activeElement?.contentEditable === 'true';

            if (e.key === 'Escape') { deselect(); return; }

            if (!isEditing) {
                if (e.key === 'Delete' || e.key === 'Backspace') {
                    if (state.selectedId) deleteElement(state.selectedId);
                    return;
                }
            }

            if (e.ctrlKey || e.metaKey) {
                if (e.key === 'z' && !e.shiftKey) { e.preventDefault(); undo(); }
                if ((e.key === 'y') || (e.key === 'z' && e.shiftKey)) { e.preventDefault(); redo(); }
            }
        }
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [state.view, state.selectedId, deleteElement, undo, redo, deselect]);
}
