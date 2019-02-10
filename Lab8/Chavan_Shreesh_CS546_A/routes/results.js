const express = require("express");
const router = express.Router();
// const data = require("../data");
// const postData = data.posts;

router.get("/", async (req, res) => {
    console.log(req.body);
});

router.post("/", async (req, res) => {
    try{let l_strInputString = req.body["text-to-test"];
    if(l_strInputString==""){
        throw "It seems that you did not enter the phrase to check"
    }
    let l_objResult;
    let l_boolIsPallindrome;
    l_strInputString = l_strInputString.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    var l_strReverseString = l_strInputString.split("").reverse().join("");
    l_objResult = "It is not a pallindrome";
    l_boolIsPallindrome = false;
    if (l_strInputString == l_strReverseString && l_strInputString != "") {
        l_objResult = "It is pallindrome";
        l_boolIsPallindrome = true;
    }
    res.render("results/result", {
        "title": "The Palindrome Results!",
        "isPallindrome": l_boolIsPallindrome,
        "result": l_objResult,
        "text-to-test": req.body["text-to-test"]
    });}
    catch(e){
        res.status(400).render("results/errors", {
            "title": "Oops! Something Went Wrong",
            "error": e
        });
    }
});
module.exports = router;