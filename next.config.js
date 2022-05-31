/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  target: 'serverless',
}

const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()
