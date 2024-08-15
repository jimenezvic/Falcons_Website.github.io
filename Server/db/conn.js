const mongoose = require('mongoose')

const conn = () => {



    try{
        mongoose.connect(process.env.MONGO_URI);
        mongoose.connection.once('open',
        ()=>{
            console.log(process.env.MONGO_URI)
            console.log('Connected to MongoDB')
        })
    } catch (err) {
        console.error(`Something went wrong connecting with MongoDB ${err.message}`)
    }
}

module.exports = conn;