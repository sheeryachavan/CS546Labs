const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const biography = {
            "name": "Shreesh Chavan",
            "cwid": "10440768",
            "biography": "I was born on August 7, 1995 as Shreesh Digambar Chavan in a middleclass family in Virar, a small town in outskirts of Mumbai. I have done my Computer Engineering St. John College of Engineering and Management and currently pursuing my masters in Stevens Institute of technology. I also have a year of experience at Vistaar Technologies in developing WebUI for firms like Gerdau, Speedway, Bacardi, Steel And Pipes, Nalco etc.\n I have an interest in web development and I like to learn new technologies. My passion is to combine the fields of Computer Science and agriculture to create a system that could benefit both, mother earth and the farmers. Here in this system, I would like to implement Artificial Intelligence, Machine Learning, Web development and Natural Language Processing. Besides technology, I love traveling. In India, I have visited around 22 states and 5 union territories from existing 30 states and 7 union territories. I have also visited Bhutan, Nepal, and the USA.",
            "favoriteShows": ["Bose Dead/Alive", "Breathe", "Chatrapati Sambhaji", "Flash", "Raja Shivchatrapati"],
            "hobbies": ["Photography", "Painting", "Travel", "Trekking", "Cycling", "Mountaineering", "Sketching"]
        };
        res.json(biography);
    } catch (e) {
        res.status(404).json({
            message: "404 :File not found!"
        });
    }
});


module.exports = router;