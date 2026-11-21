const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import User Router
const UserRouter = require("./Routers/UserRouter");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect User Router
app.use("/api", UserRouter);

// Test route
app.get("/", (req, res) => {
    res.send("College Management Backend is Running!");
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB connected successfully");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch((err) => {
    console.log("MongoDB connection failed:", err.message);
});