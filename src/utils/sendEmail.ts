import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      user: "hyperscapeuk@gmail.com",
      pass: "ahkkvlqmjlzfjtjs"
  }
})

export const sendEmail = (data: any) => {
  const message = {
    from: 'contact@socreative.digital',
    to: 'egor.sc@outlook.com',
    subject: `Socreative.digital website contact form`, 
    text: `FROM: \n ${ data.name } - ${ data.email } \n\n MESSAGE: \n ${ data.message }`
  }

  transporter.sendMail(message, (err: any, info: any) => {
    if (err) {
      console.log('Something went wrong. Email wasn\'t sent. Trying again')
      console.log(err)
    } else {
      console.log(info)
    }
  })
}