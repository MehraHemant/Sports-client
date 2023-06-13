import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Start from './Pages/Start';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { Auth } from './Store/modeReducer';


function App() {
  const auth = useSelector((state) => state.mode.auth);
  const dispatch = useDispatch();
  
  const checkCookie = async () => {
    const token = Cookies.get('token');
    if (token !== undefined && token !== '') {
      try {
        fetch(`https://sport-server-i5oo.onrender.com/getuser`, { method: 'POST', mode: 'cors', headers: { "jwt-token": token } })
          .then(res => {
            return res.json();
          })
          .then(data => {
            if (data._id !== undefined) {
              dispatch(Auth(true));
              // window.location.href = '/home';
            }
          })
      }
      catch (err) {
        console.error(err);
      }
    }
  }

  useEffect(() => {
    checkCookie();
  }, [auth])

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Start />} />
        {/* how to change the endpoint when auth is false I've change the element */}
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>

    </Router>
  );
}

export default App;
