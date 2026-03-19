// Copyright 2026 ResumeBuilder | Apache License 2.0
import React, { useEffect, useState } from 'react';
import { useEditorContext } from './context/EditorContext';
import { initFirebase } from './utils/firebase';
import LoadingScreen from './components/LoadingScreen';
import HomeView from './components/HomeView/HomeView';
import EditorView from './components/EditorView/EditorView';

export default function App() {
    const { state, setFirebaseUser } = useEditorContext();
    const [loading, setLoading] = useState(true);

    // Apply saved theme on first render
    useEffect(() => {
        const saved = localStorage.getItem('rb_theme') || 'dark';
        document.documentElement.setAttribute('data-theme', saved);
    }, []);

    useEffect(() => {
        let minDone = false;
        let fbDone = false;
        let dismissed = false;

        const tryDismiss = () => {
            if (!dismissed && minDone && fbDone) {
                dismissed = true;
                setLoading(false);
            }
        };

        // Minimum splash: 2.5 seconds so loading screen is visible
        const minTimer = setTimeout(() => { minDone = true; tryDismiss(); }, 2500);

        // Firebase init (resolves fast if no config → offline)
        initFirebase(
            (user) => { setFirebaseUser(user); fbDone = true; tryDismiss(); },
            () => { fbDone = true; tryDismiss(); }
        );

        // Absolute safety net: 8s
        const safetyTimer = setTimeout(() => setLoading(false), 8000);

        return () => { clearTimeout(minTimer); clearTimeout(safetyTimer); };
    }, [setFirebaseUser]);

    if (loading) return <LoadingScreen />;
    if (state.view === 'editor') return <EditorView />;
    return <HomeView />;
}
