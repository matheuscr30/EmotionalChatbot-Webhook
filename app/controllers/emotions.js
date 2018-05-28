module.exports.emotionsHaHa = function (application, res, intent, personality, emotion) {
    let responses = global.emotionsHaHaResponses[personality][emotion];
    let rand = application.controllers.funcs.generateRand(responses.length);
    let result = responses[rand];

    res.status(200).json({
        "fulfillmentText": result
    });
};

module.exports.emotionsWow = function (application, res, intent, personality, emotion) {
    let responses = global.emotionsWowResponses[personality][emotion];
    let rand = application.controllers.funcs.generateRand(responses.length);
    let result = responses[rand];

    res.status(200).json({
        "fulfillmentText": result
    });
};
