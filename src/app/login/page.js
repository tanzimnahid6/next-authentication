"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"

const LoginForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch("api/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "content-type": "application/json",
      },
    })
    const data = await res.json()

    console.log("Form submitted:", formData)
    console.log("response data", data)
    if (data.success) {
      router.push(`/profile/${3}`)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-200">
      <form
        className="bg-white p-8 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Sign Up</h1>
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
          Do not have account ? !
          <Link href={"/signUp"}>
            <span className="text-blue-500">Sign up</span>
          </Link>
        </p>
      </form>
    </div>
  )
}

export default LoginForm
