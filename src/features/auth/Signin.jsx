import "./auth.css";
import medintelLogo from "../../assets/medintel_logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in the fields");
      return;
    }

    // Pull saved user data from local storage
    const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (!registeredUsers) {
      alert("No account found with this email. Please sign up first.");
    }

    // Compare inputs against the saved data
    const user = registeredUsers.find(
      (registeredUser) =>
        formData.email.toLowerCase() === registeredUser.email.toLowerCase() &&
        formData.password === registeredUser.password,
    );
    const userSession = {
      email: formData.email,
      loggedIn: true,
    };

    // Success! Save the active session
    localStorage.setItem("userSession", JSON.stringify(userSession));
    alert("You are successfully signed in.");

    if (!user) {
      setError("Wrong email or password");
      return;
    }

    setError("");
    navigate("/MedIntel");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="pageContainer">
      <main className="modal">
        <img src={medintelLogo} alt="MedIntel logo" width={250} />

        <div className="heading">
          <h2>Sign In</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              className="passwordInput"
              type="password"
              name="password"
              placeholder="* * * * * *"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <small className="errorMessage">{error}</small>}

          <button className="signinBtn" type="submit">
            Sign In
          </button>
        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/Signup" className="signupLink">
            Sign Up
          </Link>
        </p>
      </main>
    </div>
  );
};

export default Signin;
