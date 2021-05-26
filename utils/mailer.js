const nodemailer = require("nodemailer");

async function sendEmail(clientEmail) {

    var htmlTemp = '<h4>Dear Customer, Vehicle service is now completed. Visit the garage to drive your vehicle back</h4>'

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'defcon.sentinal95@gmail.com',
            pass: 'Hemanth@2000'
        }
    });

    var mailOptions = {
        from: "defcon.sentinal95@gmail.com",
        to: clientEmail,
        subject: "Autorizz Service Update",
        html: htmlTemp
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log("Mailer Response - ", info.response);
    } catch (error) {
        console.log(error);
        return false
    }
    return true;
}

module.exports = sendEmail;