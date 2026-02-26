// --- LOCAL STORAGE AUTO-SAVE LOGIC ---
function saveToLocalStorage() {
    const data = {
        template: document.getElementById('template-selector').value,
        pdfName: document.getElementById('pdf_filename').value,
        color: document.getElementById('in_color').value,
        name: document.getElementById('in_name').value,
        address: document.getElementById('in_address').value,
        phone: document.getElementById('in_phone').value,
        email: document.getElementById('in_email').value,
        portfolio: document.getElementById('in_portfolio').value,
        github: document.getElementById('in_github').value,
        summary: document.getElementById('in_summary').value,
        sLang: document.getElementById('in_skill_lang').value,
        sFront: document.getElementById('in_skill_front').value,
        sBack: document.getElementById('in_skill_back').value,
        sFrame: document.getElementById('in_skill_frame').value,
        sDb: document.getElementById('in_skill_db').value,
        sTools: document.getElementById('in_skill_tools').value,
        addLang: document.getElementById('in_add_lang').value,
        addCert: document.getElementById('in_add_cert').value,
        sectionMargins: window.sectionMargins || {},

        experiences: Array.from(document.querySelectorAll('.exp-item')).map(item => ({
            title: item.querySelector('.e-title').value,
            comp: item.querySelector('.e-comp').value,
            date: item.querySelector('.e-date').value,
            proj: item.querySelector('.e-proj').value,
            desc: item.querySelector('.e-desc').value
        })),
        educations: Array.from(document.querySelectorAll('.edu-item')).map(item => ({
            deg: item.querySelector('.ed-deg').value,
            uni: item.querySelector('.ed-uni').value,
            date: item.querySelector('.ed-date').value,
            desc: item.querySelector('.ed-desc').value
        })),
        projects: Array.from(document.querySelectorAll('.proj-item')).map(item => ({
            title: item.querySelector('.p-title').value,
            desc: item.querySelector('.p-desc').value
        }))
    };

    if (uploadedImageData) {
        data.photo = uploadedImageData;
    }

    localStorage.setItem('resumeBuilderData', JSON.stringify(data));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('resumeBuilderData');
    if (saved) {
        const data = JSON.parse(saved);

        document.getElementById('template-selector').value = data.template || 'template-classic';
        document.getElementById('pdf_filename').value = data.pdfName || 'Aswin_Resume';
        document.getElementById('in_color').value = data.color || '#0f3057';
        document.getElementById('in_name').value = data.name || '';
        document.getElementById('in_address').value = data.address || '';
        document.getElementById('in_phone').value = data.phone || '';
        document.getElementById('in_email').value = data.email || '';
        document.getElementById('in_portfolio').value = data.portfolio || '';
        document.getElementById('in_github').value = data.github || '';
        document.getElementById('in_summary').value = data.summary || '';
        document.getElementById('in_skill_lang').value = data.sLang || '';
        document.getElementById('in_skill_front').value = data.sFront || '';
        document.getElementById('in_skill_back').value = data.sBack || '';
        document.getElementById('in_skill_frame').value = data.sFrame || '';
        document.getElementById('in_skill_db').value = data.sDb || '';
        document.getElementById('in_skill_tools').value = data.sTools || '';
        document.getElementById('in_add_lang').value = data.addLang || '';
        document.getElementById('in_add_cert').value = data.addCert || '';

        window.sectionMargins = data.sectionMargins || {};

        if (data.photo) uploadedImageData = data.photo;

        if (data.experiences && data.experiences.length > 0) {
            data.experiences.forEach(e => addExperience(e.title, e.comp, e.date, e.proj, e.desc, false));
        } else { addExperience('', '', '', '', '', false); }

        if (data.educations && data.educations.length > 0) {
            data.educations.forEach(e => addEducation(e.deg, e.uni, e.date, e.desc, false));
        } else { addEducation('', '', '', '', '', false); }

        if (data.projects && data.projects.length > 0) {
            data.projects.forEach(p => addProject(p.title, p.desc, false));
        } else { addProject('', '', false); }

        return true;
    }
    return false;
}

let renderTimeout;

function triggerUpdate(forceRegenerate = false) {
    clearTimeout(renderTimeout);
    renderTimeout = setTimeout(() => {
        updatePreview(forceRegenerate);
        saveToLocalStorage();
    }, 300);
}

// --- PDF Download Function ---
function downloadPDF() {
    const previewPanel = document.querySelector('.preview-panel');
    if (previewPanel) previewPanel.scrollTop = 0;

    const element = document.getElementById("resume-preview");
    const filename = document.getElementById("pdf_filename").value.trim() || "Resume";

    // Get margin from selector
    let mSelect = document.getElementById('margin-select');
    let marginVal = mSelect ? parseInt(mSelect.value, 10) : 10;
    if (isNaN(marginVal)) marginVal = 10;

    const opt = {
        margin: [marginVal, marginVal, marginVal, marginVal],
        filename: filename + ".pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
            scale: 3,
            useCORS: true,
            logging: false,
            scrollY: 0
        },
        jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait"
        },
        pagebreak: { mode: ["css", "legacy"] }
    };

    html2pdf().set(opt).from(element).save();
}

// --- Image Handling ---
let uploadedImageData = null;
document.getElementById('in_photo').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            uploadedImageData = event.target.result;

            const existingPic = document.querySelector('.profile-pic');
            if (existingPic) {
                existingPic.src = uploadedImageData;
            } else {
                const sidebar = document.querySelector('.modern-sidebar');
                if (sidebar) {
                    const img = document.createElement('img');
                    img.src = uploadedImageData;
                    img.className = 'profile-pic';
                    img.alt = 'Profile';
                    sidebar.insertBefore(img, sidebar.firstChild);
                }
            }

            saveEditorState();
            saveToLocalStorage();
        };
        reader.readAsDataURL(file);
    }
});

// --- PDF.js Setup for Text Extraction ---
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
document.getElementById('resumeUpload').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file.type !== "application/pdf") return;
    const fileReader = new FileReader();
    document.getElementById('loading-text').style.display = 'block';
    fileReader.onload = function () {
        pdfjsLib.getDocument(new Uint8Array(this.result)).promise.then(function (pdf) {
            let promises = [];
            for (let j = 1; j <= pdf.numPages; j++) {
                promises.push(pdf.getPage(j).then(page => page.getTextContent().then(t => t.items.map(s => s.str).join(' '))));
            }
            Promise.all(promises).then(function (texts) {
                document.getElementById('loading-text').style.display = 'none';
                const textArea = document.getElementById('extracted-text');
                textArea.style.display = 'block';
                textArea.value = texts.join('\n\n').replace(/\s+/g, ' ');
            });
        });
    };
    fileReader.readAsArrayBuffer(file);
});

// --- Dynamic Form Logic ---
function createRemoveButton(container) {
    const btn = document.createElement('button');
    btn.className = 'remove-btn'; btn.innerText = '✕ Remove';
    btn.onclick = function () { container.remove(); triggerUpdate(); };
    return btn;
}

function addExperience(title = "", comp = "", date = "", proj = "", desc = "", trigger = true) {
    const container = document.getElementById('experience_container');
    const div = document.createElement('div');
    div.className = 'form-group dynamic-item fade-in exp-item';
    div.innerHTML = `
        <label>Job Title</label><input type="text" class="e-title" placeholder="E.g. Software Engineer" value="${title}" oninput="triggerUpdate()">
        <label style="margin-top:8px;">Company</label><input type="text" class="e-comp" placeholder="E.g. Tech Corp" value="${comp}" oninput="triggerUpdate()">
        <label style="margin-top:8px;">Dates</label><input type="text" class="e-date" placeholder="E.g. Jan 2020 - Present" value="${date}" oninput="triggerUpdate()">
        <label style="margin-top:8px;">Project Name (Optional)</label><input type="text" class="e-proj" placeholder="E.g. Data Migration Initiative" value="${proj}" oninput="triggerUpdate()">
        <label style="margin-top:8px;">Responsibilities (use hyphens for bullets)</label>
        <textarea class="e-desc" placeholder="- Developed scalable applications...\n- Improved database performance..." oninput="triggerUpdate()">${desc}</textarea>
    `;
    div.appendChild(createRemoveButton(div)); container.appendChild(div);
    if (trigger) triggerUpdate();
}

function addEducation(deg = "", uni = "", date = "", desc = "", trigger = true) {
    const container = document.getElementById('education_container');
    const div = document.createElement('div');
    div.className = 'form-group dynamic-item fade-in edu-item';
    div.innerHTML = `
        <label>Degree</label><input type="text" class="ed-deg" placeholder="E.g. B.S. in Computer Science" value="${deg}" oninput="triggerUpdate()">
        <label style="margin-top:8px;">University</label><input type="text" class="ed-uni" placeholder="E.g. State University" value="${uni}" oninput="triggerUpdate()">
        <label style="margin-top:8px;">Dates</label><input type="text" class="ed-date" placeholder="E.g. 2016 - 2020" value="${date}" oninput="triggerUpdate()">
        <label style="margin-top:8px;">Specialization/Description (Optional)</label><input type="text" class="ed-desc" placeholder="E.g. Graduated with Honors" value="${desc}" oninput="triggerUpdate()">
    `;
    div.appendChild(createRemoveButton(div)); container.appendChild(div);
    if (trigger) triggerUpdate();
}

function addProject(title = "", desc = "", trigger = true) {
    const container = document.getElementById('project_container');
    const div = document.createElement('div');
    div.className = 'form-group dynamic-item fade-in proj-item';
    div.innerHTML = `
        <label>Project Title</label><input type="text" class="p-title" placeholder="E.g. E-commerce Web App" value="${title}" oninput="triggerUpdate()">
        <label style="margin-top:8px;">Description (use hyphens for bullets)</label>
        <textarea class="p-desc" placeholder="- Built a full-stack platform...\n- Integrated Stripe API..." oninput="triggerUpdate()">${desc}</textarea>
    `;
    div.appendChild(createRemoveButton(div)); container.appendChild(div);
    if (trigger) triggerUpdate();
}

// --- Preview Generation ---
const formatBullets = (text) => {
    if (!text) return "";
    return text.split('\n').filter(line => line.trim() !== '').map(line => {
        let clean = line.trim();
        if (clean.startsWith('-') || clean.startsWith('•')) clean = clean.substring(1).trim();
        return `<li>${clean}</li>`;
    }).join('');
};

let isFirstLoad = true;

// --- WYSIWYG Editor Functions ---
function switchRibbonTab(event, tabId) {
    document.querySelectorAll('.ribbon-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.ribbon-toolbar').forEach(t => t.classList.remove('active'));

    event.currentTarget.classList.add('active');
    document.getElementById('toolbar-' + tabId).classList.add('active');
}

function execCmd(command, value = null) {
    document.execCommand(command, false, value);
    document.getElementById('resume-preview').focus();
    updateRibbonState();
    saveEditorState();
}

function setFontSize(pxSize) {
    document.execCommand('fontSize', false, "7");
    const fonts = document.getElementsByTagName("font");
    for (let i = 0; i < fonts.length; i++) {
        if (fonts[i].size == "7") {
            fonts[i].removeAttribute("size");
            fonts[i].style.fontSize = pxSize + "px";
        }
    }
    document.getElementById('resume-preview').focus();
    updateRibbonState();
    saveEditorState();
}

function applyBlockStyle(styleName, value) {
    let sel = window.getSelection();
    if (sel.rangeCount > 0) {
        let node = sel.getRangeAt(0).commonAncestorContainer;
        if (node.nodeType === 3) node = node.parentNode;

        while (node && node.id !== 'resume-preview') {
            if (node.tagName === 'DIV' || node.tagName === 'P' || node.tagName === 'LI' || node.tagName === 'UL' || node.tagName === 'H1' || node.tagName === 'H2' || node.tagName === 'H3') {
                node.style[styleName] = value;
                saveEditorState();
                return;
            }
            node = node.parentNode;
        }

        if (node && node.id === 'resume-preview') {
            document.execCommand('formatBlock', false, 'DIV');
            setTimeout(() => {
                let newSel = window.getSelection();
                if (newSel.rangeCount > 0) {
                    let newNode = newSel.getRangeAt(0).commonAncestorContainer;
                    if (newNode.nodeType === 3) newNode = newNode.parentNode;
                    while (newNode && newNode.id !== 'resume-preview') {
                        if (newNode.tagName === 'DIV' || newNode.tagName === 'P') {
                            newNode.style[styleName] = value;
                            saveEditorState();
                            return;
                        }
                        newNode = newNode.parentNode;
                    }
                }
            }, 10);
        }
    }
}

function insertLink() {
    const url = prompt("Enter URL:");
    if (url) {
        execCmd('createLink', url);
    }
}

function insertImage(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            execCmd('insertImage', e.target.result);
        }
        reader.readAsDataURL(file);
    }
    input.value = "";
}

function updateRibbonState() {
    const formats = [
        { id: 'btn-bold', command: 'bold' },
        { id: 'btn-italic', command: 'italic' },
        { id: 'btn-underline', command: 'underline' },
        { id: 'btn-justifyLeft', command: 'justifyLeft' },
        { id: 'btn-justifyCenter', command: 'justifyCenter' },
        { id: 'btn-justifyRight', command: 'justifyRight' },
        { id: 'btn-justifyFull', command: 'justifyFull' }
    ];

    // Toggle active classes for buttons
    formats.forEach(format => {
        const btn = document.getElementById(format.id);
        if (btn) {
            if (document.queryCommandState(format.command)) {
                btn.classList.add('active-format');
            } else {
                btn.classList.remove('active-format');
            }
        }
    });

    // Update Font Family Select
    const fontSelect = document.getElementById('font-family-select');
    if (fontSelect) {
        let fontName = document.queryCommandValue('fontName');
        if (fontName) {
            // Remove quotes if present e.g. "Times New Roman" -> Times New Roman
            fontName = fontName.replace(/['"]/g, '');
            // Simple check to set dropdown if matching an option
            Array.from(fontSelect.options).forEach(opt => {
                if (fontName.toLowerCase().includes(opt.value.toLowerCase())) {
                    fontSelect.value = opt.value;
                }
            });
        }
    }

    // Update Font Size Select
    const sizeSelect = document.getElementById('font-size-select');
    if (sizeSelect) {
        let node = document.getSelection().anchorNode;
        if (node && node.nodeType === 3) node = node.parentNode;

        let foundSize = null;
        while (node && node.id !== 'resume-preview') {
            if (node.style && node.style.fontSize) {
                foundSize = node.style.fontSize.replace('px', '');
                break;
            }
            node = node.parentNode;
        }

        if (foundSize) {
            Array.from(sizeSelect.options).forEach(opt => {
                if (opt.value === foundSize) sizeSelect.value = opt.value;
            });
        } else {
            // Default size fallback if not explicitly set
            sizeSelect.value = "14";
        }
    }
}

function saveEditorState() {
    const html = document.getElementById('resume-preview').innerHTML;
    localStorage.setItem('resumeEditorHTML', html);
}

function checkTemplateChange() {
    const modal = document.getElementById('custom-confirm-modal');
    if (modal) modal.classList.add('active');
}

function closeModal(confirmChange) {
    const modal = document.getElementById('custom-confirm-modal');
    if (modal) modal.classList.remove('active');

    if (confirmChange) {
        localStorage.removeItem('resumeEditorHTML');
        triggerUpdate(true);
    } else {
        document.getElementById('template-selector').value = document.getElementById('resume-preview').className;
    }
}

function changePageMargins(value) {
    document.getElementById('resume-preview-wrapper').style.padding = value;
    localStorage.setItem('resumeEditorMargins', value);
}

function updatePreview(forceRegenerate = false) {
    const isAppInitialized = localStorage.getItem('resumeBuilderData') !== null;

    const val = (id, fallback) => {
        const el = document.getElementById(id);
        if (!el) return fallback;
        return (!isAppInitialized && el.value === "") ? fallback : el.value;
    };

    const template = document.getElementById('template-selector').value;
    const previewBox = document.getElementById('resume-preview');
    previewBox.className = template;
    const themeColor = val('in_color', '#0f3057');

    const modernSettings = document.getElementById('modern-settings');
    if (modernSettings) {
        modernSettings.style.display = (template === 'template-modern') ? 'block' : 'none';
    }

    const savedHTML = localStorage.getItem('resumeEditorHTML');
    if (savedHTML && !forceRegenerate) {
        if (isFirstLoad) {
            previewBox.innerHTML = savedHTML;
            isFirstLoad = false;
        }
        const topBar = previewBox.querySelector('.top-bar');
        if (topBar) topBar.style.backgroundColor = themeColor;
        return;
    }

    const name = val('in_name', 'JOHN DOE');
    const addr = val('in_address', 'New York, NY');
    const phone = val('in_phone', '+1 (555) 123-4567');
    const email = val('in_email', 'johndoe@email.com');
    const port = val('in_portfolio', 'johndoe.com');
    const git = val('in_github', 'github.com/johndoe');
    const summary = val('in_summary', 'Dedicated and results-driven professional with experience in software development...');

    const sLang = val('in_skill_lang', '');
    const sFront = val('in_skill_front', '');
    const sBack = val('in_skill_back', '');
    const sFrame = val('in_skill_frame', '');
    const sDb = val('in_skill_db', '');
    const sTools = val('in_skill_tools', '');
    const addLang = val('in_add_lang', '');
    const addCert = val('in_add_cert', '');

    let html = '';

    // TEMPLATE 4: MODERN SIDEBAR 
    if (template === 'template-modern') {
        let latestJobTitle = "";
        const firstExp = document.querySelector('.exp-item');
        if (firstExp && firstExp.querySelector('.e-title')) {
            latestJobTitle = firstExp.querySelector('.e-title').value;
        }

        html += `
            <div class="top-bar" style="background-color: ${themeColor} !important;"></div>
            <div class="grid-layout">
                <div class="modern-main">
                    <div class="modern-header">
                        <h1 contenteditable="true">${name}</h1>
                        ${latestJobTitle ? `<div contenteditable="true" style="font-size: 11pt; color: #444; margin-bottom: 25px;">${latestJobTitle}</div>` : ''}
                    </div>
                    ${summary ? `<div class="resume-section-title" contenteditable="true" style="color: ${themeColor} !important;">SUMMARY</div><div style="margin-bottom:25px;">${summary}</div>` : ''}
        `;

        const expItems = document.querySelectorAll('.exp-item');
        if (expItems.length > 0) {
            html += `<div class="resume-section-title" contenteditable="true" style="color: ${themeColor} !important; border-bottom-color: #e2e8f0;">EXPERIENCE</div>`;
            expItems.forEach(item => {
                const jTitle = item.querySelector('.e-title').value; const jComp = item.querySelector('.e-comp').value;
                const jDate = item.querySelector('.e-date').value; const jProj = item.querySelector('.e-proj').value;
                const jDesc = item.querySelector('.e-desc').value;

                html += `<div class="resume-item">
                    <div class="resume-item-header">${jTitle}${jComp ? `, ${jComp}` : ''}</div>
                    <span class="resume-item-date">${jDate}</span>
                    ${jProj ? `<div style="font-style:italic; font-size:9.5pt; margin-bottom:4px;">Project: ${jProj}</div>` : ''}
                    <ul>${formatBullets(jDesc)}</ul>
                </div>`;
            });
        }

        const eduItems = document.querySelectorAll('.edu-item');
        if (eduItems.length > 0) {
            html += `<div class="resume-section-title" contenteditable="true" style="margin-top:10px; color: ${themeColor} !important; border-bottom-color: #e2e8f0;">EDUCATION</div>`;
            eduItems.forEach(item => {
                const deg = item.querySelector('.ed-deg').value; const uni = item.querySelector('.ed-uni').value;
                const date = item.querySelector('.ed-date').value; const desc = item.querySelector('.ed-desc').value;
                html += `<div class="resume-item" style="margin-bottom:12px;">
                    <div class="resume-item-header">${deg}${uni ? `, ${uni}` : ''}</div>
                    <span class="resume-item-date">${date}</span>
                    ${desc ? `<div style="font-size:9.5pt; margin-top:2px;">${desc}</div>` : ''}
                </div>`;
            });
        }

        const projItems = document.querySelectorAll('.proj-item');
        if (projItems.length > 0) {
            html += `<div class="resume-section-title" contenteditable="true" style="margin-top:10px; color: ${themeColor} !important; border-bottom-color: #e2e8f0;">PROJECTS</div>`;
            projItems.forEach(item => {
                const pTitle = item.querySelector('.p-title').value; const pDesc = item.querySelector('.p-desc').value;
                html += `<div class="resume-item">
                    <div class="resume-item-header">${pTitle}</div>
                    <ul>${formatBullets(pDesc)}</ul>
                </div>`;
            });
        }

        html += `</div><div class="modern-sidebar">`;

        if (uploadedImageData) { html += `<img src="${uploadedImageData}" class="profile-pic" alt="Profile">`; }

        html += `<div class="sidebar-block">`;
        if (email) html += `<div class="contact-line">✉ ${email}</div>`;
        if (addr) html += `<div class="contact-line">📍 ${addr}</div>`;
        if (phone) html += `<div class="contact-line">📞 ${phone}</div>`;
        if (port) html += `<div class="contact-line">🔗 ${port}</div>`;
        if (git) html += `<div class="contact-line">🔗 ${git}</div>`;
        html += `</div>`;

        if (sLang || sFront || sBack || sFrame || sDb || sTools) {
            html += `<div class="resume-section-title" contenteditable="true" style="color: ${themeColor} !important; border-bottom-color: #e2e8f0;">SKILLS</div><ul class="modern-skills">`;
            if (sLang) html += `<li><b>Lang:</b> ${sLang}</li>`;
            if (sFront) html += `<li><b>Front:</b> ${sFront}</li>`;
            if (sBack) html += `<li><b>Back:</b> ${sBack}</li>`;
            if (sFrame) html += `<li><b>Frame:</b> ${sFrame}</li>`;
            if (sDb) html += `<li><b>DB:</b> ${sDb}</li>`;
            if (sTools) html += `<li><b>Tools:</b> ${sTools}</li>`;
            html += `</ul>`;
        }

        if (addLang || addCert) {
            html += `<div class="resume-section-title" contenteditable="true" style="margin-top:20px; color: ${themeColor} !important; border-bottom-color: #e2e8f0;">INFO</div><ul class="modern-skills">`;
            if (addLang) html += `<li><b>Languages:</b> ${addLang}</li>`;
            if (addCert) html += `<li><b>Certs:</b> ${addCert}</li>`;
            html += `</ul>`;
        }
        html += `</div></div>`;
    }
    // ATS TEMPLATES
    else {
        let contactArr = [];
        if (addr) contactArr.push(`<span>${addr}</span>`);
        if (phone) contactArr.push(`<span>${phone}</span>`);
        if (email) contactArr.push(`<span>${email}</span>`);
        let linkArr = [];
        if (port) linkArr.push(`<span>${port}</span>`);
        if (git) linkArr.push(`<span>${git}</span>`);

        if (template === 'template-split') {
            html += `<div class="header-layout">
                <div><h1 contenteditable="true">${name}</h1></div>
                <div class="contact-info">${contactArr.join('')}${linkArr.join('')}</div>
            </div>`;
        } else {
            html += `<h1 contenteditable="true">${name}</h1>
                <div class="contact-info">
                    <div>${contactArr.join(' | ')}</div>
                    <div style="margin-top:3px;">${linkArr.join(' | ')}</div>
                </div>`;
        }

        const generators = {
            'summary': () => {
                return summary ? `<div class="resume-section-title" contenteditable="true">SUMMARY</div><div style="margin-bottom:20px;">${summary}</div>` : '';
            },
            'experience': () => {
                let sec = '';
                const expItems = document.querySelectorAll('.exp-item');
                if (expItems.length > 0) {
                    sec += `<div class="resume-section-title" contenteditable="true">EXPERIENCE</div>`;
                    expItems.forEach(item => {
                        const jTitle = item.querySelector('.e-title').value; const jComp = item.querySelector('.e-comp').value;
                        const jDate = item.querySelector('.e-date').value; const jProj = item.querySelector('.e-proj').value;
                        const jDesc = item.querySelector('.e-desc').value;

                        if (template === 'template-split') {
                            sec += `<div class="split-item">
                                <div class="split-left">${jDate}</div>
                                <div class="split-right">
                                    <div class="split-title">${jTitle}</div>
                                    <div class="split-company">${jComp}</div>
                                    ${jProj ? `<div style="font-style:italic; font-size:9.5pt; margin-bottom:4px;">Project: ${jProj}</div>` : ''}
                                    <ul>${formatBullets(jDesc)}</ul>
                                </div>
                            </div>`;
                        } else {
                            let headerLeft = jTitle + (jComp ? `, ${jComp}` : '');
                            sec += `<div class="resume-item">
                                <div class="resume-item-header"><span>${headerLeft}</span><span>${jDate}</span></div>
                                ${jProj ? `<div style="font-style:italic; font-size:9.5pt; margin-bottom:4px;">Project: ${jProj}</div>` : ''}
                                <ul>${formatBullets(jDesc)}</ul>
                            </div>`;
                        }
                    });
                }
                return sec;
            },
            'education': () => {
                let sec = '';
                const eduItems = document.querySelectorAll('.edu-item');
                if (eduItems.length > 0) {
                    sec += `<div class="resume-section-title" contenteditable="true">EDUCATION</div>`;
                    eduItems.forEach(item => {
                        const deg = item.querySelector('.ed-deg').value; const uni = item.querySelector('.ed-uni').value;
                        const date = item.querySelector('.ed-date').value; const desc = item.querySelector('.ed-desc').value;

                        if (template === 'template-split') {
                            sec += `<div class="split-item">
                                <div class="split-left">${date}</div>
                                <div class="split-right">
                                    <div class="split-title">${deg}</div>
                                    <div class="split-company">${uni}</div>
                                    ${desc ? `<div>${desc}</div>` : ''}
                                </div>
                            </div>`;
                        } else {
                            sec += `<div class="resume-item">
                                <div class="resume-item-header"><span>${deg}</span><span>${date}</span></div>
                                <div>${uni}</div>
                                ${desc ? `<ul><li>${desc}</li></ul>` : ''}
                            </div>`;
                        }
                    });
                }
                return sec;
            },
            'projects': () => {
                let sec = '';
                const projItems = document.querySelectorAll('.proj-item');
                if (projItems.length > 0) {
                    sec += `<div class="resume-section-title" contenteditable="true">PROJECTS</div>`;
                    projItems.forEach(item => {
                        const pTitle = item.querySelector('.p-title').value; const pDesc = item.querySelector('.p-desc').value;
                        if (template === 'template-split') {
                            sec += `<div class="split-item">
                                <div class="split-left">Project</div>
                                <div class="split-right">
                                    <div class="split-title">${pTitle}</div>
                                    <ul>${formatBullets(pDesc)}</ul>
                                </div>
                            </div>`;
                        } else {
                            sec += `<div class="resume-item">
                                <div class="resume-item-header"><span>${pTitle}</span></div>
                                <ul>${formatBullets(pDesc)}</ul>
                            </div>`;
                        }
                    });
                }
                return sec;
            },
            'skills': () => {
                let sec = '';
                if (sLang || sFront || sBack || sFrame || sDb || sTools) {
                    sec += `<div class="resume-section-title" contenteditable="true">TECHNICAL SKILLS</div>`;
                    if (template === 'template-split' || template === 'template-accent') {
                        sec += `<div class="skills-grid">`;
                        if (sLang) sec += `<div><b>Languages:</b> ${sLang}</div>`;
                        if (sFront) sec += `<div><b>Frontend:</b> ${sFront}</div>`;
                        if (sBack) sec += `<div><b>Backend:</b> ${sBack}</div>`;
                        if (sFrame) sec += `<div><b>Frameworks:</b> ${sFrame}</div>`;
                        if (sDb) sec += `<div><b>Databases:</b> ${sDb}</div>`;
                        if (sTools) sec += `<div><b>Tools:</b> ${sTools}</div>`;
                        sec += `</div>`;
                    } else {
                        if (sLang) sec += `<div class="skills-grid"><strong>• Languages:</strong> <span>${sLang}</span></div>`;
                        if (sFront) sec += `<div class="skills-grid"><strong>• Frontend:</strong> <span>${sFront}</span></div>`;
                        if (sBack) sec += `<div class="skills-grid"><strong>• Backend:</strong> <span>${sBack}</span></div>`;
                        if (sFrame) sec += `<div class="skills-grid"><strong>• Frameworks:</strong> <span>${sFrame}</span></div>`;
                        if (sDb) sec += `<div class="skills-grid"><strong>• Databases:</strong> <span>${sDb}</span></div>`;
                        if (sTools) sec += `<div class="skills-grid"><strong>• Tools:</strong> <span>${sTools}</span></div>`;
                    }
                }
                return sec;
            }
        };

        const defaultOrder = ['summary', 'experience', 'education', 'projects', 'skills'];
        window.sectionMargins = window.sectionMargins || {};

        defaultOrder.forEach((sectionId) => {
            if (generators[sectionId]) {
                html += generators[sectionId]();
            }
        });

        if (addLang || addCert) {
            html += `<div class="resume-section-title" contenteditable="true">ADDITIONAL INFORMATION</div>`;
            if (template === 'template-split' || template === 'template-accent') {
                if (addLang) html += `<div style="margin-bottom:4px;"><b>Languages:</b> ${addLang}</div>`;
                if (addCert) html += `<div><b>Certifications:</b> ${addCert}</div>`;
            } else {
                if (addLang) html += `<div class="skills-grid"><strong>• Languages:</strong> <span>${addLang}</span></div>`;
                if (addCert) html += `<div class="skills-grid"><strong>• Certifications:</strong> <span>${addCert}</span></div>`;
            }
        }
    }

    previewBox.innerHTML = html;
    saveEditorState();
}

function adjustSpacing(sectionId, delta) {
    window.sectionMargins = window.sectionMargins || {};
    let currentMargin = window.sectionMargins[sectionId] || 0;
    currentMargin += delta;

    if (currentMargin < 0) currentMargin = 0;

    window.sectionMargins[sectionId] = currentMargin;
    triggerUpdate();
}

window.addEventListener('load', () => {
    // Premium Opening Animation Hide
    setTimeout(() => {
        const loader = document.getElementById('premium-loader');
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => loader.remove(), 800);
        }
    }, 2200);

    const savedEditor = localStorage.getItem('resumeEditorHTML');

    loadFromLocalStorage();

    const savedMargin = localStorage.getItem('resumeEditorMargins');
    if (savedMargin) {
        document.getElementById('margin-select').value = savedMargin;
        changePageMargins(savedMargin);
    }

    if (!savedEditor) {
        addExperience('Software Engineer', 'Tech Corp', 'Jan 2020 - Present', 'Data Migration Initiative', '- Developed and deployed scalable microservices...\n- Reduced database query latency by 30%...', false);
        addEducation('B.S. in Computer Science', 'State University', '2016 - 2020', 'Graduated with Honors', false);
        addProject('E-commerce Web Application', '- Built a full-stack e-commerce platform using MERN stack.\n- Integrated Stripe API for secure payment processing.', false);
        updatePreview(true);
    } else {
        updatePreview();
    }

    const previewBox = document.getElementById('resume-preview');
    let isResizing = false;
    let currentImage = null;
    let startX, startWidth;

    previewBox.addEventListener('mousedown', function (e) {
        // ... (resizing logic remains unchanged)
        if (e.target.tagName === 'IMG' && !e.target.classList.contains('profile-pic')) {
            const rect = e.target.getBoundingClientRect();
            const clickX = e.clientX - rect.left;

            if (clickX > rect.width * 0.75) {
                isResizing = true;
                currentImage = e.target;
                startX = e.clientX;
                startWidth = parseInt(document.defaultView.getComputedStyle(currentImage).width, 10);
                e.preventDefault();
            }
        }
    });

    // Listen to cursor movements/clicks to update ribbon
    document.addEventListener('mousemove', function (e) {
        if (isResizing && currentImage) {
            const newWidth = startWidth + (e.clientX - startX);
            if (newWidth > 30 && newWidth < previewBox.clientWidth) {
                currentImage.style.width = newWidth + 'px';
                currentImage.style.height = 'auto';
            }
        }
    });

    previewBox.addEventListener('mouseup', function (e) {
        if (isResizing) {
            isResizing = false;
            currentImage = null;
            saveEditorState();
        }
        updateRibbonState();
    });

    previewBox.addEventListener('keyup', function (e) {
        updateRibbonState();
    });

    ['experience_container', 'education_container', 'project_container'].forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            Sortable.create(container, {
                animation: 150,
                filter: 'input, textarea',
                preventOnFilter: false,
                onEnd: () => triggerUpdate(true)
            });
        }
    });

    // Fix Enter key bug inside headings
    previewBox.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            let sel = window.getSelection();
            if (sel.rangeCount > 0) {
                let node = sel.getRangeAt(0).commonAncestorContainer;
                if (node.nodeType === 3) node = node.parentNode; // get element from text node

                // If cursor is inside a heading or section title
                let headingNode = node.closest('h1, h2, h3, h4, h5, h6, .resume-section-title, .modern-header');
                if (headingNode) {
                    e.preventDefault();

                    // Insert a standard paragraph instead of cloning the heading
                    let p = document.createElement('div');
                    p.innerHTML = '<br>';

                    if (headingNode.nextSibling) {
                        headingNode.parentNode.insertBefore(p, headingNode.nextSibling);
                    } else {
                        headingNode.parentNode.appendChild(p);
                    }

                    // Move cursor to the new paragraph
                    let range = document.createRange();
                    range.setStart(p, 0);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                    saveEditorState();
                }
            }
        }
    });
});

// Toggle Editor Panel Visibility
let isEditorHidden = false;
function toggleEditor() {
    const editorPanel = document.querySelector('.editor-panel');
    const previewPanel = document.querySelector('.preview-panel');
    const eyeIcon = document.getElementById('eye-icon');

    isEditorHidden = !isEditorHidden;

    if (isEditorHidden) {
        editorPanel.style.display = 'none';
        previewPanel.style.width = '100%';
        eyeIcon.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>`;
    } else {
        editorPanel.style.display = 'flex';
        previewPanel.style.width = '55%';
        eyeIcon.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>`;
    }
}

// Insert Custom Line
function insertCustomLine() {
    // Generate a unique ID so it can be styled/deleted easily if needed
    const id = 'line-' + Math.random().toString(36).substr(2, 9);
    const html = `<hr id="${id}" class="custom-user-line" contenteditable="false" style="border: 0; border-top: 1px solid #333; margin: 15px 0; width: 100%; cursor: pointer;" title="Double-click to remove line">`;
    execCmd('insertHTML', html);

    // Add listener to newly inserted lines
    setTimeout(() => {
        const hr = document.getElementById(id);
        if (hr) {
            hr.ondblclick = function () {
                if (confirm('Remove this line?')) {
                    this.remove();
                    saveEditorState();
                }
            };
        }
    }, 100);
}