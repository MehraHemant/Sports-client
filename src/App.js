import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Start from './Pages/Start';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Start />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
