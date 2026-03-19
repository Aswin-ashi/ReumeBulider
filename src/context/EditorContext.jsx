// Copyright 2026 ResumeBuilder | Apache License 2.0
import { createContext, useContext, useReducer, useCallback } from 'react';
import { deepClone, uuid } from '../utils/helpers';

const MAX_HISTORY = 50;

const initialState = {
    view: 'home',          // 'home' | 'editor'
    resumes: [],
    currentResume: null,
    elements: [],
    selectedId: null,
    zoom: 1.0,
    showGrid: false,
    history: [],           // array of element snapshots
    historyIndex: -1,
    firebaseUser: null,
    isOnline: false,
};

function pushHistory(state, elements) {
    const trimmed = state.history.slice(0, state.historyIndex + 1);
    const next = [...trimmed, deepClone(elements)];
    if (next.length > MAX_HISTORY) next.shift();
    return { history: next, historyIndex: next.length - 1 };
}

function reducer(state, action) {
    switch (action.type) {

        case 'SET_VIEW':
            return { ...state, view: action.payload };

        case 'SET_RESUMES':
            return { ...state, resumes: action.payload };

        case 'OPEN_RESUME': {
            const resume = action.payload;
            const elements = deepClone(resume.elements || []);
            return {
                ...state,
                view: 'editor',
                currentResume: resume,
                elements,
                selectedId: null,
                ...pushHistory(state, elements),
            };
        }

        case 'CLOSE_EDITOR':
            return { ...state, view: 'home', currentResume: null, elements: [], selectedId: null };

        case 'ADD_PAGE':
            return { ...state, pageCount: (state.pageCount || 1) + 1 };

        case 'DELETE_PAGE':
            return { ...state, pageCount: Math.max(1, (state.pageCount || 1) - 1) };

        case 'ADD_ELEMENT': {
            const el = { ...action.payload, id: uuid() };
            const elements = [...state.elements, el];
            return { ...state, elements, selectedId: el.id, ...pushHistory(state, elements) };
        }

        case 'ADD_ELEMENTS': {
            // Add multiple elements (for section blocks)
            const newEls = action.payload.map(el => ({ ...el, id: uuid() }));
            const elements = [...state.elements, ...newEls];
            return { ...state, elements, selectedId: newEls[0]?.id || null, ...pushHistory(state, elements) };
        }

        case 'UPDATE_ELEMENT': {
            const elements = state.elements.map(el =>
                el.id === action.payload.id ? { ...el, ...action.payload.updates } : el
            );
            return { ...state, elements };
        }

        case 'UPDATE_ELEMENT_COMMIT': {
            const elements = state.elements.map(el =>
                el.id === action.payload.id ? { ...el, ...action.payload.updates } : el
            );
            return { ...state, elements, ...pushHistory(state, elements) };
        }

        case 'DELETE_ELEMENT': {
            const elements = state.elements.filter(el => el.id !== (action.payload || state.selectedId));
            return { ...state, elements, selectedId: null, ...pushHistory(state, elements) };
        }

        case 'SELECT':
            return { ...state, selectedId: action.payload };

        case 'DESELECT':
            return { ...state, selectedId: null };

        case 'LOAD_TEMPLATE': {
            const elements = deepClone(action.payload);
            return { ...state, elements, selectedId: null, ...pushHistory(state, elements) };
        }

        case 'SET_ZOOM':
            return { ...state, zoom: Math.min(2.0, Math.max(0.25, action.payload)) };

        case 'TOGGLE_GRID':
            return { ...state, showGrid: !state.showGrid };

        case 'SET_FIREBASE_USER':
            return { ...state, firebaseUser: action.payload, isOnline: !!action.payload };

        case 'SET_ONLINE':
            return { ...state, isOnline: action.payload };

        case 'UNDO': {
            if (state.historyIndex <= 0) return state;
            const historyIndex = state.historyIndex - 1;
            const elements = deepClone(state.history[historyIndex]);
            return { ...state, elements, historyIndex, selectedId: null };
        }

        case 'REDO': {
            if (state.historyIndex >= state.history.length - 1) return state;
            const historyIndex = state.historyIndex + 1;
            const elements = deepClone(state.history[historyIndex]);
            return { ...state, elements, historyIndex, selectedId: null };
        }

        default:
            return state;
    }
}

const EditorContext = createContext(null);

export function EditorProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const actions = {
        setView: useCallback((v) => dispatch({ type: 'SET_VIEW', payload: v }), []),
        setResumes: useCallback((r) => dispatch({ type: 'SET_RESUMES', payload: r }), []),
        openResume: useCallback((r) => dispatch({ type: 'OPEN_RESUME', payload: r }), []),
        closeEditor: useCallback(() => dispatch({ type: 'CLOSE_EDITOR' }), []),
        addPage: useCallback(() => dispatch({ type: 'ADD_PAGE' }), []),
        deletePage: useCallback(() => dispatch({ type: 'DELETE_PAGE' }), []),
        addElement: useCallback((el) => dispatch({ type: 'ADD_ELEMENT', payload: el }), []),
        addElements: useCallback((els) => dispatch({ type: 'ADD_ELEMENTS', payload: els }), []),
        updateElement: useCallback((id, u) => dispatch({ type: 'UPDATE_ELEMENT', payload: { id, updates: u } }), []),
        commitElement: useCallback((id, u) => dispatch({ type: 'UPDATE_ELEMENT_COMMIT', payload: { id, updates: u } }), []),
        deleteElement: useCallback((id) => dispatch({ type: 'DELETE_ELEMENT', payload: id }), []),
        select: useCallback((id) => dispatch({ type: 'SELECT', payload: id }), []),
        deselect: useCallback(() => dispatch({ type: 'DESELECT' }), []),
        loadTemplate: useCallback((els) => dispatch({ type: 'LOAD_TEMPLATE', payload: els }), []),
        setZoom: useCallback((z) => dispatch({ type: 'SET_ZOOM', payload: z }), []),
        toggleGrid: useCallback(() => dispatch({ type: 'TOGGLE_GRID' }), []),
        setFirebaseUser: useCallback((u) => dispatch({ type: 'SET_FIREBASE_USER', payload: u }), []),
        undo: useCallback(() => dispatch({ type: 'UNDO' }), []),
        redo: useCallback(() => dispatch({ type: 'REDO' }), []),
    };

    return (
        <EditorContext.Provider value={{ state, ...actions }}>
            {children}
        </EditorContext.Provider>
    );
}

export function useEditorContext() {
    const ctx = useContext(EditorContext);
    if (!ctx) throw new Error('useEditorContext must be inside EditorProvider');
    return ctx;
}
