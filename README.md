# Quiz Application - README

## Overview
This is a modern, customizable quiz application built with HTML, CSS, and JavaScript. The quiz randomizes question order on each attempt and provides detailed feedback on incorrect answers.

## Files Included
- `index.html` - Main HTML structure
- `styles.css` - All styling and responsive design
- `script.js` - Quiz logic and functionality
- `questions.js` - Quiz questions and content (easily editable)

## How to Use
1. Open `index.html` in any modern web browser
2. **Enter your full name and select your gender** (this information is saved and persists across retakes)
3. Answer all 10 questions
4. Click "Grade Quiz" to see your score
5. Review detailed explanations for incorrect answers
6. Click "Take Quiz Again" to retake with randomized question order (your name and gender will remain filled)

## Database Access (Admin Only)
- At the bottom of the page, there's an "Access Database" link
- Click it and enter the password: **accessquiz**
- View all quiz submissions with:
  - Student name and gender
  - Score and percentage
  - All answers (correct and incorrect)
  - Submission date and time
- Submissions are stored in the browser's localStorage
- Students cannot access the database without the password

## Features
- ✅ Student information (name and gender) required before grading
- ✅ Student info persists across quiz retakes
- ✅ All submissions are stored in a local database
- ✅ Password-protected database access (password: "accessquiz")
- ✅ Detailed submission history with answers
- ✅ Auto-detects multiple choice vs short answer questions
- ✅ Randomizes question order on each attempt

## Customizing the Quiz

### The quiz automatically detects question type based on the structure in questions.js!

### For Multiple Choice Questions:
Include an `options` array and set `correctAnswer` as an index (0-3):

```javascript
{
    question: "What is the correct way to create a function in Python?",
    options: [
        "function myFunction():",
        "def myFunction():",
        "create myFunction():",
        "func myFunction():"
    ],
    correctAnswer: 1,  // Index 1 = "def myFunction():"
    explanation: "In Python, functions are defined using the 'def' keyword."
}
```

### For Short Answer Questions:
Remove the `options` array and set `correctAnswer` as a string:

```javascript
{
    question: "What keyword is used to define a function in Python?",
    correctAnswer: "def",  // Direct string answer
    explanation: "The 'def' keyword is used to define functions in Python."
}
```

### Mixing Question Types:
You can mix both types in the same quiz! The application automatically detects and displays the appropriate input format for each question:

```javascript
const quizData = {
    title: "Mixed Format Quiz",
    subtitle: "Answer both multiple choice and short answer questions",
    questions: [
        {
            // Multiple choice
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            correctAnswer: 1,
            explanation: "2 + 2 equals 4"
        },
        {
            // Short answer
            question: "What is the capital of France?",
            correctAnswer: "Paris",
            explanation: "Paris is the capital city of France"
        }
        // ... more questions
    ]
};
```

**Note:** Short answers are case-insensitive, so "Paris", "paris", and "PARIS" are all accepted.

### Changing Quiz Topic (e.g., from Python to Math)
Edit the `questions.js` file:

1. **Update the title and subtitle:**
```javascript
const quizData = {
    title: "Mathematics Quiz",  // Change this
    subtitle: "Test your math skills with 10 questions",  // Change this
    questions: [
        // ... questions
    ]
};
```

2. **Replace the questions array with your new questions**

### Adding or Removing Questions
In `questions.js`, simply add or remove question objects from the `questions` array:

```javascript
{
    question: "Your question text here?",
    options: [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
    ],
    correctAnswer: 0,  // Index of correct option (0-3)
    explanation: "Explanation of why this is correct"
}
```

**Note:** The application automatically adapts to any number of questions. The subtitle shows the total count dynamically.

### Question Format Guidelines

**For Multiple Choice:**
- **question**: The question text (string)
- **options**: Array of 4 answer choices (strings)
- **correctAnswer**: Index of the correct option (0 = first option, 1 = second, etc.)
- **explanation**: Detailed explanation shown when answer is incorrect (string)

**For Short Answer:**
- **question**: The question text (string)
- **correctAnswer**: The correct answer as a string (case-insensitive)
- **explanation**: Detailed explanation shown when answer is incorrect (string)
- **DO NOT include** the `options` array

The system automatically detects which format you're using based on whether `options` exists!

## Example: Converting to a Math Quiz

```javascript
const quizData = {
    title: "Mathematics Quiz",
    subtitle: "Test your math knowledge with 10 questions",
    questions: [
        {
            question: "What is 15% of 200?",
            options: [
                "25",
                "30",
                "35",
                "40"
            ],
            correctAnswer: 1,
            explanation: "15% of 200 = 0.15 × 200 = 30"
        },
        {
            question: "What is the value of π (pi) approximately?",
            options: [
                "3.14",
                "2.71",
                "1.61",
                "4.13"
            ],
            correctAnswer: 0,
            explanation: "Pi (π) is approximately 3.14159, commonly rounded to 3.14"
        }
        // Add 8 more questions...
    ]
};
```

## Customizing Appearance

### Colors
Edit `styles.css` to change the color scheme. Main colors are in:
- `.quiz-header` - Header gradient background
- `.btn-primary` - Grade button colors
- `.btn-secondary` - Retake button colors
- `.score-circle` - Score display circle

### Fonts
Change the font-family in the `body` selector in `styles.css`

### Layout
Adjust `max-width` in `.container` to make the quiz wider or narrower

## Browser Compatibility
Works in all modern browsers:
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile responsive design included

## Important Notes
### Data Storage
- All quiz submissions are stored in the browser's **localStorage**
- Data is stored locally on the computer where the quiz is taken
- If you clear browser data/cache, submissions will be deleted
- Each browser/device has its own separate database
- For permanent storage across devices, you would need a backend server

### Student Information
- Name and gender are saved automatically when entered
- This information persists even when retaking the quiz
- The same name/gender will be pre-filled on subsequent visits
- Students can change their info before each submission

### Database Password
- Default password: **accessquiz**
- To change the password, edit line 236 in `script.js`:
  ```javascript
  if (password === 'accessquiz') {  // Change 'accessquiz' to your password
  ```

## No Server Required
This is a pure front-end application. No server or database needed. Just open `index.html` in a browser.

## Tips
- Keep questions concise and clear
- Provide helpful explanations for learning
- Test your quiz after making changes
- Use 4 options per question for consistency
- Make sure correctAnswer index matches your intended answer

## Support
For issues or questions, review the code comments in `script.js` for detailed functionality explanations.
