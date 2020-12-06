import React from "react";
import ReactCountdownClock from "react-countdown-clock";

const Counter = () => {
  return (
    <div>
      <ReactCountdownClock
        seconds={60}
        color="#000"
        alpha={0.9}
        size={300}
        // onComplete={myCallback}
      />
    </div>
  );
};

export default Counter;
