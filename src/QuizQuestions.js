import React, { useState, useEffect } from "react";
import axios from "axios";

const QuizQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [numberOfAnswers, setnumberOfAnswers] = useState(0);

  // console.log("corranswer", correctAnswer);

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
            {setQuestions((prevState) => [...prevState, item])}
            {setCorrectAnswer(item.answer)}
            {setAnswer("")}
            {answer.toUpperCase() === correctAnswer.toUpperCase()
              ? setnumberOfAnswers((prevState) => prevState + 1)
              : console.log("nije tacan odg")}
          </div>
        );
      })
    );

  //   console.log("pitanja", answer);

  return (
    <div>
      <h2>{question}</h2>
      <h2>
        Your answer is:
        <form onSubmit={handleSubmitForm}>
          <input type="text" value={answer} onChange={handleAnswer} />
          <button onClick={handleAxios} type="submit">
            Submit answer
          </button>
        </form>
      </h2>

      <h3>Tacan odgovor je : {correctAnswer}</h3>

      <h1>Number of correct Answers: {numberOfAnswers}</h1>
    </div>
  );
};

export default QuizQuestions;