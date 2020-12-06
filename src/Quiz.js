import React from "react";
import "./css/Quiz.css";
import Counter from "./Counter";
import QuizQuestions from "./QuizQuestions";

const Quiz = () => {
  return (
    <div className="quiz">
      <div className="left_quiz">
        levo za sat
        <Counter />
      </div>
      <div className="right_quiz">
        desno za pitanja
        <QuizQuestions />
      </div>
    </div>
  );
};

export default Quiz;
