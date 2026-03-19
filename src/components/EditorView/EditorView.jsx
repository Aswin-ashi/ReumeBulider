// Copyright 2026 ResumeBuilder | Apache License 2.0
import React from 'react';
import EditorHeader from './EditorHeader';
import FormattingToolbar from './FormattingToolbar';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import { useKeyboard } from '../../hooks/useKeyboard';
import { useEditorContext } from '../../context/EditorContext';

export default function EditorView() {
    useKeyboard();
    const { state, undo, redo, addPage } = useEditorContext();

    // Allow EditorHeader/Canvas to trigger actions via custom events
    React.useEffect(() => {
        const u = () => undo();
        const r = () => redo();
        const ap = () => addPage();

        document.addEventListener('editor:undo', u);
        document.addEventListener('editor:redo', r);
        document.addEventListener('editor:addPage', ap);
        return () => {
            document.removeEventListener('editor:undo', u);
            document.removeEventListener('editor:redo', r);
            document.removeEventListener('editor:addPage', ap);
        };
    }, [undo, redo, addPage]);

    return (
        <div className="editor-view">
            <EditorHeader />
            <FormattingToolbar />
            <div className="editor-body">
                <Sidebar />
                <Canvas />
            </div>
        </div>
    );
}
