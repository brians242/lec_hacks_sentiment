const fs = require('fs');

const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

(async function() {
    var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: "I hate kids!",
    });
    console.log(resp);

    /* if (["positive"] > ["negative"]) {
        console.log("You're doing welL!")
    } */
})()