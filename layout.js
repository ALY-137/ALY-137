const larSreen = window.innerWidth;
const altSreen = window.innerHeight;



function profile(){

    var fundo = document.getElementById('fundo');
    fundo.style.display = `block`;

    var cabecalho = document.getElementById('cabecalho');
    cabecalho.style.display = `flex`;

    var conteudo = document.getElementById('conteudo');
    conteudo.style.height = `${altSreen-90}px`;

    var coluna = document.getElementById('coluna');
    coluna.style.height = `${altSreen-90}px`;




    
}

var fundo = document.getElementById('fundo');
    fundo.style.height = `${altSreen-20}px`;

    


if(larSreen<822){
    var fundo = document.getElementById('fundo');
    fundo.style.width = `${larSreen-20}px`;

    var cabecalho = document.getElementById('cabecalho');
    cabecalho.style.width = `${larSreen-20}px`;

    var rodape = document.getElementById('rodape');
    rodape.style.width = `${larSreen-20}px`;

    var abas = document.getElementById("abas");
    abas.style.width = "80%";



}else{
    var fundo = document.getElementById('fundo');
    fundo.style.width = '822px';
 
    var cabecalho = document.getElementById('cabecalho');
    cabecalho.style.width = '822px';

    var rodape = document.getElementById('rodape');
    rodape.style.width = `822px`;

    var abas = document.getElementById("abas");
    abas.style.width = "50%";


}

var contL=0;
var contM=0;



function menu(){

    const larSreen = window.innerWidth;

    if(contM==0){
        //ABRE MENU
        //MOBILE
        if(larSreen < 600){
        var coluna = document.getElementById("coluna");
        coluna.style.width = "80%";
        coluna.style.border ="1px solid #7e0eff";
        coluna.style.display ="block";





     

    

        contM=1;


    }else{
        //ABRE MENU
        //DESKTOP
    var coluna = document.getElementById("coluna");
    coluna.style.width = "30%";
    coluna.style.border ="1px solid #7e0eff";
    coluna.style.display ="block";

    


    contM=1;

    }
    }else{
        var coluna = document.getElementById("coluna");
        coluna.style.width = "0px";

        contM=0;
   
}
}

// FECHA MENU AO TOCAR NO CONTEÚDO
function fechaMenu(){
    if(contM==1){
        
        var coluna = document.getElementById("coluna");
        coluna.style.width = "0px";
    

        contM=0;
    }
}


//GERENCIA AS ABAS

var contA1 = 1;
var contA2 = 0;
var contA3 = 0;

function abas1(){

    if(contA1==1){
        fechaMenu();

        contA1 = 0;
    }else{
        fechaMenu();
        let aba = document.getElementById('aba1');
        aba.classList.remove('optionsAbas');
        aba.classList.add('optionsAbasFoco');

        aba = document.getElementById('aba2');
        aba.classList.remove('optionsAbasFoco');
        aba.classList.add('optionsAbas');
      

        aba = document.getElementById('aba3');
        aba.classList.remove('optionsAbasFoco');
        aba.classList.add('optionsAbas');
        
        contA1 = 1;
        contA2 = 0;
        contA3 = 0;

    }
}

function abas2(){

    if(contA2==1){
        contA2 = 0;
        fechaMenu();
    }else{
        fechaMenu()
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
    }
}

function abas3(){

    if(contA3==1){
        fechaMenu();

        contA3 = 0;

    }else{
        fechaMenu();

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




