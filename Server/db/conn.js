const mongoose = require('mongoose')

const conn = () => {
    console.log(process.env.mongo_uri)



//     try{
//         mongoose.connect(process.env.mongo_uri);
//         mongoose.connection.once('open',
//         ()=>{
//             console.log('Connected to MongoDB')
//         })
//     } catch (err) {
//         console.error(`Something went wrong connecting with MongoDB ${err.message}`)
//     }
}

module.exports = conn;