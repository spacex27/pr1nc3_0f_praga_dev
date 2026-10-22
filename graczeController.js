const express = require("express");
const router = express.Router();

const gracz = require("./gracze");

router.get("/gracze", async (req, res) => {
    try{
        const gracze = await gracz.find();
        res.json(gracze);
    }
    catch (err) {
        res.status(500).json({ message: "Error getting gracze" });
    }
})

router.get("/gracze/:id", async (req, res) => {
    try{
        const graczSzukany = await gracz.findById(req.params.id);

        if(!graczSzukany){
            return res.status(404).json("Gracz nie istnieje!");
        }

        res.json(graczSzukany);
    }
    catch(err){
        res.status(500).json({ message: "Error getting gracz" });
    }
})

router.post("/gracze", async (req, res) => {
    try{
        const { nick, czas, iloscZyc } = req.body;

        const newData = new gracz({
            nick: nick, 
            czas: czas, 
            iloscZyc: iloscZyc
        });

        const nowyGracz = await newData.save();
        res.json(nowyGracz);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Nie można utworzyć konta gracza!"});
    }
})

router.delete("/gracze/:id", async (req, res) => {
    try{
        const graczSzukany = await gracz.findByIdAndDelete(req.params.id);

        if(!graczSzukany){
            return res.status(404).json("Gracz nie istnieje!");
        }

        res.json({ message: "Gracz usunięty"});
    }
    catch (err) {
        res.status(500).json({ message: "Error deleting gracz" });
    }
})

router.patch("/gracze/:id", async (req, res) => {
    try{
        const { nick, czas, iloscZyc } = req.body;

        const updatedData = {
            nick: nick, 
            czas: czas, 
            iloscZyc: iloscZyc
        };

        const graczSzukany = await gracz.findByIdAndUpdate(req.params.id, updatedData);

        if(!graczSzukany){
            return res.status(404).json("Gracz nie istnieje!");
        }

        res.json(updatedData);
    }
    catch (err) {
        console.log(err);

        res.status(500).json({ message: "Error updating gracz" });
    }
})

module.exports = router;