# 🎓 GradeLab Pro

A modern grade calculator web application designed specifically for **Computer Science students** to track and calculate their academic performance across different years and semesters.

## ✨ Features

- **Multi-Year Support**: Currently supports L3 (with L1 and L2 coming soon)
- **Semester Selection**: Separate calculations for Semester 1 and Semester 2
- **Smart Grade Calculation**: Automatically calculates weighted averages based on CC (Continuous Control) and Exam marks
- **Flexible Module Support**: Handles both CC+Exam modules and exam-only modules
- **Coefficient Weighting**: Accurately weights grades based on module coefficients
- **Real-time Calculation**: Instant grade updates as you type
- **Data Persistence**: Automatically saves your grades for each semester separately using browser localStorage
- **Dark/Light Theme**: Toggle between beautiful dark and light themes
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Visual Feedback**: Color-coded pass/fail indicators for easy reading

## 🚀 Live Demo

[Live Demo](#) *(Add your GitHub Pages link here after deployment)*

## 🎯 Currently Available

### L3 (Third Year)
#### Semester 1
- Operating Systems 2
- Compilation
- Software Engineering
- HMI (Human-Machine Interface)
- Linear Programming
- Probability
- Digital Economy (Exam only)

#### Semester 2
- Mobile Applications
- Computer Security
- Artificial Intelligence
- Semi-Structured Data
- Project
- Scientific Writing
- Creating and Developing a Startup

### Coming Soon
- **L1** (First Year) - Both semesters
- **L2** (Second Year) - Both semesters

## 📋 How It Works

### Grade Calculation Formula

For standard modules:
```
Module Average = (CC × 40% + Exam × 60%)
```

For exam-only modules (like Digital Economy, Professional English):
```
Module Average = Exam mark
```

Final grade:
```
Final Grade = Σ(Module Average × Coefficient) / Σ(Coefficients)
```

### Passing Grade
- **Pass**: ≥ 10.00 (Green)
- **Fail**: < 10.00 (Red)

## 🛠️ Installation & Usage

### Option 1: Direct Use (Recommended)
1. Download all files from this repository
2. Open `index.html` in your web browser
3. Select your year (currently only L3 available)
4. Select your semester (S1 or S2)
5. Start entering your grades!

### Option 2: Clone Repository
```bash
git clone https://github.com/X-hor/GradeLab-Pro.git
cd GradeLab-Pro
```

Then open `index.html` in your browser.

### Option 3: GitHub Pages
1. Fork this repository
2. Go to Settings → Pages
3. Select main branch as source
4. Your calculator will be live at `https://X-hor.github.io/GradeLab-Pro`

## 📁 Project Structure

```
GradeLab-Pro/
│
├── index.html          # Landing page with year/semester selection
├── calculator.html     # Calculator page
├── styles.css          # All styling and themes
├── landing.js          # Landing page logic
├── calculator.js       # Calculator logic and module data
└── README.md           # Project documentation
```

## 🎨 Customization

### Adding Modules to Existing Semesters

Edit the `modulesData` object in `calculator.js`:

```javascript
const modulesData = {
    L3: {
        S1: [
            {name:"Your Module Name", coef:3, examOnly:false},
            // Add more modules here
        ],
        S2: [
            {name:"Another Module", coef:2, examOnly:true},
            // Add more modules here
        ]
    }
};
```

**Parameters:**
- `name`: Module name (string)
- `coef`: Coefficient/weight (number)
- `examOnly`: Set to `true` if module only has exam mark (boolean)

### Adding New Years (L1, L2)

Add new entries to the `modulesData` object:

```javascript
const modulesData = {
    L1: {
        S1: [ /* modules here */ ],
        S2: [ /* modules here */ ]
    },
    L2: {
        S1: [ /* modules here */ ],
        S2: [ /* modules here */ ]
    },
    L3: {
        // existing L3 data
    }
};
```

Then update the landing page (`index.html`) to enable the buttons:

```html
<!-- Change from disabled to active -->
<button class="year-btn active" onclick="selectYear('L1')">
    <span class="year-label">L1</span>
    <span class="status-badge available">Available</span>
</button>
```

### Changing Grade Formula

Modify the calculation logic in `calculator.js`:

```javascript
// Current: CC 40% + Exam 60%
let avg = m.examOnly ? exam : (cc * 40 + exam * 60) / 100;

// Example: CC 30% + Exam 70%
let avg = m.examOnly ? exam : (cc * 30 + exam * 70) / 100;
```

### Customizing Colors

Edit CSS variables in `styles.css`:

```css
:root{
    --bg:#0b1020;           /* Background */
    --primary:#7c5cff;      /* Primary color */
    --success:#22c55e;      /* Pass color */
    --fail:#ef4444;         /* Fail color */
}
```

## 💾 Data Storage

GradeLab Pro uses browser `localStorage` to save:
- All entered grades (CC and Exam marks) - stored separately for each year and semester
- Theme preference (dark/light)

**Storage Format**: `{YEAR}_{SEMESTER}_{field}{index}`

Example: `L3_S1_cc0`, `L3_S2_exam3`

**Note:** Data is stored locally in your browser and never sent to any server.

## 🌐 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 📱 Mobile Support

Fully responsive design optimized for:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

## 🚀 Roadmap

- [x] L3 Semester 1 & 2
- [ ] L1 Semester 1 & 2
- [ ] L2 Semester 1 & 2
- [ ] Export grades to PDF
- [ ] Grade statistics and charts
- [ ] GPA calculation
- [ ] Year-end average calculation
- [ ] Grade history tracking

## 👨‍💻 Author

**Your Name**
- GitHub: [@X-hor](https://github.com/X-hor)
- University: [Université de Médéa]
- Program: Computer Science

## ⭐ Show Your Support

Give a ⭐️ if this project helped you track your grades!

---

**Made with ❤️ by CS student, for students**