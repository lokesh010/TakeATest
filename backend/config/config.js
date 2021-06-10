require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

// {
//   "development": {
//     "username": "asura",
//     "password": "rootroot",
//     "database": "takeatest",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "asura",
//     "password": "rootroot",
//     "database": "takeatest",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "asura",
//     "password": "rootroot",
//     "database": "takeatest",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }