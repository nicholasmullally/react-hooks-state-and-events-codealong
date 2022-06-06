import React from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  function handleClick() {
    isOn = !isOn;
  }
  return <button onClick={handleClick}>{isOn ? "ON" : "OFF"</button>
}

export default Toggle;
