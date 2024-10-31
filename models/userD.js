const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Geetdata')

const userSchema = mongoose.Schema({
    userID: String,
    name:String,
    address:String,
    pincode: Number,
    contact_number:Number,
    email: String,
    password: String,
    GST: String,
    total_complaints:Number,
    total_resolved:Number
    
})

module.exports = mongoose.model("usersD", userSchema)