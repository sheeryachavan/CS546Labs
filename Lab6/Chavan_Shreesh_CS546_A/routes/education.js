const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const schooling = [{
                "schoolName": "Stevens Institute of Technology",
                "degree": "Masters in Computer Science",
                "favoriteClass": "Agriculture Informatics",
                "favoriteMemory": "My best memory here till date, is when I got to see aliens studying Artificial intelligence. Creatures from a planet which is light years away were not able to grab what professor taught since English was not their native language and their TOEFL was also low. A few of them turned towards me for help. I am glad that I could help them out. So, now I am a part of an intergalactic friendship. I also got to learn a few words of their language, 'Xienowad' stands for 'thank you' in their language."
            },
            {
                "schoolName": "St. John College of Engineering and Management",
                "degree": "Bachelor of Computer Engineering",
                "favoriteClass": "Human-Plants Interaction",
                "favoriteMemory": "Government had declared a holiday of a week on the occasion of Ganesh Festival (An Indian Festival) in sept 2016. Our School had canceled it for us for the reason of pending syllabus. This struck a spark of anger in all students. A day before The festival, I planned to start of a protest by asking my class to wear black the next day. Unknowingly I started a college-wide protest as I was surprised to see that the whole college, students from all years were in black. By midday, I found students forming a human formation of spelling 'HOLIDAY'. I felt bad for my college, yet proud that I triggered something so huge."
            },
            {
                "schoolName": "E. S. Andrades College of Science",
                "degree": "High School Degree in Science",
                "favoriteClass": "Computer Science",
                "favoriteMemory": "I became part of my first ever mass bunk in this institute. A new movie had just released and my whole class wanted to see the first day first show of it. After a lecture in college, we just fled away to the theatre. We had to face the consequences the next day. My parents had got a call regarding my deeds, and needless to say that I was scolded harsh and deep the next day."
            }
        ];
        res.json(schooling);
    } catch (e) {
        res.status(404).json({
            message: "File not found"
        });
    }
});

module.exports = router;