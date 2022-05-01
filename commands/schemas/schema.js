const mongoose= require("mongoose");

const cardSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    number: String,
    Title: String,
    Element: String,
    Keywords: String,
    Number: String,
    url: String, 
    Indications: String
});

module.exports = mongoose.model("cards", cardSchema);