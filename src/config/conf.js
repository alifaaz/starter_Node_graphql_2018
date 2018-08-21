require('dotenv').config();

module.exports = {

  env: process.env.NODE_ENV,

  mongo: { uri: process.env.NODE_ENV === 'development' ? process.env.MONGO_URI_TEST : process.env.MONGO_URI },

  logs: process.env.NODE_ENV === 'development' ? 'dev' : 'combined',

  jwt_scret: process.env.JWT_SECRET,

  jwtInterval: process.env.JWT_INTERVAL_MIN,

  port: process.env.PORT,
};
