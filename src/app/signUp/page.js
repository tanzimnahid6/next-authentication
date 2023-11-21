"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

import toast, { Toaster } from "react-hot-toast"
const notify = () => toast("User created successful")

const SignupForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    username: "Nahid",
    email: "",
    password: "12345",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log("Form submitted:", formData)
    const res = await fetch("api/signup", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "content-type": "application/json",
      },
    })
    const data = await res.json()
    if (data.savedUser) {
      notify()
      router.push("/login")
    }
    console.log("response data=====", data)
  }

  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-200">
      <Toaster></Toaster>
      <form
        className="bg-white p-8 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Sign Up</h1>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
        <p className="mt-2 text-center font-bold">
          All ready sign up!
          <Link href={"/login"}>
            <span className="text-blue-500">Login</span>
          </Link>
        </p>
      </form>
    </div>
  )
}

export default SignupForm
