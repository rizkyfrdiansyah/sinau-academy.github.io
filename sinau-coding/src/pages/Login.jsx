import React from "react";
import "../App";

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" value={""} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={""} />
        </div>
        <button type="button">Login</button>
      </form>
    </div>
  );
}

export default Login;
