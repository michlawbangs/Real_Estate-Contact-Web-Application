// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer')

export default function handler(req, res) {
  const body = JSON.parse(req.body)
  require('dotenv').config()

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.user,
      pass: process.env.password,
    },
    secure: true,
  })

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `

  const mailData = {
    from: body.email,
    to: process.env.user,
    subject: `Message From ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '</br>')
  }  

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  
  console.log(body);
  res.status(200).json({ status: 'OK' })
  // res.status(200)
}
