const config = () => {
  return process.env.NODE_ENV === 'dev' ? {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true
  } : {
    // add deployment url link/s of the app front-end below
    // to allow requests from them
    origin: [
      'http://localhost:5173',
      'http://localhost:8989',
    ],
    methods: ['GET', 'POST'],
    credentials: true
  }
}



module.exports = config