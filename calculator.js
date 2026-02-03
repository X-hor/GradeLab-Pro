/* =====================
   MODULE DATA FOR ALL SEMESTERS
===================== */

const modulesData = {
    L3: {
        S1: [
            {name:"Operating Systems 2", coef:3, examOnly:false},
            {name:"Compilation", coef:3, examOnly:false},
            {name:"Software Engineering", coef:3, examOnly:false},
            {name:"HMI", coef:3, examOnly:false},
            {name:"Linear Programming", coef:2, examOnly:false},
            {name:"Probability", coef:2, examOnly:false},
            {name:"Digital Economy", coef:1, examOnly:true}
        ],
        S2: [
            {name:"Networks", coef:3, examOnly:false},
            {name:"Database 2", coef:3, examOnly:false},
            {name:"Web Development", coef:3, examOnly:false},
            {name:"AI Fundamentals", coef:3, examOnly:false},
            {name:"Statistics", coef:2, examOnly:false},
            {name:"Computer Architecture", coef:2, examOnly:false},
            {name:"Professional English", coef:1, examOnly:true}
        ]
    }
};

/* =====================
   GET URL PARAMETERS
===================== */

function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        year: params.get('year') || 'L3',
        semester: params.get('semester') || 'S1'
    };
}

/* =====================
   INITIALIZE PAGE
===================== */

const { year, semester } = getUrlParams();
const modules = modulesData[year][semester];
const tbody = document.getElementById("tbody");

// Set page title
document.getElementById('page-title').textContent = `🎓 GradeLab Pro - ${year}`;
document.getElementById('page-subtitle').textContent = `${semester === 'S1' ? 'Semester 1' : 'Semester 2'}`;

// Storage key prefix for this year/semester
const storagePrefix = `${year}_${semester}_`;

/* =====================
   BUILD TABLE
===================== */

modules.forEach((m, i) => {
    tbody.innerHTML += `
    <tr>
        <td>${m.name}</td>
        <td>${m.coef}</td>
        <td><input type="number" min="0" max="20" step="0.01" id="cc${i}" ${m.examOnly ? 'disabled' : ''}></td>
        <td><input type="number" min="0" max="20" step="0.01" id="exam${i}"></td>
        <td id="avg${i}">--</td>
    </tr>
    `;
});

/* =====================
   LOAD SAVED DATA
===================== */

window.onload = () => {
    modules.forEach((_, i) => {
        let cc = localStorage.getItem(storagePrefix + "cc" + i);
        let exam = localStorage.getItem(storagePrefix + "exam" + i);

        if(cc) document.getElementById("cc" + i).value = cc;
        if(exam) document.getElementById("exam" + i).value = exam;
    });

    calculate();
};

/* =====================
   AUTO CALC + SAVE
===================== */

document.addEventListener("input", e => {
    if(e.target.tagName === "INPUT"){
        const key = storagePrefix + e.target.id;
        localStorage.setItem(key, e.target.value);
        calculate();
    }
});

function calculate(){
    let total = 0;
    let coefSum = 0;

    modules.forEach((m, i) => {
        let cc = parseFloat(document.getElementById("cc" + i).value) || 0;
        let exam = parseFloat(document.getElementById("exam" + i).value) || 0;

        // If exam-only, average = exam mark only
        let avg = m.examOnly ? exam : (cc * 40 + exam * 60) / 100;

        let cell = document.getElementById("avg" + i);

        cell.innerText = avg ? avg.toFixed(2) : "--";
        cell.className = avg >= 10 ? "pass" : "fail";

        total += avg * m.coef;
        coefSum += m.coef;
    });

    let final = total / coefSum;

    const finalDiv = document.getElementById("final");

    finalDiv.innerText = "Final Grade — " + final.toFixed(2);
    finalDiv.className = "final " + (final >= 10 ? "pass" : "fail");
}

/* =====================
   NAVIGATION
===================== */

function goBack() {
    window.location.href = 'index.html';
}

/* =====================
   THEMES
===================== */

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    
    if (body.classList.contains('light')) {
        // Switch to dark
        body.classList.remove('light');
        themeIcon.textContent = '☀️';
        localStorage.setItem("theme", "dark");
    } else {
        // Switch to light
        body.classList.add('light');
        themeIcon.textContent = '🌙';
        localStorage.setItem("theme", "light");
    }
}

function setTheme(mode){
    const themeIcon = document.querySelector('.theme-icon');
    document.body.classList.remove("light");

    if(mode === "light") {
        document.body.classList.add("light");
        if(themeIcon) themeIcon.textContent = '🌙';
    } else {
        if(themeIcon) themeIcon.textContent = '☀️';
    }

    localStorage.setItem("theme", mode);
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if(savedTheme) setTheme(savedTheme);
else setTheme('dark'); // Default to dark theme