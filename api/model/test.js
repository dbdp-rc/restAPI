const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name: String,
    roll_no: Number 
});

module.exports= mongoose.model('Student',testSchema);