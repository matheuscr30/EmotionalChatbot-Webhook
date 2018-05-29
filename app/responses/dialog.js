module.exports = function () {
    global.dialogHugResponses = dialogHugResponses;
    global.dialogIDoNotCareResponses = dialogIDoNotCareResponses;
    global.dialogSorryResponses = dialogSorryResponses;
};

/*

First Index = Personality
Second Index = Emotion

 */

let dialogHugResponses = {
    0: {
        0: [],
        1: [],
        2: []
    },
    1: {
        0: [],
        1: [],
        2: []
    },
    2: {
        0: [],
        1: [],
        2: []
    },
    3: {
        0: [],
        1: [],
        2: []
    },
    4: {
        0: [],
        1: [],
        2: []
    },
    5: {
        0: [],
        1: [],
        2: []
    },
    6: {
        0: [],
        1: [],
        2: []
    },
    7: {
        0: [],
        1: [],
        2: []
    },
    8: {
        0: [],
        1: [],
        2: []
    },
};

let dialogIDoNotCareResponses = {
    0: {
        0: ["Aqui eu gostaria que você se importasse com a atividade. Ela é muito importante para você e tenho certeza que é capaz de realizar com sucesso!",
            "Eu e seu professor importamos com você. As vezes a atividade parece complicada, porém você é capaz.",
            "Espero que se importe com a atividade. A realização dela te fará crescer e você é capaz disso!",
            "Vamos lá! A atividade é muito importante e você é capaz de realizá-la com sucesso"],
        1: ["Aqui eu gostaria que você se importasse com a atividade. Ela é muito importante para você e tenho certeza que é capaz de realizar com sucesso!",
            "Eu e seu professor importamos com você. As vezes a atividade parece complicada, porém você é capaz.",
            "Espero que se importe com a atividade. A realização dela te fará crescer e você é capaz disso!",
            "Vamos lá! A atividade é muito importante e você é capaz de realizá-la com sucesso"],
        2: ["Aqui eu gostaria que você se importasse com a atividade. Ela é muito importante para você e tenho certeza que é capaz de realizar com sucesso!",
            "Eu e seu professor importamos com você. As vezes a atividade parece complicada, porém você é capaz.",
            "Espero que se importe com a atividade. A realização dela te fará crescer e você é capaz disso!",
            "Vamos lá! A atividade é muito importante e você é capaz de realizá-la com sucesso"]
    },
    1: {
        0: ["A atividade é muito importante e temos vários recursos. Talvez seja interessante você abrir uma discussão no fórum sobre o assunto.",
            "Para todos nós (virtuais ou reais) sua opinião é muito importante. Tente utilizar o fórum e outros recursos que te permita discutir da atividade.",
            "Nós importamos com seu sucesso. Tente utilizar o fórum e mais pessoas vão te ajudar.",
            "Nós sempre queremos te ver bem e com opiniões positivas. Que tal utilizar o fórum."],
        1: ["A atividade é muito importante e temos vários recursos. Talvez seja interessante você abrir uma discussão no fórum sobre o assunto.",
            "Para todos nós (virtuais ou reais) sua opinião é muito importante. Tente utilizar o fórum e outros recursos que te permita discutir da atividade.",
            "Nós importamos com seu sucesso. Tente utilizar o fórum e mais pessoas vão te ajudar.",
            "Nós sempre queremos te ver bem e com opiniões positivas. Que tal utilizar o fórum."],
        2: ["A atividade é muito importante e temos vários recursos. Talvez seja interessante você abrir uma discussão no fórum sobre o assunto.",
            "Para todos nós (virtuais ou reais) sua opinião é muito importante. Tente utilizar o fórum e outros recursos que te permita discutir da atividade.",
            "Nós importamos com seu sucesso. Tente utilizar o fórum e mais pessoas vão te ajudar.",
            "Nós sempre queremos te ver bem e com opiniões positivas. Que tal utilizar o fórum."]
    },
    2: {//Acho que errei aqui.
        0: ["O conteúdo é sempre importante. E se procurasse por analogias? Existem ótimos vídeos que apresentam conteúdos com analogia. Talvez seria legal assistir alguns.",
            "Você está indiferente com a atividade? Pode ser por algum conteúdo anterior perdido. Tente voltar no conteúdo anterior para reforçar os conhecimentos!",
            "Estou aqui tentando te ajudar. Talvez você esteja chateado com relação a algo do conteúdo. Experimente revisar a atividade anterior. Pode ser um bom caminho",
            "As vezes o conteúdo está mais fácil, as vezes mais difícil. Seria interessante você não deixar acumular as atividades e tentar associar seus conhecimentos."
        ],
        1: ["O conteúdo é sempre importante. E se procurasse por analogias? Existem ótimos vídeos que apresentam conteúdos com analogia. Talvez seria legal assistir alguns.",
            "Você está indiferente com a atividade? Pode ser por algum conteúdo anterior perdido. Tente voltar no conteúdo anterior para reforçar os conhecimentos!",
            "Estou aqui tentando te ajudar. Talvez você esteja chateado com relação a algo do conteúdo. Experimente revisar a atividade anterior. Pode ser um bom caminho",
            "As vezes o conteúdo está mais fácil, as vezes mais difícil. Seria interessante você não deixar acumular as atividades e tentar associar seus conhecimentos."
        ],
        2: ["O conteúdo é sempre importante. E se procurasse por analogias? Existem ótimos vídeos que apresentam conteúdos com analogia. Talvez seria legal assistir alguns.",
            "Você está indiferente com a atividade? Pode ser por algum conteúdo anterior perdido. Tente voltar no conteúdo anterior para reforçar os conhecimentos!",
            "Estou aqui tentando te ajudar. Talvez você esteja chateado com relação a algo do conteúdo. Experimente revisar a atividade anterior. Pode ser um bom caminho",
            "As vezes o conteúdo está mais fácil, as vezes mais difícil. Seria interessante você não deixar acumular as atividades e tentar associar seus conhecimentos."
        ]
    },
    3: {
        0: ["Com o que você se importa e gostaria de conversar? Sou capaz de fazer rápidas buscas na internet. Basta colocar frases do tipo 'O que é programação de computadores?'",
            "Me parece que o assunto não está te agradando. Fique tranquilo que podemos dialogar sobre outros assuntos. Você tem alguma dúvida geral? Basta perguntar 'O que é...'",
            "Mudar de assunto me parece que pode ser mais motivador. Me pergunte sobre algo para eu tentar te ajudar.",
            "Ok! O assunto não parece bom. Vamos lá! Como posso te ajudar? Me pergunte algo para eu tentar te responder."],
        1: ["Com o que você se importa e gostaria de conversar? Sou capaz de fazer rápidas buscas na internet. Basta colocar frases do tipo 'O que é programação de computadores?'",
            "Me parece que o assunto não está te agradando. Fique tranquilo que podemos dialogar sobre outros assuntos. Você tem alguma dúvida geral? Basta perguntar 'O que é...'",
            "Mudar de assunto me parece que pode ser mais motivador. Me pergunte sobre algo para eu tentar te ajudar.",
            "Ok! O assunto não parece bom. Vamos lá! Como posso te ajudar? Me pergunte algo para eu tentar te responder."],
        2: ["Com o que você se importa e gostaria de conversar? Sou capaz de fazer rápidas buscas na internet. Basta colocar frases do tipo 'O que é programação de computadores?'",
            "Me parece que o assunto não está te agradando. Fique tranquilo que podemos dialogar sobre outros assuntos. Você tem alguma dúvida geral? Basta perguntar 'O que é...'",
            "Mudar de assunto me parece que pode ser mais motivador. Me pergunte sobre algo para eu tentar te ajudar.",
            "Ok! O assunto não parece bom. Vamos lá! Como posso te ajudar? Me pergunte algo para eu tentar te responder."]
    },
    4: {//Este eu acho que varia de tristeza para raiva... A resposta pode ser que o usuário esteja triste ou com raiva
        0: ["Estou aqui para te ver sempre feliz. Você é um aluno muito especial!",
            "Muitas vezes as atividades diárias nos deixam meio desmotivados, mas seus colegas e professores podem te ajudar a melhorar o humor. Também estou sempre aqui para te fazer feliz",
            "Nada de indiferença por aqui. Vamos tentar resolver as atividades de forma divertida. Chame um colega para colaborar. Tire dúvidas com o professor. Você é muito especial",
            "Você é muito importante para nós. Vamos lá e dê o seu melhor. Estou aqui torcendo por você.",
            "Sorria e nada de não se importar. Continue sua atividade e eu estarei aqui te ajudando."],
        1: ["Estou aqui para te ver sempre feliz. Você é um aluno muito especial!",
            "Muitas vezes as atividades diárias nos deixam meio desmotivados, mas seus colegas e professores podem te ajudar a melhorar o humor. Também estou sempre aqui para te fazer feliz",
            "Nada de indiferença por aqui. Vamos tentar resolver as atividades de forma divertida. Chame um colega para colaborar. Tire dúvidas com o professor. Você é muito especial",
            "Você é muito importante para nós. Vamos lá e dê o seu melhor. Estou aqui torcendo por você.",
            "Sorria e nada de não se importar. Continue sua atividade e eu estarei aqui te ajudando."],
        2: ["Estou aqui para te ver sempre feliz. Você é um aluno muito especial!",
            "Muitas vezes as atividades diárias nos deixam meio desmotivados, mas seus colegas e professores podem te ajudar a melhorar o humor. Também estou sempre aqui para te fazer feliz",
            "Nada de indiferença por aqui. Vamos tentar resolver as atividades de forma divertida. Chame um colega para colaborar. Tire dúvidas com o professor. Você é muito especial",
            "Você é muito importante para nós. Vamos lá e dê o seu melhor. Estou aqui torcendo por você.",
            "Sorria e nada de não se importar. Continue sua atividade e eu estarei aqui te ajudando."]
    },
    5: {
        0: ["Já procurou algum material na internet? Te recomendo fazer isso para se motivar mais!",
            "Se for com a atividade, você deveria se importar. Experimente visitar a biblioteca e verificar os materiais necessários para este conteúdo",
            "Você pode até não se importar comigo, mas deveria se importar com as atividades. Procure por materiais na internet, eles podem ser uma boa opção para complementar seu conhecimento.",
            "Não sei o que tem te causado indiferença, mas para as atividades é bom que esteja feliz. Blogs e wikis são ótimas alternativas de conteúdo disponíveis aqui na internet. Eles são meus parceiros."],
        1: ["Já procurou algum material na internet? Te recomendo fazer isso para se motivar mais!",
            "Se for com a atividade, você deveria se importar. Experimente visitar a biblioteca e verificar os materiais necessários para este conteúdo",
            "Você pode até não se importar comigo, mas deveria se importar com as atividades. Procure por materiais na internet, eles podem ser uma boa opção para complementar seu conhecimento.",
            "Não sei o que tem te causado indiferença, mas para as atividades é bom que esteja feliz. Blogs e wikis são ótimas alternativas de conteúdo disponíveis aqui na internet. Eles são meus parceiros."],
        2: ["Já procurou algum material na internet? Te recomendo fazer isso para se motivar mais!",
            "Se for com a atividade, você deveria se importar. Experimente visitar a biblioteca e verificar os materiais necessários para este conteúdo",
            "Você pode até não se importar comigo, mas deveria se importar com as atividades. Procure por materiais na internet, eles podem ser uma boa opção para complementar seu conhecimento.",
            "Não sei o que tem te causado indiferença, mas para as atividades é bom que esteja feliz. Blogs e wikis são ótimas alternativas de conteúdo disponíveis aqui na internet. Eles são meus parceiros."]
    },
    6: {
        0: [],
        1: [],
        2: []
    },
    7: {
        0: [],
        1: [],
        2: []
    },
    8: {
        0: [],
        1: [],
        2: []
    },
};

let dialogSorryResponses = {
    0: {
        0: [],
        1: [],
        2: []
    },
    1: {
        0: [],
        1: [],
        2: []
    },
    2: {
        0: [],
        1: [],
        2: []
    },
    3: {
        0: [],
        1: [],
        2: []
    },
    4: {
        0: [],
        1: [],
        2: []
    },
    5: {
        0: [],
        1: [],
        2: []
    },
    6: {
        0: [],
        1: [],
        2: []
    },
    7: {
        0: [],
        1: [],
        2: []
    },
    8: {
        0: [],
        1: [],
        2: []
    },
};