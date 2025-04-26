import express from 'express';
import cors from 'cors';
import emailRoutes from './routes/sendMail.js';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });// Load environment variables

const port = process.env.PORT;
const app = express();

// Middleware
app.use(cors({origin:'https://dog-walking-app-server.vercel.app/'})); // Enable CORS
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/mail', emailRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});