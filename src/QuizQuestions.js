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
          <>
            {setQuestion(item.question)}
            {setCorrectAnswer(item.answer)}
          </>
        );
      })
    );
  }, []);

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  const handleAxios = () =>
    axios.get("http://jservice.io/api/random").then((res) =>
      res.data.map((item) => {
        return (
          <div>
            {setQuestion(item.question)}

            {setCorrectAnswer(item.answer)}
            {setAnswer("")}
            {answer.toUpperCase() === correctAnswer.toUpperCase()
              ? setnumberOfAnswers((prevState) => prevState + 1)
              : setnumberOfWrongAnswers((prevState) => prevState + 1)}
          </div>
        );
      })
    );

  //   console.log("pitanja", answer);

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
          <h2>{question}</h2>
          <h2 style={{ margin: "30px 0" }}>Your answer is:</h2>
          <form onSubmit={handleSubmitForm}>
            <input type="text" value={answer} onChange={handleAnswer} />
            <button onClick={handleAxios} type="submit">
              Submit answer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestions;
