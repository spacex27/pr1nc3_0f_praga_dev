const express = require("express");
const router = express.Router();

const przeciwnik = require("./przeciwnicy");

router.get("/przeciwnicy", async (req, res) => {
    try{
        const przeciwnicy = await przeciwnik.find();
        res.json(przeciwnicy);
    }
    catch (err) {
        res.status(500).json({ message: "Error getting przeciwnicy" });
    }
})

module.exports = router;