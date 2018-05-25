/*

Personalidades
0 - afetivo
1 - astucioso
2 - excessivo
3 - eremita
4 - dócil
5 - temerário
6 - teatral
7 - flexível
8 - meticuloso

Emoções
0 - positivo
1 - tristeza
2 - negativo

 */

module.exports.conversation = function (application, req, res) {
    let body = req.body;
    let intent = body['queryResult']['intent']['displayName'];
    let message = body['queryResult']['queryText'];
    let vals = message.split('#');
    let personality = vals[vals.length-2];
    let emotion = vals[vals.length-1];

    switch (intent){
        case "smalltalk.agent.annoying":
            application.app.controllers.agent.agentAnnoying(application, res, intent, personality, emotion);
            break;
        case "smalltalk.agent.boring":
            application.app.controllers.agent.agentBoring(application, res, intent, personality, emotion);
            break;
        case "smalltalk.appraisal.bad":
            application.app.controllers.appraisal.appraisalBad(application, res, intent, personality, emotion);
            break;
        case "smalltalk.appraisal.good":
            application.app.controllers.appraisal.appraisalGood(application, res, intent, personality, emotion);
            break;
        case "smalltalk.dialog.hug":
            application.app.controllers.dialog.dialogHug(application, res, intent, personality, emotion);
            break;
        case "smalltalk.dialog.i_do_not_care":
            application.app.controllers.dialog.dialogIDoNotCare(application, res, intent, personality, emotion);
            break;
        case "smalltalk.dialog.sorry":
            application.app.controllers.dialog.dialogSorry(application, res, intent, personality, emotion);
            break;
        case "smalltalk.emotions.ha_ha":
            application.app.controllers.emotions.emotionsHaHa(application, res, intent, personality, emotion);
            break;
        case "smalltalk.emotions.wow":
            application.app.controllers.emotions.emotionsWow(application, res, intent, personality, emotion);
            break;
        case "smalltalk.user.angry":
            application.app.controllers.user.userAngry(application, res, intent, personality, emotion);
            break;
        case "smalltalk.user.bored":
            application.app.controllers.user.userBored(application, res, intent, personality, emotion);
            break;
        case "smalltalk.user.does_not_want_to_talk":
            application.app.controllers.user.userDoesNotWantToTalk(application, res, intent, personality, emotion);
            break;
        case "smalltalk.user.excited":
            application.app.controllers.user.userExcited(application, res, intent, personality, emotion);
            break;
        case "smalltalk.user.happy":
            application.app.controllers.user.userHappy(application, res, intent, personality, emotion);
            break;
        case "smalltalk.user.joking":
            application.app.controllers.user.userJoking(application, res, intent, personality, emotion);
            break;
        case "smalltalk.user.lonely":
            application.app.controllers.user.userLonely(application, res, intent, personality, emotion);
            break;
        case "smalltalk.user.sad":
            application.app.controllers.user.userSad(application, res, intent, personality, emotion);
            break;
        case "smalltalk.user.tired":
            application.app.controllers.user.userTired(application, res, intent, personality, emotion);
            break;
    }
};