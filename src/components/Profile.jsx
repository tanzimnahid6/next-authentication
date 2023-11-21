// ProfilePage.jsx

// ProfilesGrid.jsx

import Link from "next/link"
import React from "react"

const ProfilesGrid = ({ users }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-gray-200 h-screen">
      {users.map((user) => (
        <Link key={user.id} href={"/profile/id"}>
          <div className="bg-white rounded-lg shadow-md h-24 hover:scale-105 transition-transform p-4">
            <h1 className="text-xl font-bold text-gray-800 mb-2">
              {user.username}
            </h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProfilesGrid
