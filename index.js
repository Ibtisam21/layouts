const express = require("express")
const ejsLayout = require("express-ejs-layouts")

const fs = require('fs');

const app = express()
app.use(ejsLayout)
app.set('view engine', 'ejs')

app.get("/", (req, res)=>{
    res.redirect('/dinasourse')
})


app.use("/dinasourse", require('./controllers/dinasourse.js'))

app.listen(3500, ()=>{
console.log(`yeah boi you can hear me 3500`)
})