import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


function Signup() {
  const [outline, setOutline] = useState('')
  const navigate = useNavigate();

  const layout = {
    email: "",
    password: "",
    confirmPassword: ""
  }

  const [data, setData] = useState(layout)

  // Regex for password validation
  var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  // SweetAlert for some pop-ups
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  useEffect(() => {
    (strongRegex.test(data.password)) ? setOutline('focus:ring-green-500') : setOutline('focus:ring-red-500');
  }, [data.password])


  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });

  }

  const postSignUp = () => {
    fetch(`https://sport-server-i5oo.onrender.com/createuser`, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': 'true',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: data.email.toLowerCase(), password: data.password })
    })
      .then((res) => {
        return res.status;

      })
      .then((data) => {
        if (data == 409) {
          Toast.fire({
            icon: 'error',
            title: 'Email Already exists',
          })
        } else {
          Toast.fire({
            icon: 'success',
            title: 'Signed up Successful'
          })
          setData(layout);
        }
      })

  }


  const handleSubmit = (e) => {
    e.preventDefault();
    postSignUp();
  }


  return (
    <section>
      <div className="pt-14 flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen dark:bg-gray-900 lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" onChange={handleChange} value={data.email} required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-1 outline-none block w-full p-2.5 dark:bg-gray-700 ${outline} dark:border-gray-600 dark:placeholder-gray-400 dark:text-white `} onChange={handleChange} value={data.password} required />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <input type="confirmPassword" name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} value={data.confirmPassword} required />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-blue-600 hover:underline dark:text-blue-500" href="/">Terms and Conditions</a></label>
                </div>
              </div>
              <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <Link to="/login" className="font-medium hover:underline dark:text-blue-500 text-blue-800">Login here</Link>
              </p>
            </form>
          </div>
        </div>
        <button className="absolute right-8 top-6 font-bold text-3xl dark:text-white" onClick={()=>navigate(-1)}>X</button>
      </div>
    </section>
  )
}

export default Signup