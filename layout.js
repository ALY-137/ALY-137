const larSreen = window.innerWidth;
const altSreen = window.innerHeight;

var contAnimatrix = 0;


function profile(){

    if(larSreen<1000){
        var fundo = document.getElementById('fundo');
        fundo.style.display = `block`;

    }else{
        var conteudo = document.getElementById('conteudo');
        conteudo.style.display = `inline-flex`;

        var fundo = document.getElementById('fundo');
        fundo.style.display = `block`;

        var rodape = document.getElementById('rodape');
        rodape.style.position = `fixed`;
    }

    var cabecalho = document.getElementById('cabecalho');
    cabecalho.style.display = `flex`;

    var conteudo = document.getElementById('conteudo');
    conteudo.style.height = `${altSreen}px`;

    var fundo = document.getElementById('fundo');
    fundo.style.overflowY = "scroll";


    

    

    ALY137();

}

var fundo = document.getElementById('fundo');
    fundo.style.height = `${altSreen-5}px`;

var alyAlt;
var alyLar;


function ALY137(){

    //REDIMENCIONA CARD 

    alyAlt = altSreen-137;
    alyLar = alyAlt/1.618;

    var cardProfile = document.getElementById("cardProfile");
    cardProfile.style.height = `${alyAlt}px`;
    cardProfile.style.width = `${alyLar}px`;

    //REDIMENSIONA CONTEÚDO

    if(larSreen>1000){
        

    var conteudoAbas = document.getElementById('conteudoAbas');
    conteudoAbas.style.width = `${larSreen-alyLar}px`;

    var cabecalho = document.getElementById('cabecalho');
    cabecalho.style.width = `${larSreen-alyLar}px`;


    }else{

        var conteudo = document.getElementById('conteudo');
        conteudo.style.width = `100%`;

    }

    

}

    var fundo = document.getElementById('fundo');
    fundo.style.width = `${larSreen-5}px`;

    var cabecalho = document.getElementById('cabecalho');
    cabecalho.style.width = `${larSreen-5}px`;

    var rodape = document.getElementById('rodape');
    rodape.style.width = `${larSreen-5}px`;

   


//GERENCIA AS ABAS

var contA1 = 1;
var contA2 = 0;
var contA3 = 0;

function abas1(){

    if(contA1==1){
    

        contA1 = 0;
    }else{
     
        let aba = document.getElementById('aba1');
        aba.classList.remove('optionsAbas');
        aba.classList.add('optionsAbasFoco');

        aba = document.getElementById('aba2');
        aba.classList.remove('optionsAbasFoco');
        aba.classList.add('optionsAbas');
      

        aba = document.getElementById('aba3');
        aba.classList.remove('optionsAbasFoco');
        aba.classList.add('optionsAbas');


        var cardProfile = document.getElementById("cardProfile");
        cardProfile.style.display = `flex`;
        
        contA1 = 1;
        contA2 = 0;
        contA3 = 0;

    }
}

function abas2(){

    if(contA2==1){
        contA2 = 0;
     
    }else{
       
        let aba = document.getElementById('aba2');
        aba.classList.remove('optionsAbas');
        aba.classList.add('optionsAbasFoco');
        

        aba = document.getElementById('aba1');
        aba.classList.remove('optionsAbasFoco');
        aba.classList.add('optionsAbas');
        

        aba = document.getElementById('aba3');
        aba.classList.remove('optionsAbasFoco');
        aba.classList.add('optionsAbas');



        
        contA2 = 1;
        contA1 = 0;
        contA3 = 0;

        if(contAnimatrix == 0){
            tomaPilulaAzul(alyAlt,alyLar);
            contAnimatrix = 1;
        }

        
    }
}

function abas3(){

    if(contA3==1){
        

        contA3 = 0;

    }else{


        let aba = document.getElementById('aba3');
        aba.classList.remove('optionsAbas');
        aba.classList.add('optionsAbasFoco');

        aba = document.getElementById('aba1');
        aba.classList.remove('optionsAbasFoco');
        aba.classList.add('optionsAbas');
        
        aba = document.getElementById('aba2');
        aba.classList.remove('optionsAbasFoco');
        aba.classList.add('optionsAbas');


        contA3 = 1;
        contA1 = 0;
        contA2 = 0;
    }
}

function fechaAbas(){

    if(contA1==1){
        var aba = document.getElementById("aba1");
        aba.classList.remove('optionsAbasFoco');
        aba.classList.add('optionsAbas');
        contA1=0;
    }
    if(contA2==1){
        var aba = document.getElementById("aba2");
        aba.classList.remove('optionsAbasFoco');
        aba.classList.add('optionsAbas');
        contA2=0;
        
    }
    if(contA3==1){
        var aba = document.getElementById("aba3");
        aba.classList.remove('optionsAbasFoco');
        aba.classList.add('optionsAbas');
        contA3=0;
    }

}



