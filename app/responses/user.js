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


let userAngryResponses = { //melhorar
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
            "Me parece que o assunto não está te agradando. Fique tranquilo que podemos dialogar sobre outros assuntos. Você tem alguma dúvida geral? Basta perguntar 'O que é...'",
            "Mudar de assunto me parece que te fará bem. Me pergunte sobre algo para eu tentar te ajudar.",
            "Ok! O assunto não parece bom. Vamos lá! Como posso te ajudar? Me pergunte algo para eu tentar te responder"
        ],
        1: ["O que você gostaria de conversar? Sou capaz de fazer rápidas buscas na internet. Basta colocar frases do tipo 'O que é programação de computadores?'",
            "Me parece que o assunto não está te agradando. Fique tranquilo que podemos dialogar sobre outros assuntos. Você tem alguma dúvida geral? Basta perguntar 'O que é...'",
            "Mudar de assunto me parece que te fará bem. Me pergunte sobre algo para eu tentar te ajudar.",
            "Ok! O assunto não parece bom. Vamos lá! Como posso te ajudar? Me pergunte algo para eu tentar te responder"
        ],
        2: ["O que você gostaria de conversar? Sou capaz de fazer rápidas buscas na internet. Basta colocar frases do tipo 'O que é programação de computadores?'",
            "Me parece que o assunto não está te agradando. Fique tranquilo que podemos dialogar sobre outros assuntos. Você tem alguma dúvida geral? Basta perguntar 'O que é...'",
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
    0: { //melhorar
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
        0: ["O que te faz ficar assim? Talvez seria melhor descansar no momento!",
            "Sou um assistente virtual, porém não gosto de te ver entediado. Não seria uma boa estratégia mudar a atividade atual?",
            "O tédio não está associado ao que está fazendo no momento? Tente pular o exercício e isso pode te facilitar",
            "Não gosto de te ver entendiado. Você gosta de ouvir músicas? Ler notícias? Pode ser o que esteja precisando neste momento."
        ],
        1: ["O que te faz ficar assim? Talvez seria melhor descansar no momento!",
            "Sou um assistente virtual, porém não gosto de te ver entediado. Não seria uma boa estratégia mudar a atividade atual?",
            "O tédio não está associado ao que está fazendo no momento? Tente pular o exercício e isso pode te facilitar",
            "Não gosto de te ver entendiado. Você gosta de ouvir músicas? Ler notícias? Pode ser o que esteja precisando neste momento."
        ],
        2: ["O que te faz ficar assim? Talvez seria melhor descansar no momento!",
            "Sou um assistente virtual, porém não gosto de te ver entediado. Não seria uma boa estratégia mudar a atividade atual?",
            "O tédio não está associado ao que está fazendo no momento? Tente pular o exercício e isso pode te facilitar",
            "Não gosto de te ver entendiado. Você gosta de ouvir músicas? Ler notícias? Pode ser o que esteja precisando neste momento."
        ]
    },
    2: {
        0: ["Já procurou saber a origem do conteúdo que está estudando? Sempre há uma história interessante por trás!",
            "Sugiro pesquisar além do conteúdo passado em sala de aula. Isto nos engrandece.",
            "Saber a origem e onde o conteúdo que está estudando pode ser aplicado nos encoraja a querer estudar mais",
            "Que tal aprofundar no assunto que está estudando? Existem muitos materiais interessantes na internet."
        ],
        1: ["Já procurou saber a origem do conteúdo que está estudando? Sempre há uma história interessante por trás!",
            "Sugiro pesquisar além do conteúdo passado em sala de aula. Isto nos engrandece.",
            "Saber a origem e onde o conteúdo que está estudando pode ser aplicado nos encoraja a querer estudar mais",
            "Que tal aprofundar no assunto que está estudando? Existem muitos materiais interessantes na internet."
        ],
        2: ["Já procurou saber a origem do conteúdo que está estudando? Sempre há uma história interessante por trás!",
            "Sugiro pesquisar além do conteúdo passado em sala de aula. Isto nos engrandece.",
            "Saber a origem e onde o conteúdo que está estudando pode ser aplicado nos encoraja a querer estudar mais",
            "Que tal aprofundar no assunto que está estudando? Existem muitos materiais interessantes na internet."
        ]
    },
    3: { //melhorar
        0: ["O que você gostaria de conversar? Sou capaz de fazer rápidas buscas na internet. Basta colocar frases do tipo 'O que é programação de computadores?'",
            "Me parece que o assunto não está te agradando. Fique tranquilo que podemos dialogar sobre outros assuntos. Você tem alguma dúvida geral? Basta perguntar 'O que é...'",
            "Mudar de assunto me parece que te fará bem. Me pergunte sobre algo para eu tentar te ajudar.",
            "Ok! O assunto não parece bom. Vamos lá! Como posso te ajudar? Me pergunte algo para eu tentar te responder"
        ],
        1: ["O que você gostaria de conversar? Sou capaz de fazer rápidas buscas na internet. Basta colocar frases do tipo 'O que é programação de computadores?'",
            "Me parece que o assunto não está te agradando. Fique tranquilo que podemos dialogar sobre outros assuntos. Você tem alguma dúvida geral? Basta perguntar 'O que é...'",
            "Mudar de assunto me parece que te fará bem. Me pergunte sobre algo para eu tentar te ajudar.",
            "Ok! O assunto não parece bom. Vamos lá! Como posso te ajudar? Me pergunte algo para eu tentar te responder"
        ],
        2: ["O que você gostaria de conversar? Sou capaz de fazer rápidas buscas na internet. Basta colocar frases do tipo 'O que é programação de computadores?'",
            "Me parece que o assunto não está te agradando. Fique tranquilo que podemos dialogar sobre outros assuntos. Você tem alguma dúvida geral? Basta perguntar 'O que é...'",
            "Mudar de assunto me parece que te fará bem. Me pergunte sobre algo para eu tentar te ajudar.",
            "Ok! O assunto não parece bom. Vamos lá! Como posso te ajudar? Me pergunte algo para eu tentar te responder"
        ]
    },
    4: {
        0: ["Estarei aqui até que saia do tédio.",
            "Muitas vezes as atividades diárias nos causam tédio, mas seus colegas e professores podem te ajudar a melhorar o humor. Também estou sempre aqui para te fazer feliz",
            "Nada de tédio por aqui. Vamos tentar resolver as atividades de forma divertida. Chame um colega para colaborar. Tire dúvidas com o professor. Você é muito especial",
            "Você é muito importante para nós. Vamos lá e dê o seu melhor. Estou aqui torcendo por você.",
            "Sorria e nada de tédio. Continue sua atividade e eu estarei aqui te ajudando."
        ],
        1: ["Estarei aqui até que saia do tédio.",
            "Muitas vezes as atividades diárias nos causam tédio, mas seus colegas e professores podem te ajudar a melhorar o humor. Também estou sempre aqui para te fazer feliz",
            "Nada de tédio por aqui. Vamos tentar resolver as atividades de forma divertida. Chame um colega para colaborar. Tire dúvidas com o professor. Você é muito especial",
            "Você é muito importante para nós. Vamos lá e dê o seu melhor. Estou aqui torcendo por você.",
            "Sorria e nada de tédio. Continue sua atividade e eu estarei aqui te ajudando."
        ],
        2: ["Estarei aqui até que saia do tédio.",
            "Muitas vezes as atividades diárias nos causam tédio, mas seus colegas e professores podem te ajudar a melhorar o humor. Também estou sempre aqui para te fazer feliz",
            "Nada de tédio por aqui. Vamos tentar resolver as atividades de forma divertida. Chame um colega para colaborar. Tire dúvidas com o professor. Você é muito especial",
            "Você é muito importante para nós. Vamos lá e dê o seu melhor. Estou aqui torcendo por você.",
            "Sorria e nada de tédio. Continue sua atividade e eu estarei aqui te ajudando."
        ]
    },
    5: { //melhorar
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
        0: ["Isso aí! Parabéns pelo seu desempenho, você está cada vez melhor!",
            "Estou feliz com sua alegria! Continue assim!",
            "Você é genial! Que bom que está feliz!",
            "Se você está feliz eu fico feliz, você está se superando a cada dia!"
        ],
        1: ["Isso aí! Parabéns pelo seu desempenho, você está cada vez melhor!",
            "Estou feliz com sua alegria! Continue assim!",
            "Você é genial! Que bom que está feliz!",
            "Se você está feliz eu fico feliz, você está se superando a cada dia!"
        ],
        2: ["Isso aí! Parabéns pelo seu desempenho, você está cada vez melhor!",
            "Estou feliz com sua alegria! Continue assim!",
            "Você é genial! Que bom que está feliz!",
            "Se você está feliz eu fico feliz, você está se superando a cada dia!"
        ]
    },
    1: {
        0: ["Nosso fórum de discussões é muito legal, lá você pode ter ajuda e ajudar seus amigos!",
            "Nosso ambiente possui excelentes ferramentas que vão te ajudar a aprimorar seus conhecimentos, utilize nosso chat ou fórum!",
            "Sei que você é uma pessoa muito esperta e inteligente, mas se precisar consulte nosso fórum de discussões.",
            "Vamos colaborar no fórum! Seus amigos podem gostar! Seus amigos podem te ajudar!"
        ],
        1: ["Nosso fórum de discussões é muito legal, lá você pode ter ajuda e ajudar seus amigos!",
            "Nosso ambiente possui excelentes ferramentas que vão te ajudar a aprimorar seus conhecimentos, utilize nosso chat ou fórum!",
            "Sei que você é uma pessoa muito esperta e inteligente, mas se precisar consulte nosso fórum de discussões.",
            "Vamos colaborar no fórum! Seus amigos podem gostar! Seus amigos podem te ajudar!"
        ],
        2: ["Nosso fórum de discussões é muito legal, lá você pode ter ajuda e ajudar seus amigos!",
            "Nosso ambiente possui excelentes ferramentas que vão te ajudar a aprimorar seus conhecimentos, utilize nosso chat ou fórum!",
            "Sei que você é uma pessoa muito esperta e inteligente, mas se precisar consulte nosso fórum de discussões.",
            "Vamos colaborar no fórum! Seus amigos podem gostar! Seus amigos podem te ajudar!"
        ]
    },
    2: {
        0: ["Você é muito bom e apresenta domínio. Continue aprofundando seus estudos e se surpreendendo!",
            "Para continuar avançando, sugiro pesquisar além do conteúdo passado em sala de aula. Isto nos engrandece.",
            "Que tal ir além? Saber a origem e onde o conteúdo que está estudando pode ser aplicado vai te encorajar a querer estudar mais",
            "Que tal aproveitar o momento e aprofundar no assunto que está estudando? Existem muitos materiais interessantes na internet."
        ],
        1: ["Você é muito bom e apresenta domínio. Continue aprofundando seus estudos e se surpreendendo!",
            "Para continuar avançando, sugiro pesquisar além do conteúdo passado em sala de aula. Isto nos engrandece.",
            "Que tal ir além? Saber a origem e onde o conteúdo que está estudando pode ser aplicado vai te encorajar a querer estudar mais",
            "Que tal aproveitar o momento e aprofundar no assunto que está estudando? Existem muitos materiais interessantes na internet."
        ],
        2: ["Você é muito bom e apresenta domínio. Continue aprofundando seus estudos e se surpreendendo!",
            "Para continuar avançando, sugiro pesquisar além do conteúdo passado em sala de aula. Isto nos engrandece.",
            "Que tal ir além? Saber a origem e onde o conteúdo que está estudando pode ser aplicado vai te encorajar a querer estudar mais",
            "Que tal aproveitar o momento e aprofundar no assunto que está estudando? Existem muitos materiais interessantes na internet."
        ]
    },
    3: {
        0: ["Aproveitando seu estado, sugiro você revisar o conteúdo e aprofundar naquilo que ainda tem dúvidas.",
            "Que tal aproveitar que está feliz e solicitar ao seu professor algum material extra para continuar os estudos? O conhecimento é sempre útil",
            "Você é muito bom em solucionar suas atividades, aproveite a internet para buscar materiais e atividades complementares!",
            "Você está feliz e sabe também da sua capacidade. Te recomendo a continuar aprofundando no conhecimento"
        ],
        1: ["Aproveitando seu estado, sugiro você revisar o conteúdo e aprofundar naquilo que ainda tem dúvidas.",
            "Que tal aproveitar que está feliz e solicitar ao seu professor algum material extra para continuar os estudos? O conhecimento é sempre útil",
            "Você é muito bom em solucionar suas atividades, aproveite a internet para buscar materiais e atividades complementares!",
            "Você está feliz e sabe também da sua capacidade. Te recomendo a continuar aprofundando no conhecimento"
        ],
        2: ["Aproveitando seu estado, sugiro você revisar o conteúdo e aprofundar naquilo que ainda tem dúvidas.",
            "Que tal aproveitar que está feliz e solicitar ao seu professor algum material extra para continuar os estudos? O conhecimento é sempre útil",
            "Você é muito bom em solucionar suas atividades, aproveite a internet para buscar materiais e atividades complementares!",
            "Você está feliz e sabe também da sua capacidade. Te recomendo a continuar aprofundando no conhecimento"
        ]
    },
    4: {
        0: ["Você é um excelente estudante. Continue resolvendo suas atividades no prazo para ter bons resultados!",
            "Eu estou sempre aqui para te incentivar a continuar feliz.",
            "Eu só tenho elogios a você. Procure administrar bem seu tempo para estar sempre feliz!!",
            "Aproveite sua energia e, caso tenha atividades pendentes, tente resolvê-las! Você é capaz!"
        ],
        1: ["Você é um excelente estudante. Continue resolvendo suas atividades no prazo para ter bons resultados!",
            "Eu estou sempre aqui para te incentivar a continuar feliz.",
            "Eu só tenho elogios a você. Procure administrar bem seu tempo para estar sempre feliz!!",
            "Aproveite sua energia e, caso tenha atividades pendentes, tente resolvê-las! Você é capaz!"
        ],
        2: ["Você é um excelente estudante. Continue resolvendo suas atividades no prazo para ter bons resultados!",
            "Eu estou sempre aqui para te incentivar a continuar feliz.",
            "Eu só tenho elogios a você. Procure administrar bem seu tempo para estar sempre feliz!!",
            "Aproveite sua energia e, caso tenha atividades pendentes, tente resolvê-las! Você é capaz!"
        ]
    },
    5: {
        0: ["Você conhece sobre tecnologias educacionais? Podcasts e blogs também servem para auxiliar na educação. Aproveite que está alegre e procure materiais complementares para o conteúdo estudado",
            "Seu assistente também está feliz por você. Ficarei mais feliz se você for além do conteúdo da atividade e aprofundar seu conhecimento.",
            "Continue feliz. A internet possui materiais distintos que podem te ensinar enquanto diverte. Procure mais sobre o conteúdo estudado.",
            "Que bom que você está feliz, aproveite a internet para procurar novidades sobre o tema que está estudando!"
        ],
        1: ["Você conhece sobre tecnologias educacionais? Podcasts e blogs também servem para auxiliar na educação. Aproveite que está alegre e procure materiais complementares para o conteúdo estudado",
            "Seu assistente também está feliz por você. Ficarei mais feliz se você for além do conteúdo da atividade e aprofundar seu conhecimento.",
            "Continue feliz. A internet possui materiais distintos que podem te ensinar enquanto diverte. Procure mais sobre o conteúdo estudado.",
            "Que bom que você está feliz, aproveite a internet para procurar novidades sobre o tema que está estudando!"
        ],
        2: ["Você conhece sobre tecnologias educacionais? Podcasts e blogs também servem para auxiliar na educação. Aproveite que está alegre e procure materiais complementares para o conteúdo estudado",
            "Seu assistente também está feliz por você. Ficarei mais feliz se você for além do conteúdo da atividade e aprofundar seu conhecimento.",
            "Continue feliz. A internet possui materiais distintos que podem te ensinar enquanto diverte. Procure mais sobre o conteúdo estudado.",
            "Que bom que você está feliz, aproveite a internet para procurar novidades sobre o tema que está estudando!"
        ]
    },
    6: {
        0: ["Você já ouviu falar em wikis? São páginas colaborativas na internet que talvez vá te ajudar neste momento!",
            "Estou sempre disponível para te ajudar, além disso, existem outras formas de auxiliá-lo. Procure por fóruns na internet ou seu professor sempre que sentir necessidade. Vai te ajudar a continuar feliz.",
            "Sou tão esperto que sinto que está feliz. Que tal verificar se seus colegas não necessitam de ajuda? Mostre todo seu conhecimento nos fóruns! Lá o professor consegue também interagir com você",
            "Acredito que seu estado tem refletido em bons resultados. Recomendo sempre procurar materiais na internet ou tirar dúvida com seus colegas para engrandecer! "
        ],
        1: ["Você já ouviu falar em wikis? São páginas colaborativas na internet que talvez vá te ajudar neste momento!",
            "Estou sempre disponível para te ajudar, além disso, existem outras formas de auxiliá-lo. Procure por fóruns na internet ou seu professor sempre que sentir necessidade. Vai te ajudar a continuar feliz.",
            "Sou tão esperto que sinto que está feliz. Que tal verificar se seus colegas não necessitam de ajuda? Mostre todo seu conhecimento nos fóruns! Lá o professor consegue também interagir com você",
            "Acredito que seu estado tem refletido em bons resultados. Recomendo sempre procurar materiais na internet ou tirar dúvida com seus colegas para engrandecer! "
        ],
        2: ["Você já ouviu falar em wikis? São páginas colaborativas na internet que talvez vá te ajudar neste momento!",
            "Estou sempre disponível para te ajudar, além disso, existem outras formas de auxiliá-lo. Procure por fóruns na internet ou seu professor sempre que sentir necessidade. Vai te ajudar a continuar feliz.",
            "Sou tão esperto que sinto que está feliz. Que tal verificar se seus colegas não necessitam de ajuda? Mostre todo seu conhecimento nos fóruns! Lá o professor consegue também interagir com você",
            "Acredito que seu estado tem refletido em bons resultados. Recomendo sempre procurar materiais na internet ou tirar dúvida com seus colegas para engrandecer! "
        ]
    },
    7: {
        0: [],
        1: [],
        2: []
    },
    8: {
        0: ["Vamos resolver as atividades propostas no ambiente de aprendizado, você pode aprender muito com elas!",
            "Resolva suas atividades, posteriormente você pode até auxiliar seus colegas!",
            "Você é um excelente aluno, vamos focar em resolver suas atividades.",
            "Você é muito esperto, sei que consegue resolver as atividades muito rápido. Vamos lá!"
        ],
        1: ["Vamos resolver as atividades propostas no ambiente de aprendizado, você pode aprender muito com elas!",
            "Resolva suas atividades, posteriormente você pode até auxiliar seus colegas!",
            "Você é um excelente aluno, vamos focar em resolver suas atividades.",
            "Você é muito esperto, sei que consegue resolver as atividades muito rápido. Vamos lá!"
        ],
        2: ["Vamos resolver as atividades propostas no ambiente de aprendizado, você pode aprender muito com elas!",
            "Resolva suas atividades, posteriormente você pode até auxiliar seus colegas!",
            "Você é um excelente aluno, vamos focar em resolver suas atividades.",
            "Você é muito esperto, sei que consegue resolver as atividades muito rápido. Vamos lá!"
        ]
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