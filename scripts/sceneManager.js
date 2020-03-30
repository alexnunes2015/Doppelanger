let chatText    = document.getElementById("ChatText");
let answers     = document.getElementById("answers");

function Write(txt){
    chatText.innerText=txt;
}

function clearButtons(){
    answers.innerHTML="";
}

function AddButton(txt,answerID){
    answers.innerHTML=answers.innerHTML
    +"<button onClick='LoadAnswer("+answerID+")'>"+txt+"<button";
}

function LoadAnswer(id){
    clearButtons();
    Write(answersJSON.data[id].question);
    answersJSON.data[id].Buttons.forEach(element => {
        AddButton(element.label,element.toID);
    });
}

function load(){
    LoadAnswer(0);
}


const answersJSON = {
    'data':[
        {
            "question":"Depois de muita insistência por parte de sua namorada, Monica, você finalmente aceitou ir passar o natal com os pais dela, terão de sair cedo, as 6 da manhã do dia 22, para no dia 24 estar na casa de seus sogros... ahh, a simples ideia de passar o natal com seus sogros... você lembra do que ocorreu no ano passado quando eles vieram lhe visitar no natal, sua sogra passou o natal inteiro falando do Márcio, um ex namorado de Monica do tempo da escola, de como ele era um garoto estudioso, bonito... e que não sabe como sua filha largou ele, e na faculdade, ficou contigo, perdido nesses pensamentos, de como sua sogra te odeia, e você também não gosta dela acaba pegando sono.\nVocê acorda algumas vezes durante a noite, malditos pesadelos, sofres disso desde a infância, eles nunca lhe abandonam, e são sempre com a mesma criatura... uma criatura estranha que rouba os corpos das pessoas, se infiltrando em suas famílias e vivendo a vida de sua vítima, nas noites que eras atacado por esse pesadelo e vivias sozinho, passavas a noite inteira sem dormir e parecia um zumbi no outro dia, mas, desde que Monica passou a viver contigo, ter outra pessoa na cama atenua o pavor pós pesadelo, após acordar 5 ou 6 vezes na noite finalmente consegues pegar no soco e não ter mais pesadelos.\n\nTrin trin trin trin trin trin trin\n\nVocê acorda com o barulho do seu celular despertando, a noite passou voando, ter de acordar tão cedo, e com tantos pesadelos, mal dormiu a noite, e ainda tem de dirigir por 14 horas ate chegar no hotel que fica na metade do caminho ate a cidade de seus sogros.\n\nMonica também acorda e desliga o despertador do celular dela",
            "Buttons":[
                {
                    "label":"Desligar o despertador e levantar ",
                    "toID":1
                },
                {
                    "label":"Desligar o despertador e seguir dormindo",
                    "toID":0
                },
                {
                    "label":"Despertador modo soneca (só mais 5 minutinhos...)",
                    "toID":0
                },
            ]
        },
        {
            "question":"Mesmo cansado devido aos ocorridos da noite, e não tendo a minima vontade de ir para a casa dos seus sogros, reúne toda sua força de vontade, leva a mão ate o celular e desliga o despertador, logo levantando da cama num pulo para não deixar o sono lhe golpear, rapidamente pegas a tua roupa para tomar banho, antes de entrar vês que Monica ainda esta dormindo, provavelmente botou no modo soneca... ",
            "Buttons":[
                {
                    "label":"Acordar Monica",
                    "toID":1
                },
                {
                    "label":"Deixar ela dormindo e ir logo tomar banho",
                    "toID":0
                },
            ]
        },
    ]
}