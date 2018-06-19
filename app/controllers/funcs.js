const request = require('request');

module.exports.generateRand = function (len) {
    let rand = Math.floor((Math.random() * len));
    return rand;
};

module.exports.whatIsIt = function (application, req, res, intent, personality, emotion) {
    let body = req.body;
    let searchText = body['queryResult']['parameters']['searchText'];
    let vals = searchText.split('-');
    searchText = vals[0];
    vals = searchText.split('?');
    searchText = vals[0];
    let response = "";

    //'https://pt.wikipedia.org/w/api.php?action=opensearch&lang=pt-br&search=' + searchText + '&limit=1&namespace=0&format=json'
    request('https://pt.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=' +
        searchText + '&exsentences=5&exintro=1&explaintext=1', {json: true}, function (err, r, body) {
        if (err) {
            response = "Me desculpe, ocorreu algum erro inesperado";
            console.log(err);
        } else {
            let pageId = Object.keys(body['query']['pages'])[0];
            let result = body['query']['pages'][pageId]['extract'];

            response = (result != '') ? result : "Não consegui encontrar nada sobre " + searchText;
        }

        res.json({
            'fulfillmentText': response
        });
    });
};