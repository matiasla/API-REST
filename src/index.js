// DEPENDENCIES
const express = require("express");
const { urlencoded } = require("express");
const morgan = require("morgan");

// APP
const app = express();

// SETTINGS
app.set("appName", "Api-rest");
app.set("port", process.env.PORT || 3000);

// MIDDLEWARES
app.use(express.json());
app.use(urlencoded({ extended: false }))
app.use(morgan("dev"));

// ROUTES
app.use("/api/movies", require("./routes/movies.js"));

// SERVER
app.listen(app.get("port"), (err) => {
    if (err) {
        console.log("Server connection failed");
    }
    else {
        console.log(`Server on port ${app.get("port")}`);
    }
});
