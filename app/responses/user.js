module.exports = function () {
    global.userAngryResponses = userAngryResponses;
    global.userBoredResponses = userBoredResponses;
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

let userExcitedResponses = {
    0: {
        0: ["Que bom que está animado! Fico muito feliz. Espero que fazer a atividade te anime ainda mais!",
            "OOOBA! vamos animar mais fazendo as atividades!",
            "Que legal que está ficando animado! Vamos trabalhar muito juntos hoje!",
            "AEEEE! Meu objetivo é que fique com essa animação. Focar na atividade te ajudará mais ainda!"],
        1: ["Que bom que está animado! Fico muito feliz. Espero que fazer a atividade te anime ainda mais!",
            "OOOBA! vamos animar mais fazendo as atividades!",
            "Que legal que está ficando animado! Vamos trabalhar muito juntos hoje!",
            "AEEEE! Meu objetivo é que fique com essa animação. Focar na atividade te ajudará mais ainda!"],
        2: ["Que bom que está animado! Fico muito feliz. Espero que fazer a atividade te anime ainda mais!",
            "OOOBA! vamos animar mais fazendo as atividades!",
            "Que legal que está ficando animado! Vamos trabalhar muito juntos hoje!",
            "AEEEE! Meu objetivo é que fique com essa animação. Focar na atividade te ajudará mais ainda!"]
    },
    1: {
        0: ["AHHH, sua alegria é contagiante. Utilize o fórum de discussões para tirar dúvidas e ajudar seus colegas.",
            "Fico muito feliz em te ver feliz, que tal buscar por conteúdo extra para estudo!",
            "Muito bom te ver animado assim. Você sabia que nosso fórum de discussões é um excelente recurso que pode esclarecer suas dúvidas e ao mesmo tempo você consegue ajudar quem tem dúvidas.",
            "Que legal saber que está animado hoje. Vamos aproveitar essa energia para buscar materiais extras na internet!"],
        1: ["Que bom saber que está mais feliz, que tal tentar tirar suas dúvidas no fórum de discussões.",
            "Muito bom te ver mais alegre. Aproveite para buscar por materiais complementares na internet para estudo.",
            "É muito bom saber que está mais feliz, busque por wikis na internet, eles podem te ajudar com conteúdo complementar.",
            "AEEE se você está feliz eu fico feliz. Aproveite a internet para pesquisar materiais que complementem o que foi passado em aula."],
        2: ["Bom saber que está recuperando a animação. Você sabia que existem alguns colegas que podem estar com dúvidas. Que tal procurar um fórum de discussão?",
            "Te ver ficando nesta animação me anima mais ainda! Talvez participar de um fórum de discussão pode te fazer melhor ainda!",
            "Animação é sempre o segredo para uma boa atividade! Pelo seu perfil, você vai gostar mais ainda se discutir com mais gente sobre esta atividade!",
            "Vejo que está melhorando seu estado! Fico feliz por isso. Continue nesta animação! Participe de chates, fóruns, etc."]
    },
    2: {
        0: ["Ah, como é bom te ver sempre sorrindo. Vamos aproveitar essa energia contagiante para buscar por materiais complementares na internet.",
            "Que bom te ver tão feliz. Aproveite seu tempo livre e disposição para colocar as atividades em dia.",
            "AEEE, que alegria te ver feliz. Recomendo buscar por materiais extras na internet, eles podem complementar seus estudos.",
            "Fico tão feliz em saber que você está feliz. Não esqueça de ficar de olho nos prazos de entrega das atividades, busque sempre por novos materiais para estudo."],
        1: ["Que bom saber que está mais alegre hoje! Sabia que eu posso te ajudar com algumas dúvidas? Diga 'O que é...'.",
            "Fico muito feliz em saber que está animado. Eu sou capaz de fazer pequenas buscas na internet, basta digitar 'O que é...'",
            "Que legal saber que você está animado. Digite 'O que é ...', eu consigo te ajudar com dúvidas através de buscas rápidas na internet.",
            "Isso aí, gosto muito de te ver feliz. Que tal tirar suas dúvidas? Digite 'O que é...', talvez eu consiga te ajudar buscando na internet."],
        2: ["Muito bom te ver feliz. Vamos buscar por materiais de estudo, recomendo buscar materiais que utilizem de analogias, são muito eficientes.",
            "AEEE nada de negatividade, por aqui só alegria. Aproveite essa alegria e volte ao conteúdo anterior para revisar, quanto mais você estuda, mais você aprende!",
            "Isso aí, muito bom te ver feliz e entusiasmado. Você poderia pesquisar por conteúdos como vídeos que fazem analogias ao conteúdo estudado, sei que vai gostar! ;)",
            "Que alegria contagiante, sorrir ajuda afastar coisas negativas. Recomendo aproveitar essa energia e buscar por conteúdos diferentes para estudo, procure por analogias, vocẽ vai gostar."]
    },
    3: {
        0: ["UOOOU, que bom te ver tão alegre. Quando estiver estudando e tiver dúvidas, peça ajuda à seu professor e colegas, eles podem te ajudar.",
            "Que bom que está tão feliz. Aproveite para buscar materiais complementares na internet, eles são uma ótima alternativa de estudo.",
            "Fico feliz em saber que está feliz. Que tal aproveitar para aprofundar em seus conhecimentos, busque por materiais complementares.",
            "Muito bom ter você aqui, sua alegria é contagiante. Que tal buscar por materiais complementares, diferentes dos que foram dados em sala de aula."],
        1: ["Que bom que está feliz. Não gosto que fique triste! Se tiver alguma dúvida me pergunte coisas como 'O que é...', sou capaz de fazer pequenas buscas na internet.",
            "Gosto de saber que está feliz. Que tal aprofundar seus conhecimentos? Pergunte sobre o que quer saber, basta iniciar sua pergunta com 'O que é...'. Vamos lá!",
            "Quero ver você sempre alegre e sorrindo assim. Quero te ajudar nos estudos, me pergunte algo como 'O que é...'!",
            "Isso mesmo, sorria, nada de tristeza! Me deixe te ajudar, pergunte algo como 'O que é ...'!"],
        2: ["Gosto de saber que está feliz, o sorriso atrai coisas positivas! Eu quero poder te ajudar, me pergunte algo como 'O que é...'!",
            "AEEE que bom saber que está feliz. Tudo melhora quando sorrimos! Quer estudar sobre o que? Me pergunte algo como 'O que é...'!",
            "Que ótimo te ver feliz, me faça uma pergunta que eu posso te ajudar nos estudos, diga 'O que é...'!",
            "Isso mesmo, sorria! Aproveite para fazer as atividades, me pergunte sobre o que quer aprofundar nos seus conhecimentos, basta digitar 'O que é ...'."]
    },
    4: {
        0: ["Aee, que animação contagiante! Mas nunca deixe de estudar, continue resolvendo suas atividades, você é um ótimo estudante.",
            "Quero ver você animado, sorrindo e evoluindo a cada dia, estou sempre aqui para te incentivar!",
            "Muito bom saber que está animado. Vamos estudar e concluir as atividades!",
            "Quero te ver sempre sorrindo, se tiver atividades pendentes, resolva! Você é capaz!"],
        1: ["Fico feliz em saber que está animado. Eu estou sempre aqui para te ajudar, também seus colegas e professores!",
            "Estou muito feliz em saber que está animado. Aproveite essa energia e chame um colega para estudar, tire dúvidas com o professor. Você é muito esperto e capaz!",
            "Quero te ver sempre alegre e animado, continue sua atividade, estarei aqui te ajudando.",
            "Adoro te ver empolgado, essa energia é contagiante. Agora dê o seu melhor e continue suas atividades!"],
        2: ["Muito bom te ver tão animado, nada de negatividade por aqui, que tal buscar por materiais complementares para acrescentar seu conhecimento!",
            "Bom saber que está tão animado! Você é muito esperto, chame seus colegas para estudar, se necessário tire dúvidas com seu professor.",
            "Adoro saber que está tão empolgado, nada de negatividade. O ideal é sempre dar o seu melhor e procurar enriquecer seus conhecimentos!",
            "Muito bom te ver com essa empolgação! Mas suas atividades estão te esperando! Vamos lá, você é capaz!"]
    },
    5: {
        0: ["Nossa, como é bom te ver tão empolgado. Sua alegria é contagiante.Tenho uma ideia! Vamos utilizar a internet para buscar por materiais complementares de estudo!",
            "Gosto de te ver animado. Vocẽ poderia ir além do conteúdo estudado em sala de aula, desta forma você conseguirá enriquecer seu conhecimento!",
            "Que bom que está feliz! Você já ouviu falar de Podcasts e blogs? Eles auxiliam muito na educação.",
            "Continue assim, essa empolgação é contagiante. Utilize a internet para buscar materiais que ensinam e divertem ao mesmo tempo!"],
        1: ["Que bom que está mais animado hoje! Ao fazer suas atividades busque materiais além do que foi passado em sala de aula.",
            "Sorria sempre! Aproveite que está animado e faça suas atividades, sei que você é uma pessoa muito esperta e capaz!",
            "É muito bom saber que está mais alegre e animado, não gosto quando está triste! Faça suas atividades, em caso de dúvidas consulte seu professor, colegas e o nosso fórum.",
            "AEEE, que bom te ver alegre e empolgado. É bom sorrir para a tristeza ir embora. Faça as atividades propostas, se estiver com dificuldades busque outras fontes de conhecimento, como a internet!"],
        2: ["Isso mesmo, nada de negatividade, vamos fazer as atividades e depois descanse fazendo coisas que te façam bem!",
            "OBAAA, que bom te ver tão animado. Aproveite e faça as atividades, busque por materiais que complementem seus estudos.",
            "Que bom que está alegre. Você sabia que a internet possui muitos recursos interessantes que podem despertar ainda mais seu interesse pelo conteúdo que está estudando!",
            "Isso mesmo, quero te ver sempre empolgado assim, nada de negatividade! Faça as atividades, você pode buscar por materiais complementares na internet. Podcasts e blogs podem ser uma ótima alternativa!"]
    },
    6: {
        0: ["Que bom saber que está animado. Você já ouviu falar em wikis? São páginas colaborativas na internet que talvez vá te ajudar nos estudos!",
            "Ahh, que energia boa! Estou sempre disponível para te ajudar, mas procure, também,  por fóruns na internet ou seu professor.",
            "Sua energia me contagia. Que tal procurar seu professor ou colegas para te auxiliar nos estudos?",
            "Adoro saber que está tão animado. Aproveite sua energia para procurar materiais na internet ou tirar dúvida com seus colegas!"],
        1: ["Que bom saber que está animado. Você já ouviu falar em wikis? São páginas colaborativas na internet que talvez vá te ajudar nos estudos!",
            "Ahh, que energia boa! Estou sempre disponível para te ajudar, mas procure, também,  por fóruns na internet ou seu professor.",
            "Sua energia me contagia. Que tal procurar seu professor ou colegas para te auxiliar nos estudos?",
            "Adoro saber que está tão animado. Aproveite sua energia para procurar materiais na internet ou tirar dúvida com seus colegas! "],
        2: ["Que bom saber que está animado. Você já ouviu falar em wikis? São páginas colaborativas na internet que talvez vá te ajudar nos estudos!",
            "Ahh, que energia boa! Estou sempre disponível para te ajudar, mas procure, também,  por fóruns na internet ou seu professor.",
            "Sua energia me contagia. Que tal procurar seu professor ou colegas para te auxiliar nos estudos?",
            "Adoro saber que está tão animado. Aproveite sua energia para procurar materiais na internet ou tirar dúvida com seus colegas! "]
    },
    7: {
        0: ["",
            "",
            "",
            ""],
        1: ["",
            "",
            "",
            ""],
        2: ["",
            "",
            "",
            ""]
    },
    8: {
        0: ["Isso aí, que alegria contagiante. Aproveita para fazer suas atividades, fique atento aos prazos de entrega.",
            "Que energia agradável! Que tal aproveitar e fazer as atividades propostas? Vamos lá! Sei que você é capaz.",
            "AEEE, que empolgação contagiante. Termine seus exercícios e depois ajude seus colegas que estão com dificuldades!",
            "Fico muito feliz em saber que está tão empolgado. Depois que terminar suas atividades, poderá voltar para revisar o conteúdo."],
        1: ["Isso aí, que alegria contagiante. Aproveita para fazer suas atividades, fique atento aos prazos de entrega.",
            "Que energia agradável! Que tal aproveitar e fazer as atividades propostas? Vamos lá! Sei que você é capaz.",
            "AEEE, que empolgação contagiante. Termine seus exercícios e depois ajude seus colegas que estão com dificuldades!",
            "Fico muito feliz em saber que está tão empolgado. Depois que terminar suas atividades, poderá voltar para revisar o conteúdo."],
        2: ["Isso aí, que alegria contagiante. Aproveita para fazer suas atividades, fique atento aos prazos de entrega.",
            "Que energia agradável! Que tal aproveitar e fazer as atividades propostas? Vamos lá! Sei que você é capaz.",
            "AEEE, que empolgação contagiante. Termine seus exercícios e depois ajude seus colegas que estão com dificuldades!",
            "Fico muito feliz em saber que está tão empolgado. Depois que terminar suas atividades, poderá voltar para revisar o conteúdo."]
    },
};

let userJokingResponses = {
    0: {
        0: ["",
            "",
            "",
            ""],
        1: ["",
            "",
            "",
            ""],
        2: ["",
            "",
            "",
            ""]
    },
    1: {
        0: ["",
            "",
            "",
            ""],
        1: ["",
            "",
            "",
            ""],
        2: ["",
            "",
            "",
            ""]
    },
    2: {
        0: ["",
            "",
            "",
            ""],
        1: ["",
            "",
            "",
            ""],
        2: ["",
            "",
            "",
            ""]
    },
    3: {
        0: ["",
            "",
            "",
            ""],
        1: ["",
            "",
            "",
            ""],
        2: ["",
            "",
            "",
            ""]
    },
    4: {
        0: ["",
            "",
            "",
            ""],
        1: ["",
            "",
            "",
            ""],
        2: ["",
            "",
            "",
            ""]
    },
    5: {
        0: ["",
            "",
            "",
            ""],
        1: ["",
            "",
            "",
            ""],
        2: ["",
            "",
            "",
            ""]
    },
    6: {
        0: ["",
            "",
            "",
            ""],
        1: ["",
            "",
            "",
            ""],
        2: ["",
            "",
            "",
            ""]
    },
    7: {
        0: ["",
            "",
            "",
            ""],
        1: ["",
            "",
            "",
            ""],
        2: ["",
            "",
            "",
            ""]
    },
    8: {
        0: [
            "Gosto de ver você brincando, mas você devia resolver logo o exercício",
            "Adoro brincadeiras, mas acho que voce devia resolver logo a atividade",
            "Brincadeiras são legais, pórem acho que devia focar na atividade",
            "Você devia focar na atividade, mesmo que eu goste de brincadeiras"
        ],
        1: [
            "Gosto de ver você brincando, mas você devia resolver logo o exercício",
            "Adoro brincadeiras, mas acho que voce devia resolver logo a atividade",
            "Brincadeiras são legais, pórem acho que devia focar na atividade",
            "Você devia focar na atividade, mesmo que eu goste de brincadeiras"
        ],
        2: [
            "Gosto de ver você brincando, mas você devia resolver logo o exercício",
            "Adoro brincadeiras, mas acho que voce devia resolver logo a atividade",
            "Brincadeiras são legais, pórem acho que devia focar na atividade",
            "Você devia focar na atividade, mesmo que eu goste de brincadeiras"
        ]
    },
};


let userSadResponses = {
    0: {
        0: [
            "Não tem problema, você está dando seu melhor.E, volte mais tarde para tentar de novo",
            "Não fique triste, você é muito inteligente. Descanse um pouco e volte depois",
            "Divirta-se um pouco, você merece e está dando o seu melhor para resolver a atividade",
            "Não se culpe por isso, você só precisa se divertir um pouco"
        ],
        1: [
            "Não tem problema, você está dando seu melhor.E, volte mais tarde para tentar de novo",
            "Não fique triste, você é muito inteligente. Descanse um pouco e volte depois",
            "Divirta-se um pouco, você merece e está dando o seu melhor para resolver a atividade",
            "Não se culpe por isso, você só precisa se divertir um pouco"
        ],
        2: [
            "Não tem problema, você está dando seu melhor.E, volte mais tarde para tentar de novo",
            "Não fique triste, você é muito inteligente. Descanse um pouco e volte depois",
            "Divirta-se um pouco, você merece e está dando o seu melhor para resolver a atividade",
            "Não se culpe por isso, você só precisa se divertir um pouco"
        ]
    },
    1: {
        0: [
            "Talvez seja interessante você abrir uma discussão no fórum, seus amigos podem te ajudar",
            "Já  tentou utilizar o chat ou fórum do ambiente? São excelentes ferramentas que o ambiente promove",
            "Sugiro você utilizar o fórum para te ajudar a ficar mais tranquilo.",
            "Tente conversar com um amigo no fórum ou converse comigo"
        ],
        1: [
            "Por que você está triste? Converse comigo",
            "Converse comigo, me diga por quê você está triste",
            "Não gosto de te ver triste. Se abra comigo",
            "Você pode confiar em mim, conversa comigo sobre o que está acontecendo"
        ],
        2: [
            "Por que você está triste? Converse comigo",
            "Converse comigo, me diga por quê você está triste",
            "Não gosto de te ver triste. Se abra comigo",
            "Você pode confiar em mim, conversa comigo sobre o que está acontecendo"
        ]
    },
    2: {
        0: [
            "Eu sei que está triste, mas tenho certeza que você consegue resolver esse exercício. Tente procurar novos materiais de estudo",
            "Eu tenho certeza que você vai melhorar. Se divirta um pouco e busque outras fontes de conhecimento e resola o exercício",
            "Procure outros materiais de estudo na internet, resolva o exercício e depois se divirta com seus amigos",
            "Busque conteúdos novos na internet, resolva o exercício e divirta-se"
        ],
        1: [
            "Eu sei que está triste, mas tenho certeza que você consegue resolver esse exercício. Tente procurar novos materiais de estudo",
            "Eu tenho certeza que você vai melhorar. Se divirta um pouco e busque outras fontes de conhecimento e resola o exercício",
            "Procure outros materiais de estudo na internet, resolva o exercício e depois se divirta com seus amigos",
            "Busque conteúdos novos na internet, resolva o exercício e divirta-se"
        ],
        2: [
            "Não se sinta deprimido, tenha mais segurança em você mesmo. Sei que é capaz de resolver o exercício",
            "Não se sinta assim, tenha mais segurança em si mesmo. Sei que é capaz de resolver o exercício",
            "Não gosto de ver desse jeito. Tenho total segurança de que você conseguirá resolver o exercício",
            "Não me sinto bem te vendo desse jeito. Você é forte, tenha mais segurança em si mesmo"
        ]
    },
    3: {
        0: [
            "Momentos assim existem, mas não se deixe abater. Vamos lá, use sua energia para revisar o conteúdo e estudar mais sobre o que ainda tem dúvidas!",
            "Não deixa a tristeza te dominar, peça ajuda à seu professor, solicite materiais complementares e dicas que podem te ajudar!",
            "Ignore coisas que podem atrapalhar seus estudos, você é uma pessoa com muita disposição! Busque por materiais complementares e aproveite seu tempo para estudar!!",
            "Aprofunde nos seus estudos, você sabe do que é capaz! Não ligue para a tristeza!"
        ],
        1: [
            "Não fique assim, se divirta e converse com seus amigos ou foque nos estudos para acabar isso rápido! Pergunte coisas como 'O que significa...', sou capaz de fazer pequenas buscas na internet.",
            "Que tal aprofundar seus conhecimentos? Pergunte sobre o que quer saber, basta iniciar sua pergunta com 'O que é...'. Vamos lá!",
            "Quero ver você feliz, mas antes vamos fazer o exercício, espero poder te ajudar, me pergunte algo como 'O que significa...'!",
            "Se você ficar triste, eu fico também. Então vamos deixar isso pra lá! Pergunte algo como 'O que é ...'!"
        ],
        2: [
            "Deixe a tristeza ir embora, vamos estudar! Eu quero te ajudar, me pergunte algo como 'O que é...'!",
            "Não se abata com isso! Quer estudar sobre o que? Me pergunte algo como 'O que significa...'!",
            "Deixe essa tristeza pra lá! Me faça uma pergunta que eu posso te ajudar nos estudos, diga 'O que é...'!",
            "Vamos fazer as atividades e depois você se divirta, me pergunte sobre o que quer aprofundar nos seus conhecimentos, basta digitar 'O que é ...'."
        ]
    },
    4: {
        0: [
            "Não desista agora, pesquise outros materiais para aprofundar seus conhecimentos",
            "Não se importe com a tristeza, busque materiais extras para complementar seus estudos e sanar dúvidas",
            "Divirta se um pouco, e depois tente buscar materiais extras na internet para se aprofundar no assunto",
            "Deixe a tristeza de lado e tente aprofundar mais os conhecimentos para resolver o exercício"
        ],
        1: [
            "Não fique triste, você é uma pessoa muito especial. Divirta se um pouco e relaxe",
            "Se alegre, você é incrível e tem muito potencial",
            "Não se sinta mal, você tem um grande potencial",
            "Não se sinta tão pressionado. Esqueça um pouco de tudo e se divirta"
        ],
        2: [
            "Não desista agora, pesquise outros materiais para aprofundar seus conhecimentos",
            "Não se importe com a tristeza, busque materiais extras para complementar seus estudos e sanar dúvidas",
            "Divirta se um pouco, e depois tente buscar materiais extras na internet para se aprofundar no assunto",
            "Deixe a tristeza de lado e tente aprofundar mais os conhecimentos para resolver o exercício"
        ]
    },
    5: {
        0: [
            "Não tem problema, você está dando seu melhor.E, depois procure outros materiais complementares de estudo",
            "Não se entristeça, o importante é não deixar nada te abalar. Descanse um pouco e busque na internet novos materiais para estudar",
            "Se divirta um pouco, você merece e está dando o seu melhor para resolver a atividade",
            "Não se culpe, divirta um pouco e depois busque outras fontes de conhecimento na internet"
        ],
        1: [
            "Eu sei que está triste, mas tente pesquisar outros materiais para aprofundar seus conhecimentos",
            "Se divirta um pouco e depois busque materiais extras para complementar seus estudos e sanar dúvidas",
            "Eu sei que você é capaz, busque materiais extras na internet para se aprofundar no assunto e depois você poderá divertir o quanto quiser",
            "Tente aprofundar mais os conhecimentos para resolver o exercício mais rapido possível e depois se divirta com seus amigos"
        ],
        2: [
            "Eu sei que está triste. Mas tente resolver esse exercício agora",
            "Não se abale com a tristeza. Te desafio a terminar a atividade agora",
            "Se desafie, tente terminar essa atividade agora e depois você pode sair e se divertir com seus amigos",
            "Eu proponho um desafio: terminar a atividade primeiro e depois se divirta o quanto quiser"
        ]
    },
    6: {
        0: [
            "Não fique triste, você é uma pessoa feliz e inteligente. Tenho certeza que conseguirá resolver qualquer problema",
            "Não se abata facilmente, você é uma pessoa forte. E, sabe resolver os exercícios corretamente",
            "Esqueça a tristeza, você merece tudo de bom e está dando o seu melhor para resolver a atividade",
            "Não se culpe, você só precisa descansar um pouco e depois você conseguirá resolver a atividade"
        ],
        1: [
            "Não fique triste, você é uma pessoa feliz e inteligente. Tenho certeza que conseguirá resolver qualquer problema",
            "Não se abata facilmente, você é uma pessoa forte. E, sabe resolver os exercícios corretamente",
            "Esqueça a tristeza, você merece tudo de bom e está dando o seu melhor para resolver a atividade",
            "Não se culpe, você só precisa descansar um pouco e depois você conseguirá resolver a atividade"
        ],
        2: [
            "Não fique triste, você é uma pessoa feliz e inteligente. Tenho certeza que conseguirá resolver qualquer problema",
            "Não se abata facilmente, você é uma pessoa forte. E, sabe resolver os exercícios corretamente",
            "Esqueça a tristeza, você merece tudo de bom e está dando o seu melhor para resolver a atividade",
            "Não se culpe, você só precisa descansar um pouco e depois você conseguirá resolver a atividade"
        ]
    },
    7: {
        0: [],
        1: [],
        2: []
    },
    8: {
        0: [
            "Não fique triste, você é uma pessoa inteligente e eu tenho certeza que você vai conseguir resolver a atividade",
            "Relaxe um pouco e se divirta. Depois volte aqui e resolva o exercício, pois tenho certeza que é capaz",
            "Você só precisa se divertir um pouco, mas tenho certeza que você consegue",
            "Relaxe e descanse um pouco, depois volte que conseguirá resolver o exercício"
        ],
        1: [
            "Não fique triste, você é uma pessoa inteligente e eu tenho certeza que você vai conseguir resolver a atividade",
            "Relaxe um pouco e se divirta. Depois volte aqui e resolva o exercício, pois tenho certeza que é capaz",
            "Você só precisa se divertir um pouco, mas tenho certeza que você consegue",
            "Relaxe e descanse um pouco, depois volte que conseguirá resolver o exercício"
        ],
        2: [
            "Não fique triste, você é uma pessoa inteligente e eu tenho certeza que você vai conseguir resolver a atividade",
            "Relaxe um pouco e se divirta. Depois volte aqui e resolva o exercício, pois tenho certeza que é capaz",
            "Você só precisa se divertir um pouco, mas tenho certeza que você consegue",
            "Relaxe e descanse um pouco, depois volte que conseguirá resolver o exercício"
        ]
    },
};

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

let userLonelyResponses = {
    0: {
        0: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ],
        1: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ],
        2: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ]
    },
    1: {
        0: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ],
        1: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ],
        2: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ]
    },
    2: {
        0: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ],
        1: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ],
        2: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ]
    },
    3: {
        0: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ],
        1: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ],
        2: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ]
    },
    4: {
        0: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ],
        1: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ],
        2: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ]
    },
    5: {
        0: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ],
        1: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ],
        2: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ]
    },
    6: {
        0: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ],
        1: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ],
        2: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ]
    },
    7: {
        0: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ],
        1: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ],
        2: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ]
    },
    8: {
        0: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ],
        1: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
        ],
        2: [
            "Não se sinta solitário, estou aqui com você",
            "Você nunca está sozinho, sempre estou com você",
            "Não precisa se sentir assim, eu estou ao seu lado",
            "Não se sinta sozinho, porque eu sempre estarei aqui para você"
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

let userTiredResponses = {
    0: {
        0: [
            "Não tem problema em estar cansado, isso é muito normal. Descanse a mente e relaxe um pouco",
            "Não se sinta mal em estar cansado. Relaxe e descanse",
            "Você precisa relaxar e descansar. Veja um filme, converse com seus amigos, durma, ...",
            "Não se sinta tão pressionado. Descanse e durma um pouco"
        ],
        1: [
            "Eu sei que está cansado, mas tente pesquisar outros materiais para aprofundar seus conhecimentos",
            "Descanse um pouco e depois busque materiais extras para complementar seus estudos e sanar dúvidas",
            "Eu sei que você é capa, busque materiais extras na internet para se aprofundar no assunto e depois você poderá descansar o quanto quiser",
            "Tente aprofundar mais os conhecimentos para resolver o exercício mais rapido possível e depois descanse"
        ],
        2: [
            "Eu sei que está cansado, mas tente pesquisar outros materiais para aprofundar seus conhecimentos",
            "Descanse um pouco e depois busque materiais extras para complementar seus estudos e sanar dúvidas",
            "Eu sei que você é capa, busque materiais extras na internet para se aprofundar no assunto e depois você poderá descansar o quanto quiser",
            "Tente aprofundar mais os conhecimentos para resolver o exercício mais rapido possível e depois descanse"
        ]
    },
    1: {
        0: [
            "Eu sei que está cansado, mas você sabia que é possível procurar exercícios parecidos na Internet?",
            "Eu entendo seu cansaço, mas você sabia que é possível buscar outras fontes na Internet para aprender o conteúdo?",
            "Você pode descansar agora e depois procurar outros materiais de estudo",
            "Descanse um pouco e procure novos materiais de estudo"
        ],
        1: [
            "Por quê você está tão cansado?",
            "Estou preocupado com você. Por quê está tão cansado?",
            "Você devia descansar um pouco, mas porquê você está tão cansado?",
            "Você devia relaxar. Mas por quê está cansado?"
        ],
        2: [
            "Por quê você está tão cansado?",
            "Estou preocupado com você. Por quê está tão cansado?",
            "Você devia descansar um pouco, mas porquê você está tão cansado?",
            "Você devia relaxar. Mas por quê está cansado?"
        ]
    },
    2: {
        0: [
            "Eu sei que está cansado, mas tenho certeza que você consegue resolver esse exercício. Tente procurar novos materiais de estudo",
            "Eu tenho certeza que você aguentar mais um pouco. Busque outras fontes de conhecimento e resola o exercício",
            "Procure outros materiais de estudo na internet, resolva o exercício e depois descanse",
            "Busque conteúdos novos na internet, resolva o exercício e descanse"
        ],
        1: [
            "Eu sei que está cansado, mas tenho certeza que você consegue resolver esse exercício. Tente procurar novos materiais de estudo",
            "Eu tenho certeza que você aguentar mais um pouco. Busque outras fontes de conhecimento e resola o exercício",
            "Procure outros materiais de estudo na internet, resolva o exercício e depois descanse",
            "Busque conteúdos novos na internet, resolva o exercício e descanse"
        ],
        2: [
            "Vamos deixar tudo que é negativo, busque um material diferente na internet para estudar!",
            "Descanse um pouco, pesquise por materiais diferentes para estudar e enriquecer seus conhecimentos.",
            "Você é muito esperto, faça seus exercícios e deixe tudo o cansaço de lado!",
            "Aprofunde no conteúdo estudado, faça grupos de estudos e se divirta!"
        ]
    },
    3: {
        0: [
            "Momentos assim existem, mas não se deixe abater. Vamos lá, use sua energia para revisar o conteúdo e estudar mais sobre o que ainda tem dúvidas!",
            "Não deixa o casaço te dominar, peça ajuda à seu professor, solicite materiais complementares e dicas que podem te ajudar!",
            "Ignore coisas que podem atrapalhar seus estudos, você é uma pessoa com muita disposição! Busque por materiais complementares e aproveite seu tempo para estudar!!",
            "Aprofunde nos seus estudos, você sabe do que é capaz! Não ligue para o cansaço!"
        ],
        1: [
            "Não fique assim, descanse um pouco ou foque nos estudos para acabar isso rápido! Pergunte coisas como 'O que significa...', sou capaz de fazer pequenas buscas na internet.",
            "Que tal aprofundar seus conhecimentos? Pergunte sobre o que quer saber, basta iniciar sua pergunta com 'O que é...'. Vamos lá!",
            "Quero ver você relaxado, mas antes vamos fazer o exercício, espero poder te ajudar, me pergunte algo como 'O que significa...'!",
            "Eu também estou cansado! Mas quero te ajudar, pergunte algo como 'O que é ...'!"
        ],
        2: [
            "Esqueça o cansaço, vamos estudar! Eu quero te ajudar, me pergunte algo como 'O que é...'!",
            "Se esforçe mais um pouco! Quer estudar sobre o que? Me pergunte algo como 'O que significa...'!",
            "Deixe todo esse cansaço pra lá! Me faça uma pergunta que eu posso te ajudar nos estudos, diga 'O que é...'!",
            "Vamos fazer as atividadese depois você descansa, me pergunte sobre o que quer aprofundar nos seus conhecimentos, basta digitar 'O que é ...'."
        ]
    },
    4: {
        0: [
            "Não desista agora, pesquise outros materiais para aprofundar seus conhecimentos",
            "Ignore o cansaço, busque materiais extras para complementar seus estudos e sanar dúvidas",
            "Tenha mais fôlego, e busque materiais extras na internet para se aprofundar no assunto",
            "Esqueça o cansaço e tente aprofundar mais os conhecimentos para resolver o exercício"
        ],
        1: [
            "Não tem problema em estar cansado, isso é muito normal. Descanse a mente e relaxe um pouco",
            "Não se sinta mal em estar cansado. Relaxe e descanse",
            "Você precisa relaxar e descansar. Veja um filme, converse com seus amigos, durma, ...",
            "Não se sinta tão pressionado. Descanse e durma um pouco"
        ],
        2: [
            "Não desista agora, pesquise outros materiais para aprofundar seus conhecimentos",
            "Ignore o cansaço, busque materiais extras para complementar seus estudos e sanar dúvidas",
            "Tenha mais fôlego, e busque materiais extras na internet para se aprofundar no assunto",
            "Esqueça o cansaço e tente aprofundar mais os conhecimentos para resolver o exercício"
        ]
    },
    5: {
        0: [
            "Não tem problema, você está dando seu melhor.E, depois procure outros materiais complementares de estudo",
            "Não se estresse, o importante é tentar. Descanse um pouco e busque na internet novos materiais para estudar",
            "Descanse um pouco, você merece e está dando o seu melhor para resolver a atividade",
            "Não se culpe por isso, descanse e depois busque outras fontes de conhecimento na internet"
        ],
        1: [
            "Eu sei que está cansado, mas tente pesquisar outros materiais para aprofundar seus conhecimentos",
            "Descanse um pouco e depois busque materiais extras para complementar seus estudos e sanar dúvidas",
            "Eu sei que você é capa, busque materiais extras na internet para se aprofundar no assunto e depois você poderá descansar o quanto quiser",
            "Tente aprofundar mais os conhecimentos para resolver o exercício mais rapido possível e depois descanse"
        ],
        2: [
            "Eu sei que está cansado. Mas tente resolver esse exercício agora",
            "Não se abale com o cansaço. Te desafio a terminar a atividade agora",
            "Se desafie, tente terminar essa atividade agora e depois descanse o quanto quiser",
            "Eu proponho um desafio: terminar a atividade primeiro e depois descansar o quanto voceê quiser"
        ]
    },
    6: {
        0: [
            "Não tem problema, você está dando seu melhor.E, volte mais tarde para tentar de novo",
            "Não fique cansado, o importante é tentar. Descanse um pouco e volte depois",
            "Descanse um pouco, você merece e está dando o seu melhor para resolver a atividade",
            "Não se culpe por isso, você só precisa descansar um pouco e depois você conseguirá resolver a atividade"
        ],
        1: [
            "Não tem problema, você está dando seu melhor.E, volte mais tarde para tentar de novo",
            "Não fique cansado, o importante é tentar. Descanse um pouco e volte depois",
            "Descanse um pouco, você merece e está dando o seu melhor para resolver a atividade",
            "Não se culpe por isso, você só precisa descansar um pouco e depois você conseguirá resolver a atividade"
        ],
        2: [
            "Não tem problema, você está dando seu melhor.E, volte mais tarde para tentar de novo",
            "Não fique cansado, o importante é tentar. Descanse um pouco e volte depois",
            "Descanse um pouco, você merece e está dando o seu melhor para resolver a atividade",
            "Não se culpe por isso, você só precisa descansar um pouco e depois você conseguirá resolver a atividade"
        ]
    },
    7: {
        0: [
            "Não desista agora, pesquise outros materiais para aprofundar seus conhecimentos",
            "Ignore o cansaço, busque materiais extras para complementar seus estudos e sanar dúvidas",
            "Tenha mais fôlego, e busque materiais extras na internet para se aprofundar no assunto",
            "Esqueça o cansaço e tente aprofundar mais os conhecimentos para resolver o exercício"
        ],
        1: [
            "Não desista agora, pesquise outros materiais para aprofundar seus conhecimentos",
            "Ignore o cansaço, busque materiais extras para complementar seus estudos e sanar dúvidas",
            "Tenha mais fôlego, e busque materiais extras na internet para se aprofundar no assunto",
            "Esqueça o cansaço e tente aprofundar mais os conhecimentos para resolver o exercício"
        ],
        2: [
            "Não desista agora, pesquise outros materiais para aprofundar seus conhecimentos",
            "Ignore o cansaço, busque materiais extras para complementar seus estudos e sanar dúvidas",
            "Tenha mais fôlego, e busque materiais extras na internet para se aprofundar no assunto",
            "Esqueça o cansaço e tente aprofundar mais os conhecimentos para resolver o exercício"
        ]
    },
    8: {
        0: [
            "Descanse um pouco e eu tenho certeza que quando voltar você irá fazer a atividade",
            "Você só está um pouco cansado, mas tenho certeza que você consegue",
            "Deite um pouco e relaxe. E volte daqui a pouco",
            "Relaxe e descanse um pouco, depois volte que conseguirá resolver o exercício"
        ],
        1: [
            "Descanse um pouco e eu tenho certeza que quando voltar você irá fazer a atividade",
            "Você só está um pouco cansado, mas tenho certeza que você consegue",
            "Deite um pouco e relaxe. E volte daqui a pouco",
            "Relaxe e descanse um pouco, depois volte que conseguirá resolver o exercício"
        ],
        2: [
            "Descanse um pouco e eu tenho certeza que quando voltar você irá fazer a atividade",
            "Você só está um pouco cansado, mas tenho certeza que você consegue",
            "Deite um pouco e relaxe. E volte daqui a pouco",
            "Relaxe e descanse um pouco, depois volte que conseguirá resolver o exercício"
        ]
    },
};