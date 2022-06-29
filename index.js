// Importing the dependencies
import express from 'express'
import mongoose from 'mongoose';
import usersRoute from './Routes/users.js';
import authRoute from './Routes/auth.js'

// Defining the Express app
const app = express();

// Database Connection
const connect = async() => {
    const mongoAtlas = "mongodb+srv://rames:9810520052@cluster0.gnajoeg.mongodb.net/users?retryWrites=true&w=majority"
    try
    {
        await mongoose.connect(mongoAtlas);
        console.log("Connected to MongoDB Atlas")
    }
    catch(error)
    {
        throw(error)
    }
}

connect();


mongoose.connection.on("Disconnected", () => {
    console.log("mongoDB Atlas Disconnected !!!");
})

mongoose.connection.on("Connected", () => {
    console.log("MongoDb Atlas connected !!!");
})


// Parsing incoming requrests with JSON payloads based on body-parser
app.use(express.json());



//Routes
app.use("/users", usersRoute);
app.use("/auth", authRoute);


app.get('/', (req, res) =>{
    res.send("<h1> Hello ...Everest Walk !!!! I  am Ramesh Majhi</h1>")
});

// Setting the server on Port 3000
app.listen(5000, () => {
    console.log("Server running at 5000 !!!");
});

