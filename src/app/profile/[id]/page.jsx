// ProfilePage.jsx

"use client"
import { useRouter } from "next/navigation"
import React from "react"
import toast, { Toaster } from "react-hot-toast"
const user = {
  username: "JohnDoe",
  email: "john.doe@example.com",
}
const { username, email } = user
const notify = () => toast("User Logout successful")
const UserPage = () => {
const router = useRouter()

  const handleLogOut = async () => {
    console.log("Hitted")
    const res = await fetch("/api/logout",{
      cache:'no-cache'
    })
    const data = await res.json()
    console.log(data)
    if(data.success){
      notify()
      router.push('/login')

    }
  }


  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <Toaster></Toaster>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Profile</h1>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Username
          </label>
          <p className="text-gray-800">{username}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Email
          </label>
          <p className="text-gray-800">{email}</p>
        </div>
        <div>
          <button
            onClick={() => handleLogOut()}
            className="text-black hover:text-red-800"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserPage
