const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const przeciwnicySchema = new Schema({
    kategoria: Number,
    hp: Number,
    nazwa: String,
    opis: String
},{
    collection: "przeciwnicy"
});

module.exports = mongoose.model("Przeciwnik", przeciwnicySchema);