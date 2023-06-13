import React, { useEffect, useState } from 'react'
import Card from '../Component/Card'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Component/Navbar'
import Cookies from 'js-cookie';


function Home() {
    const navigate = useNavigate();

    const [data, setData] = useState([])
    const [tags, setTags] = useState([])

    const handleClick = () => {
        const confirm = window.confirm('Do you want to logout ?')
        if (confirm) { Cookies.remove('token'); navigate('/') }
    }
    useEffect(() => {
        fetch('https://sport-server-i5oo.onrender.com/sports', { mode: 'cors', headers: { 'Access-Control-Allow-Origin': 'true', 'Content-Type': 'application/json' } })
            .then((response) => response.json())
            .then(data => { setTags(data); setData(data); });
    }, [])

    const handleKeyup = (event) => {
        event.preventDefault();
        let value = event.target.value;
        if (value.length > 0) {
            fetch('https://sport-server-i5oo.onrender.com/sports', { mode: 'cors' })
                .then((response) => response.json())
                .then(data => {
                    const result = data.filter(name => { return name.sport.toLowerCase().includes(value.toLowerCase()) })
                    setData(result);
                })
        }
        else {
            fetch('https://sport-server-i5oo.onrender.com/sports', { mode: 'cors' })
                .then((response) => response.json())
                .then(data => setData(data));
        }
    }

    return (
        <div className='min-h-screen dark:bg-gray-900'>
            <Navbar />
            <div className='flex justify-center mt-8'>
                <input type="text" name="search" id="search" className='w-3/5 md:w-1/2 px-4 py-2 bg-gray-100 dark:bg-gray-600 dark:text-white rounded-3xl ring-1 ring-black outline-none focus:ring-1 focus:ring-blue-400 focus:border-none' onKeyUp={handleKeyup} placeholder='Search for sports...' />
            </div>
            <div className='flex justify-center mt-8 space-x-4 flex-wrap'>
                {tags.map((item, index) => {
                    return <button key={index} className='dark:text-white m-2 border border-gray-600 min-w-[90px] p-2 rounded-2xl font-semibold transition-all duration-300 hover:bg-purple-600  hover:shadow-lg hover:shadow-purple-800' onClick={(e) => setData(tags.filter((data) => data.sport.includes(item.sport)))}>{item.sport[0].toUpperCase() + item.sport.slice(1)}</button>
                })}
            </div>
            <div className='flex flex-wrap justify-center mt-10'>
                {data.map((item, index) => {
                    return <Card key={index} name={item.sport[0].toUpperCase() + item.sport.slice(1)} about={item.about_game.slice(0, 130) + '...'} img={item.img} />
                }
                )}
            </div>
            <button className=' bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 focus:shadow-none transition-all duration-200 shadow-md shadow-gray-400 hover:dark:text-gray-300 hover:dark:bg-gray-700 dark:text-black dark:bg-gray-200 px-4 py-2 rounded-lg fixed bottom-8 right-8 ' onClick={handleClick}>Logout</button>


        </div>
    )
}

export default Home