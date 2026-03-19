// Copyright 2026 ResumeBuilder | Apache License 2.0

/**
 * Download the resume canvas as a PDF.
 * html2pdf.js is loaded via CDN in index.html (window.html2pdf).
 * Falls back to window.print() if unavailable.
 */
export async function downloadPDF(element, title) {
    if (typeof window.html2pdf === 'function') {
        const opt = {
            margin: 0,
            filename: (title || 'resume') + '.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff' },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };
        await window.html2pdf().set(opt).from(element).save();
    } else {
        window.print();
    }
}
