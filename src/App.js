import React from "react";
import "./App.css";

let isLoggedIn = false;

function loggedIn() {
  if (isLoggedIn === true) {
    return <h1>Hello User</h1>
  } else {
    return (
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
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

