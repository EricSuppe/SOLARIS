const router = require("express").Router();
const Timer = require("../models/Timer");

//UPDATE Timer
router.put("/", async (req,res) => {
    try {
        const timer = await Timer.findOneAndUpdate({
            $set: req.body,
        });
        res.status(200).json("Timer updated");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET Timer
router.get("/", async (req,res) => {
    try {
        const timer = await Timer.find()
        res.status(200).json(timer);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router	