// Quiz Application Logic

// Global variables
let currentQuestions = [];
let userAnswers = {};
let studentInfo = {
    name: '',
    gender: ''
};

// Initialize the quiz when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadStudentInfo();
    initializeQuiz();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    document.getElementById('gradeBtn').addEventListener('click', gradeQuiz);
    document.getElementById('retakeBtn').addEventListener('click', retakeQuiz);
    document.getElementById('databaseLink').addEventListener('click', accessDatabase);
    document.getElementById('closeDatabaseBtn').addEventListener('click', closeDatabase);
    
    // Save student info when changed
    document.getElementById('studentName').addEventListener('input', saveStudentInfo);
    document.getElementById('studentGender').addEventListener('change', saveStudentInfo);
}

// Load student info from localStorage
function loadStudentInfo() {
    const savedInfo = localStorage.getItem('studentInfo');
    if (savedInfo) {
        studentInfo = JSON.parse(savedInfo);
        document.getElementById('studentName').value = studentInfo.name;
        document.getElementById('studentGender').value = studentInfo.gender;
    }
}

// Save student info to localStorage
function saveStudentInfo() {
    studentInfo.name = document.getElementById('studentName').value.trim();
    studentInfo.gender = document.getElementById('studentGender').value;
    localStorage.setItem('studentInfo', JSON.stringify(studentInfo));
}

// Initialize the quiz
function initializeQuiz() {
    // Update header with quiz data
    document.querySelector('.quiz-header h1').textContent = quizData.title;
    document.querySelector('.subtitle').textContent = quizData.subtitle;
    
    // Randomize questions
    currentQuestions = shuffleArray([...quizData.questions]);
    
    // Reset user answers
    userAnswers = {};
    
    // Display questions
    displayQuestions();
    
    // Show quiz container, hide results
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('resultsContainer').classList.add('hidden');
}

// Shuffle array function (Fisher-Yates algorithm)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Display all questions
function displayQuestions() {
    const quizContent = document.getElementById('quizContent');
    quizContent.innerHTML = '';
    
    currentQuestions.forEach((question, index) => {
        const questionBlock = createQuestionElement(question, index);
        quizContent.appendChild(questionBlock);
    });
}

// Detect question type (multiple choice or short answer)
function isMultipleChoice(question) {
    return question.options && Array.isArray(question.options) && question.options.length > 0;
}

// Create a question element
function createQuestionElement(question, index) {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-block';
    
    const questionNumber = document.createElement('span');
    questionNumber.className = 'question-number';
    questionNumber.textContent = `Question ${index + 1}`;
    
    const questionText = document.createElement('div');
    questionText.className = 'question-text';
    questionText.textContent = question.question;
    
    questionDiv.appendChild(questionNumber);
    questionDiv.appendChild(questionText);
    
    // Check if it's multiple choice or short answer
    if (isMultipleChoice(question)) {
        // Create multiple choice options
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';
        
        question.options.forEach((option, optionIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question${index}`;
            radio.value = optionIndex;
            radio.id = `q${index}_option${optionIndex}`;
            
            // Add change event listener
            radio.addEventListener('change', function() {
                userAnswers[index] = parseInt(this.value);
            });
            
            const label = document.createElement('label');
            label.htmlFor = `q${index}_option${optionIndex}`;
            label.textContent = option;
            
            optionDiv.appendChild(radio);
            optionDiv.appendChild(label);
            optionsDiv.appendChild(optionDiv);
        });
        
        questionDiv.appendChild(optionsDiv);
    } else {
        // Create short answer text input
        const inputDiv = document.createElement('div');
        inputDiv.className = 'answer-input';
        
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'text-answer';
        input.id = `answer${index}`;
        input.placeholder = 'Type your answer here...';
        
        // Add input event listener
        input.addEventListener('input', function() {
            userAnswers[index] = this.value.trim();
        });
        
        inputDiv.appendChild(input);
        questionDiv.appendChild(inputDiv);
    }
    
    return questionDiv;
}

// Grade the quiz
function gradeQuiz() {
    // Validate student info
    const name = document.getElementById('studentName').value.trim();
    const gender = document.getElementById('studentGender').value;
    
    if (!name) {
        alert('Please enter your full name before grading!');
        document.getElementById('studentName').focus();
        return;
    }
    
    if (!gender) {
        alert('Please select your gender before grading!');
        document.getElementById('studentGender').focus();
        return;
    }
    
    // Check if all questions are answered
    if (Object.keys(userAnswers).length < currentQuestions.length) {
        alert('Please answer all questions before grading!');
        return;
    }
    
    // Calculate score
    let correctCount = 0;
    const incorrectAnswers = [];
    const allAnswers = [];
    
    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        let isCorrect = false;
        let userAnswerText = '';
        let correctAnswerText = '';
        
        if (isMultipleChoice(question)) {
            // Multiple choice comparison
            const correctAnswer = question.correctAnswer;
            isCorrect = userAnswer === correctAnswer;
            userAnswerText = question.options[userAnswer];
            correctAnswerText = question.options[correctAnswer];
        } else {
            // Short answer comparison (case-insensitive)
            const userAnswerNormalized = (userAnswer || '').toLowerCase().trim();
            const correctAnswerNormalized = question.correctAnswer.toLowerCase().trim();
            isCorrect = userAnswerNormalized === correctAnswerNormalized;
            userAnswerText = userAnswer || '(No answer provided)';
            correctAnswerText = question.correctAnswer;
        }
        
        const answerDetail = {
            questionNumber: index + 1,
            question: question.question,
            userAnswer: userAnswerText,
            correctAnswer: correctAnswerText,
            isCorrect: isCorrect
        };
        
        allAnswers.push(answerDetail);
        
        if (isCorrect) {
            correctCount++;
        } else {
            incorrectAnswers.push({
                ...answerDetail,
                explanation: question.explanation
            });
        }
    });
    
    // Save submission to database
    saveSubmission(name, gender, correctCount, allAnswers);
    
    // Display results
    displayResults(correctCount, incorrectAnswers);
}

// Display results
function displayResults(correctCount, incorrectAnswers) {
    const totalQuestions = currentQuestions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    
    // Update score display
    document.getElementById('scoreText').textContent = `${correctCount}/${totalQuestions}`;
    document.getElementById('scorePercentage').textContent = `${percentage}%`;
    
    // Display incorrect answers
    const incorrectContainer = document.getElementById('incorrectAnswers');
    incorrectContainer.innerHTML = '';
    
    if (incorrectAnswers.length > 0) {
        const heading = document.createElement('h3');
        heading.textContent = 'Questions You Got Wrong';
        incorrectContainer.appendChild(heading);
        
        incorrectAnswers.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'incorrect-item';
            
            const questionDiv = document.createElement('div');
            questionDiv.className = 'incorrect-question';
            questionDiv.textContent = `Q${item.questionNumber}: ${item.question}`;
            
            const yourAnswerDiv = document.createElement('div');
            yourAnswerDiv.className = 'answer-detail your-answer';
            yourAnswerDiv.innerHTML = `<strong>Your Answer:</strong> ${item.userAnswer}`;
            
            const correctAnswerDiv = document.createElement('div');
            correctAnswerDiv.className = 'answer-detail correct-answer';
            correctAnswerDiv.innerHTML = `<strong>Correct Answer:</strong> ${item.correctAnswer}`;
            
            const explanationDiv = document.createElement('div');
            explanationDiv.className = 'explanation';
            explanationDiv.innerHTML = `<strong>Explanation:</strong> ${item.explanation}`;
            
            itemDiv.appendChild(questionDiv);
            itemDiv.appendChild(yourAnswerDiv);
            itemDiv.appendChild(correctAnswerDiv);
            itemDiv.appendChild(explanationDiv);
            
            incorrectContainer.appendChild(itemDiv);
        });
    } else {
        const perfectScore = document.createElement('div');
        perfectScore.style.textAlign = 'center';
        perfectScore.style.padding = '30px';
        perfectScore.innerHTML = `
            <h3 style="color: #48bb78; font-size: 1.8rem; margin-bottom: 10px;">🎉 Perfect Score!</h3>
            <p style="font-size: 1.2rem; color: #2d3748;">You answered all questions correctly!</p>
        `;
        incorrectContainer.appendChild(perfectScore);
    }
    
    // Hide quiz container, show results
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultsContainer').classList.remove('hidden');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Retake quiz
function retakeQuiz() {
    initializeQuiz();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Save submission to localStorage database
function saveSubmission(name, gender, score, answers) {
    const submissions = getSubmissions();
    
    const submission = {
        id: Date.now(),
        name: name,
        gender: gender,
        score: score,
        totalQuestions: currentQuestions.length,
        percentage: Math.round((score / currentQuestions.length) * 100),
        answers: answers,
        date: new Date().toLocaleString(),
        timestamp: Date.now()
    };
    
    submissions.push(submission);
    localStorage.setItem('quizSubmissions', JSON.stringify(submissions));
}

// Get all submissions from localStorage
function getSubmissions() {
    const data = localStorage.getItem('quizSubmissions');
    return data ? JSON.parse(data) : [];
}

// Access database with password
function accessDatabase(e) {
    e.preventDefault();
    
    const password = prompt('Enter password to access database:');
    
    if (password === 'accessquiz') {
        showDatabase();
    } else if (password !== null) {
        alert('Incorrect password!');
    }
}

// Show database
function showDatabase() {
    const submissions = getSubmissions();
    const databaseContent = document.getElementById('databaseContent');
    
    // Hide quiz and results, show database
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultsContainer').classList.add('hidden');
    document.getElementById('databaseContainer').classList.remove('hidden');
    
    if (submissions.length === 0) {
        databaseContent.innerHTML = '<p style="text-align: center; padding: 40px; color: #718096; font-size: 1.2rem;">No submissions yet.</p>';
        return;
    }
    
    // Sort submissions by date (newest first)
    submissions.sort((a, b) => b.timestamp - a.timestamp);
    
    databaseContent.innerHTML = '';
    
    submissions.forEach((submission, index) => {
        const card = document.createElement('div');
        card.className = 'submission-card';
        
        const header = document.createElement('div');
        header.className = 'submission-header';
        
        const studentInfo = document.createElement('div');
        studentInfo.className = 'student-info';
        studentInfo.innerHTML = `
            <div class="student-name">${submission.name}</div>
            <div class="student-details">Gender: ${submission.gender} | Submitted: ${submission.date}</div>
        `;
        
        const scoreDiv = document.createElement('div');
        scoreDiv.className = 'submission-score';
        scoreDiv.textContent = `${submission.score}/${submission.totalQuestions} (${submission.percentage}%)`;
        
        header.appendChild(studentInfo);
        header.appendChild(scoreDiv);
        
        const answersDiv = document.createElement('div');
        answersDiv.className = 'submission-answers';
        answersDiv.innerHTML = '<h4>Answers:</h4>';
        
        submission.answers.forEach(answer => {
            const answerItem = document.createElement('div');
            answerItem.className = `answer-item ${answer.isCorrect ? 'answer-correct' : 'answer-incorrect'}`;
            answerItem.innerHTML = `
                <strong>Q${answer.questionNumber}:</strong> ${answer.question}<br>
                <strong>Answer:</strong> ${answer.userAnswer} ${answer.isCorrect ? '✓' : '✗'}
                ${!answer.isCorrect ? `<br><strong>Correct:</strong> ${answer.correctAnswer}` : ''}
            `;
            answersDiv.appendChild(answerItem);
        });
        
        card.appendChild(header);
        card.appendChild(answersDiv);
        databaseContent.appendChild(card);
    });
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Close database
function closeDatabase() {
    document.getElementById('databaseContainer').classList.add('hidden');
    document.getElementById('quizContainer').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

