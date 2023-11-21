const mongoose = require("mongoose")

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please provide user name"],
    
  },
  email: {
    type: String,
    required: [true, "please provide user email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provide user password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
})

// Create the User model
const User = mongoose.models.User || mongoose.model("User", userSchema)

module.exports = User
