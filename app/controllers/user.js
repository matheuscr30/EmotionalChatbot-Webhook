module.exports.userAngry = function (application, res, intent, personality, emotion) {
    let responses = global.userAngryResponses[personality][emotion];
    let rand = application.app.controllers.funcs.generateRand(responses.length);
    let result = responses[rand];

    res.status(200).json({
        "fulfillmentText": result
    });
};

module.exports.userBored = function (application, res, intent, personality, emotion) {
    let responses = global.userBoredResponses[personality][emotion];
    let rand = application.app.controllers.funcs.generateRand(responses.length);
    let result = responses[rand];

    res.status(200).json({
        "fulfillmentText": result
    });
};

module.exports.userDoesNotWantToTalk = function (application, res, intent, personality, emotion) {
    let responses = global.userDoesNotWantToTalkResponses[personality][emotion];
    let rand = application.app.controllers.funcs.generateRand(responses.length);
    let result = responses[rand];

    res.status(200).json({
        "fulfillmentText": result
    });
};

module.exports.userExcited = function (application, res, intent, personality, emotion) {
    let responses = global.userExcitedResponses[personality][emotion];
    let rand = application.app.controllers.funcs.generateRand(responses.length);
    let result = responses[rand];

    res.status(200).json({
        "fulfillmentText": result
    });
};

module.exports.userHappy = function (application, res, intent, personality, emotion) {
    let responses = global.userHappyResponses[personality][emotion];
    let rand = application.app.controllers.funcs.generateRand(responses.length);
    let result = responses[rand];

    res.status(200).json({
        "fulfillmentText": result
    });
};

module.exports.userJoking = function (application, res, intent, personality, emotion) {
    let responses = global.userJokingResponses[personality][emotion];
    let rand = application.app.controllers.funcs.generateRand(responses.length);
    let result = responses[rand];

    res.status(200).json({
        "fulfillmentText": result
    });
};

module.exports.userLonely = function (application, res, intent, personality, emotion) {
    let responses = global.userLonelyResponses[personality][emotion];
    let rand = application.app.controllers.funcs.generateRand(responses.length);
    let result = responses[rand];

    res.status(200).json({
        "fulfillmentText": result
    });
};

module.exports.userSad = function (application, res, intent, personality, emotion) {
    let responses = global.userSadResponses[personality][emotion];
    let rand = application.app.controllers.funcs.generateRand(responses.length);
    let result = responses[rand];

    res.status(200).json({
        "fulfillmentText": result
    });
};

module.exports.userTired = function (application, res, intent, personality, emotion) {
    let responses = global.userTiredResponses[personality][emotion];
    let rand = application.app.controllers.funcs.generateRand(responses.length);
    let result = responses[rand];

    res.status(200).json({
        "fulfillmentText": result
    });
};