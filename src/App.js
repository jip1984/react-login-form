import React from "react";
import "./App.css";

let isLoggedIn = true;

function loggedIn() {
  if (isLoggedIn === true) {
    return <h1>Hello User</h1>
  }
}

function App() {
  return (
    <div className="container">

      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;

