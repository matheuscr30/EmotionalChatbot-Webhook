module.exports.dialogHug = function (application, res, intent, personality, emotion) {
    let responses = global.dialogHugResponses[personality][emotion];
    let rand = application.app.controllers.funcs.generateRand(responses.length);
    let result = responses[rand];

    res.status(200).json({
        "fulfillmentText": result
    });
};

module.exports.dialogIDoNotCare = function (application, res, intent, personality, emotion) {
    let responses = global.dialogIDoNotCareResponses[personality][emotion];
    let rand = application.app.controllers.funcs.generateRand(responses.length);
    let result = responses[rand];

    res.status(200).json({
        "fulfillmentText": result
    });
};

module.exports.dialogSorry = function (application, res, intent, personality, emotion) {
    let responses = global.dialogSorryResponses[personality][emotion];
    let rand = application.app.controllers.funcs.generateRand(responses.length);
    let result = responses[rand];

    res.status(200).json({
        "fulfillmentText": result
    });
};