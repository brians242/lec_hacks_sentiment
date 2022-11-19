const deepai = require('deepai');

deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

(async function() {
    var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: "My day is terrible, I want to kick kids over!",
    });
    console.log(resp);
})()