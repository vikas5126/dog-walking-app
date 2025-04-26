import { Resend } from 'resend';
import 'dotenv/config';

const resend = new Resend(process.env.RESEND_API_KEY);


const sendMail = async (req, res) => {
  const { name, petName, Breed, phone, location } = req.body;

  if (!name || !petName || !Breed || !phone || !location) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  const htmlBody = `
    <h2>🐾 New Pet Registration</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Pet Name:</strong> ${petName}</p>
    <p><strong>Breed:</strong> ${Breed}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Location:</strong> ${location}</p>
  `;

  try {
    const response = await resend.emails.send({
      from: process.env.FROM_EMAIL,         // must be verified with Resend
      to: `${process.env.TO_EMAIL}`,
      subject: `🐾 New Pet Registration from ${name}`,
      html: htmlBody,
      text: `
Name: ${name}
Pet Name: ${petName}
Breed: ${Breed}
Phone: ${phone}
Location: ${location}
      `
    });

    console.log("Resend Response:", response);

    res.status(200).json({ success: true, message: "Form Submit Successfully!", id: response.id });
  } catch (error) {
    console.error("Resend Error:", error);
    res.status(500).json({ success: false, message: "Failed to submit form." });
  }
};

export default sendMail;
