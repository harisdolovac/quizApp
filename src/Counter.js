import React from "react";
import ReactCountdownClock from "react-countdown-clock";
import swal from "@sweetalert/with-react";

const Counter = ({ numberOfAnswers }) => {
  const myCallback = () => {
    return swal({
      text: "How was your experience getting help with this issue?",
      buttons: {
        cancel: "Close",
      },
      content: (
        <div>
          <h1>You have finished the Quiz</h1>
          <h2>Number of correct Answers: {numberOfAnswers}</h2>
        </div>
      ),
    });
  };

  return (
    <div>
      <ReactCountdownClock
        seconds={0.2}
        color="#000"
        alpha={0.9}
        size={300}
        onComplete={myCallback}
      />
    </div>
  );
};

export default Counter;
