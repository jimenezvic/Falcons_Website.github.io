require('dotenv').config()
const express = require('express')
const app = express();
const PORT = process.env.PORT
const conn = require('./db/conn')
conn()
const falcsRoutes = require('./routes/falcs.js')
const bodyParser = require('body-parser')
const Falc = require('./models/falc');

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

const cors = require('cors');
app.use(cors())

app.use('/falcs', falcsRoutes)

app.get('/', (req,res)=>{
    res.send('Home')
})

app.use((req,res)=>{
    res.status(404).json({
        error:'404 not found'
    })
})

app.use((err,req,res,next)=>{
    res.status(500).json({
        error:'Something went wrong!'
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

