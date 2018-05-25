module.exports = function () {
    global.userAngryResponses = userAngryResponses;
    global.userBoredResponses = userBoredResponses;
    global.userDoesNotWantToTalkResponses = userDoesNotWantToTalkResponses;
    global.userExcitedResponses = userExcitedResponses;
    global.userHappyResponses = userHappyResponses;
    global.userJokingResponses = userJokingResponses;
    global.userLonelyResponses = userLonelyResponses;
    global.userSadResponses = userSadResponses;
    global.userTiredResponses = userTiredResponses;
};

/*

First Index = Personality
Second Index = Emotion

 */

let userAngryResponses = {
    0: {
        0: [
            "Não se irrite comigo, só estou tentando te ajudar e sei que você é capaz",
            "Não fique irritado, só estou tentando ajudar porque sei que você é capaz",
            "Por que você está irritado?",
            "Esqueça isso, tenho certeza que essa irritação vai passar",
            "Esquece isso, tenho certeza que esse sentimento vai embora",
            "Você tem que esquecer uma pouco isso,  tenho certeza que isso vai passar"
        ],
        1: [
            "Não se irrite comigo, só estou tentando te ajudar e sei que você é capaz",
            "Não fique irritado, só estou tentando ajudar porque sei que você é capaz",
            "Por que você está irritado?",
            "Esqueça isso, tenho certeza que essa irritação vai passar",
            "Esquece isso, tenho certeza que esse sentimento vai embora",
            "Você tem que esquecer uma pouco isso,  tenho certeza que isso vai passar"
        ],
        2: [
            "Não se irrite comigo, só estou tentando te ajudar e sei que você é capaz",
            "Não fique irritado, só estou tentando ajudar porque sei que você é capaz",
            "Por que você está irritado?",
            "Esqueça isso, tenho certeza que essa irritação vai passar",
            "Esquece isso, tenho certeza que esse sentimento vai embora",
            "Você tem que esquecer uma pouco isso,  tenho certeza que isso vai passar"
        ]
    },
    1: {
        0: ["Talvez seja interessante você abrir uma discussão no fórum, seus amigos podem te ajudar",
            "Já  tentou utilizar o chat ou fórum do ambiente? São excelentes ferramentas que o ambiente promove",
            "Sugiro você utilizar o fórum para te ajudar a ficar mais tranquilo.",
            "Você tem razão, posso ser chato as vezes. Sugiro você colocar sua dúvida no fórum."
        ],
        1: ["Talvez seja interessante você abrir uma discussão no fórum, seus amigos podem te ajudar",
            "Já  tentou utilizar o chat ou fórum do ambiente? São excelentes ferramentas que o ambiente promove",
            "Sugiro você utilizar o fórum para te ajudar a ficar mais tranquilo.",
            "Você tem razão, posso ser chato as vezes. Sugiro você colocar sua dúvida no fórum."
        ],
        2: ["Talvez seja interessante você abrir uma discussão no fórum, seus amigos podem te ajudar",
            "Já  tentou utilizar o chat ou fórum do ambiente? São excelentes ferramentas que o ambiente promove",
            "Sugiro você utilizar o fórum para te ajudar a ficar mais tranquilo.",
            "Você tem razão, posso ser chato as vezes. Sugiro você colocar sua dúvida no fórum."
        ]
    },
    2: {
        0: ["Me parece que você gosta de analogias. Existem ótimos vídeos que apresentam conteúdos com analogia. Talvez seria legal assistir alguns.",
            "Você está bravo comigo por conta da atividade? Geralmente os conteúdos são sequenciais. Tente voltar no conteúdo anterior para reforçar os conhecimentos!",
            "Estou aqui tentando te ajudar. Talvez você esteja bravo por conta do conteúdo. Experimente revisar a atividade anterior. Pode ser um bom caminho",
            "As vezes sou chato, as vezes legal. As vezes o conteúdo está mais fácil, as vezes mais difícil. Seria interessante você não deixar acumular as atividades e tentar associar o conteúdo anterior com o atual."
        ],
        1: ["Me parece que você gosta de analogias. Existem ótimos vídeos que apresentam conteúdos com analogia. Talvez seria legal assistir alguns.",
            "Você está bravo comigo por conta da atividade? Geralmente os conteúdos são sequenciais. Tente voltar no conteúdo anterior para reforçar os conhecimentos!",
            "Estou aqui tentando te ajudar. Talvez você esteja bravo por conta do conteúdo. Experimente revisar a atividade anterior. Pode ser um bom caminho",
            "As vezes sou chato, as vezes legal. As vezes o conteúdo está mais fácil, as vezes mais difícil. Seria interessante você não deixar acumular as atividades e tentar associar o conteúdo anterior com o atual."
        ],
        2: ["Me parece que você gosta de analogias. Existem ótimos vídeos que apresentam conteúdos com analogia. Talvez seria legal assistir alguns.",
            "Você está bravo comigo por conta da atividade? Geralmente os conteúdos são sequenciais. Tente voltar no conteúdo anterior para reforçar os conhecimentos!",
            "Estou aqui tentando te ajudar. Talvez você esteja bravo por conta do conteúdo. Experimente revisar a atividade anterior. Pode ser um bom caminho",
            "As vezes sou chato, as vezes legal. As vezes o conteúdo está mais fácil, as vezes mais difícil. Seria interessante você não deixar acumular as atividades e tentar associar o conteúdo anterior com o atual."
        ]
    },
    3: {
        0: ["O que você gostaria de conversar? Sou capaz de fazer rápidas buscas na internet. Basta colocar frases do tipo 'O que é programação de computadores?'",
            "Me parece que o assunto não está te agradando. Fique tranquilo que podemos dialogar sobre outros assuntos. Você tem alguma dúvida gera? Basta perguntar 'O que é...'",
            "Mudar de assunto me parece que te fará bem. Me pergunte sobre algo para eu tentar te ajudar.",
            "Ok! O assunto não parece bom. Vamos lá! Como posso te ajudar? Me pergunte algo para eu tentar te responder"
        ],
        1: ["O que você gostaria de conversar? Sou capaz de fazer rápidas buscas na internet. Basta colocar frases do tipo 'O que é programação de computadores?'",
            "Me parece que o assunto não está te agradando. Fique tranquilo que podemos dialogar sobre outros assuntos. Você tem alguma dúvida gera? Basta perguntar 'O que é...'",
            "Mudar de assunto me parece que te fará bem. Me pergunte sobre algo para eu tentar te ajudar.",
            "Ok! O assunto não parece bom. Vamos lá! Como posso te ajudar? Me pergunte algo para eu tentar te responder"
        ],
        2: ["O que você gostaria de conversar? Sou capaz de fazer rápidas buscas na internet. Basta colocar frases do tipo 'O que é programação de computadores?'",
            "Me parece que o assunto não está te agradando. Fique tranquilo que podemos dialogar sobre outros assuntos. Você tem alguma dúvida gera? Basta perguntar 'O que é...'",
            "Mudar de assunto me parece que te fará bem. Me pergunte sobre algo para eu tentar te ajudar.",
            "Ok! O assunto não parece bom. Vamos lá! Como posso te ajudar? Me pergunte algo para eu tentar te responder"
        ]
    },
    4: {
        0: ["Você deveria estar resolvendo suas atividades. Você é capaz!!",
            "Eu acho você legal e inteligente. Estou aqui para te incentivar a resolver suas atividades!",
            "Eu só tenho elogios a você. Vamos resolver as atividades!",
            "Isto não me parece você. Acredito que esteja com raiva. Fique tranquilo e em seguida tente resolver suas atividades!"
        ],
        1: ["Você deveria estar resolvendo suas atividades. Você é capaz!!",
            "Eu acho você legal e inteligente. Estou aqui para te incentivar a resolver suas atividades!",
            "Eu só tenho elogios a você. Vamos resolver as atividades!",
            "Isto não me parece você. Acredito que esteja com raiva. Fique tranquilo e em seguida tente resolver suas atividades!"
        ],
        2: ["Você deveria estar resolvendo suas atividades. Você é capaz!!",
            "Eu acho você legal e inteligente. Estou aqui para te incentivar a resolver suas atividades!",
            "Eu só tenho elogios a você. Vamos resolver as atividades!",
            "Isto não me parece você. Acredito que esteja com raiva. Fique tranquilo e em seguida tente resolver suas atividades!"
        ]
    },
    5: {
        0: ["Talvez eu não esteja sendo necessário neste momento. Tente procurar vídeos na internet.",
            "Me desculpa não estar sendo útil neste momento. Experimente visitar a biblioteca e verificar os materiais necessários para este conteúdo",
            "Devo não estar te ajudando. Procure por materiais na internet, eles podem ser uma boa opção para complementar seu conhecimento.",
            "Que pena não estar te ajudando. Blogs e wikis são ótimas alternativas de conteúdo disponíveis aqui na internet. Eles são meus parceiros."
        ],
        1: ["Talvez eu não esteja sendo necessário neste momento. Tente procurar vídeos na internet.",
            "Me desculpa não estar sendo útil neste momento. Experimente visitar a biblioteca e verificar os materiais necessários para este conteúdo",
            "Devo não estar te ajudando. Procure por materiais na internet, eles podem ser uma boa opção para complementar seu conhecimento.",
            "Que pena não estar te ajudando. Blogs e wikis são ótimas alternativas de conteúdo disponíveis aqui na internet. Eles são meus parceiros."
        ],
        2: ["Talvez eu não esteja sendo necessário neste momento. Tente procurar vídeos na internet.",
            "Me desculpa não estar sendo útil neste momento. Experimente visitar a biblioteca e verificar os materiais necessários para este conteúdo",
            "Devo não estar te ajudando. Procure por materiais na internet, eles podem ser uma boa opção para complementar seu conhecimento.",
            "Que pena não estar te ajudando. Blogs e wikis são ótimas alternativas de conteúdo disponíveis aqui na internet. Eles são meus parceiros."
        ]
    },
    6: {
        0: ["Você já ouviu falar em wikis? São páginas colaborativas na internet que talvez vá te ajudar neste momento!",
            "Estou sempre disponível para te ajudar, porém existem outras formas de auxiliá-lo. Procure por fóruns na internet ou seu professor.",
            "Apesar de eu ser muito esperto, sou apenas um assistente virtual. Que tal procurar seu professor ou colegas neste momento para te auxiliar?",
            "Gostaria de te ajudar, mas, pelo que consegui compreender, não estou sendo tão útil no momento. Recomendo procurar materiais na internet ou tirar dúvida com seus colegas! "
        ],
        1: ["Você já ouviu falar em wikis? São páginas colaborativas na internet que talvez vá te ajudar neste momento!",
            "Estou sempre disponível para te ajudar, porém existem outras formas de auxiliá-lo. Procure por fóruns na internet ou seu professor.",
            "Apesar de eu ser muito esperto, sou apenas um assistente virtual. Que tal procurar seu professor ou colegas neste momento para te auxiliar?",
            "Gostaria de te ajudar, mas, pelo que consegui compreender, não estou sendo tão útil no momento. Recomendo procurar materiais na internet ou tirar dúvida com seus colegas! "
        ],
        2: ["Você já ouviu falar em wikis? São páginas colaborativas na internet que talvez vá te ajudar neste momento!",
            "Estou sempre disponível para te ajudar, porém existem outras formas de auxiliá-lo. Procure por fóruns na internet ou seu professor.",
            "Apesar de eu ser muito esperto, sou apenas um assistente virtual. Que tal procurar seu professor ou colegas neste momento para te auxiliar?",
            "Gostaria de te ajudar, mas, pelo que consegui compreender, não estou sendo tão útil no momento. Recomendo procurar materiais na internet ou tirar dúvida com seus colegas! "
        ]
    },
    7: {
        0: [],
        1: [],
        2: []
    },
    8: {
        0: ["No momento você deveria focar em resolver a atividade!",
            "Seria interessante você se preocupar em resolver a atividade, posteriormente você pode até auxiliar seus colegas =)",
            "Você demonstra bom desempenho. Acho que deveria estar focado em resolver a atividade.",
            "Eu só estou aqui porque você tem atividades para realizar. Vamos lá! Você é capaz de resolver isto em pouco tempo."
        ],
        1: ["No momento você deveria focar em resolver a atividade!",
            "Seria interessante você se preocupar em resolver a atividade, posteriormente você pode até auxiliar seus colegas =)",
            "Você demonstra bom desempenho. Acho que deveria estar focado em resolver a atividade.",
            "Eu só estou aqui porque você tem atividades para realizar. Vamos lá! Você é capaz de resolver isto em pouco tempo."
        ],
        2: ["No momento você deveria focar em resolver a atividade!",
            "Seria interessante você se preocupar em resolver a atividade, posteriormente você pode até auxiliar seus colegas =)",
            "Você demonstra bom desempenho. Acho que deveria estar focado em resolver a atividade.",
            "Eu só estou aqui porque você tem atividades para realizar. Vamos lá! Você é capaz de resolver isto em pouco tempo."
        ]
    },
};

let userBoredResponses = {
    0: {
        0: ["Não se irrite comigo, só estou tentando te ajudar e sei que você é capaz",
            "Não fique irritado, só estou tentando ajudar porque sei que você é capaz",
            "Por que você está irritado?",
            "Esqueça isso, tenho certeza que essa irritação vai passar",
            "Esquece isso, tenho certeza que esse sentimento vai embora",
            "Você tem que esquecer uma pouco isso,  tenho certeza que isso vai passar"
        ],
        1: ["Não se irrite comigo, só estou tentando te ajudar e sei que você é capaz",
            "Não fique irritado, só estou tentando ajudar porque sei que você é capaz",
            "Por que você está irritado?",
            "Esqueça isso, tenho certeza que essa irritação vai passar",
            "Esquece isso, tenho certeza que esse sentimento vai embora",
            "Você tem que esquecer uma pouco isso,  tenho certeza que isso vai passar"
        ],
        2: ["Não se irrite comigo, só estou tentando te ajudar e sei que você é capaz",
            "Não fique irritado, só estou tentando ajudar porque sei que você é capaz",
            "Por que você está irritado?",
            "Esqueça isso, tenho certeza que essa irritação vai passar",
            "Esquece isso, tenho certeza que esse sentimento vai embora",
            "Você tem que esquecer uma pouco isso,  tenho certeza que isso vai passar"
        ]
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

let userDoesNotWantToTalkResponses = {
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

let userExcitedResponses = {
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

let userHappyResponses = {
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

let userJokingResponses = {
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
}

let userLonelyResponses = {
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
}

let userSadResponses = {
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
}

let userTiredResponses = {
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
}