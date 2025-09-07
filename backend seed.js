require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const Property = require('../models/Property');
const connectDB = require('../config/db');

connectDB();

const seedAdminUser = async () => {
  try {
    // Clear existing users and properties
    await User.deleteMany();
    await Property.deleteMany();

    // Create Admin User
    const adminExists = await User.findOne({ email: process.env.ADMIN_EMAIL });
    if (!adminExists) {
      await User.create({
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD, // Password will be hashed by pre-save hook
      });
      console.log('Admin user created successfully!');
    } else {
      console.log('Admin user already exists.');
    }

    // Create some dummy properties
    const dummyProperties = [
      {
        title: "2BHK Apartment in Noida",
        price: 2500000,
        location: "Sector 62, Noida",
        image: "https://images.99acres.com/images/property/thumb/119/238128362C.jpg",
        description: "Spacious 2BHK with excellent ventilation and proximity to metro station. Features include modular kitchen, ample parking, and 24/7 security.",
      },
      {
        title: "Luxurious Villa in Goa",
        price: 15000000,
        location: "Candolim, Goa",
        image: "https://images.99acres.com/images/property/thumb/119/238128362C.jpg", // Replace with a more fitting image
        description: "A serene and luxurious 4BHK villa nestled in the heart of Candolim, perfect for a peaceful retreat. Comes with a private pool and landscaped garden.",
      },
      {
        title: "Commercial Office Space",
        price: 7500000,
        location: "Cyber City, Gurgaon",
        image: "https://images.99acres.com/images/property/thumb/119/238128362C.jpg", // Replace with a more fitting image
        description: "Prime commercial office space ideal for startups or established businesses. Located in the bustling Cyber City area with excellent connectivity.",
      },
      {
        title: "1BHK Studio in Mumbai",
        price: 4000000,
        location: "Andheri, Mumbai",
        image: "https://images.99acres.com/images/property/thumb/119/238128362C.jpg", // Replace with a more fitting image
        description: "Compact yet comfortable 1BHK studio apartment, perfect for singles or couples. Close to railway station and local markets.",
      },
      {
        title: "Farmhouse in Lonavala",
        price: 9000000,
        location: "Lonavala, Pune",
        image: "https://images.99acres.com/images/property/thumb/119/238128362C.jpg", // Replace with a more fitting image
        description: "Expansive farmhouse property with lush green surroundings, ideal for weekend getaways. Includes a large plot, small house, and potential for development.",
      }
    ];

    await Property.insertMany(dummyProperties);
    console.log('Dummy properties seeded!');

    console.log('Data Seeded Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error seeding data: ${error.message}`);
    process.exit(1);
  }
};

seedAdminUser();
