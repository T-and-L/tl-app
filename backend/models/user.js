const mongoose = require('mongoose');


const uniqueValidator = require('mongoose-unique-validator');


const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  }
});

// userSchema.set('autoIndex', false);
userSchema.plugin(uniqueValidator);


module.exports = mongoose.model('User', userSchema);

