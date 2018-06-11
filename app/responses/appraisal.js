module.exports = function () {
    global.appraisalBadResponses = appraisalBadResponses;
    global.appraisalGoodResponses = appraisalGoodResponses;
};

/*
First Index = Personality
Second Index = Emotion
 */

let appraisalBadResponses = {
    0: {
        0: ["Não deixe um momento ruim atrapalhar o seu sucesso, sei que você é capaz!",
            "Não se deixe levar por coisas ruins, vamos lá você é capaz de resolver as atividades!",
            "Você é um aluno muito bom, não se preocupe com momentos ruins!",
            "Coisas ruins acontecem, devemos saber lidar com elas da melhor forma. Vamos fazer as atividades!!"],
        1: ["Não gosto de saber que você está triste, ignore as coisas ruins ao seu redor, descanse e depois volte para fazer suas atividades!",
            "Os estudos são a chave para o sucesso, vamos fazer seus exercícios que logo a tristeza vai embora!",
            "Você é capaz de realizar suas atividades, não se deixe levar por coisas ruins!",
            "Todas pessoas passam por momentos ruins, vamos aprimorar seus conhecimentos fazendo as atividades!"],
        2: ["Ignore coisas ruins que só trazem emoções negativas, desta forma a vida fica bem melhor. Faça suas atividades!!",
            "Esqueça as coisas que não te deixam feliz, vamos fazer as atividades, sei que você é capaz!",
            "Quanto mais você cuida de você, melhor as coisas ficam. Vamos fazer os exercícios para enriquecer seus conhecimentos!",
            "Nada de negatividade, quanto mais exercitamos a mente mais evoluímos, vamos estudar!!"]
    },
    1: {
        0: ["Ignore coisas ruins, aproveite essa alegria e abra um fórum de discussões, compartilhe suas dúvidas e conhecimentos com seus amigos!",
            "O ambiente possui excelentes ferramentas como fórum e chat, aproveite sua disposição e vamos estudar!",
            "Deixe de lado tudo que é ruim e pode atrapalhar seu desempenho, dê uma passadinha no fórum de discussões para tirar dúvidas!",
            "Nada de negatividade, vamos dar uma espiadinha no fórum de discussões, tem muita coisa legal por lá."],
        1: ["O que te deixou triste? Descanse um pouco, volte mais tarde para fazer suas atividades!",
            "Vamos mudar a atividade que está fazendo, isso por ajudar você a ficar mais feliz!",
            "Não gosto de te ver triste, faça algo que goste, descanse e depois volte para fazer suas atividades.",
            "O que te causou toda essa tristeza? Me conte o que gosta de fazer! Talvez você precise relaxar."],
        2: ["Nada de negatividade, faça algo que goste, ouça músicas, descanse e depois volte para realizar as atividades.",
            "Vamos lá, quero ver positividade aqui!! Faça suas atividades e depois descanse um pouco!",
            "Negatividade aqui não, lembre-se que coisa boa atrai coisa boa. Vamos fazer seu exercício e melhorar esse astral.",
            "Me diga o que aconteceu!! Quanto mais você sorrir, mais coisas boas você vai atrair. "]
    },
    2: {
        0: ["Não deixe nada atrapalhar sua alegria, busque materiais extras na internet, desta forma você pode complementar seus estudos!",
            "Não dê atenção à coisas ruins, sei que está feliz, vamos pesquisar outros materiais para aprofundar seus conhecimentos!",
            "Busque por materiais extras para complementar seus estudos e sanar dúvidas, existem excelentes materiais na internet!",
            "A internet pode ser um excelente recurso de estudo, busque por materiais que vão além do que foi passado em sala."],
        1: ["Não fique triste, busque materiais diferentes do que foi ministrado em sala, isso pode te alegar.",
            "A internet é um excelente recurso para buscar materiais diferentes de estudo, saia da rotina e seja feliz.",
            "Tristeza aqui não, vamos lá, quero ver sua energia! Busque por materiais diferentes para estudar, saia da rotina!",
            "Sorria, quer ver você feliz. Vamos variar e buscarmos um material diferente de estudo na internet!!"],
        2: ["Vamos deixar tudo que é negativo, busque um material diferente na internet para estudar!",
            "Sorria para espantar a negatividade, pesquise por materiais diferentes para estudar e enriquecer seus conhecimentos.",
            "Você é muito esperto, faça seus exercícios e deixe tudo que é ruim de lado!",
            "Aprofunde no conteúdo estudado, faça grupos de estudos e se divirta!"]
    },
    3: {
        0: ["Momentos ruins existem, mas não se deixe abater. Vamos lá, use sua energia para revisar o conteúdo e estudar mais sobre o que ainda tem dúvidas!",
            "Peça ajuda à seu professor, solicite materiais complementares e dicas que podem te ajudar!",
            "Ignore coisas que podem atrapalhar seus estudos, você é uma pessoa muito alegre! Busque por materiais complementares e aproveite seu tempo para estudar!!",
            "Aprofunde nos seus estudos, você sabe do que é capaz! Não ligue para as coisas ruins!"],
        1: ["Não fique triste, deixe eu te ajudar! Pergunte coisas como 'O que é...', sou capaz de fazer pequenas buscas na internet.",
            "Que tal aprofundar seus conhecimentos? Pergunte sobre o que quer saber, basta iniciar sua pergunta com 'O que é...'. Vamos lá!",
            "Quero ver você alegre, espero poder te ajudar, me pergunte algo como 'O que é...'!",
            "Se você está triste, eu fico triste! Mas quero te ajudar, pergunte algo como 'O que é ...'!"],
        2: ["Sorria, vamos estudar! Eu quero te ajudar, me pergunte algo como 'O que é...'!",
            "Negatividade só atrapalha os estudos! Quer estudar sobre o que? Me pergunte algo como 'O que é...'!",
            "Deixe toda negatividade pra lá! Me faça uma pergunta que eu posso te ajudar nos estudos, diga 'O que é...'!",
            "Nada de negativo aqui, vamos fazer as atividades, me pergunte sobre o que quer aprofundar nos seus conhecimentos, basta digitar 'O que é ...'."]
    },
    4: {
        0: ["Nada de ruim por aqui, vamos estudar. Continue resolvendo suas atividades, você é um ótimo estudante.",
            "Esqueça as coisas ruins. Quero ver você evoluindo a cada dia, estou sempre aqui para te incentivar!",
            "Eu só tenho elogios à você, quero te ver sempre feliz. Vamos estudar e concluir as atividades!",
            "Quero te ver sempre alegre, se tiver atividades pendentes, resolva! Você é capaz!"],
        1: ["Não quero tristezas e negatividades, eu estou sempre aqui para te ajudar, também seus colegas e professores!",
            "Nada de sentimentos ruins, Chame um colega para estudar, tire dúvidas com o professor. Você é muito esperto, sei que é capaz!",
            "Ah, esqueça o que é negativo. Quero te ver sorrindo, continue sua atividade, estarei aqui te ajudando.",
            "Nada de tristeza, vamos lá, dê o seu melhor e continue suas atividades!"],
        2: ["Negatividade aqui não, que tal buscar por materiais complementares para acrescentar seu conhecimento!!!",
            "Sorria sempre, espante tudo de ruim! Você é muito esperto, chame seus colegas para estudar, se necessário tire dúvidas com seu professor.",
            "Quero só positividade por aqui, dê o seu melhor e procure sempre aprimorar seus conhecimentos!",
            "Coisas ruins sempre se vão, mas suas atividades estão te esperando! Vamos lá, você é capaz!"]
    },
    5: {
        0: ["Nada de coisas ruins. Vamos utilizar a internet para buscar por materiais complementares de estudo!",
            "Gosto de te ver feliz, então esqueça as coisas negativas. Ficarei muito feliz se você for além do conteúdo estudado em sala de aula!",
            "Você já ouviu falar de Podcasts e blogs? Eles auxiliam muito na educação. Aproveite e procure por materiais que podem complementar seus estudos!",
            "Ignore as coisas ruins e continue feliz. Utilize a internet para buscar materiais que ensinam e divertem ao mesmo tempo!"],
        1: ["Não fique triste, gosto de saber que você está feliz! Ao fazer suas atividades busque materiais além do que foi passado em sala de aula.",
            "Faça suas atividades e nada de tristeza por aqui, sei que você é uma pessoa muito esperta!",
            "Sorria, não deixe coisas ruins atrapalharem seu desempenho! Faça suas atividades, em caso de dúvidas consulte seu professor, colegas e o nosso fórum.",
            "Vamos lá, sorria! Faça as atividades propostas, se estiver com dificuldades busque outras fontes de conhecimento, como a internet!"],
        2: ["Nada de negatividade, vamos fazer as atividades e depois descanse fazendo coisas que te façam bem!",
            "Alegria gera alegria, vamos fazer as atividades, busque por materiais que complementem seus estudos.",
            "Sei de algo que possa te ajudar, a internet possui muitos recursos interessantes que podem despertar ainda mais seu interesse pelo conteúdo que está estudando!",
            "Aproveite apenas as coisas boas, nada de negatividade! Faça as atividades, você pode buscar por materiais complementares na internet. Podcasts e blogs podem ser uma ótima alternativa!"]
    },
    6: {
        0: ["Coisas ruins realmente acontecem, Mas vamos deixar isso de lado, você é um excelente estudante.",
            "Não se preocupe com os momentos ruins, logo passa! Volte para suas atividades, você é um ótimo estudante.",
            "Esqueça as coisas ruins. Termine suas atividades e depois ajude seus colegas que estão com dificuldade.",
            "Você é um aluno muito bom, não se preocupe com coisas ruins. Você é capaz de muitas coisas incríveis!"],
        1: ["Coisas ruins realmente acontecem, Mas vamos deixar isso de lado, você é um excelente estudante.",
            "Não se preocupe com os momentos ruins, logo passa! Volte para suas atividades, você é um ótimo estudante.",
            "Esqueça as coisas ruins. Termine suas atividades e depois ajude seus colegas que estão com dificuldade.",
            "Você é um aluno muito bom, não se preocupe com coisas ruins. Você é capaz de muitas coisas incríveis!"],
        2: ["Coisas ruins realmente acontecem, Mas vamos deixar isso de lado, você é um excelente estudante.",
            "Não se preocupe com os momentos ruins, logo passa! Volte para suas atividades, você é um ótimo estudante.",
            "Esqueça as coisas ruins. Termine suas atividades e depois ajude seus colegas que estão com dificuldade.",
            "Você é um aluno muito bom, não se preocupe com coisas ruins. Você é capaz de muitas coisas incríveis!"]
    },
    7: {
        0: [],
        1: [],
        2: []
    },
    8: {
        0: ["Todos temos momentos ruins, sei que você gosta de tudo bem feito. Fique de olho no prazo de suas atividades!",
            "Coisas ruins logo passam. Termine suas atividades e ajude seus colegas que tem dificuldade.",
            "Como eu sei que você gosta de desafios, sei que vai gostar de resolver suas atividades.",
            "Deixe as coisas ruins de lado. Faça suas atividades, aproveite para ajudar quem tem dificuldades!"],
        1: ["Todos temos momentos ruins, sei que você gosta de tudo bem feito. Fique de olho no prazo de suas atividades!",
            "Coisas ruins logo passam. Termine suas atividades e ajude seus colegas que tem dificuldade.",
            "Como eu sei que você gosta de desafios, sei que vai gostar de resolver suas atividades.",
            "Deixe as coisas ruins de lado. Faça suas atividades, aproveite para ajudar quem tem dificuldades!"],
        2: ["Todos temos momentos ruins, sei que você gosta de tudo bem feito. Fique de olho no prazo de suas atividades!",
            "Coisas ruins logo passam. Termine suas atividades e ajude seus colegas que tem dificuldade.",
            "Como eu sei que você gosta de desafios, sei que vai gostar de resolver suas atividades.",
            "Deixe as coisas ruins de lado. Faça suas atividades, aproveite para ajudar quem tem dificuldades!"]
    },
};

let appraisalGoodResponses = {
    0: {
        0: ["Que bom que gostou! Sei que conseguirá terminar rapidamente seus exercícios.",
            "Estou feliz que gostou, aproveite toda essa energia para colocar enm dia seus estudos!",
            "Concordo com você. Sei que vocẽ é capaz de fazer todas as atividades, você é um ótimo aluno!",
            "Realmente, você está certo! Você se supera a cada dia, parabéns!"],
        1: ["Sim, você está certo. Quero sempre te ver feliz, sei que é capaz de fazer todas atividades.",
            "Que bom que está mais feliz, aproveite para revisar suas atividades!",
            "Que bom que isso te deixou um pouco mais feliz. Reveja suas atividades, você é muito esperto, sei que consegue!",
            "Você está certo! Agora, aproveite seu potencial e termine suas atividades!"],
        2: ["Concordo com você! Gosto de ver essa positividade, você é muito especial!",
            "Que bom que gostou, nada de negatividade por aqui! Vamos revisar o conteúdo ministrado pelo professor e concluir suas atividades!",
            "Fico feliz que tenha gostado, vamos aproveitar e terminar as atividades.",
            "Que bom que gostou, espero que isto tenha te animado. Tenho orgulho de você, continue assim!"]
    },
    1: {
        0: ["Que bom que gostou! Sugiro você passar no fórum de discussões e deixar suas dúvidas, ou quem sabe ajudar seus colegas.",
            "Concordo contigo! Que tal dar uma passadinha em nosso fórum de discussões? Com ele você pode tirar suas dúvidas e quem sabe ajudar seus colegas.",
            "Saber que você gostou me deixa muito feliz! Você sabia que nosso fórum de discussões é um excelente recurso que pode esclarecer suas dúvidas e ao mesmo tempo você consegue ajudar quem tem dúvidas.",
            "Fico feliz que tenha gostado. Visite nosso fórum para esclarecer suas dúvidas!"],
        1: ["Que bom que isto te agrada. Quero te ver feliz, busque por wikis na internet que possam te ajudar nos estudos!",
            "Fico feliz que tenha gostado. Você já ouviu falar de wikis? São páginas na internet com conteúdo de estudo! Tenho certeza que vão te ajudar.",
            "Gosto de te ver feliz! Busque por conteúdos na internet que vão te ajudar nos estudos, você é capaz de superar todos seus desafios!",
            "Que bom que está mais alegre. Aproveite e pesquise por materiais complementares aos ministrados em sala de aula!"],
        2: ["Fico feliz por você! Sugiro à você buscar material extra na internet para estudos. A internet é uma excelente fonte de materiais de estudo!",
            "Na internet você pode encontrar diversas páginas com conteúdo para estudos! Não fique restrito à apenas o conteúdo ministrado em sala.",
            "Que bom que gostou! O que acha de buscar materiais diferentes para estudo? É uma excelente alternativa de aprendizado.",
            "Fico feliz que tenha gostado! Pesquise por outros materiais que vão complementar ainda mais seus conhecimentos."]
    },
    2: {
        0: ["Que bom que está feliz e tenha gostado! Recomendo você procurar por material extra na internet para enriquecer seus conhecimentos.",
            "Sua felicidade é contagiante, aproveite seu tempo e disposição para realizar suas atividades!",
            "Procure por materiais complementares, a internet é uma ótima fonte de materiais de estudo, mas cuidado para não perder o foco!",
            "Fico feliz se vocẽ está feliz! Aprofunde no tema que está estudando e não esqueça de compartilhar seu conhecimento com seus colegas!"],
        1: ["Que bom que gostou, não quero te ver triste! Sugiro procurar novos materiais na internet, desta forma você pode aprender ainda mais.",
            "Fico feliz que tenha gostado, gosto de te ver feliz! Mas, não fique restrito à apenas o material que o professou passou em sala de aula, amplie seus horizontes.",
            "Saiba que sua opinião é muito importante! Você já ouviu falar de podcasts e blogs? Eles auxiliam muito na educação.",
            "Realmente, eu acho incrível! Enquanto estiver estudando aproveite e busque por materiais de estudo diferentes do que está acostumado."],
        2: ["Fico feliz por você! Você poderia pesquisar por conteúdos como vídeos que fazem analogias ao conteúdo estudado, sei que vai gostar! ;)",
            "Que bom que gostou. Volte ao conteúdo anterior e revise, quanto mais você estuda, mais você aprende!",
            "Concordo com você! Já olhou se não há material acumulado? Não deixe para última hora.",
            "Gosto de te ver com opiniões positivas. Recomendo você buscar materiais complementares para estudo!"]
    },
    3: {
        0: ["Fico muito feliz que gostou. Vamos lá, agora use sua energia para revisar a matéria!",
            "Gosto de te ver feliz e positivo! Se tiver dúvidas peça ajuda à seu professor, peça à ele materiais complementares e dicas que podem te ajudar!",
            "Você é uma pessoa muito alegre e especial para mim! Busque por materiais complementares e aproveite seu tempo para estudar!",
            "Que bom que gostou! Aprofunde nos seus estudos, você sabe do que é capaz!"],
        1: ["Que bom que te agrada, não gosto que fique triste! Se tiver alguma dúvida me pergunte coisas como 'O que é...', sou capaz de fazer pequenas buscas na internet.",
            "Gosto de ver você evoluindo cada vez mais, que tal aprofundar seus conhecimentos? Pergunte sobre o que quer saber, basta iniciar sua pergunta com 'O que é...'. Vamos lá!",
            "Quero ver você alegre, espero poder te ajudar, me pergunte algo como 'O que é...'!",
            "Sua opinião é muito válida! Quero te ajudar, pergunte algo como 'O que é ...'!"],
        2: ["Sorria, vamos estudar! Eu quero te ajudar, me pergunte algo como 'O que é...'!",
            "Que bom que gostou, a negatividade só atrapalha os estudos! Quer estudar sobre o que? Me pergunte algo como 'O que é...'!",
            "Me faça uma pergunta que eu posso te ajudar nos estudos, diga 'O que é...'!",
            "Concordo com você! Mas, agora vamos fazer as atividades, me pergunte sobre o que quer aprofundar nos seus conhecimentos, basta digitar 'O que é ...'."]
    },
    4: {
        0: ["Fico feliz que você gostou e está feliz! Mas vamos estudar, continue resolvendo suas atividades, você é um ótimo estudante.",
            "Quero ver você evoluindo a cada dia, estou sempre aqui para te incentivar!",
            "Eu só tenho elogios à você, quero te ver sempre feliz. Vamos estudar e concluir as atividades!",
            "Quero te ver sempre alegre, se tiver atividades pendentes, resolva! Você é capaz!"],
        1: ["Fico feliz, saiba eu estou sempre aqui para te ajudar, também seus colegas e professores!",
            "Estou muito feliz em saber que gostou. Chame um colega para estudar, tire dúvidas com o professor. Você é muito esperto e capaz!",
            "Sua opinião é muito importante. Quero te ver sorrindo, continue sua atividade, estarei aqui te ajudando.",
            "Concordo com você! Agora dê o seu melhor e continue suas atividades!"],
        2: ["Isso aí, negatividade aqui não, que tal buscar por materiais complementares para acrescentar seu conhecimento!",
            "Bom saber que gostou! Você é muito esperto, chame seus colegas para estudar, se necessário tire dúvidas com seu professor.",
            "Concordo com você! Dê o seu melhor e procure sempre aprimorar seus conhecimentos!",
            "Realmente! Mas suas atividades estão te esperando! Vamos lá, você é capaz!"]
    },
    5: {
        0: ["Eu também acho! Vamos utilizar a internet para buscar por materiais complementares de estudo!",
            "Gosto de te ver feliz. Ficarei muito feliz se você for além do conteúdo estudado em sala de aula!",
            "Com toda certeza! Você já ouviu falar de Podcasts e blogs? Eles auxiliam muito na educação. Aproveite e procure por materiais que podem complementar seus estudos!",
            "Continue assim, feliz. Utilize a internet para buscar materiais que ensinam e divertem ao mesmo tempo!"],
        1: ["Que bom que te agrada, gosto de saber que você está feliz! Ao fazer suas atividades busque materiais além do que foi passado em sala de aula.",
            "Faça suas atividades, sei que você é uma pessoa muito esperta!",
            "Fico feliz que gostou, não gosto quando está triste! Faça suas atividades, em caso de dúvidas consulte seu professor, colegas e o nosso fórum.",
            "Faça as atividades propostas, se estiver com dificuldades busque outras fontes de conhecimento, como a internet!"],
        2: ["Isso mesmo, nada de negatividade, vamos fazer as atividades e depois descanse fazendo coisas que te façam bem!",
            "Concordo com você. Agora, vamos fazer as atividades, busque por materiais que complementem seus estudos.",
            "Que bom que gostou, Você sabia que a internet possui muitos recursos interessantes que podem despertar ainda mais seu interesse pelo conteúdo que está estudando!",
            "Isso mesmo, nada de negatividade! Faça as atividades, você pode buscar por materiais complementares na internet. Podcasts e blogs podem ser uma ótima alternativa!"]
    },
    6: {
        0: ["Fico feliz que tenha gostado. Você é um ótimo aluno, saiba que estou aqui para te ajudar quando precisar!",
            "Que bom que gostou. Você é muito esperto, Sei que terá um bom desempenho, você é uma pessoa muito esforçada!",
            "Concordo com você! Você é um excelente aluno, vamos concluir as atividades!",
            "Vocẽ está certo! Continue realizando suas atividades, seu esforço é fundamental para ter um bom resultado!"],
        1: ["Fico feliz que tenha gostado. Você é um ótimo aluno, saiba que estou aqui para te ajudar quando precisar!",
            "Que bom que gostou. Você é muito esperto, Sei que terá um bom desempenho, você é uma pessoa muito esforçada!",
            "Concordo com você! Você é um excelente aluno, vamos concluir as atividades!",
            "Vocẽ está certo! Continue realizando suas atividades, seu esforço é fundamental para ter um bom resultado!"],
        2: ["Fico feliz que tenha gostado. Você é um ótimo aluno, saiba que estou aqui para te ajudar quando precisar!",
            "Que bom que gostou. Você é muito esperto, Sei que terá um bom desempenho, você é uma pessoa muito esforçada!",
            "Concordo com você! Você é um excelente aluno, vamos concluir as atividades!",
            "Vocẽ está certo! Continue realizando suas atividades, seu esforço é fundamental para ter um bom resultado!"]
    },
    7: {
        0: [],
        1: [],
        2: []
    },
    8: {
        0: ["Que bom que gostou! Termine suas atividades e depois ajude seus colegas que estão com dificuldades!",
            "Sua opinião é muito importante para mim! Vamos terminar as atividades, você é muito esperto, sei que consegue entregar no prazo!",
            "Fico feliz que tenha gostado. Agora vamos terminar as atividades, depois você pode voltar e revisar todo conteúdo!",
            "Concordo com você! Termine suas atividades e fique de olho nos prazos de conclusão!"],
        1: ["Que bom que gostou! Termine suas atividades e depois ajude seus colegas que estão com dificuldades!",
            "Sua opinião é muito importante para mim! Vamos terminar as atividades, você é muito esperto, sei que consegue entregar no prazo!",
            "Fico feliz que tenha gostado. Agora vamos terminar as atividades, depois você pode voltar e revisar todo conteúdo!",
            "Concordo com você! Termine suas atividades e fique de olho nos prazos de conclusão!"],
        2: ["Que bom que gostou! Termine suas atividades e depois ajude seus colegas que estão com dificuldades!",
            "Sua opinião é muito importante para mim! Vamos terminar as atividades, você é muito esperto, sei que consegue entregar no prazo!",
            "Fico feliz que tenha gostado. Agora vamos terminar as atividades, depois você pode voltar e revisar todo conteúdo!",
            "Concordo com você! Termine suas atividades e fique de olho nos prazos de conclusão!"]
    },
};
