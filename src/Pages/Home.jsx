import React from 'react'
import Card from '../Component/Card'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Component/Navbar'
import Cookies from 'js-cookie';


function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        const confirm = window.confirm('Do you want to logout ?')
        if (confirm) { Cookies.remove('token'); navigate('/') }
    }


    const category = ['All', 'Cricket', 'Football', 'Basketball', 'Vollyball', 'Badminton']
    const img = {
        All: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/athletes-1867185_1280.jpg',
        Cricket: 'https://cdn.pixabay.com/photo/2020/01/27/05/42/ball-4796461_1280.jpg',
        Football: 'https://cdn.pixabay.com/photo/2018/06/12/20/17/soccer-3471402_1280.jpg',
        Basketball: 'https://cdn.pixabay.com/photo/2021/11/02/19/32/basketball-6763978_640.jpg',
        Vollyball: 'https://cdn.pixabay.com/photo/2014/11/06/23/41/volleyball-520083_640.jpg',
        Badminton: 'https://cdn.pixabay.com/photo/2016/05/31/23/21/badminton-1428046_1280.jpg',
    }
    
    return (
        <div className='min-h-screen dark:bg-gray-900'>
            <Navbar />
            <div className='flex justify-center mt-8'>
                <input type="text" name="search" id="search" className='w-3/5 md:w-1/2 px-4 py-2 bg-gray-100 dark:bg-gray-600 dark:text-white rounded-3xl ring-1 ring-black outline-none focus:ring-1 focus:ring-blue-400 focus:border-none' placeholder='search for users' />
            </div>
            <div className='flex justify-center mt-8 space-x-4 flex-wrap'>
                {category.map((item, index) => {
                    return <button key={index} className='dark:text-white m-2 border border-gray-600 min-w-[90px] p-2 rounded-2xl font-semibold transition-all duration-300 hover:bg-purple-600  hover:shadow-lg hover:shadow-purple-800'>{item}</button>
                })}
            </div>
            <div className='flex flex-wrap justify-center mt-10'>
                {category.map((item, index) => { return <Card key={index} name={item} img={img[item]} /> })}
            </div>
            <button className=' bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-800 focus:shadow-none transition-all duration-200 shadow-md shadow-gray-400 hover:dark:text-gray-300 hover:dark:bg-gray-700 dark:text-black dark:bg-gray-200 px-4 py-2 rounded-lg fixed bottom-8 right-8 ' onClick={handleClick}>Logout</button>
        </div>
    )
}

export default Home