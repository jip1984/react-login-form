import React from "react";
import "./App.css";
import Login from './Login';


let isLoggedIn = false;


function App() {
  return (
    <div className="container">

      { isLoggedIn ? <h1>Hello User</h1> : <Login />}
    </div>
  );
}

export default App;

