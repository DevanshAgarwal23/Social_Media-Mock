const express = require('express')

//const models = require('./db/models')
// const db = models.db
//alternative to above is destructing  syntax
const { db } = require('./db/models')
const { usersRoute} = require('./routes/users')
const { postsRoute} = require('./routes/posts')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', express.static(__dirname + '/public'))
app.use('/api/users' , usersRoute)
app.use('/api/posts' , postsRoute)


db.sync()
    .then(() => {
        app.listen(4444, ()=> console.log("Server Started at http://localhost:44444"))
    })
    .catch((err)=> {
        console.error(new Error('Couldnot Start database'))
        console.error(err)
    })
