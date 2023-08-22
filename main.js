const https = require("https");

function getDef(term){
    try{
        const request = https.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${term}?key=22b1fa24-f17e-4e2a-9d6a-bb2acceebf5f`,
        response => {
            let body = "";

            response.on('data', data => {
                body += data.toString();
            });

            response.on('end', () => {
                const definition = JSON.parse(body);
                console.log(definition[0].shortdef);
                console.log(definition[0].et);
            });
        });
        request.on("error", error => console.error(error.message));
    }catch (error) {
        console.error(error.message);
    }
}

const query = process.argv.slice(2);
query.forEach(getDef);