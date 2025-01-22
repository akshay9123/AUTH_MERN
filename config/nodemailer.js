import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
dotenv.config()

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com', // Brevo (formerly Sendinblue) SMTP host
    port: 587, // Standard SMTP port
    secure : false,
    auth: {

        user : process.env.SMTP_USER,
        pass : process.env.SMTP_PASS
        
        // user : process.env.SMTP_USER, // Your SMTP username (Brevo account email)
        // pass : process.env.SMTP_PASS, // Your SMTP password (API key from Brevo)
    }
});

export default transporter;
