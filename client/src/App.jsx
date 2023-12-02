import Register from "./components/Register";
import Login from "./components/login";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path={"/signup"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
