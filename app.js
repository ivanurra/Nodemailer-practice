
const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('hbs')
const nodemailer = require('nodemailer')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

//Configuración de hbs
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')




app.get('/', (req, res, next) =>{
  res.render('home')
})


app.post('/send-email', (req, res, next) => {

    const {email, subject, message} = req.body
   const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: '',
      pass: ""
    }
  })
  transporter.sendMail({
    from: '',
    to: 'email',
    subject: 'subject',
    text: 'message'
  })
  .then((result)=>{
    console.log(result)
  })
  .catch((err)=>{
    console.log(err)
  })
  });

  app.listen(3000)