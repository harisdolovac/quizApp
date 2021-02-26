import React, { useState, useEffect } from "react";
import axios from "axios";

import "./css/Quiz.css";
import Counter from "./Counter";

const QuizQuestions = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [numberOfAnswers, setnumberOfAnswers] = useState(0);
  const [numberOfWrongAnswers, setnumberOfWrongAnswers] = useState(0);

  useEffect(() => {
    axios.get("http://jservice.io/api/random").then((res) =>
      res.data.map((item) => {
        return (
          <div key={item.id}>
            {setQuestion((prevState) => (prevState = item.question))}
            {setCorrectAnswer((prevState) => (prevState = item.answer))}
          </div>
        );
      })
    );
  }, [numberOfWrongAnswers, numberOfAnswers]);

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    answer.toUpperCase() === correctAnswer.toUpperCase()
      ? setnumberOfAnswers((prevState) => prevState + 1)
      : setnumberOfWrongAnswers((prevState) => prevState + 1);

    setAnswer("");
  };

  return (
    <div>
      <div className="quiz">
        <div className="left_quiz">
          <Counter
            numberOfAnswers={numberOfAnswers}
            numberOfWrongAnswers={numberOfWrongAnswers}
          />
        </div>
        <div className="right_quiz">
          {question === "" ? (
            <h1>Press submit answer,there is no data from server</h1>
          ) : (
            <h2>{question}</h2>
          )}

          <h2 style={{ margin: "30px 0" }}>Your answer is:</h2>
          <form onSubmit={handleSubmitForm}>
            <input type="text" value={answer} onChange={handleAnswer} />
            <button type="submit">Submit answer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestions;
