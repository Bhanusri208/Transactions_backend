const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const transactionRoutes = require('./routes/transactionRoutes');

dotenv.config(); 

const app = express();

app.use(express.json()); 

// Routes
app.use('/api', transactionRoutes);

const PORT = process.env.PORT || 4000;


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected successfully!"))
    .catch((error) => console.log(error))



app.listen(PORT, () => {
            console.log(`server started and running on ${PORT}`);
});
