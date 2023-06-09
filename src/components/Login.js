import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notes3 from "../assets/notes3.avif";

const Login = (props) => {
  const HEIGHT = window.innerHeight;
  const WIDTH = window.innerWidth;
  const [loading, setLoading] = useState(false);

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("https://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      setLoading(false);
      localStorage.setItem("token", json.token);
      navigate("/");
    } else {
      alert("Invalid credentials");
      setLoading(false);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  console.log(HEIGHT);

  return (
    <div
      className=" py-5"
      style={{
        height: `${HEIGHT - 0.075 * HEIGHT}px`,
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "black",
        backgroundImage: `url(${Notes3}) `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        alignItems: "center",
      }}
    >
      {loading ? (
        <div
          class="spinner-border text-danger"
          style={{ width: "500px", height: "500px", borderWidth: "20px" }}
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
              gap: "30px",
              fontWeight: "800",
            }}
          >
            {/* <img
          src={Notes1}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            // objectFit: "cover",
            borderRadius: "10px",
          }}
        /> */}
            <h2
              style={{
                textAlign: "center",
                fontWeight: "800",
                textShadow: "2px 2px 8px grey",
              }}
            >
              Capture, Organize, and Secure Your Thoughts
            </h2>
            <h2
              style={{
                textAlign: "center",
                fontWeight: "800",
                textShadow: "2px 2px 8px grey",
              }}
            >
              Keep Your Ideas Safe
            </h2>
            <h2
              style={{
                textAlign: "center",
                fontWeight: "800",
                textShadow: "2px 2px 8px grey",
              }}
            >
              Unlock Your Creativity
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            style={{
              minWidth: "20%",
              borderRadius: "10px",
              boxShadow: "11px 20px 15px grey",
              padding: "4%",
              border: "0.01px solid",
              // backgroundColor: "#c5ece9",
              backgroundColor: "#f0967e",
            }}
          >
            <h3 className="text-center">User Login</h3>
            <div className="mt-4">
              <label for="email" className="form-label">
                Email ID
              </label>
              <input
                placeholder="Email ID"
                type="email"
                className="form-control mt-2"
                value={credentials.email}
                onChange={onChange}
                id="email"
                name="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mt-4">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                placeholder="Password"
                type="password"
                className="form-control mt-2"
                value={credentials.password}
                onChange={onChange}
                name="password"
                id="password"
              />
            </div>

            <button
              type="submit"
              className="btn w-100 mt-5"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Login
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
