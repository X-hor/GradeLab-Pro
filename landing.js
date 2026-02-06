/* =====================
   LANDING PAGE LOGIC
===================== */

let selectedYear = null;

function selectYear(year, el) {
    selectedYear = year;
    
    // Update year buttons styling
    const yearButtons = document.querySelectorAll('.year-btn.active');
    yearButtons.forEach(btn => {
        btn.style.transform = '';
        btn.style.boxShadow = '';
    });
    
    // Highlight selected year
    el.style.transform = 'translateY(-5px)';
    el.style.boxShadow = '0 10px 30px rgba(124, 92, 255, 0.3)';
    
    // Show semester section with animation
    const semesterSection = document.getElementById('semester-section');
    
    // Update semester buttons to use selected year
    const semesterButtons = semesterSection.querySelectorAll('.semester-btn');
    semesterButtons[0].onclick = () => goToCalculator(year, 'S1');
    semesterButtons[1].onclick = () => goToCalculator(year, 'S2');
    
    semesterSection.classList.remove('hidden');
    
    // Scroll to semester section smoothly
    setTimeout(() => {
        semesterSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function goToCalculator(year, semester) {
    if (!year) {
        alert("Select a year first");
        return;
    }
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