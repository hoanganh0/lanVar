const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  orders: {
    type: Array,
    require: true
  }
})

const Account = mongoose.model('users', accountSchema);

module.exports = Account;