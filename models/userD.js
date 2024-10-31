const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://geetsahu1852005:80UfZp6Pf3pzqNQ9@sihcluster.1zgai.mongodb.net/?retryWrites=true&w=majority&appName=SIHCluster')
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

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