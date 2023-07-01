const express = require('express');
const app = express();
const mongoose = require('mongoose');
import mongoose from 'mongoose';

app.use("/todo/tasks",require("./routes/tasks.js"))
app.listen(3000,() => {
console.log('listening on port 3000');
})
