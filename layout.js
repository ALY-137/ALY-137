const larSreen = window.innerWidth;

if(larSreen<822){
    var fundo = document.getElementById('fundo');
    fundo.style.width = `${larSreen}px`;

    var cabecalho = document.getElementById('cabecalho');
    cabecalho.style.width = `${larSreen}px`;

}else{
    var fundo = document.getElementById('fundo');
    fundo.style.width = '822px';

    var cabecalho = document.getElementById('cabecalho');
    cabecalho.style.width = '822px';
}

var contL=0;
var contM=0;

function lupa(){

    //QUANDO CLICA E O MENU ESTÁ ABERTO
    if(contM==1){
        
        var coluna = document.getElementById("coluna");
        coluna.style.width = "0px";
    
        var conteudo = document.getElementById("conteudo");
        conteudo.style.width = "100%";

        coluna.style.borderStyle ="none";

        var lupa = document.getElementById("lupa");
        lupa.style.top = "0px";

        contM=0;

        }

    if(contL==0){

        //ABRE CONTEÚDO

        var cabecalho = document.getElementById("cabecalho");
        cabecalho.style.height = "0px";

        cabecalho.style.borderStyle ="none";

        var lupa = document.getElementById("lupa");
        lupa.style.top = "0px";
      
        contL=1;
        
    }else{
        var cabecalho = document.getElementById("cabecalho");
        cabecalho.style.borderStyle ="0px";

        var corpo = document.getElementById("corpo");
        corpo.style.height = "100vh";

        var conteudo = document.getElementById("conteudo");
        conteudo.style.height = "100%";

       
        contL=0;

    }

}


function menu(){

    const larSreen = window.innerWidth;

    if(contM==0){
        //ABRE MENU
        //CELULAR
        if(larSreen < 600){
        var coluna = document.getElementById("coluna");
        coluna.style.width = "80%";
        coluna.style.height = "100vh";
        coluna.style.borderStyle ="double";
        coluna.style.borderColor ="#7e0eff";
        
        var conteudo = document.getElementById("conteudo");
        conteudo.style.width = "20%";

        var lupa = document.getElementById("lupa");
        lupa.style.top = "55px";

        contM=1;


    }else{
        //ABRE MENU
        //PC
    var coluna = document.getElementById("coluna");
    coluna.style.width = "30%";
    coluna.style.height = "100vh";
    coluna.style.borderStyle ="double";
    coluna.style.borderColor ="#7e0eff";
    

    var conteudo = document.getElementById("conteudo");
    conteudo.style.width = "70%";

    var lupa = document.getElementById("lupa");
        lupa.style.top = "0px";

    contM=1;

    }
    }else{
        //FECHA MENU
        //CELULAR

        if(larSreen < 600){
            var coluna = document.getElementById("coluna");
            coluna.style.width = "0px";
             coluna.style.borderStyle ="none";
        
            var conteudo = document.getElementById("conteudo");
            conteudo.style.width = "100%";

           

            var lupa = document.getElementById("lupa");
            lupa.style.top = "0px";
   
    
            contM=0;
    
    
        }else{
            //FECHA MENU
            //PC
        var coluna = document.getElementById("coluna");
        coluna.style.width = "0px";
    
        var conteudo = document.getElementById("conteudo");
        conteudo.style.width = "100%";

        coluna.style.borderStyle ="none";

        
        var lupa = document.getElementById("lupa");
        lupa.style.top = "0px";
    
    
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




