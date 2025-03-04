import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
}

// Mock email transporter (in a real app, you would configure this with real credentials)
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: 'username',
    pass: 'password',
  },
});

// API Routes
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  
  try {
    // In a real application, you would send an actual email
    console.log('Contact form submission:', { name, email, subject, message });
    
    // Simulate email sending (comment this out in development)
    
    // await transporter.sendMail({
    //   from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    //   to: process.env.EMAIL_RECIPIENT,
    //   subject: `Portfolio Contact: ${subject}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
    //   html: `<p><strong>Name:</strong> ${name}</p>
    //          <p><strong>Email:</strong> ${email}</p>
    //          <p><strong>Message:</strong></p>
    //          <p>${message}</p>`,
    // });
    
    
    // Simulate a delay to mimic network latency
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    return res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
});

// Resume download endpoint
app.get('/api/resume/download', (req, res) => {
  // In a real application, you would serve an actual PDF file
  // For this example, we'll create a simple text file
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=your_name_resume.pdf');
  
  // Send a message instead of a real PDF
  res.send('This is a placeholder for a real resume PDF file.');
});

// Catch-all handler for client-side routing in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});