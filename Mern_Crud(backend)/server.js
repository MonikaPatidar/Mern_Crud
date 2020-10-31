const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// const uri = process.env.ATLAS_URI;
mongoose.connect('mongodb://localhost:27017/mern', 
    { useNewUrlParser: true, 
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify:false });
const connection= mongoose.connection;
connection.once('open', () => {
console.log("Mongodb database connection established successfully !!");
})
const exercisesRouter = require('./Routes/exercise');
const usersRouter = require('./Routes/Users');
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});
