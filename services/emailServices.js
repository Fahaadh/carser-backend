const nodemailer = require('nodemailer');
require('dotenv').config();


const transporter = nodemailer.createTransport({
  service: 'gmail', // Use the appropriate email service
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS // Your email password
  }
});

const sendApprovalEmail = (to, service) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Service Approval Notification',
    text: `Dear ${service.rcowner},

    We are pleased to inform you that your service request pertaining to vehicle identification number VIN: ${service.VIN} has been successfully approved. The service is scheduled to 
    commence on ${service.date}.
    We extend our sincere appreciation for selecting our services for your automotive needs. Your satisfaction and trust are paramount to us, and we are committed to providing you with
    exceptional service. 
    Should you have any questions or require further assistance, feel free to reach out to our team.
    Thank you for choosing us!
    Warm regards, 

    Manager
    9944881000`
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendApprovalEmail;
