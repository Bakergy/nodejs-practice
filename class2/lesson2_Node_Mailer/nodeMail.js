// npm install --save nodemailer
import nodemailer from 'nodemailer';
const SMTP_USERNAME='@gmail.com'
const SMTP_PASSWORD=''
const MAIL_RECEIVER='@gmail.com'

// 和smtp server 連線
const mailTransporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_PASSWORD,
  },
});

// 寄信
async function sendMail(email){
  try{
    await mailTransporter.sendMail(
      {
        from: 'Bakergy Workshop <bakergy@gmail.com>',
        to: email,
        subject: 'Welcome to Bakergy Workshop :)',
        html: '<h1>Hello</h1><p>Nice to meet you.</p>',
      }
    )
    console.log("Successful send mail.")
  }catch(e){
    console.log('Unable to send email: ' + err);
  }
}
sendMail(MAIL_RECEIVER)