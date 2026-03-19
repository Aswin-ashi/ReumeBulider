// Copyright 2026 ResumeBuilder | Apache License 2.0
import React, { useRef, useEffect } from 'react';
import { useEditorContext } from '../../context/EditorContext';
import CanvasElement from './CanvasElement';
import { A4_WIDTH, A4_HEIGHT } from '../../data/templates';

const COL_GAP = 24;
const ROW_GAP = 24;

/** Determine column count from current zoom level */
function getCols(zoom) {
    if (zoom <= 0.25) return 5;
    if (zoom <= 0.35) return 4;
    if (zoom <= 0.45) return 3;
    if (zoom <= 0.75) return 2;
    return 1;
}

/** Given pageIndex and cols, return the absolute offset within the print-area */
export function getPageOffset(pageIndex, cols) {
    const col = pageIndex % cols;
    const row = Math.floor(pageIndex / cols);
    return { x: col * (A4_WIDTH + COL_GAP), y: row * (A4_HEIGHT + ROW_GAP) };
}

export default function Canvas() {
    const { state, deselect, setZoom, toggleGrid } = useEditorContext();
    const canvasRef = useRef(null);

    // Set initial zoom for mobile so CSS !important isn't needed
    useEffect(() => {
        if (window.innerWidth <= 768 && state.zoom >= 0.9) {
            setZoom(0.38);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const numPages = state.pageCount || 1;
    const cols = getCols(state.zoom);
    const activeCols = Math.min(cols, numPages);
    const rows = Math.ceil(numPages / cols);
    const printAreaWidth = activeCols * A4_WIDTH + (activeCols - 1) * COL_GAP;
    const printAreaHeight = rows * A4_HEIGHT + (rows - 1) * ROW_GAP;

    function handleWrapperClick(e) {
        if (e.target === e.currentTarget || e.target === canvasRef.current) {
            deselect();
        }
    }

    return (
        <>
            <main
                className="canvas-wrapper"
                onClick={handleWrapperClick}
            >
                {/* Grid overlay */}
                {state.showGrid && <div className="canvas-grid" />}

                {/* Canva-style Multi-Page Grid */}
                <div
                    ref={canvasRef}
                    className="print-area"
                    style={{
                        transform: `scale(${state.zoom})`,
                        transformOrigin: 'top center',
                        background: 'transparent',
                        boxShadow: 'none',
                        width: printAreaWidth,
                        height: printAreaHeight,
                    }}
                    id="print-area"
                >
                    {/* Visual Page Backgrounds */}
                    <div className="canvas-pages-layer">
                        {Array.from({ length: numPages }).map((_, i) => {
                            const { x, y } = getPageOffset(i, cols);
                            return (
                                <div
                                    key={i}
                                    className="canvas-page-bg"
                                    style={{ left: x, top: y, width: A4_WIDTH, height: A4_HEIGHT }}
                                >
                                    <span className="page-number-label">Page {i + 1}</span>
                                </div>
                            );
                        })}
                    </div>

                    {/* All Elements — positioned by page offset */}
                    <div className="canvas-elements-layer">
                        {state.elements.map(el => {
                            const pageIdx = el.pageIndex ?? 0;
                            const offset = getPageOffset(pageIdx, cols);
                            return (
                                <CanvasElement
                                    key={el.id}
                                    element={el}
                                    canvasRef={canvasRef}
                                    pageOffset={offset}
                                />
                            );
                        })}
                    </div>
                </div>
            </main>

            {/* Floating controls */}
            <button
                className={`grid-toggle-btn${state.showGrid ? ' active' : ''}`}
                onClick={toggleGrid}
                title="Toggle grid"
            >
                <i className="fa-solid fa-border-all" style={{ marginRight: 6 }} />
                Grid
            </button>

            <div className="zoom-control">
                <button className="zoom-btn" onClick={() => setZoom(state.zoom - 0.1)} title="Zoom out">
                    <i className="fa-solid fa-minus" />
                </button>
                <span className="zoom-label">{Math.round(state.zoom * 100)}%</span>
                <button className="zoom-btn" onClick={() => setZoom(state.zoom + 0.1)} title="Zoom in">
                    <i className="fa-solid fa-plus" />
                </button>
            </div>
        </>
    );
}
