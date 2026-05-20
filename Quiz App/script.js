// ════════════════════════════════
//  QUESTIONS — easy to edit!
//  ans: 0=A, 1=B, 2=C, 3=D
// ════════════════════════════════

const COURSES = {

  csc204: {
    code: 'CSC 204',
    name: 'System Analysis and Design',
    questions: [
      { q: "What is a system?", opts: ["A single hardware component", "An organized collection of components working together toward a goal", "Only software programs", "A network connection"], ans: 1 },
      { q: "Which of the following is NOT a component of a system?", opts: ["Inputs", "Processes", "Outputs", "Marketing"], ans: 3 },
      { q: "What is the purpose of feedback in a system?", opts: ["Produce outputs", "Provide information for adjustments", "Define boundaries", "Store data"], ans: 1 },
      { q: "Open systems are characterized by:", opts: ["No interaction with the environment", "Interaction with the environment", "Being sealed completely", "No boundaries"], ans: 1 },
      { q: "Which is a component of an Information System?", opts: ["Hardware, Software, Data, People, Processes, Networks", "Hardware only", "Data only", "Networks only"], ans: 0 },
      { q: "What is the first phase of the SDLC?", opts: ["Analysis", "Planning", "Design", "Testing"], ans: 1 },
      { q: "The Analysis phase of SDLC mainly involves:", opts: ["Coding the system", "Gathering and analyzing requirements", "Deploying the system", "Bug fixing"], ans: 1 },
      { q: "Which SDLC model is linear and sequential?", opts: ["Agile", "Spiral", "Waterfall", "Iterative"], ans: 2 },
      { q: "A weakness of the Waterfall Model is:", opts: ["Too flexible", "Difficult to accommodate changes", "No planning phase", "Suitable only for large projects"], ans: 1 },
      { q: "The V-Model is:", opts: ["An extension of Waterfall with testing phases", "A purely iterative model", "Focused only on risk analysis", "A model without testing"], ans: 0 },
      { q: "Which SDLC model combines iterative development with risk assessment?", opts: ["Waterfall", "Agile", "Spiral", "DevOps"], ans: 2 },
      { q: "Agile Model emphasizes:", opts: ["Rigid planning", "Flexibility and collaboration", "Documentation only", "Sequential phases only"], ans: 1 },
      { q: "DevOps mainly integrates:", opts: ["Development and Operations", "Planning and Testing", "Design and Deployment", "Analysis and Maintenance"], ans: 0 },
      { q: "A System Analyst acts as a bridge between:", opts: ["Hardware and Software", "Business problems and technology solutions", "Developers and testers only", "Networks and databases"], ans: 1 },
      { q: "Which is NOT a technical skill of a System Analyst?", opts: ["Programming Languages", "Database Management", "Cooking", "UML/ERD Tools"], ans: 2 },
      { q: "Which type of analyst focuses on business needs and IT solutions?", opts: ["Technical System Analyst", "Business System Analyst", "Infrastructure Analyst", "Data Analyst"], ans: 1 },
      { q: "Requirements gathering belongs to which SDLC phase?", opts: ["Deployment", "Planning", "Analysis", "Maintenance"], ans: 2 },
      { q: "Interviews are useful because they:", opts: ["Collect anonymous data only", "Allow in-depth exploration and clarification", "Are always fast", "Avoid interaction"], ans: 1 },
      { q: "A major merit of questionnaires is:", opts: ["Time-consuming for groups", "Efficient for large groups of stakeholders", "Immediate clarification", "100% response rate guaranteed"], ans: 1 },
      { q: "Requirements Analysis involves:", opts: ["Coding only", "Clarifying and prioritizing requirements", "Deployment only", "Hardware purchase"], ans: 1 },
      { q: "Functional requirements describe:", opts: ["System security and performance", "What the system should do", "Hardware specifications", "Budget constraints"], ans: 1 },
      { q: "A Data Flow Diagram (DFD) shows:", opts: ["Database tables", "Flow of data in a system", "User interface layout", "Project timeline"], ans: 1 },
      { q: "In DFDs, a circle represents:", opts: ["Data Store", "Process", "External Entity", "Data Flow"], ans: 1 },
      { q: "An ERD is mainly used for:", opts: ["Data flow modeling", "Database design", "UI design", "Testing plans"], ans: 1 },
      { q: "Cardinality in ERDs refers to:", opts: ["Color of entities", "Number of occurrences in relationships", "Database name", "Primary key only"], ans: 1 },
      { q: "A Use Case Diagram shows:", opts: ["Internal code structure", "Interactions between users and the system", "Network topology", "Data normalization"], ans: 1 },
      { q: "In Use Case Diagrams, actors can be:", opts: ["Humans only", "Users or external systems", "Administrators only", "Database tables"], ans: 1 },
      { q: "Activity Diagrams are used to model:", opts: ["Static structures", "Workflow and sequence of activities", "User roles only", "Networks"], ans: 1 },
      { q: "Which diagram is best for workflows with parallel activities?", opts: ["ERD", "Use Case Diagram", "Activity Diagram", "Gantt Chart"], ans: 2 },
      { q: "One importance of Requirements Analysis is:", opts: ["Increasing ambiguity", "Aligning with stakeholder needs and guiding design", "Avoiding all changes", "Reducing stakeholder involvement"], ans: 1 },
    ]
  },

  sen264: {
    code: 'SEN 264',
    name: 'Software Engineering',
    questions: [
      { q: "Software Engineering is best defined as:", opts: ["Writing code quickly", "Application of engineering principles to software development", "Only testing software", "Managing hardware"], ans: 1 },
      { q: "Which is NOT a phase of the Software Development Life Cycle?", opts: ["Requirements", "Design", "Marketing", "Testing"], ans: 2 },
      { q: "A software process model is:", opts: ["A programming language", "An abstract representation of a software development process", "A testing tool", "A deployment server"], ans: 1 },
      { q: "The Waterfall model is best suited for:", opts: ["Projects with changing requirements", "Well-understood, stable requirements", "Rapid prototyping", "Continuous deployment"], ans: 1 },
      { q: "Prototyping in software engineering means:", opts: ["Writing final code", "Building a preliminary version to gather feedback", "Deploying the system", "Documenting requirements"], ans: 1 },
      { q: "What does RAD stand for?", opts: ["Rapid Application Development", "Random Access Design", "Reusable Application Data", "Remote Access Deployment"], ans: 0 },
      { q: "Agile development focuses on:", opts: ["Heavy documentation", "Iterative development and customer collaboration", "One-time delivery", "Fixed plans only"], ans: 1 },
      { q: "Scrum is a framework under:", opts: ["Waterfall", "Agile", "V-Model", "Spiral"], ans: 1 },
      { q: "A Sprint in Scrum is:", opts: ["A testing tool", "A time-boxed iteration of development", "A type of software bug", "A deployment strategy"], ans: 1 },
      { q: "Extreme Programming (XP) emphasizes:", opts: ["Minimal testing", "Pair programming and continuous feedback", "Waterfall phases", "No documentation"], ans: 1 },
      { q: "Software requirements are classified as:", opts: ["Functional and Non-functional", "Hardware and Software", "Input and Output", "Local and Remote"], ans: 0 },
      { q: "Non-functional requirements describe:", opts: ["What the system does", "System qualities like performance and security", "User interface only", "Database schema"], ans: 1 },
      { q: "A use case describes:", opts: ["Internal code logic", "An interaction between a user and the system", "Hardware specs", "Network topology"], ans: 1 },
      { q: "UML stands for:", opts: ["Unified Modeling Language", "Universal Machine Logic", "Unified Management Layer", "User Modeling Library"], ans: 0 },
      { q: "Which UML diagram shows system behaviour over time?", opts: ["Class Diagram", "Sequence Diagram", "ERD", "DFD"], ans: 1 },
      { q: "Software design is concerned with:", opts: ["Writing test cases", "Transforming requirements into a blueprint for implementation", "Deploying code", "Managing teams"], ans: 1 },
      { q: "Cohesion in software design refers to:", opts: ["How modules are connected", "How focused a module is on a single task", "Number of lines of code", "Database relationships"], ans: 1 },
      { q: "Coupling in software design refers to:", opts: ["Module focus", "Degree of dependency between modules", "Code length", "UI design"], ans: 1 },
      { q: "Low coupling and high cohesion are considered:", opts: ["Bad practices", "Good design principles", "Irrelevant to design", "Only for databases"], ans: 1 },
      { q: "Software testing aims to:", opts: ["Add features", "Find defects and verify the system meets requirements", "Write documentation", "Deploy the system"], ans: 1 },
      { q: "Unit testing tests:", opts: ["The entire system", "Individual components or functions", "Network connections", "User interface only"], ans: 1 },
      { q: "Integration testing tests:", opts: ["Single functions", "Combined components working together", "Database only", "End users"], ans: 1 },
      { q: "Black-box testing focuses on:", opts: ["Internal code structure", "System behaviour without knowing internal code", "Database testing", "Hardware testing"], ans: 1 },
      { q: "White-box testing focuses on:", opts: ["System output only", "Internal structure and logic of the code", "User experience", "Network performance"], ans: 1 },
      { q: "Software maintenance includes:", opts: ["Only fixing bugs", "Correcting, adapting, and enhancing software after deployment", "Initial development only", "Writing new requirements"], ans: 1 },
      { q: "Which type of maintenance adapts software to new environments?", opts: ["Corrective", "Adaptive", "Perfective", "Preventive"], ans: 1 },
      { q: "Software quality is measured by:", opts: ["Lines of code", "Attributes like reliability, usability, and efficiency", "Number of developers", "Cost of development"], ans: 1 },
      { q: "Version control systems are used to:", opts: ["Design interfaces", "Track and manage changes to code", "Test applications", "Deploy servers"], ans: 1 },
      { q: "Risk management in software projects involves:", opts: ["Ignoring uncertainties", "Identifying, assessing, and mitigating risks", "Only budgeting", "Hiring more developers"], ans: 1 },
      { q: "A software project manager is responsible for:", opts: ["Writing all the code", "Planning, monitoring, and controlling the project", "Designing the database", "Testing only"], ans: 1 },
    ]
  }

};

// ════════════════════════════════
//  STATE
// ════════════════════════════════
let currentCourse = null;
let studentName   = '';
let answers       = [];   // stores selected index or null
let currentQ      = 0;

// ════════════════════════════════
//  NAVIGATION
// ════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function goHome() {
  showScreen('landing');
}

function startQuiz(courseKey) {
  currentCourse = courseKey;
  showScreen('name-screen');
  document.getElementById('student-name').value = '';
  setTimeout(() => document.getElementById('student-name').focus(), 200);
}

function proceedToQuiz() {
  const name = document.getElementById('student-name').value.trim();
  if (!name) { document.getElementById('student-name').focus(); return; }
  studentName = name;
  const total = COURSES[currentCourse].questions.length;
  answers = new Array(total).fill(null);
  currentQ = 0;
  buildQuizScreen();
  showScreen('quiz-screen');
}

// ════════════════════════════════
//  QUIZ LOGIC
// ════════════════════════════════
function buildQuizScreen() {
  const course = COURSES[currentCourse];
  document.getElementById('quiz-course-tag').textContent = course.code;
  document.getElementById('q-total').textContent = course.questions.length;
  renderQuestion();
}

function renderQuestion() {
  const course = COURSES[currentCourse];
  const q = course.questions[currentQ];
  const total = course.questions.length;
  const labels = ['A', 'B', 'C', 'D'];

  document.getElementById('q-current').textContent = currentQ + 1;
  document.getElementById('q-num-label').textContent = 'Question ' + (currentQ + 1);
  document.getElementById('q-text').textContent = q.q;
  document.getElementById('progress-fill').style.width = ((currentQ + 1) / total * 100) + '%';

  const list = document.getElementById('options-list');
  list.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn' + (answers[currentQ] === i ? ' selected' : '');
    btn.innerHTML = `<span class="option-letter">${labels[i]}</span><span>${opt}</span>`;
    btn.onclick = () => selectOption(i);
    list.appendChild(btn);
  });

  document.getElementById('prev-btn').disabled = currentQ === 0;
  const isLast = currentQ === total - 1;
  const nextBtn = document.getElementById('next-btn');
  nextBtn.textContent = isLast ? 'Submit Quiz' : 'Next';
}

function selectOption(idx) {
  answers[currentQ] = idx;
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', i === idx);
  });
}

function nextQuestion() {
  const total = COURSES[currentCourse].questions.length;
  if (currentQ < total - 1) {
    currentQ++;
    renderQuestion();
  } else {
    showResults();
  }
}

function prevQuestion() {
  if (currentQ > 0) {
    currentQ--;
    renderQuestion();
  }
}

// ════════════════════════════════
//  RESULTS
// ════════════════════════════════
function showResults() {
  const course = COURSES[currentCourse];
  const qs = course.questions;
  const labels = ['A', 'B', 'C', 'D'];
  let correct = 0;

  qs.forEach((q, i) => {
    if (answers[i] === q.ans) correct++;
  });

  const pct = Math.round((correct / qs.length) * 100);

  document.getElementById('r-name').textContent = studentName;
  document.getElementById('r-score').textContent = correct + '/' + qs.length;
  document.getElementById('r-pct').textContent = pct + '% correct — ' + course.code;

  const verdict = document.getElementById('r-verdict');
  if (pct >= 70) {
    verdict.textContent = 'Pass'; verdict.className = 'results-verdict verdict-pass';
  } else if (pct >= 50) {
    verdict.textContent = 'Average'; verdict.className = 'results-verdict verdict-good';
  } else {
    verdict.textContent = 'Fail'; verdict.className = 'results-verdict verdict-fail';
  }

  const sheet = document.getElementById('scoresheet');
  sheet.innerHTML = '';
  qs.forEach((q, i) => {
    const userAns = answers[i];
    const isCorrect = userAns === q.ans;
    const isSkipped = userAns === null;

    const row = document.createElement('div');
    row.className = 'score-row ' + (isSkipped ? 'skipped-row' : isCorrect ? 'correct-row' : 'wrong-row');

    const yourText = isSkipped ? 'Not answered' : labels[userAns] + ') ' + q.opts[userAns];
    const correctText = labels[q.ans] + ') ' + q.opts[q.ans];
    const statusText = isSkipped ? 'Skipped' : isCorrect ? 'Correct' : 'Wrong';
    const statusClass = isSkipped ? 'status-skipped' : isCorrect ? 'status-correct' : 'status-wrong';

    row.innerHTML = `
      <div class="row-num">${i + 1}</div>
      <div class="row-q">
        <div>${q.q}</div>
        <div style="font-size:0.78rem;color:var(--muted);margin-top:4px;">
          ${isCorrect || isSkipped ? '' : '<span style="color:var(--green)">Correct: ' + correctText + '</span>'}
        </div>
      </div>
      <div class="row-your">${yourText}</div>
      <div class="row-status ${statusClass}">${statusText}</div>
    `;
    sheet.appendChild(row);
  });

  document.getElementById('retake-btn').onclick = retakeQuiz;
  showScreen('results-screen');
}

function retakeQuiz() {
  const total = COURSES[currentCourse].questions.length;
  answers = new Array(total).fill(null);
  currentQ = 0;
  buildQuizScreen();
  showScreen('quiz-screen');
}

// Enter key on name input
document.getElementById('student-name').addEventListener('keydown', e => {
  if (e.key === 'Enter') proceedToQuiz();
});