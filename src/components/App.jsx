import React from "react";

function App() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let now = `${hours}:${minutes}:${seconds}`;

  const [time, setTime] = React.useState(now);

  setInterval(updateTime, 1000);

  function updateTime() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let newTime = `${hours}:${minutes}:${seconds}`;
    return setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
