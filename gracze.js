const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const graczeSchema = new Schema({
    nick: String,
    czas: Number,
    iloscZyc: Number
},{
    collection: "gracze"
});

module.exports = mongoose.model("Gracz", graczeSchema);