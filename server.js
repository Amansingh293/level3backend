const express = require("express");
const app = express();
const port = 3005;
const cors = require("cors");

app.use(cors());

app.get("/questions", (req, res) => {
  const questions = {
    Technology: [
        "Describe your favorite technology trend and why it excites you.",
        "What programming languages are you proficient in?",
        "Which tech conferences or workshops have you attended recently?",
        "What is your preferred development environment (IDE, OS, tools)?",
        "How do you stay updated with the latest technology trends?"
      ],
      Health: [
        "Describe your daily exercise routine.",
        "What is your approach to maintaining a balanced diet?",
        "How do you manage stress and maintain mental health?",
        "What health apps or devices do you use regularly?",
        "What are your goals for physical fitness in the next year?"
      ],
      Education: [
        "What inspired you to pursue your field of study?",
        "Describe a significant project or thesis you worked on during your education.",
        "Which educational tools or resources do you find most beneficial?",
        "How do you keep up with developments in your area of expertise?",
        "What advice would you give to someone starting out in your field?"
      ]
  };
  console.log(questions[req.query.topic] , req.query.topic);
  res.status(200).json(questions[req.query.topic]);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
