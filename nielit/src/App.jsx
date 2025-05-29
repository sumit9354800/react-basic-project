import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";

const courses = {
  JavaScript: [
    { question: "React ka developer kaun hai?", options: ["Google", "Facebook", "Microsoft", "Amazon"], answer: "Facebook" },
    { question: "React me state kis hook se manage hoti hai?", options: ["useEffect", "useState", "useMemo", "useRef"], answer: "useState" },
    { question: "JavaScript ka full form kya hai?", options: ["JS", "ECMAScript", "JScript", "LiveScript"], answer: "ECMAScript" },
    { question: "JavaScript me async function ko kaise handle karte hain?", options: ["then/catch", "async/await", "try/catch", "All of the above"], answer: "All of the above" },
    { question: "React ka latest version kaunsa hai?", options: ["16", "17", "18", "19"], answer: "18" },
  ],
  Python: [
    { question: "Python ka creator kaun hai?", options: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"], answer: "Guido van Rossum" },
    { question: "Python me list ka index kaunsa hota hai?", options: ["1 se shuru hota hai", "0 se shuru hota hai", "-1 se shuru hota hai", "Random"], answer: "0 se shuru hota hai" },
  ],
};

function QuizApp() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(1800);

  useEffect(() => {
    if (selectedCourse && timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (selectedCourse && timer === 0) {
      setShowResult(true);
    }
  }, [timer, selectedCourse]);

  const handleAnswer = (option) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
  };

  const handleNext = () => {
    if (currentQuestion < courses[selectedCourse].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    let correct = 0;
    let incorrect = 0;
    courses[selectedCourse].forEach((q, index) => {
      if (answers[index] === q.answer) correct++;
      else incorrect++;
    });
    return [
      { name: "Correct", value: correct, color: "green" },
      { name: "Incorrect", value: incorrect, color: "red" },
    ];
  };

  return (
    <div className="container-fluid mt-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Quiz App</a>
        </div>
      </nav>

      {!selectedCourse ? (
        <div className="mt-4 text-center">
          <h2>Select a Quiz</h2>
          {Object.keys(courses).map((course) => (
            <button key={course} onClick={() => setSelectedCourse(course)} className="btn btn-primary m-2">
              {course} Quiz
            </button>
          ))}
        </div>
      ) : !showResult ? (
        <div className="card mt-4 p-4 shadow text-center">
          <h3 className="card-title">{courses[selectedCourse][currentQuestion].question}</h3>
          <h5 className="text-danger">Time Left: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')} min</h5>
          <div className="card-body">
            {courses[selectedCourse][currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`btn d-block mt-2 ${answers[currentQuestion] === option ? "btn-warning" : "btn-outline-secondary"}`}
              >
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleNext} className="btn btn-primary mt-3">Next</button>
        </div>
      ) : (
        <div className="card mt-4 p-4 shadow">
          <h3 className="card-title">Final Results</h3>
          <div className="card-body text-center">
            <PieChart width={300} height={300}>
              <Pie
                data={calculateResult()}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {calculateResult().map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
            <ul className="list-group mt-3">
              {courses[selectedCourse].map((q, index) => (
                <li key={index} className={`list-group-item ${answers[index] === q.answer ? "list-group-item-success" : "list-group-item-danger"}`}>
                  {q.question} - Your Answer: {answers[index] || "Not Answered"}
                </li>
              ))}
            </ul>
            <button onClick={() => { setSelectedCourse(null); setShowResult(false); setAnswers({}); setCurrentQuestion(0); setTimer(1800); }} className="btn btn-secondary mt-3">
              Go to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizApp