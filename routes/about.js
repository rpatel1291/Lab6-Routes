const express = require("express");
const router = express.Router();

const aboutMe = {
    name: "Ravi Patel",
    cwid: "10432313",
    biography: "Born and raised in New York, I went to Thomas A Edsion High School where I joined the schools robotics team. I was able to learn the theory behind direct current, alternating current, semiconductors and materials/tools. For the robotic season we had built a robot and brought it to the annual competition in Jacob Javed Center.Even though we did not do great, it did lead me to the field of engineering. I started my college career as a civil engineering student which did not last long and finally led me to become a computer science student. \n After getting my bachelors degree, I was able to get a job down in Maryland as a Programmer Analyst for a company that managed data for NIH and NCI. The data collected by these two institutions are from different clinical trials about drugs preventing cancer recurrence. My main duties included: take new data and flag errors, document variable types and mapping them to proper form questions, and creating a timeline of the data. After being accepted to graduate school at Stevens Institute of Technology, I moved back home at the end of the year.",
    favoriteShows: ["The Flash", "Arrow", "Supergirl", "Legends of Tomorrow", "Scorpion", "Supernatural"],
    hobbies: ["Playing Pool", "Watching Sports/TV/Movies", "DIY ", "Listening to Music", "Code"]
};

router.get("/", (req, res) => {

    res.json(aboutMe), (error) => {
        res.status(500).status();
    };
});


module.exports = router;