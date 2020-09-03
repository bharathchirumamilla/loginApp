const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//const db = require('./db')
const userRouter = require('./routes/user-router')

const app = express()
const apiPort = 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

//db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post('/api/login', (req, res) =>  {
    
    var response = {
        userName: req.body.email,
        password: req.body.password
    };
    if(req.body.email === 'test@gmail.com' && req.body.password === 'test1234'){
        res.send({status: 200, login: true, data : { userName: response.userName, password: response.password}});
    }
    else{
        res.send({status: 200, login: false, data: undefined});
    }
})

//app.use('/api/login', userRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
