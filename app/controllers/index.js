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
0 - alegria
1 - medo
2 - desgosto
3 - surpresa
4 - raiva
5 - tristeza

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
            application.app.controllers.funcs.agentAnnoying(intent, personality, emotion);
            break;
        case "smalltalk.agent.boring":
            application.app.controllers.funcs.agentBoring(intent, personality, emotion);
            break;
        case "smalltalk.appraisal.bad":
            break;
        case "smalltalk.appraisal.good":
            break;
        case "smalltalk.dialog.hug":
            break;
        case "smalltalk.dialog.i_do_not_care":
            break;
        case "smalltalk.dialog.sorry":
            break;
        case "smalltalk.emotions.ha_ha":
            break;
        case "smalltalk.emotions.wow":
            break;
        case "smalltalk.user.angry":
            break;
        case "smalltalk.user.bored":
            break;
        case "smalltalk.user.does_not_want_to_talk":
            break;
        case "smalltalk.user.excited":
            break;
        case "smalltalk.user.happy":
            break;
        case "smalltalk.user.joking":
            break;
        case "smalltalk.user.lonely":
            break;
        case "smalltalk.user.sad":
            break;
        case "smalltalk.user.tired":
            break;
    }
};