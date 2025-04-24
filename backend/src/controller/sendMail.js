import { Resend } from "resend";
import dotenv from "dotenv";

// Ensure environment variables are loaded
dotenv.config({ path: "./.env" });


console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY);
console.log('FROM_EMAIL:', process.env.FROM_EMAIL);
console.log('TO_EMAIL:', process.env.TO_EMAIL);

// Initialize Resend with your API key (use from .env in production)
const resend = new Resend(process.env.RESEND_API_KEY); // ✅ Good for production
// const resend = new Resend('re_K4vmC8f8_BDhSwgzGuGCALu8UJWUGyRf3'); // 👈 Use this only for testing

const sendMail = async (req, res) => {
  const { name, petName, Breed, phone, location } = req.body;

  // Validation: Make sure all fields are present
  if (!name || !petName || !Breed || !phone || !location) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const response = await resend.emails.send({
    //   from: process.env.FROM_EMAIL, // Must be verified in Resend (use onboarding@resend.dev for testing)
    //   to: process.env.TO_EMAIL, // Where you want to receive submissions
    from: 'Acme <onboarding@resend.dev>', // Must be verified in Resend (use
    to: 'vikas733991@gmail.com',
      subject: `New Pet Registration from ${name}`,
      text: `
New Pet Registration Form:

Name: ${name}
Pet Name: ${petName}
Breed: ${Breed}
Phone: ${phone}
Location: ${location}
            `,
    });

    res
      .status(200)
      .json({ success: true, message: "Email sent!", id: response.id });
  } catch (err) {
    console.error("Resend error:", err?.response?.body || err.message);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
};

export default sendMail;
