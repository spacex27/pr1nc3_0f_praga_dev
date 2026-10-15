const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const przedmiotySchema = new Schema({
    name: String,
    opis: String,
    kategoria: String,
    value: Number
},{
    collection: "przedmioty"
});

module.exports = mongoose.model("Przedmiot", przedmiotySchema);