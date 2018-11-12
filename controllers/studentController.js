module.exports.check = (req, res) => {
    res.send(`The entered data is ${req.body.uname} and ${req.body.pwd}...`)
}