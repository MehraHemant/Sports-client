import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {

    const [theme, setTheme] = useState((localStorage.getItem('theme')===null)?'light':localStorage.getItem('theme'));
    const [sticky, setSticky] = useState(false);
    const [width, setWidth] = useState((theme==='light')?'left-0':'left-11');

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    window.addEventListener("scroll", handleScroll);
    
    const element = document.documentElement;
 
    const setThemeInStorage = (theme) => {
        localStorage.setItem('theme', theme)
     }
    const navdata = {
        logo: 'SPORTYPHY',
        buttons: ['Buy & Sell', 'Rooms']
    }

    const mode = [{
        icon: "sunny",
        text: "light"
    },
    { icon: "moon", text: "dark" }
    ]

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                break;
                case 'light':
                element.classList.remove('dark');
                break;
            default:
                break;
        }
    }, [theme]);

    const handleClick = () => {
        (theme === 'light')?setWidth('left-11'):setWidth('left-0');
    }
    return (
        <div className= {(sticky)?'sticky top-0 left-0 dark:bg-gray-800 bg-gray-300':'sticky top-0 left-0 bg-transparent dark:bg-gray-900'}>
            <nav className={`flex w-full justify-between px-3 items-center h-14 border-b-2 shadow-md`}>
                <div className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-400 font-bold text-lg sm:text-xl'><Link to="/home">{navdata.logo}</Link></div>
                <div className='flex sm:space-x-7 space-x-4'>
                    {navdata.buttons.map((items, index) => {
                        return <div key={index} className='text-white bg-gradient-to-r from-green-400 to-violet-500 hover:animate-pulse text-sm px-2 sm:px-4 py-1 sm:py-2 rounded-2xl cursor-pointer font-semibold transition-all'>{items}</div>
                    })}
                    <div className='sm:flex justify-between w-20 shadow-slate-400 shadow-[inset_0px_0px_4px_0px] rounded-3xl items-center relative hidden cursor-pointer overflow-hidden transition-all select-none'>
                        <span className={`absolute bg-gray-400 transition-all w-8 h-8 px-2.5 mx-0.5 duration-300 rounded-3xl ${width}`}></span>
                        {mode.map(item =>
                            <button key={item.text} className={`${(theme === item.text) ? 'text-blue-500' : 'text-black dark:text-white'} h-full px-2.5 flex items-center`} onClick={() => { handleClick(); setTheme(item.text); setThemeInStorage(item.text) }}><ion-icon name={item.icon}></ion-icon></button>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar