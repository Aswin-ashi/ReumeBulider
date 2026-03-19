// Copyright 2026 ResumeBuilder | Apache License 2.0
import React from 'react';

export default function Logo({ size = 40, className = '' }) {
    return (
        <svg
            id="logo-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={size}
            height={size}
            className={className}
            style={{ display: 'block', flexShrink: 0 }}
        >
            <defs>
                <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#4c1d97" />
                </linearGradient>
                <linearGradient id="fold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f8fafc" />
                    <stop offset="100%" stopColor="#cbd5e1" />
                </linearGradient>
                <filter id="drop-shadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000000" floodOpacity="0.15" />
                </filter>
                <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.08" />
                </filter>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            {/* Base App Icon */}
            <rect x="32" y="32" width="448" height="448" rx="112" fill="url(#bg-grad)" filter="url(#drop-shadow)" />

            {/* Main Document Body */}
            <path d="M 160 112 H 288 L 368 192 V 400 A 24 24 0 0 1 344 424 H 160 A 24 24 0 0 1 136 400 V 136 A 24 24 0 0 1 160 112 Z"
                fill="#ffffff" filter="url(#soft-shadow)" />

            {/* Document Fold */}
            <path d="M 288 112 V 168 A 24 24 0 0 0 312 192 H 368 Z" fill="url(#fold-grad)" />

            {/* Avatar */}
            <rect x="176" y="160" width="56" height="56" rx="28" fill="#e2e8f0" />
            {/* Header Text */}
            <rect x="248" y="172" width="72" height="12" rx="6" fill="#94a3b8" />
            <rect x="248" y="196" width="48" height="12" rx="6" fill="#cbd5e1" />

            {/* Body Lines */}
            <rect x="176" y="248" width="160" height="12" rx="6" fill="#e2e8f0" />
            <rect x="176" y="276" width="136" height="12" rx="6" fill="#e2e8f0" />
            <rect x="176" y="304" width="144" height="12" rx="6" fill="#e2e8f0" />
            <rect x="176" y="344" width="160" height="12" rx="6" fill="#f1f5f9" />
            <rect x="176" y="372" width="96" height="12" rx="6" fill="#f1f5f9" />

            {/* Sparkle large */}
            <path d="M 376 224 C 376 256, 344 288, 312 288 C 344 288, 376 320, 376 352 C 376 320, 408 288, 440 288 C 408 288, 376 256, 376 224 Z"
                fill="#fbbf24" filter="url(#glow)" />
            {/* Sparkle small */}
            <path d="M 432 160 C 432 176, 416 192, 400 192 C 416 192, 432 208, 432 224 C 432 208, 448 192, 464 192 C 448 192, 432 176, 432 160 Z"
                fill="#fcd34d" filter="url(#glow)" />
        </svg>
    );
}
