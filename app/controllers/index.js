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
            application.controllers.agent.agentAnnoying(application, res, intent, personality, emotion);
            break;
        case "smalltalk.agent.boring":
            application.controllers.agent.agentBoring(application, res, intent, personality, emotion);
            break;
        case "smalltalk.appraisal.bad":
            application.controllers.appraisal.appraisalBad(application, res, intent, personality, emotion);
            break;
        case "smalltalk.appraisal.good":
            application.controllers.appraisal.appraisalGood(application, res, intent, personality, emotion);
            break;
        case "smalltalk.dialog.hug":
            application.controllers.dialog.dialogHug(application, res, intent, personality, emotion);
            break;
        case "smalltalk.dialog.i_do_not_care":
            application.controllers.dialog.dialogIDoNotCare(application, res, intent, personality, emotion);
            break;
        case "smalltalk.dialog.sorry":
            application.controllers.dialog.dialogSorry(application, res, intent, personality, emotion);
            break;
        case "smalltalk.emotions.ha_ha":
            application.controllers.emotions.emotionsHaHa(application, res, intent, personality, emotion);
            break;
        case "smalltalk.emotions.wow":
            application.controllers.emotions.emotionsWow(application, res, intent, personality, emotion);
            break;
        case "smalltalk.user.angry":
            application.controllers.user.userAngry(application, res, intent, personality, emotion);
            break;
        case "smalltalk.user.bored":
            application.controllers.user.userBored(application, res, intent, personality, emotion);
            break;
        case "smalltalk.user.does_not_want_to_talk":
            application.controllers.user.userDoesNotWantToTalk(application, res, intent, personality, emotion);
            break;
        case "smalltalk.user.excited":
            application.controllers.user.userExcited(application, res, intent, personality, emotion);
            break;
        case "smalltalk.user.happy":
            application.controllers.user.userHappy(application, res, intent, personality, emotion);
            break;
        case "smalltalk.user.joking":
            application.controllers.user.userJoking(application, res, intent, personality, emotion);
            break;
        case "smalltalk.user.lonely":
            application.controllers.user.userLonely(application, res, intent, personality, emotion);
            break;
        case "smalltalk.user.sad":
            application.controllers.user.userSad(application, res, intent, personality, emotion);
            break;
        case "smalltalk.user.tired":
            application.controllers.user.userTired(application, res, intent, personality, emotion);
            break;
    }
};
