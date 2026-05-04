import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route for the Branderson Studio API
app.get('/api/status', (req, res) => {
    res.status(200).json({ 
        success: true, 
        message: 'Branderson API is live and ready!' 
    });
});

// Initialize DB Connection and Server
const startServer = async () => {
    try {
        // Uncomment once your MongoDB URI is in your .env file
        // await mongoose.connect(process.env.MONGO_URI);
        // console.log('Successfully connected to MongoDB.');
        
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1);
    }
};

startServer();
