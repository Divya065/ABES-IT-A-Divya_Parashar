import React from 'react'

function Navigation() {
  return (
    <div className="flex items-center gap-6 px-6 py-3 bg-white shadow-md">
      
      <li className="list-none">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjARCJCWRg9eGVx8Rax_MEVjk7D1s-URGfJw&s"
          alt="logo"
          className="w-30 h-20 rounded-full"
        />
      </li>

      <li className="list-none text-lg font-semibold text-gray-700 cursor-pointer hover:text-blue-600 transition">
        Home
      </li>

    </div>
  )
}

export default Navigation