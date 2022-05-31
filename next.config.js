/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  distDir: 'build',
}

const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()
