import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./models/User.js";
import Order from "./models/Order.js";


dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });


// Middleware
app.use(cors());
app.use(express.json());




// Test API
//1. ApI
app.get("/", (req, res) => {
  res.send("BookVerse Backend Server Running 🚀");
});


//Api 2

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error fetching users",
    });
  }
});

//3.ApI
app.post("/signup", async (req, res) => {
  try{
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({message: "User already exists",
    });
    }

   const hashedPassword = await bcrypt.hash(password, 10);

   const newUser = await User.create({
     name,
     email,
     password: hashedPassword,
    
   });

    res.status(201).json({message: "User Registered successfully",
      user: newUser,
    });
  } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Server Error",
      });
  }
});

//4.API
app.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          message: "User not found",
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          message: "Invalid Password",
        });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      const userData = user.toObject();
      delete userData.password;

      res.status(200).json({
        message: "Login Successful",
        token,
        user: userData,
      });

    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: "Server Error",
      });
    }
});


//4.API

app.post("/orders", async (req, res) => {
  try {
    console.log(req.body);
    const { userEmail, books, totalPrice, address } = req.body;

    const newOrder = await Order.create({
      userEmail,
      books,
      totalPrice,
      address,
    });

    res.status(201).json({
      message: "Order Placed Successfully",
      order: newOrder,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

app.get("/orders/:email", async (req, res) => {
  try {
    const { email } = req.params;

    const orders = await Order.find({
      userEmail: email,
    });

    res.status(200).json(orders);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});


app.get("/order/:id", async (req, res) => {
  try {
    console.log("Requested ID:", req.params.id);

    const order = await Order.findById(req.params.id);

    console.log("Found Order:", order);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.status(200).json(order);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

app.delete("/order/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Order Cancelled Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});













// Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
