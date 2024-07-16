const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const mongoose = require('mongoose');
const Contact = require('./models/Contact');
const Disposal = require('./models/Disposal');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

// Database connection
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${connect.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};
connectDB();

// API routes
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'API running successfully',
  });
});

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({
      status: 'failure',
      message: 'All fields are required',
    });
  }

  console.log(`Received data: Name: ${name}, Email: ${email}, Message: ${message}`);

  try {
    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    console.log('Contact saved to database');

    return res.status(200).json({
      status: 'success',
      message: 'Form submitted successfully',
    });
  } catch (error) {
    console.error('Error saving contact to database:', error);
    return res.status(500).json({
      status: 'failure',
      message: 'Internal Server Error',
    });
  }
});

app.post('/api/save', async (req, res) => {
    try {
        console.log('Received data:', req.body);
        const { size, item, weight, points, couponCode } = req.body;
        
        const newDisposal = new Disposal({
            size,
            item,
            weight,
            points,
            couponCode
        });

        const savedDisposal = await newDisposal.save();
        console.log('Saved disposal:', savedDisposal);
        res.status(201).json({ message: "Data saved successfully" });
    } catch (error) {
        console.error('Full error object:', error);
        res.status(500).json({ message: "Error saving data", error: error.message });
    }
});

app.post('/api/verify-coupon', async (req, res) => {
    try {
        console.log('Received coupon:', req.body);
        const { couponCode } = req.body;
        if (couponCode.length === 6) {
            res.status(200).json({ message: "Coupon verified successfully" });
        } else {
            res.status(400).json({ message: "Invalid coupon code" });
        }
    } catch (error) {
        console.error('Full error object:', error);
        res.status(500).json({ message: "Error verifying coupon", error: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`.blue.underline);
});