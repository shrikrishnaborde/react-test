import React, { useState } from 'react';

function Toggle() {
  // Declare a state variable 'isOn' and a function 'setIsOn' to update it
  const [isOn, setIsOn] = useState(false);

  // Function to toggle the state
  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <h1>The switch is {isOn ? 'ON' : 'OFF'}</h1>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default Toggle; 