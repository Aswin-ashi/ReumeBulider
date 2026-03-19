// Copyright 2026 ResumeBuilder | Apache License 2.0
import React from 'react';
import Logo from './Logo';

export default function LoadingScreen() {
    return (
        <div className="loading-screen">
            {/* 3D Scene */}
            <div className="ls-scene">
                <div className="ls-ring ls-ring-1" />
                <div className="ls-ring ls-ring-2" />
                <div className="ls-ring ls-ring-3" />
                <div className="ls-core">
                    <Logo size={64} className="ls-logo-icon" />
                </div>
            </div>

            {/* Particles */}
            {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className={`ls-particle ls-p${i % 6}`} style={{ '--i': i }} />
            ))}

            {/* Logo Text */}
            <div className="ls-logo">
                <span className="ls-logo-rb">Resume</span>
                <span className="ls-logo-accent">Builder</span>
            </div>

            <div className="ls-by">by <span>Aswin</span></div>
            <p className="loading-tagline">Build Your Story. Land Your Dream.</p>

            {/* Progress bar */}
            <div className="ls-progress-track">
                <div className="ls-progress-bar" />
            </div>
        </div>
    );
}

