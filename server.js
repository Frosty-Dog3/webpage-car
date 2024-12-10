const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/send-email', (req, res) => {
    const email = req.body.email;

    // Configure the email transport using the default SMTP transport and a GMail account.
    // It's recommended to use environment variables to secure credentials
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    // Setup email data
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'your-email@gmail.com',
        subject: 'New Login Attempt',
        text: `A user has attempted to log in with the following email: ${email}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email');
        }
        res.send('Email sent successfully');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
