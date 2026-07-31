import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../style/login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      alert("Login Successful!");

      navigate("/dashboard");
    } catch (err) {
      console.log("Full Error:", err);
      console.log("Response:", err.response);

      if (err.response) {
        console.log("Data:", err.response.data);
        alert(err.response.data.message);
      } else {
        alert(err.message);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>DevTrack Login</h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;