var express = require('express')
var nodemailer = require('nodemailer');
var app = express();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'likithajain@gmail.com',
        pass: 'liki@****'
    }
});

let mailOptions = {
    from: 'likithajain@gmail.com',
    to: 'abhiyadu009@gmail.com',
    subject: 'Test Mailer',
    text: 'I am testing Nodemailer to send email.',
};

app.options('/sendmail', function (req, res) {
  res.sendStatus(200);
});

app.post('/sendmail', function (req, res) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); // Change this to your Angular 2 port number
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', '*');

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
})

app.listen(3000,function(){
	console.log("Express Started on Port 3000");
});