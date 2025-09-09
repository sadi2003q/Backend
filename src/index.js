import dotenv from 'dotenv';
import { connectDB } from './db/index.js';


dotenv.config({
    path: './env'
});




connectDB();

























/*

// Approach 1: Using Callbacks

import express from 'express';

const app = express();

( async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.on('error', (err) => {
      console.error('Express server error:', err);
    });

    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port http://localhost:${process.env.PORT || 3000}`);
    });


    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
})();
*/