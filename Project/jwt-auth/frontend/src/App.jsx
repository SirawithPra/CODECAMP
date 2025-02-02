// src/App.jsx
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
