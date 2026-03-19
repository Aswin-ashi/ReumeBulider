// Copyright 2026 ResumeBuilder | Apache License 2.0
import React, { useMemo } from 'react';
import { useEditorContext } from '../../context/EditorContext';

const ACTION_VERBS = ['led', 'managed', 'developed', 'built', 'created', 'designed', 'implemented', 'delivered', 'improved', 'reduced', 'increased', 'achieved', 'launched', 'streamlined', 'optimized', 'coordinated', 'executed', 'generated', 'established', 'drove'];
const SECTION_HEADERS = ['experience', 'education', 'skills', 'summary', 'objective', 'certifications', 'projects', 'awards', 'languages', 'references'];

function scoreResume(elements) {
    const allText = elements.map(e => (e.text || '')).join('\n').toLowerCase();
    const checks = [];
    let total = 0;

    function check(label, points, pass) {
        checks.push({ label, points, pass });
        if (pass) total += points;
    }

    // Contact info
    check('Has email address', 10, /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}/i.test(allText));
    check('Has phone number', 8, /(\+?\d[\d\s\-().]{7,}\d)/.test(allText));
    // Sections
    check('Has Professional Summary / Objective', 10, /summary|objective|profile/.test(allText));
    check('Has Work Experience section', 15, /experience|employment|career|work history/.test(allText));
    check('Has Education section', 10, /education|degree|university|college|school/.test(allText));
    check('Has Skills section', 10, /skills|technologies|competencies|tools/.test(allText));
    // Content quality
    const verbsFound = ACTION_VERBS.filter(v => new RegExp(`\\b${v}`, 'i').test(allText));
    check('Uses 5+ action verbs', 10, verbsFound.length >= 5);
    check('Has quantified achievements (numbers)', 10, /\d+%|\d+ (projects?|teams?|clients?|years?|months?|\$|cr|lakh|million)/i.test(allText));
    // ATS Safety
    const hasPhoto = elements.some(e => e.type === 'image');
    check('No profile photo (ATS-safe)', 8, !hasPhoto);
    const wordCount = allText.split(/\s+/).filter(Boolean).length;
    check('Word count 250–800 (optimal)', 10, wordCount >= 250 && wordCount <= 800);
    // Formatting
    check('Has LinkedIn / GitHub / Portfolio', 5, /linkedin|github|portfolio/.test(allText));
    check('Has certifications / courses', 4, /certif|certified|msn?|aws|pmp|csm|cfa|cpa/.test(allText));

    const maxScore = checks.reduce((s, c) => s + c.points, 0);
    const pct = Math.round((total / maxScore) * 100);
    return { checks, pct, wordCount, verbsFound };
}

export default function ATSChecker() {
    const { state } = useEditorContext();
    const { checks, pct, wordCount, verbsFound } = useMemo(() => scoreResume(state.elements), [state.elements]);

    const color = pct >= 75 ? '#22c55e' : pct >= 50 ? '#f59e0b' : '#ef4444';
    const label = pct >= 75 ? 'Excellent' : pct >= 50 ? 'Good' : 'Needs Work';
    const circumference = 2 * Math.PI * 44;
    const dash = circumference * (1 - pct / 100);

    return (
        <div className="ats-checker">
            <div className="panel-title">ATS Score</div>
            <p className="panel-sub">Live analysis of your resume's Applicant Tracking System compatibility.</p>

            {/* Score gauge */}
            <div className="ats-gauge">
                <svg width="104" height="104" viewBox="0 0 104 104">
                    <circle cx="52" cy="52" r="44" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                    <circle
                        cx="52" cy="52" r="44" fill="none"
                        stroke={color} strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={dash}
                        strokeLinecap="round"
                        transform="rotate(-90 52 52)"
                        style={{ transition: 'stroke-dashoffset 0.8s ease, stroke 0.4s ease' }}
                    />
                </svg>
                <div className="ats-gauge-inner">
                    <div className="ats-score-num" style={{ color }}>{pct}%</div>
                    <div className="ats-score-label" style={{ color }}>{label}</div>
                </div>
            </div>

            {/* Stats row */}
            <div className="ats-stats">
                <div className="ats-stat">
                    <div className="ats-stat-val">{wordCount}</div>
                    <div className="ats-stat-name">Words</div>
                </div>
                <div className="ats-stat">
                    <div className="ats-stat-val">{verbsFound.length}</div>
                    <div className="ats-stat-name">Action Verbs</div>
                </div>
            </div>

            {/* Checklist */}
            <div className="ats-checks">
                {checks.map((c, i) => (
                    <div key={i} className={`ats-check-item ${c.pass ? 'pass' : 'fail'}`}>
                        <i className={`fa-solid ${c.pass ? 'fa-circle-check' : 'fa-circle-xmark'}`} />
                        <span className="ats-check-label">{c.label}</span>
                        <span className="ats-check-pts">+{c.points}</span>
                    </div>
                ))}
            </div>

            <p className="ats-tip">💡 Aim for 75%+ for best ATS compatibility.</p>
        </div>
    );
}
