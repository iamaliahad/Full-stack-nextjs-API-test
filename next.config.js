/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGO_URI: "mongodb+srv://admin:admin@country.6tb1y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

  }
}

module.exports = nextConfig
