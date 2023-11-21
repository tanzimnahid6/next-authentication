import { NextResponse } from "next/server"

export const GET = async () => {
    console.log('Hatted==========================')
  try {
    const response = NextResponse.json({
      Message: "Log out successfully",
      success: true,
    })
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) })
    return response
  } catch (error) {
    return NextResponse.json({ error: "Log is out successfully" })
  }
}
