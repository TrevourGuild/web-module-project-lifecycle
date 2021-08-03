import React, { useState, useEffect } from "react";

const AppFunc = () => {
  console.log("AppFunc: Setup State");
  const [name, setName] = useState("Warren");
  
  useEffect(()=> {

  });

  const handleClick = () => {
    console.log("AppFunc: Change Our State");
    setName("Allison");
  };

  console.log("AppFunc: Render DOM");
  return (
    <div>
      <h1>Hello {name}!</h1>
  
      <button onClick={handleClick}>MAKE IT ALLISON!</button>
    </div>
  );
};

export default AppFunc;
