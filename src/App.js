import React from "react";
import "./App.css";
import Login from './Login';


let isLoggedIn = false;

function loggedIn() {
  if (isLoggedIn === true) {
    return <h1>Hello User</h1>
  } else {
    return (
      <Login />
    )

  }
}

function App() {
  return (
    <div className="container">

      {loggedIn()}
    </div>
  );
}

export default App;

