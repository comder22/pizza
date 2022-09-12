// import express
const express = require('express')

const app = express() // call (all the functionalities that express provides)

const ejs = require ('ejs')     //to configure template engine

const path = require('path')    //to generate path, import modules from node 

const expressLayout = require('express-ejs-layouts')

//to fix port number
const PORT = process.env.PORT || 3000  // environment variable

const mongoose = require('mongoose')

// Database connection

const url = "mongodb+srv://rajat:8KoTqdVQgmpHtFhW@atlascluster.c96psow.mongodb.net/test";

mongoose.connect(url,{maxPoolSize:5},(err)=>{
    if(err){
        console.log('DB Error ', err);
    }
    else{
        console.log('DB Connection Created...');
    }
});
module.exports = mongoose;



//To tell express where the assests are (static middleware is used)

app.use(express.static('public'))


//1. Layout initiazed, view engine

//set Template engine
app.use(expressLayout)

app.set('views', path.join(__dirname, '/resources/views'))  //to tell express about the path of template files  

//to tell express about the template engine
app.set('view engine', 'ejs')


//2. Routes should always come after layout 

require('./routes/web')(app)


app.listen(PORT, () => {

    console.log(`Listening on port ${PORT}`)
})