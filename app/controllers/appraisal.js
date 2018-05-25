module.exports.appraisalBad = function (application, res, intent, personality, emotion) {
    let responses = global.appraisalBadResponses[personality][emotion];
    let rand = application.app.controllers.funcs.generateRand(responses.length);
    let result = responses[rand];

    res.status(200).json({
        "fulfillmentText": result
    });
};

module.exports.appraisalGood = function (application, res, intent, personality, emotion) {
    let responses = global.appraisalGoodResponses[personality][emotion];
    let rand = application.app.controllers.funcs.generateRand(responses.length);
    let result = responses[rand];

    res.status(200).json({
        "fulfillmentText": result
    });
};