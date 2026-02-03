/* =====================
   LANDING PAGE LOGIC
===================== */

function selectYear(year) {
    // Show semester section with animation
    const semesterSection = document.getElementById('semester-section');
    semesterSection.classList.remove('hidden');
    
    // Scroll to semester section smoothly
    setTimeout(() => {
        semesterSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function goToCalculator(year, semester) {
    // Navigate to calculator page
    window.location.href = `calculator.html?year=${year}&semester=${semester}`;
}

/* =====================
   THEME HANDLING
===================== */

function setTheme(mode){
    document.body.classList.remove("light");

    if(mode === "light")
        document.body.classList.add("light");

    localStorage.setItem("theme", mode);
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if(savedTheme) setTheme(savedTheme);