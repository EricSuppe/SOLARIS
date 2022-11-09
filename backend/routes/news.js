const router = require("express").Router();
const News = require("../models/News");

// //UPDATE News
// router.put(":/id", async (req,res) => {
//  
//         try {
//             const news = await News.findByIdAndUpdate(req.params.id, {
//                 $set: req.body,
//             });
//             res.status(200).json("News has been updated!");
//         } catch (err) {
//             res.status(500).json(err);
//         }
//   
// });

// //DELETE News
// router.delete(":/id", async (req,res) => {
//     
//         try {
//             const news = await News.findByIdAndDelete(req.params.id);
//             res.status(200).json("News has been deleted!");
//         } catch (err) {
//             res.status(500).json(err);
//      
// });

//GET News
router.get("/:id", async (req,res) => {
    try {
        const news = await News.findById(req.params.id);
        res.status(200).json(news);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET latest 4 news 
router.put("/", async (req,res) => {
    try {
        const news = [] = await News.find().limit(req.body.limit).sort({createdAt: -1})
        res.status(200).json(news);
    } catch (err) {
        res.status(500).json(err);
    }
});


//CREATE News
router.post("/", async (req,res) => {
    const newNews = new News(req.body);
    try {
        const savedNews = await newNews.save();
        res.status(200).json(savedNews);
    }catch(err) {
        res.status(500).json(err); 
    }
});

module.exports = router	