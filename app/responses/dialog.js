module.exports = function () {
    global.dialogIDoNotCareResponses = dialogIDoNotCareResponses;
    global.dialogSorryResponses = dialogSorryResponses;
};

/*

First Index = Personality
Second Index = Emotion

 */

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
        0: ["Você é um bom estudante e pode ter um bom desempenho se houver dedicação. Estou aqui para ser útil, quando necessitar.",
            "Estou sempre por aqui para te ajudar. Espero fazer diferença para ti, pois você é muito importante para mim",
            "Você é muito importante no processo educacional e sua dedicação na atividade é essencial para o rendimento.",
            "Continue executando suas atividades. Ao final terá um bom reconhecimento por conta de toda sua dedicação!"],
        1: ["Você é um bom estudante e pode ter um bom desempenho se houver dedicação. Estou aqui para ser útil, quando necessitar.",
            "Estou sempre por aqui para te ajudar. Espero fazer diferença para ti, pois você é muito importante para mim",
            "Você é muito importante no processo educacional e sua dedicação na atividade é essencial para o rendimento.",
            "Continue executando suas atividades. Ao final terá um bom reconhecimento por conta de toda sua dedicação!"],
        2: ["Você é um bom estudante e pode ter um bom desempenho se houver dedicação. Estou aqui para ser útil, quando necessitar.",
            "Estou sempre por aqui para te ajudar. Espero fazer diferença para ti, pois você é muito importante para mim",
            "Você é muito importante no processo educacional e sua dedicação na atividade é essencial para o rendimento.",
            "Continue executando suas atividades. Ao final terá um bom reconhecimento por conta de toda sua dedicação!"]
    },
    7: {
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
    8: {
        0: ["No momento você deveria focar para fazer uma excelente atividade. Você demonstra capacidade!",
            "Em alguns momentos, uma atividade exige esforço extra. Sabemos que você é capaz de realizar este esforço",
            "Pode parecer que seja só mais uma atividade, mas você tem capacidade de resolver e em seguida auxiliar seus colegas. Você é fera!",
            "Você é um aluno brilhante. Dê importância a atividade como sempre damos importância para você!"],
        1: ["No momento você deveria focar para fazer uma excelente atividade. Você demonstra capacidade!",
            "Em alguns momentos, uma atividade exige esforço extra. Sabemos que você é capaz de realizar este esforço",
            "Pode parecer que seja só mais uma atividade, mas você tem capacidade de resolver e em seguida auxiliar seus colegas. Você é fera!",
            "Você é um aluno brilhante. Dê importância a atividade como sempre damos importância para você!"],
        2: ["No momento você deveria focar para fazer uma excelente atividade. Você demonstra capacidade!",
            "Em alguns momentos, uma atividade exige esforço extra. Sabemos que você é capaz de realizar este esforço",
            "Pode parecer que seja só mais uma atividade, mas você tem capacidade de resolver e em seguida auxiliar seus colegas. Você é fera!",
            "Você é um aluno brilhante. Dê importância a atividade como sempre damos importância para você!"]
    },
};

let dialogSorryResponses = {
    0: {
        0: ["Não precisa se preocupar com desculpas! Isso tudo parece um pouco complicado, mas juntos vamos alinhar as dificuldades. Estou contigo!",
            "Fique tranquilo. Estou bastante feliz contigo e quero você bem! Você só me orgulha!",
            "Você tem que relaxar um pouco e continuar a atividade. Você é capaz de ter bastante sucesso!",
            "Não se preocupe com desculpas. Você tem bastante potencial e já é um sucesso!"],
        1: ["Não precisa se preocupar com desculpas! Isso tudo parece um pouco complicado, mas juntos vamos alinhar as dificuldades. Estou contigo!",
            "Fique tranquilo. Estou bastante feliz contigo e quero você bem! Você só me orgulha!",
            "Você tem que relaxar um pouco e continuar a atividade. Você é capaz de ter bastante sucesso!",
            "Não se preocupe com desculpas. Você tem bastante potencial e já é um sucesso!"],
        2: ["Não precisa se preocupar com desculpas! Isso tudo parece um pouco complicado, mas juntos vamos alinhar as dificuldades. Estou contigo!",
            "Fique tranquilo. Estou bastante feliz contigo e quero você bem! Você só me orgulha!",
            "Você tem que relaxar um pouco e continuar a atividade. Você é capaz de ter bastante sucesso!",
            "Não se preocupe com desculpas. Você tem bastante potencial e já é um sucesso!"]
    },
    1: {
        0: ["Não se preocupe com desculpas. Aproveite este momento para compartilhar suas dúvidas e aprendizagem nos fóruns do moodle!",
            "Não se preocupe! Estou sempre aqui para o seu auxílio. Noto também que pode utilizar de chats e auxiliar os colegas",
            "Tudo bem! Você está feliz e quero que continue assim. Também torço para suas atividades estarem em dias. Qualquer dúvida acione o fórum que seu professor e colegas podem te ajudar.",
            "Está tudo bem! Eu sou um bot sentimental, mas me preocupo mesmo é que continue feliz. Sorria e explore os recursos do ambiente virtual. Além de mim, você tem fóruns e chates"],
        1: ["Não precisa se desculpar. Quero que fique feliz, para em seguida continuar as atividades.",
            "Não se preocupe. Não quero que fique triste. Talvez seja interessante utilizar os outros recursos (chats, fóruns) e melhorar o seu humor!",
            "Eu sou um bot sentimental, mas a minha preocupação é que esteja feliz e que faça suas atividades. Não precise se preocupar com desculpas!",
            "O que eu quero é que você fique feliz. Se o que está te prejudicando envolver a atividade, sugiro que dê um tempo e retorne quando estiver melhor!"],
        2: ["Não precisa se desculpar. Quero que fique bem, para em seguida continuar as atividades.",
            "Não se preocupe. Não quero que fique com raiva. Talvez seja interessante utilizar os outros recursos (chats, fóruns) e melhorar o seu humor!",
            "Eu sou um bot sentimental, mas a minha preocupação é que esteja feliz e que faça suas atividades. Não precise se preocupar com desculpas!",
            "O que eu quero é que você fique feliz. Se o que está te prejudicando envolver a atividade, sugiro que dê um tempo e retorne quando estiver melhor!"]
    },
    2: {
        0: ["Não esquenta com isso! Você já procurou saber a origem do assunto estudado? Acreido que vai te ajudar a fixar o conhecimento.",
            "Sinto que está alegre e, apesar de sentimental, isso que me importa. Tente sempre fazer analogia do conteúdo, isso parece te fazer bem!",
            "Não se preocupe com desculpas. Você me parece bem e devemos focar nas atividades!",
            "Vamos largar a formalidade das desculpas. Continue bem! Que tal verificar o que a internet tem de material sobre o conteúdo que está estudando?"],
        1: ["Não fique triste! Você está desculpado. Que tal dar uma navegada na internet em busca de vídeos e outros materiais para te auxiliar no conteúdo?",
            "Nem precisa se desculpar. Você precisa ficar feliz. Bota o sorriso na cara, dê uma volta pela internet e aproveite para procurar outras mídias que possam te auxiliar na atividade!",
            "Não se preocuoe com desculpas. Sorria e fique bem! Você me parece gostar de ir além. Aproveite a internet e biblioteca para procurar auxílios extras para este conteúdo",
            "Vamos largar a formalidade das desculpas. Que tal sorrir e verificar o que a internet tem de material sobre o conteúdo que está estudando?"],
        2: ["Você está desculpado. Te quero feliz! Que tal dar uma navegada na internet em busca de vídeos e outros materiais para te auxiliar no conteúdo?",
            "Nem precisa se desculpar. Você precisa ficar feliz. Bota o sorriso na cara, dê uma volta pela internet e aproveite para procurar outras mídias que possam te auxiliar na atividade!",
            "Não se preocuoe com desculpas. Sorria e fique bem! Você me parece gostar de ir além. Aproveite a internet e biblioteca para procurar auxílios extras para este conteúdo",
            "Vamos largar a formalidade das desculpas. Que tal sorrir e verificar o que a internet tem de material sobre o conteúdo que está estudando?"]
    },
    3: {
        0: ["Sem neuras com desculpas! Aproveitando seu estado, sugiro você revisar o conteúdo e aprofundar naquilo que ainda tem dúvidas.",
            "Te desculpo se você se dedicar diariamente aos estudos. Isso que realmente importa! Hahaha",
            "Te desculpo sempre e você também deve desculpar minhas falhas! Continue dedicando as atividades e procure sempre mais com auxílio de seu professor e colegas",
            "Fique tranquilo. O que importa é você continuar feliz! Procure diariamente revisar o conteúdo que isso me aparenta que te fará bem!"],
        1: ["Fique tranquilo! Vamos mudar de assunto? Me faça uma pergunta que posso tentar te responder. Aproveite para tirar uma curiosidade.",
            "Acho que o assunto não está te fazendo muito bem. Procure ver um pouco sobre algo que te interessa no momento. Isto poderá te animar mais.",
            "Todos perdoados. Sugiro você focar um pouco por agora em algo que vá te fazer bem e posteriormente retornar para a atividade. Ou procure partes mais interessantes na atividade.",
            "Eu que peço desculpas pelas minhas falhas. Aqui você é o foco e quero você bem. Se for necessário, podemos falar de outros assuntos!"],
        2: ["Fique tranquilo! Vamos mudar de assunto? Me faça uma pergunta que posso tentar te responder. Aproveite para tirar uma curiosidade.",
            "Acho que o assunto não está te fazendo muito bem. Procure ver um pouco sobre algo que te interessa no momento. Isto poderá te animar mais.",
            "Todos perdoados. Sugiro você focar um pouco por agora em algo que vá te fazer bem e posteriormente retornar para a atividade. Ou procure partes mais interessantes na atividade.",
            "Eu que peço desculpas pelas minhas falhas. Aqui você é o foco e quero você bem. Se for necessário, podemos falar de outros assuntos!"]
    },
    4: {
        0: ["Tudo desculpado por aqui! Você deve fazer a atividade em tempo hábil pois você demonstra bastante capacidade!",
            "O ato de desculpar é saudável! Mais saudável é você aparentar alegre. Aproveitando deste estado, sugiro pegar firme nas atividades!",
            "Fique tranquilo! Que tal realizar as atividades pendentes e assim conseguir entregar em tempo hábil? Você é bem capaz!",
            "Tudo certo entre a gente. E vai ficar melhor ainda você demonstrando toda sua capacidade e resolvendo a atividade que você é capaz!"],
        1: ["Hey! Está tudo bem. Melhor ainda é você abrir um sorriso e se entregar para as atividades pendentes. Força aí!",
            "Tudo certo entre a gente! Melhor ainda se você ficar feliz e realizar suas atividades!",
            "Está tranquilo! E vai ficar melhor ainda com você feliz realizando suas atividades! Vamos lá, eu confio em ti!"],
        2: ["Tudo desculpado por aqui! Você deve ficar tranquilo e tentar resolver a atividade em tempo hábil pois você demonstra bastante capacidade!",
            "O ato de desculpar é saudável! Mais saudável é você ficar bem. Quando se sentir melhor sugiro pegar firme nas atividades!",
            "Não se preocupe! Que tal realizar as atividades pendentes e assim conseguir entregar em tempo hábil? Você é bem capaz!",
            "Tudo certo entre a gente. E vai ficar melhor ainda você demonstrando toda sua capacidade e resolvendo a atividade que você é capaz!"]
    },
    5: {
        0: ["Está tudo bem! Por falar em estar bem... Você já procurou por diferentes mídias para ensino? A internet está cheia de novidades!",
            "Tudo desculpado! Aproveite deste momento para procurar novidades acerca do conteúdo que está trabalhando",
            "Desculpas são necessárias no mundo real. Sou um bot sensível, porém não guardo rancor! Ficarei feliz se você ir além deste conteúdo e pesquisar mais!",
            "Está tudo certo! Além disso, existem outras formas de te auxiliar. Procure por fóruns na internet ou seu professor sempre que sentir necessidade. Vai te ajudar a continuar feliz"],
        1: ["Está tudo bem! Ficarei mais feliz se você for além do conteúdo da atividade e aprofundar seu conhecimento.",
            "Tudo desculpado! Recomendo sempre procurar materiais na internet ou tirar dúvida com seus colegas para engrandecer!",
            " Está tudo certo! O que me preocupa é que temos um plano de estudos para cumprir. Aproveite a internet e busque por materiais extras para te auxiliar",
            "Tudo ok! Corra atrás de materiais extras e tente sempre cumprir com seus prazos!"],
        2: ["Está tudo bem! Ficarei mais feliz se você for além do conteúdo da atividade e aprofundar seu conhecimento.",
            "Tudo desculpado! Recomendo sempre procurar materiais na internet ou tirar dúvida com seus colegas para engrandecer!",
            " Está tudo certo! O que me preocupa é que temos um plano de estudos para cumprir. Aproveite a internet e busque por materiais extras para te auxiliar",
            "Tudo ok! Corra atrás de materiais extras e tente sempre cumprir com seus prazos!"]
    },
    6: {
        0: ["Está tudo certo! Você é muito bom e terá muito sucesso!",
            "Tudo ok! Isso é só um momento que logo passa! Você é muito útil na turma e na execução de atividades.",
            "Por mim está tudo certo entre a gente! Você é muito importante e útil. Continue executando suas atividades!",
            "Não se preocupe! Nada de desculpas, pois já está tudo certo. Continue sendo um estudante efetivo e útil!"],
        1: ["Está tudo certo! Você é muito bom e terá muito sucesso!",
            "Tudo ok! Isso é só um momento que logo passa! Você é muito útil na turma e na execução de atividades.",
            "Por mim está tudo certo entre a gente! Você é muito importante e útil. Continue executando suas atividades!",
            "Não se preocupe! Nada de desculpas, pois já está tudo certo. Continue sendo um estudante efetivo e útil!"],
        2: ["Está tudo certo! Você é muito bom e terá muito sucesso!",
            "Tudo ok! Isso é só um momento que logo passa! Você é muito útil na turma e na execução de atividades.",
            "Por mim está tudo certo entre a gente! Você é muito importante e útil. Continue executando suas atividades!",
            "Não se preocupe! Nada de desculpas, pois já está tudo certo. Continue sendo um estudante efetivo e útil!"]
    },
    7: {
        0: ["Está tudo bem! Ficarei mais feliz se você for além do conteúdo da atividade e aprofundar seu conhecimento.",
            "Tudo desculpado! Recomendo sempre procurar materiais na internet ou tirar dúvida com seus colegas para engrandecer!",
            " Está tudo certo! O que me preocupa é que temos um plano de estudos para cumprir. Aproveite a internet e busque por materiais extras para te auxiliar",
            "Tudo ok! Corra atrás de materiais extras e tente sempre cumprir com seus prazos!"],
        1: ["Está tudo bem! Ficarei mais feliz se você for além do conteúdo da atividade e aprofundar seu conhecimento.",
            "Tudo desculpado! Recomendo sempre procurar materiais na internet ou tirar dúvida com seus colegas para engrandecer!",
            " Está tudo certo! O que me preocupa é que temos um plano de estudos para cumprir. Aproveite a internet e busque por materiais extras para te auxiliar",
            "Tudo ok! Corra atrás de materiais extras e tente sempre cumprir com seus prazos!"],
        2: ["Está tudo bem! Ficarei mais feliz se você for além do conteúdo da atividade e aprofundar seu conhecimento.",
            "Tudo desculpado! Recomendo sempre procurar materiais na internet ou tirar dúvida com seus colegas para engrandecer!",
            " Está tudo certo! O que me preocupa é que temos um plano de estudos para cumprir. Aproveite a internet e busque por materiais extras para te auxiliar",
            "Tudo ok! Corra atrás de materiais extras e tente sempre cumprir com seus prazos!"]
    },
    8: {
        0: ["Tudo desculpado!! Você me aparenta gostar das coisas bem feitas. Acredito que logo logo resolverá esta atividade e te sugiro ajudar seus colegas",
            "Está tudo certo entre a gente! Te proponho a solucionar as atividades, pois somente você é responsável para que ela seja entregue em tempo hábil",
            "Está tudo bem! Só é importante você estar de olho nos prazos de término da atividade",
            "Fica tranquilo! Eu acredito que você deve se desafiar resolvendo esta atividade em um bom tempo. Além disso, utilize o fórum para expor suas ideias."],
        1: ["Tudo desculpado!! Você me aparenta gostar das coisas bem feitas. Acredito que logo logo resolverá esta atividade e te sugiro ajudar seus colegas",
            "Está tudo certo entre a gente! Te proponho a solucionar as atividades, pois somente você é responsável para que ela seja entregue em tempo hábil",
            "Está tudo bem! Só é importante você estar de olho nos prazos de término da atividade",
            "Fica tranquilo! Eu acredito que você deve se desafiar resolvendo esta atividade em um bom tempo. Além disso, utilize o fórum para expor suas ideias."],
        2: ["Tudo desculpado!! Você me aparenta gostar das coisas bem feitas. Acredito que logo logo resolverá esta atividade e te sugiro ajudar seus colegas",
            "Está tudo certo entre a gente! Te proponho a solucionar as atividades, pois somente você é responsável para que ela seja entregue em tempo hábil",
            "Está tudo bem! Só é importante você estar de olho nos prazos de término da atividade",
            "Fica tranquilo! Eu acredito que você deve se desafiar resolvendo esta atividade em um bom tempo. Além disso, utilize o fórum para expor suas ideias."]
    },
};