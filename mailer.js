// Import required modules
const nodemailer = require("nodemailer");

// Create a function to send emails
async function sendEmail() {
  try {
    // Create a transporter object with your email provider's SMTP configuration
    const transporter = nodemailer.createTransport({
      service: "your-email-provider", // e.g., 'Gmail'
      auth: {
        user: "your-email@example.com",
        pass: "your-email-password",
      },
    });

    // Create an email message
    const mailOptions = {
      from: "your-email@example.com",
      to: "recipient@example.com",
      subject: "Hello from the Mailer",
      text: "This is a test email sent using Nodemailer.",
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the sendEmail function to send the email
sendEmail();
