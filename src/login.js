import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function signInHandler() {
    setMessage("Loading...");
    if (email.trim() === "" || password.trim() === "") {
      setTimeout(() => {
        setMessage("Please enter both email and password.");
      }, 3000);
    } else if (email === "vishal@gmail.com" && password === "vishal@123") {
      setTimeout(() => {
        setMessage("Successfully logged in.");
      }, 3000);
    } else {
      setTimeout(() => {
        setMessage("Incorrect email or password.");
      }, 3000);
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      signInHandler();
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyPress={handleKeyPress}
      />{" "}
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyPress={handleKeyPress}
      />{" "}
      <br />
      <button onClick={signInHandler}>Sign in</button>
      {message && <p>{message}</p>}
    </div>
  );
}
