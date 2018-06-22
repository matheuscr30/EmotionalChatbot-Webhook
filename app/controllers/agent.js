module.exports.agentAnnoying = function (application, res, intent, personality, emotion) {
    let responses = global.agentAnnoyingResponses[personality][emotion];
    let rand = application.controllers.funcs.generateRand(responses.length);
    let result = responses[rand];

    res.status(200).json({
        "fulfillmentText": result
    });
};

module.exports.agentBoring = function (application, res, intent, personality, emotion) {

    let responses = global.agentBoringResponses[personality][emotion];
    let rand = application.controllers.funcs.generateRand(responses.length);
    let result = responses[rand];

    res.status(200).json({
        "fulfillmentText": result
    });
};
