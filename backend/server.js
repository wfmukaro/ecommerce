//require("dotenv").config()
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes')
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
connectDB();
app.use('/api/products',productRoutes)
app.listen(PORT, () => console.log(`server running on port ${PORT}!`))