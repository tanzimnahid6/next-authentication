import connect from "@/connectDB/connect"
import User from "@/model/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
export const POST = async (request) => {
  connect()
  try {
    const reqBody = await request.json()

    const { email, password } = reqBody

    // Check if user already exists
    const user = await User.findOne({ email })

    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      )
    }

    // Check password
    const validPassword = await bcryptjs.compare(password, user.password)

    if (!validPassword) {
      return NextResponse.json({ error: "Incorrect password" }, { status: 400 })
    }
    //configure jwt=========================
    const token = jwt.sign(reqBody, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    })
    const response = NextResponse.json({
      Message: "Login successful",
      success: true,
    })
    response.cookies.set("token", token, { httpOnly: true }) //response er moddhe cookies dhukiya dilam,ar cookies er moddhe data and token ase
    return response
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
