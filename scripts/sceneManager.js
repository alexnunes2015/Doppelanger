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
            "question":"Isto é uma cena de teste",
            "Buttons":[
                {
                    "label":"Isto é um Botão A",
                    "toID":0
                },
                {
                    "label":"Isto é um Botão B",
                    "toID":1
                },
            ]
        },
        {
            "question":"Isto é outra cena de teste",
            "Buttons":[
                {
                    "label":"Isto é um Botão A",
                    "toID":1
                },
                {
                    "label":"Isto é um Botão B",
                    "toID":0
                },
            ]
        },
    ]
}