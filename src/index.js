// DEPENDENCIES
const express = require("express");
const { urlencoded } = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

// APP
const app = express();

// SETTINGS
app.set("appName", "api-rest");
app.set("port", process.env.PORT || 3000);

// MIDDLEWARES
app.use(express.json());
app.use(urlencoded({ extended: false }))
app.use(cors());
app.use(morgan("dev"));

// ROUTES
app.use("/api/movies", require("./routes/movies.js"));

// SERVER / DATABASE
const url = "mongodb+srv://root:toor@cluster0.mbevg.mongodb.net/play-video?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {

    if (err) {
        console.log("Database connection failed");
    }
    else {
        // DATABASE
        console.log("Database connected");

        app.listen(app.get("port"), (err) => {
            
            if (err) {
                console.log("Server connection failed");
            }
            else {
                // SERVER
                console.log(`Server on port ${app.get("port")}`);    
            }
        });
    }
});
