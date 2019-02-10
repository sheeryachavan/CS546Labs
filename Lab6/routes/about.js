const express = require("express");
const router = express.Router();
router.get("/about", async (req, res) => {
    try {
        const post = await postData.getPostById(req.params.id);
        res.json(post);
    } catch (e) {
        res.status(404).json({
            message: "Post not found"
        });
    }
});

router.get("/story", async (req, res) => {
    try {
        const post = await postData.getPostById(req.params.id);
        res.json(post);
    } catch (e) {
        res.status(404).json({
            message: "Post not found"
        });
    }
});
router.get("/education", async (req, res) => {
    try {
        const post = await postData.getPostById(req.params.id);
        res.json(post);
    } catch (e) {
        res.status(404).json({
            message: "Post not found"
        });
    }
});


router.get("*", async (req, res) => {
    try {
        const postList = {
            "Error": "404: Data not found"
        };
        res.json(postList);
    } catch (e) {
        res.status(500).send();
    }
});