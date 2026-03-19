// Copyright 2026 ResumeBuilder | Apache License 2.0
import React from 'react';
import ReactDOM from 'react-dom/client';
import { EditorProvider } from './context/EditorContext';
import App from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <EditorProvider>
            <App />
        </EditorProvider>
    </React.StrictMode>
);
