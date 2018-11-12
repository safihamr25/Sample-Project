var app = express.Router()

app.get('/', (req, res) => {
    res.send("Student home page")
})

app.get('/login', (req, res) => {
    res.render('student/home')
})

var controller = require('../controllers/studentController')

app.post('/check', parseform, (req, res, next) => {
    console.log('middleare')
    next()
}, controller.check)

module.exports = app