import "./auth.css";
import medintelLogo from "../../assets/medintel_logo.png";
import { ArrowLeft } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validate = (data) => {
    const errorMessage = {};

    if (data.name.trim().length < 2) {
      errorMessage.name = "Name must be atleast 2 letters";
    } else if (data.name.trim().split(" ").length < 2) {
      errorMessage.name = "Enter first and last name";
    }

    if (!data.email.toLowerCase().trim().includes("@")) {
      errorMessage.email = "Enter a valid email";
    }

    if (
      data.password.length < 6 ||
      !/\d/.test(data.password) ||
      !/[!@#$%^&*(){}?<>|]/
    ) {
      errorMessage.password =
        "Must be at least 8 characters, including a number and a symbol";
    }

    if (data.confirmPassword !== data.password) {
      errorMessage.confirmPassword = "Password does not match";
    }

    if (Object.keys(errorMessage).length > 0) {
      setError(errorMessage);
      return;
    }
  };

  const newUser = {
    name: formData.name,
    email: formData.email,
    password: formData.password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    validate(formData);
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="pageContainer">
      <Link className="returnBtn" to="/">
        <ArrowLeft width={18} /> Back
      </Link>

      <main className="modal">
        <img src={medintelLogo} alt="MedIntel logo" width={250} />

        <div className="heading">
          <h2>Sign Up</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            {error && <small className="errorMessage">{error.name}</small>}
          </div>

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

            {error && <small className="errorMessage">{error.email}</small>}
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

            {error && <small className="errorMessage">{error.password}</small>}
          </div>

          <div className="field">
            <label htmlFor="password">Confirm Password</label>
            <input
              className="passwordInput"
              type="password"
              name="confirmPassword"
              placeholder="* * * * * *"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            {error && (
              <small className="errorMessage">{error.confirmPassword}</small>
            )}
          </div>

          <button className="signupBtn" type="submit">
            Sign Up
          </button>
        </form>
      </main>
    </div>
  );
};

export default Signup;
