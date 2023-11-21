import connect from "@/connectDB/connect"
import User from "@/model/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"


export const POST = async (request) => {
connect()

  try {
    const reqBody = await request.json()
    const { username, email, password } = reqBody
    //hashed password========================
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)

    //check if user already exist===========
    const isExit = await User.findOne({ email })
    if (isExit) {
      return NextResponse.json({ error: "user already exist" }, { status: 500 })
    }

    //create a new user
    
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    })
    const savedUser = await newUser.save()
    console.log("Saved user", savedUser)
    return NextResponse.json(
      { Message: "User created successful", savedUser },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
