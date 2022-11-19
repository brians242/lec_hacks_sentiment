const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

(async function() {
    var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: "YOUR_TEXT_HERE",
    });
    console.log(resp);
})()