const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');

var subscriptionKey = "a3ea932fef1a4c549facd62920e0af13";
var endpoint = "https://api.cognitive.microsofttranslator.com";

// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
var location = "westus2";

var msg = "His country was on the brink of a humanitarian crisis. That day, India recorded more than 261,000 new coronavirus cases -- more than many countries have seen during the entire pandemic."

axios({
    baseURL: endpoint,
    url: '/translate',
    method: 'post',
    headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString()
    },
    params: {
        'api-version': '3.0',
        'from': 'en',
        'to': ['ja']
    },
    data: [{
        'text': msg
    }],
    responseType: 'json'
}).then(function(response){
    console.log(JSON.stringify(response.data[0]["translations"][0]["text"]));
    var eigo = JSON.stringify(response.data[0]["translations"][0]["text"]);
    console.log(eigo);
})