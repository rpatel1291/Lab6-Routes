const express = require("express");
const router = express.Router();

const myStory = {
    storyTitle: "The Time I Moved to Maryland",
    story: "After completing my bachelors from Queens College at the end of 2015, I spent the first few weeks studying to take the GRE for graduate school. After the exam I went directly home to packed my bags and headed to the airport the next day to go to India. This was the first vacation I taken ever since I graduated high school back in 2010. The few weeks in India was a way to recharge my batteries and to relax after serveral semesters of stress. However, the vacation was coming to an end and I knew the stress was going to begin again. \n" +
    "Coming back home after a few weeks of relaxation, I was preparing myself to apply for jobs like my life dependented on it. I would take a few hours every morning to look at job postings and apply to the ones in the city. From the jobs I applied to, all I received were rejection letters.The despairation starting to grow.I began looking at all of the pros and cons of what I wanted to do and how far I was willing to travel. My main preference was looking for a position half an hour to an hour travel.However, the best idea was to expand my search area and took a random chance at a company. Turned out that company was located in Maryland. \n" +
    "Having a year spent at home searching for a job, I was accepted for a full time position and started that December. I was asked to look for a place and be ready to work the first Monday of the month. Waiting to the last minute, I found an apartment a week before I started work. As I started work, I was able to hop onto a new project the company received and basically worked on it for almost 11 months continuously. However, progress was very slow.Everytime there was a step forward two to three steps were taken back.That is when I thought going back to school or looking for a new job was the best path."
};

router.get("/", (req, res) => {

    res.json(myStory), (error) => {
        res.status(500).send();
    };

});

module.exports = router;