import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const HEIGHT = window.innerHeight;
  return (
    <>
      <>
        <Router>
          <div>
            <Navbar />
            <div className="">
              <Routes>
                <Route exact path="/" Component={Home} />
                <Route exact path="/about" Component={About} />
                <Route exact path="/login" Component={Login} />
                <Route exact path="/signup" Component={Signup} />
              </Routes>
            </div>
          </div>
        </Router>
      </>
    </>
  );
}

export default App;
