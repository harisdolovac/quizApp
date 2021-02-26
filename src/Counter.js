import React from "react";
import ReactCountdownClock from "react-countdown-clock";
import swal from "@sweetalert/with-react";

const Counter = ({ numberOfAnswers, numberOfWrongAnswers }) => {
  const myCallback = () => {
    return swal({
      icon: "success",
      buttons: {
        cancel: "Start Quiz Again",
      },
      content: (
        <div>
          <h1>You have finished the Quiz</h1>
          <h2>Number of correct Answers: {numberOfAnswers}</h2>
          <h2>Number of wrong Answers: {numberOfWrongAnswers}</h2>
        </div>
      ),
    }).then(function () {
      window.location = "redirectURL";
    });
  };

  return (
    <div style={{ alignItems: "center" }}>
      <ReactCountdownClock
        seconds={30}
        color="#000"
        alpha={0.9}
        size={300}
        onComplete={myCallback}
      />
    </div>
  );
};

export default Counter;
