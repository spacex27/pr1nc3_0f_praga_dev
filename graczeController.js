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

module.exports = router;