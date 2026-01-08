const express = require('express');
const mongoose = require('mongoose');
const User = require('./model');
const bcrypt = require('bcrypt');
const app = express();

app.use(express.json());
mongoose.connect('mongodb+srv://renu:RENU@cluster0.yoyamwo.mongodb.net/')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('MongoDB Connection Error:', err));
    
app.post('/signup', async (req, res) => {
    const {username}= req.body;
    const {email}= req.body;
    const {password}= req.body;
    try {
         const salt=await bcrypt.genSalt(10);
         const hashedPassword=await bcrypt.hash(password,salt);
         const newUser=new User({username,email,password:hashedPassword});
         await newUser.save();
         res.status(200).send("User registered successfully"); 
    } catch (err) {
        console.log(err.message);
    }``
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));