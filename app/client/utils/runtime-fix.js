/*
  Required to ensure redux-api-middleware works with babel-6
  see: https://github.com/agraboso/redux-api-middleware/issues/83
*/

const regeneratorRuntime = require('babel-runtime/regenerator')

if (!regeneratorRuntime.default) {
  regeneratorRuntime.default = regeneratorRuntime
}

export default regeneratorRuntime
