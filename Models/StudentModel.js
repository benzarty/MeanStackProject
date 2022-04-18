const mongoose = require('mongoose');
const crypto=require('crypto')

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
   
  },
  lastname: {
    type: String,
   
  },
  city: {
    type: String,
    reuired: true,
  },
  email: {
    type: String,
   
    unique: true,
  },
  password: {
    type: String,
   
  },
  Role: {
    type: String,
   
  },
  typeuser: {
    type: String,
    enum:["Premium","Normal"],
    default:"Normal",
  },
  imageUrl: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  birthday: {
    type: Date,
    default: Date.now,
  }

})




module.exports = User = mongoose.model('user', UserSchema);