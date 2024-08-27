const mongoose = require('mongoose')

const falcSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: String,
        require: true
    },
    gender:{
        type: String,
    },
    address:{
        type: String,
    },
    number:{
        type:String,
    },
    position:{
        type:String,
        required:true
    },
    falconID:{
        type:String
    }
})
const Falc = mongoose.model('Falc', falcSchema);

module.exports = Falc;
