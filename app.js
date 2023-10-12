// --------------------------------------------
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const testRoute = require('./api/routes/test');
const userRoute = require('./api/routes/user');
// ----------------------------------------------
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

module.exports = app;
// ----------------------------------------------
mongoose.connect('mongodb+srv://deb17964:17964bingo@debdeepapi.f8jgpe9.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on('error',err=>{
    console.log("connection failed");
});
mongoose.connection.on('connected',connected=>{
    console.log("connected with DB.");
});
// -----------------------------------------------

app.use("/test",testRoute);
app.use("/user", userRoute);

// app.use((req,res,next)=>{
//     res.status(200).json({
//         message: "app is running...."
//     });
// });

app.use((req,res,next)=>{
    res.status(404).json({
        error: 'Bad request.'
    })
})

