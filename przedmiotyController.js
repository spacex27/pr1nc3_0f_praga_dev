const express = require("express");
const router = express.Router();

const przedmiot = require("./przedmioty");

router.get("/przedmioty", async (req, res) => {
    try{
        const przedmioty = await przedmiot.find();
        res.json(przedmioty);
    }
    catch (err) {
        res.status(500).json({ message: "Error getting przedmioty" });
    }
})

module.exports = router;