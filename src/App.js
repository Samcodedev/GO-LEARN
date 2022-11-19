import React, { useState } from "react";
import './App.css'
import Component from "./Component/Component";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log('Login status: ', isLoggedIn);
  return(
    <div className="app">
      <Component setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
    </div>
  )
}

export default App;