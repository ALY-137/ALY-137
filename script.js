function verifica(){
    var verificacao = document.getElementById('verifiedEmail');
    var verificacao1 = verificacao.textContent;
    console.log(verificacao1);
    
    if(verificacao1=="true"){
        var recebe = document.getElementById('Escolha');
        recebe.style.display = "block";

        var recebe = document.getElementById('Matrix');
        recebe.style.display = "block";
    }
}

