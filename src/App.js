import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Start from './Pages/Start';
import { useDispatch, useSelector } from 'react-redux';
import { Auth } from './Store/modeReducer';


function App() {
  const auth = useSelector(state => state.mode.auth);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Start />} />
        <Route exact path="/home" element={auth ? <Home /> : <Start />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
