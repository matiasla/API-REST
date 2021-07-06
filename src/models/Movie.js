const { Schema, Model } = require("mongoose");

const movieSchema = new Schema({
    title: String,
    director: String,
    year: Number,
    rating: Number
});

module.exports = Model("Movie", movieSchema);