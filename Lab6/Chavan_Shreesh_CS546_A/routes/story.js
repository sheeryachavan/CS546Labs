const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const story = {
            "storyTitle": "Power of belief system",
            "story": "Being a trekking fanatic, I once took my group to a trek at Kaldurg fort, Palghar India. Those were the days of monsoon. The scenes were extraordinarily beautiful, the grass was lush green, rain droplets shinned of vibrant green leaves, every frame that our eye could capture was stunning. The climbing was risky to the same extent as that of the beauty around since green algae had taken cover all around the rocks. Still, we all climbed up successfully till we could judge the top a few minutes away. \nNow we had two way, one by a normal pathway, and another way was not there, I found out that I could go up and surprise everybody by climbing up a steep rocky slope. I sent everyone ahead from the normal path and started climbing the slope without getting noticed. With skills taught by my dad, I managed to climb that rocky wall of about 40 - 50 feet. But since all the rocks at the top had grown slippery I was not able to get a grip and push myself over on the top. I kept clinging to the rocks for a few minutes. I was not able to find a place to hold my other hand. Cactuses had the presence beside me on the rocks. \nFor a moment, I recalled all my bad and good deeds. I was sure that there is no way out and this is going to be my death day. My friends were not able to help me out. Being an atheist, praying to god was out of the question for me. In desperation, I caught hold of a cactus with my other hand, and in this movement, I lost the hold from my previous hand. I was now sure that this is going to be the last day of my life. \nSuddenly, I remembered the most important lesson of mountaineering taught by my father. he used to say, \"Mountain is like a mother. She will always provide a way for you just look for it and even if she doesn't, she is a mother after all and she doesn't want her kids to die.\" I closed my eyes for a moment, then opened and saw the depth, kissed the rock beside, made a belief that I will stay alive and left the cactus. My belief was strong and this made me land on grass. Though I had scratches on my face hands and knees, I got no bone fractured. I survived the great fall from wherever anyone may have died. \nSo my message from this story is to believe in what you do and worship the one on whom you are dependent on."
        };
        res.json(story);
    } catch (e) {
        res.status(404).json({
            message: " 404: File not found!"
        });
    }
});


module.exports = router;