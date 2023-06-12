import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Start from './Pages/Start';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';


function App() {
  const [auth, setAuth] = useState(false);
  const checkCookie = async () => {
    const token = Cookies.get('token');
    if (token !== undefined || token !== '') {
      try {
        fetch('http://localhost:4000/getuser', { method: 'POST', mode: 'cors', headers: { "jwt-token": token } })
          .then(res => res.json())
          .then(data => {
            if (data._id !== undefined) {
              setAuth(true);
            }
            else {
              setAuth(false);
            }
          });
      }
      catch (err) {
        setAuth(false);
      }
    }
  }

  useEffect(() => {
    checkCookie();
  }, [auth]);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Start />} />

        {/* how to change the endpoint when auth is false I've change the element */}
        <Route exact path="/home" element={(auth)?<Home />:<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>

    </Router>
  );
}

export default App;
