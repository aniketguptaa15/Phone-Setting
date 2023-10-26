const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("../models/usermodel");
const router = express.Router();

// POST endpoint to add a new user
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const userAdded = await User.create({
      name: name,
      email: email,
      age: age
    });
    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

router.get("/users", async (req, res) => {
  try {
    const showAll = await User.find(); // Yaha par "User.find()" ka use karke saare users ko retrieve kiya jata hai
    res.status(200).json(showAll);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// GET endpoint to retrieve a single user by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const singleUser = await User.findById(id);
    if (!singleUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(singleUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// DELETE endpoint to remove a user by ID
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

//for put
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const {name,email,age} = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(id,req.body,{new:true});
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
