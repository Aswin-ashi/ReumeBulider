// Copyright 2026 ResumeBuilder | Apache License 2.0

/** Generate a short unique ID */
export function uuid() {
    return 'el_' + Math.random().toString(36).slice(2, 9) + '_' + Date.now().toString(36);
}

/** Clamp value between min and max */
export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

/** Snap value to nearest grid multiple */
export function snapToGrid(value, grid = 10) {
    return Math.round(value / grid) * grid;
}

/** Deep-clone an object via JSON */
export function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/** Format Unix timestamp to locale date string */
export function formatDate(ts) {
    return new Date(ts).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}
