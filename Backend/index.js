import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './Routes/authRoutes.js';
import connectToMongoDb from './db/ConnectToMongoDb.js';
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;


connectToMongoDb();



app.use('/api/auth',authRoutes);



 

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
    });