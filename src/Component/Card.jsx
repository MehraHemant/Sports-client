import React from 'react'

function Card(props) {
  return (
    <div className="w-64 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
      <a href="/" className='h-8 overflow-y-hidden'>
        <img className="rounded-t-lg h-48 w-full object-cover" src={props.img} alt="" />
      </a>
      <div className="p-4">
        <a href="/" className=''>
          <h5 className="mb-2 text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 from-5% via-fuchsia-600 to-fuchsia-600">{props.name}</h5>
        </a>
        <p className="mb-3 font-normal  text-gray-900 dark:text-white">{props.about}</p>
        <a href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 group">
          Search
          <div className='ms-2 group-hover:animate-bounceright'><ion-icon name="caret-forward"></ion-icon></div>
        </a>
      </div>
    </div>

  )
}

export default Card