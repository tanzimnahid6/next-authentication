import mongoose from "mongoose"


const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  )
}

let cachedConnection = global.mongoose

if (!cachedConnection) {
  cachedConnection = global.mongoose = { conn: null, promise: null }
}

async function connect() {
  if (cachedConnection.conn) {
    return cachedConnection.conn
  }

  if (!cachedConnection.promise) {
    cachedConnection.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongoose) => {
        return mongoose
      })
  }
  cachedConnection.conn = await cachedConnection.promise
  return cachedConnection.conn
}

export default connect