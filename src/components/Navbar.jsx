// Navbar.jsx

import Link from "next/link"
import React from "react"

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-lg">My Website</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
          </li>
          <li>
            <Link href="/signUp" className="text-white hover:text-gray-300">
              Signup
            </Link>
          </li>
          <li>
            <Link href="/profile" className="text-white hover:text-gray-300">
              Profile
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
