module.exports = {
  env: {
      backend_url: process.env.NODE_ENV === 'development' ?
          'http://localhost:5000/' :
          'http://localhost:5000/'
  }
}
