import "./App.css";
import OpeningPage from "./components/LandingPage/OpenningPage/OpeningPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authentication from "./components/LandingPage/userLoginReg/Authentication";
import NavBar from "./components/LandingPage/NavBar/NavBar";
import HomePage from './components/LandingPage/HomePage/HomePage'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavBar /> */}
        <Routes>
          <Route exact path="/" element={<OpeningPage />} />
          <Route exact path="/login" element={<Authentication />} />
          <Route exact path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
