// Copyright 2026 ResumeBuilder | Apache License 2.0

const LOCAL_KEY = 'resumebuilder_local';
const TRASH_KEY = 'resumebuilder_trash';

export function localLoadResumes() {
    try { return JSON.parse(localStorage.getItem(LOCAL_KEY)) || []; }
    catch { return []; }
}

export function localSaveResumes(resumes) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(resumes));
}

export function localLoadTrashed() {
    try { return JSON.parse(localStorage.getItem(TRASH_KEY)) || []; }
    catch { return []; }
}

export function localSaveTrashed(resumes) {
    localStorage.setItem(TRASH_KEY, JSON.stringify(resumes));
}

// ── Firebase (optional cloud sync) ───────────────

function isFirebaseReady() {
    return typeof __firebase_config !== 'undefined' && __firebase_config;
}

let _db = null;
let _user = null;
let _appId = 'default-resume-app';
let _isConfigured = false;

export async function initFirebase(onUserReady, onNoConfig) {
    if (!isFirebaseReady()) {
        onNoConfig?.();
        return;
    }

    try {
        const { initializeApp } = await import('https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js');
        const { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged }
            = await import('https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js');
        const { getFirestore } = await import('https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js');

        const config = JSON.parse(__firebase_config);
        _appId = typeof __app_id !== 'undefined' ? __app_id : 'default-resume-app';
        _isConfigured = true;

        const app = initializeApp(config);
        const auth = getAuth(app);
        _db = getFirestore(app);

        onAuthStateChanged(auth, (user) => { _user = user; onUserReady?.(user); });

        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
            await signInWithCustomToken(auth, __initial_auth_token);
        } else {
            await signInAnonymously(auth);
        }
    } catch (err) {
        console.error('Firebase init error:', err);
        onNoConfig?.();
    }
}

export async function cloudLoadResumes() {
    if (!_isConfigured || !_db || !_user) return null;
    try {
        const { collection, getDocs } = await import('https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js');
        const ref = collection(_db, 'artifacts', _appId, 'users', _user.uid, 'resumes');
        const snap = await getDocs(ref);
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch (e) { console.error(e); return null; }
}

export async function cloudSaveResume(resumeData) {
    if (!_isConfigured || !_db || !_user) return false;
    try {
        const { doc, setDoc } = await import('https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js');
        const ref = doc(_db, 'artifacts', _appId, 'users', _user.uid, 'resumes', resumeData.id);
        await setDoc(ref, resumeData);
        return true;
    } catch (e) { console.error(e); return false; }
}

export async function cloudDeleteResume(id) {
    if (!_isConfigured || !_db || !_user) return false;
    try {
        const { doc, deleteDoc } = await import('https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js');
        await deleteDoc(doc(_db, 'artifacts', _appId, 'users', _user.uid, 'resumes', id));
        return true;
    } catch (e) { console.error(e); return false; }
}

export function isOnlineMode() { return _isConfigured; }
export function getCurrentUser() { return _user; }
