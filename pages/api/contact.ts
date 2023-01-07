const contactAPI = (req: any, res: any) => {
    let nodemailer = require('nodemailer')
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service: 'SendinBlue',
        auth: {
            user: 'ericming24@gmail.com',
            pass: process.env.SMTP_PASS,
        },
        secure: false,
    });
    let mailOptions = {
        from: 'support@leagueplaybasketball.com',
        to: 'ericming24@gmail.com',
        bcc: ['dkhait1@gmail.com'],
        subject: 'League Play  email from : ' + req.body.name,
        text: req.body.email + req.body.message,
    }
    transporter.sendMail(mailOptions, function (err: any, info: any) {
        if (err) console.log(err)
        else console.log(info)
    })
    console.log('exiting api')
    res.status(200)
}

export default contactAPI
