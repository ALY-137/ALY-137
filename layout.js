const larSreen = window.innerWidth;
const altSreen = window.innerHeight;



function profile(){

    var fundo = document.getElementById('fundo');
    fundo.style.display = `block`;

    var cabecalho = document.getElementById('cabecalho');
    cabecalho.style.display = `block`;

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



}else{
    var fundo = document.getElementById('fundo');
    fundo.style.width = '822px';
 
    var cabecalho = document.getElementById('cabecalho');
    cabecalho.style.width = '822px';

    var rodape = document.getElementById('rodape');
    rodape.style.width = `822px`;


}

var contL=0;
var contM=0;



function menu(){

    const larSreen = window.innerWidth;

    if(contM==0){
        //ABRE MENU
        //CELULAR
        if(larSreen < 600){
        var coluna = document.getElementById("coluna");
        coluna.style.width = "80%";
        coluna.style.border ="1px solid #7e0eff";
        
    

        contM=1;


    }else{
        //ABRE MENU
        //PC
    var coluna = document.getElementById("coluna");
    coluna.style.width = "30%";
    coluna.style.border ="1px solid #7e0eff";
    


    contM=1;

    }
    }else{
        //FECHA MENU
        //CELULAR

        if(larSreen < 600){
            var coluna = document.getElementById("coluna");
            coluna.style.width = "0px";
             coluna.style.borderStyle ="none";
   
            contM=0;
    
    
        }else{
            //FECHA MENU
            //PC
        var coluna = document.getElementById("coluna");
        coluna.style.width = "0px";
        coluna.style.borderStyle ="none";


        contM=0;

    }
    
}
}

// FECHA MENU AO TOCAR NO CONTEÚDO
function focaCont(){
    if(contM==1){
        
        var coluna = document.getElementById("coluna");
        coluna.style.width = "0px";
    
        var conteudo = document.getElementById("conteudo");
        conteudo.style.width = "100%";

        contM=0;
    }
}




