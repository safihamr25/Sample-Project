express = require('express')
var app = express()

var bodyparser = require('body-parser')
parseform = bodyparser.urlencoded({ extended: false })

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('mainhome')
})

app.use('/student',require('./routers/studentRouter'))

app.listen(8082, (err) => {
    if (err) throw err;
    console.log('started successfully..hurray!!!')
})