import React from "react";
import ReactCountdownClock from "react-countdown-clock";
import swal from "@sweetalert/with-react";
import "./css/Counter.css";

const Counter = ({ numberOfAnswers }) => {
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
        </div>
      ),
    }).then(function () {
      window.location = "redirectURL";
    });
  };

  return (
    <div className="clock_Counter">
      <ReactCountdownClock
        seconds={60}
        color="#000"
        alpha={0.9}
        size={300}
        onComplete={myCallback}
      />
    </div>
  );
};

export default Counter;
