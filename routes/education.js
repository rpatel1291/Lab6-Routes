const express = require("express");
const router = express.Router();

const myEducation = [
    {
        schoolName: "CUNY Queens College",
        degree: "Bachelor's of Science",
        favoriteClass: "Internet Security",
        favoriteMemory: "One of the assignments given in the Internet Security class, we had to decode messages that were encoded by 256-bit or 512-bit. Having the public key and the message we needed to find the private key to decode the message."
    },
    {
        schoolName: "CUNY City College of New York",
        degree: "N/A",
        favoriteClass: "Introduction of Astronomy",
        favoriteMemory: "I was able to take a class, Introduction to Astronomy, taught by the famous Dr. Michio Kaku."
    },
    {
        schoolName: "Thomas A Edison CTE High School",
        degree: "High School Diploma",
        favoriteClass:"Robotics",
        favoriteMemory: "During the four years in high school, I had to take a technical class for three years instead of a foreign language class. I choose Robotics because the final project was to build a functioning robot to take to an annual competition. The whole building season was only six weeks long but we spent many hours after school thinking of ways to find solutions to problems. However, we end up having more problems than we started with."
    }
];

router.get("/", (req, res) => {

    myEducation.forEach((education) => {
        res.json(education), (error) => {
            res.status(500).send();
        };
    });

});

module.exports = router;