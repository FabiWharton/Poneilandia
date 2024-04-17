alert ("Willkommen Genosse");
let pergunta_usuário = "";
let elemento = document.querySelector("#nome-genosse");


while(pergunta_usuário == ""){
    pergunta_usuário = prompt (prompt ("Wie ist Dein Name?"));
}

if(pergunta_usuário == null ){
    elemento.textContent = "Freundschaft";
} else{elemento.textContent = pergunta_usuário;}

