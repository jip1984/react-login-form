import React from "react";
import "./App.css";
import Login from './Login';
import Register from './Register';


//chnage the state of user register 
let userIsRegistered = true;


function App() {
  return (
    <div className="container">
      {userIsRegistered ? <Login /> : <Register />}
    </div>
  );
}

export default App;

