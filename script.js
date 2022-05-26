function show(){
    var show = document.getElementById('Home');
    show.style.display = "block";
}
//Essa função faz mostrar a Home.

const largura = window.innerWidth;
const altura = window.innerHeight;
//Essas variáveis foram criadas para obter os valores em pixels das dimensões de tela qual o usuário está utilizando.

var numLin = Math.trunc((altura) / 20);
var numCol = Math.trunc((largura) / 20);
//Essas variáveis foram criadas a fim de obter o número de colunas e linhas da matrix dividindo o valor das dimensões de tela com o valor em pixels dos caracteres que irão percorrer a matrix.

const Case = [];
//Essa variável armazena a div da div que armazena o caractere. 
const matrix = [];
//Essa variável armazena a div que armazena o caractere.


const boxes =[];
criaBoxes();
function criaBoxes(){
    for(var i=0;i<4;i++){
        boxes[i] = document.createElement("div");
        boxes[i].setAttribute('id', `box${i}`);
        document.getElementById('Matrix').appendChild(boxes[i]);
    }
}
//Essas divs foram criadas para armazenar separamente cada sessão de chuva da animação da matrix.


var boxAltura = numLin * 20;
var boxLargura = numCol * 20;

var boxmatrix = document.getElementById('Matrix');
boxmatrix.style.height = `${boxAltura}px`;
boxmatrix.style.width = `${boxLargura}px`;

var boxmatrix = document.getElementById('box0');
boxmatrix.style.height = `${boxAltura}px`;
boxmatrix.style.width = `${boxLargura}px`;

var boxmatrix = document.getElementById('box1');
boxmatrix.style.height = `${boxAltura}px`;
boxmatrix.style.width = `${boxLargura}px`;

var boxmatrix = document.getElementById('box2');
boxmatrix.style.height = `${boxAltura}px`;
boxmatrix.style.width = `${boxLargura}px`;

var boxmatrix = document.getElementById('box3');
boxmatrix.style.height = `${boxAltura}px`;
boxmatrix.style.width = `${boxLargura}px`;
//Essas variáveis tem a finalidade de definir e atribuir as dimensões exatas da div que irá armazenar a matrix.


const caracteres = ["▲","★","✦","♡"];
//const caracteres = ["▗","▘","▙","▚","▛","▜","▝","▞","▟","■"];
const caracteres1 = ["兎"," ", 1, 3, 7,"A"," ","L","Y"];
//Esses são os arrays com os pacotes de caracteres que serão usados na matrix.

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
//Essa é uma função que gera números aleatórios com paramêtro de um número mínimo e máximo.

const comprimento0 = [];
for (var i = 0; i < numCol; i++) {
    comprimento0[i] = random(numLin+1, numLin +numLin/2);
}
//Esse array determina o comprimento de uma coluna de chuva variando aleatóriamente.



desenhaMatrix();

function desenhaMatrix() {
    for (var i = 0; i < numLin; i++) {
        Case[i] = [];
        for (var j = 0; j < numCol; j++) {
            Case[i][j]= [];
            for (var n = 0; n < 4; n++) {
                Case[i][j][n] = document.createElement("div");
                Case[i][j][n].setAttribute('class', `case`);
                Case[i][j][n].setAttribute('id', `case${i}.${j}.${n}`);
                document.getElementById(`box${n}`).appendChild(Case[i][j][n]);
            }
        }
    }
    for (var i = 0; i < numLin; i++) {
        matrix[i] = [];
        for (var j = 0; j < numCol; j++) {
            matrix[i][j]=[];
            for (var n = 0; n < 4; n++) {
            
                matrix[i][j][n] = document.createElement("div");
                matrix[i][j][n].setAttribute('id', 'nums');
                matrix[i][j][n].setAttribute('class', 'numOff');
                matrix[i][j][n].innerHTML = `兎`;
                document.getElementById(`case${i}.${j}.${n}`).appendChild(matrix[i][j][n]);
            
        }
        }
    }
};
//Essa função desenha a base da matrix sobrepondo as 4 sessões de chuva.




var tempAnima0;
var nome;
var numNome;
var fraseNome = [];
const mensagem1 = [];
const sequencia1 = [];
var ref1 = 0;
var posj3 = [];
var numLin3;
numLin3=Math.floor(numLin/2 +1);
const comprimento3 = [];
var tempAnima3;
var tempAnima2;
var tempAnima1;
var prox1 = 0;


var aC = 0;
if (numCol % 2 == 0) {
    aC = random((numCol / 2 - 1), (numCol / 2 + 1));
    var par = 1;
} else {
    aC = Math.trunc(numCol / 2);
    var par = 0;
};
var aC1 = aC;
//Essa variável tem o objetivo de identificar o caractere que fica no meio de uma linha escolhendo aleatóriamente o da esquerda ou da direita caso o número for par. 

function randOrd() {
    return (Math.round(Math.random()) - 0.5);
}

var posj0 = [];
for (var i = 0; i <= numCol - 1; i++) {
    posj0[i] = i;
}

posj0.sort(randOrd);

var guarda = posj0[0];

for (var i = 0; i <= numCol; i++) {
    if (posj0[i] == aC) {
        posj0[i] = guarda;
        posj0[0] = aC;
    }
}

const frase = ["B","O","A","S","-","V","I","N","D","A","S"];
var numMensBV = frase.length;

const mensagem0 = [];
for(var i=0;i<numCol;i++){
    mensagem0[i]= i;
}

const sequencia = [];
caiemV(sequencia,numMensBV)

function caiemV(vetor,tamanho){
    var ref = 0;
    for(var i= 0;i<tamanho;i++){
        if(i==0){
        vetor[i]= aC;

        }else{
        if(ref==0){
            aC= aC-i;

            ref += 1;
        }else{
            aC= aC+i;

            ref -= 1;
        }
        vetor[i]=aC;
        }
    }
}
//Organiza a sequencia para que as letras caem na forma de V.



var comeco ;

if(numMensBV%2==0){
    comeco = sequencia[numMensBV-1];
}else{
    comeco = sequencia[numMensBV-2];
};

//Identifica a posição em que a frase deve começar para ficar centralizada.

var cont=0;
for( var i =0 ;i<numCol;i++){
    if(i<comeco){
        mensagem0[i]=0;
    }else{
        mensagem0[i]=frase[cont];
        cont +=1;
    };
}





const comprimento2 = [];
for (var i = 0; i < numMensBV; i++) {
    comprimento2[i] = random((numLin/2)+1,numLin );
}

var numLin2;
numLin2=Math.floor(numLin/2);


var aLi0 = [];
var aLi1 = [];
var aLi2 = [];
var aLi3 = [];

var aLf0 = [];
var aLf1 = [];
var aLf2 = [];
var aLf3 = [];

var temporizadorI0 = [];
var temporizadorI1 = [];
var temporizadorI2 = [];
var temporizadorI3 = [];

var temporizadorF0 = [];
var temporizadorF1 = [];
var temporizadorF2 = [];
var temporizadorF3 = [];





const wait = ms => new Promise(resolve => setInterval(resolve, ms));
let espera = null;
var prox0 = 0;

function trocador(d) {
    for (var a = 0; a < numLin; a++) {
        for (var b = 0; b < numCol; b++) {
            for (var c = 0; c < 2; c++) {
                if (b % 2 == 0) {
                    d[a][b][c].innerHTML = `${caracteres[random(0, caracteres.length)]}`;
                }
            }
        }
    }
}


async function anima0() {
    trocador(matrix);

    for (var j = 0; j < numCol; j++) {

        espera = await wait(1500 / (j + 2));

        if (aLi0[j] == 0) {
            matrix[aLi0[j]][posj0[j]][0].setAttribute('class', 'numBrilha');
            matrix[aLi0[j]][posj0[j]][0].innerHTML = `${caracteres1[random(0, caracteres1.length)]}`;
        } else {
            if (aLi0[j] <= numLin && aLf0[j] == 0) {
                matrix[aLi0[j] - 1][posj0[j]][0].setAttribute('class', 'numNeutro');
                matrix[aLi0[j] - 1][posj0[j]][0].innerHTML = `${caracteres[random(0, caracteres.length)]}`;

                if (temporizadorI0[j] >= numLin && aLf0[j] == 0) {
                    matrix[aLi0[j]][posj0[j]][0].setAttribute('class', 'numNeutro');
                    matrix[aLi0[j]][posj0[j]][0].innerHTML = `${caracteres[random(0, caracteres.length)]}`;

                } else {
                    matrix[aLi0[j]][posj0[j]][0].setAttribute('class', 'numBrilha');
                    matrix[aLi0[j]][posj0[j]][0].innerHTML = `${caracteres1[random(0, caracteres1.length)]}`;
                }
            }
        }

        temporizadorI0[j] += 1;
        if (temporizadorI0[j] > numLin) {
            prox0 += 1;
            if (prox0 == 1) {
                start1();
            }
        }


        if (temporizadorI0[j] < numLin) {
            aLi0[j] += 1;
        };

        if (temporizadorI0[j] >= comprimento0[j]) {
            matrix[aLf0[j]][posj0[j]][0].setAttribute('class', 'numOff');
            temporizadorF0[j] += 1;
            if (temporizadorF0[j] > numLin * 3) {
                clearInterval(tempAnima0);
                
            }

            if (temporizadorF0[j] < numLin) {
                aLf0[j] += 1;
            }
        }

    }

};


function start0() {

    var recebeNome = document.getElementById('nome');
    nome = recebeNome.value;
    numNome = recebeNome.value.length;
    fraseNome = nome.split('');

for(var i=0;i<numCol;i++){
    mensagem1[i]= i;
}

for(var i= 0;i<numNome;i++){
    if(i==0){
        sequencia1[i]= aC1;

    }else{
        if(ref1==0){
            aC1= aC1-i;

            ref1 += 1;
        }else{
            aC1= aC1+i;

            ref1 -= 1;
        }
        sequencia1[i]=aC1;
    }

}


for(var i=0;i<numNome;i++){
        posj3[i]= sequencia1[i];
}

var comeco1 ;

if(numNome%2==0){
    comeco1 = sequencia1[numNome-1];
}else{
    comeco1 = sequencia1[numNome-2];
};


var cont1=0;
for( var i =0 ;i<numCol;i++){
    if(i<comeco1){
        mensagem1[i]=0;
    }else{
        mensagem1[i]=fraseNome[cont1];
        cont1 +=1;
    };
}

for (var i = 0; i < numNome; i++) {
    comprimento3[i] = random((numLin/2)+1 , numLin );
}
     
    var some = document.getElementById('Home');
    some.style.display = "none";



    for (var i = 0; i <= numCol; i++) {
        aLi0[i] = 0;
        aLf0[i] = 0;
        temporizadorI0[i] = 0;
        temporizadorF0[i] = 0;
    }
    tempAnima0 = setInterval(async () => await anima0(), 80);
}


async function anima1() {
    trocador(matrix);

    for (var j = 0; j < numCol; j++) {

        espera = await wait(1500/ (j + 2));

        if (aLi1[j] == 0) {
            matrix[aLi1[j]][posj0[j]][1].setAttribute('class', 'numBrilha');
            matrix[aLi1[j]][posj0[j]][1].innerHTML = `${caracteres1[random(0, caracteres1.length)]}`;
        } else {
            if (aLi1[j] <= numLin && aLf1[j] == 0) {
                matrix[aLi1[j] - 1][posj0[j]][1].setAttribute('class', 'numNeutro');
                matrix[aLi1[j] - 1][posj0[j]][1].innerHTML = `${caracteres[random(0, caracteres.length)]}`;

                if (temporizadorI1[j] >= numLin && aLf1[j] == 0) {
                    matrix[aLi1[j]][posj0[j]][1].setAttribute('class', 'numNeutro');
                    matrix[aLi1[j]][posj0[j]][1].innerHTML = `${caracteres[random(0, caracteres.length)]}`;

                } else {
                    matrix[aLi1[j]][posj0[j]][1].setAttribute('class', 'numBrilha');
                    matrix[aLi1[j]][posj0[j]][1].innerHTML = `${caracteres1[random(0, caracteres1.length)]}`;
                }
            }
        }

        temporizadorI1[j] += 1;
        if (temporizadorI1[j] > numLin) {
            prox1 += 1;
            if (prox1 == 1) {
                start2();
                start3();
            }
        }

        if (temporizadorI1[j] < numLin) {
            aLi1[j] += 1;

        };

        if (temporizadorI1[j] >= comprimento0[j]) {

            matrix[aLf1[j]][posj0[j]][1].setAttribute('class', 'numOff');

            temporizadorF1[j] += 1;
            if (temporizadorF1[j] > numLin * 3) {
                clearInterval(tempAnima1);
                
            }

            if (temporizadorF1[j] < numLin) {
                aLf1[j] += 1;
            }

        }

    }

};



function start1() {

    for (var i = 0; i <= numCol; i++) {
        aLi1[i] = 0;
        aLf1[i] = 0;
        temporizadorI1[i] = 0;
        temporizadorF1[i] = 0;
    }
    tempAnima1 = setInterval(async () => await anima1(), 80);
}


async function anima2() {
    for (var a = 0; a < numLin2 -1 ; a++) {
        for (var b = 0; b < numCol; b++) {
            
                if (b % 2 == 0) {
                    matrix[a][b][2].innerHTML = `${caracteres[random(0, caracteres.length)]}`;
                }
            
        }
    }
   
    for (var j = 0; j < numMensBV; j++) {

        espera = await wait(1500 / (j + 2));

        if (aLi2[j] == 0) {
            matrix[aLi2[j]][sequencia[j]][2].setAttribute('class', 'numBrilha');
            matrix[aLi2[j]][sequencia[j]][2].innerHTML = `${caracteres1[random(0, caracteres1.length)]}`;
        } else {
            if (aLi2[j] < numLin2 && aLf2[j] == 0) {
                matrix[aLi2[j] - 1][sequencia[j]][2].setAttribute('class', 'numNeutro');
                matrix[aLi2[j] - 1][sequencia[j]][2].innerHTML = `${caracteres[random(0, caracteres.length)]}`;

                if (temporizadorI2[j] > numLin2   && aLf2[j] == 0) {
                    matrix[aLi2[j]][sequencia[j]][2].setAttribute('class', 'numNeutro');
                    matrix[aLi2[j]][sequencia[j]][2].innerHTML = `${caracteres[random(0, caracteres.length)]}`;

                } else {
                    matrix[aLi2[j]][sequencia[j]][2].setAttribute('class', 'numBrilha');
                    matrix[aLi2[j]][sequencia[j]][2].innerHTML = `${mensagem0[sequencia[j]]}`;
                }
            }
        }

        temporizadorI2[j] += 1;

        if (temporizadorI2[j] <= numLin2  ) {
            aLi2[j] += 1;
        };

        if (temporizadorI2[j] >= comprimento2[j] && aLf2[j] < numLin2-1) {

            matrix[aLf2[j]][sequencia[j]][2].setAttribute('class', 'numOff');

            temporizadorF2[j] += 1;

            if (temporizadorF2[j] > numLin * 5) {
                clearInterval(tempAnima2);   
            }

            if (temporizadorF2[j] < numLin2 -1) {
                aLf2[j] += 1;
            }

        }

    }

};


function start2() {

    for (var i = 0; i <= numCol; i++) {
        aLi2[i] = 0;
        aLf2[i] = 0;
        temporizadorI2[i] = 0;
        temporizadorF2[i] = 0;
    }
    tempAnima2 = setInterval(async () => await anima2(), 80);
}





async function anima3() {
    for (var a = 0; a < numLin3 -1 ; a++) {
        for (var b = 0; b < numCol; b++) {
            if (b % 2 == 0) {
                matrix[a][b][3].innerHTML = `${caracteres[random(0, caracteres.length)]}`;
            }  
        }
    }
   
    for (var j = 0; j < numNome; j++) {

        espera = await wait(1500/(j + 2));

        if (aLi3[j] == 0) {
            matrix[aLi3[j]][posj3[j]][3].setAttribute('class', 'numBrilha');
            matrix[aLi3[j]][posj3[j]][3].innerHTML = `${caracteres1[random(0, caracteres1.length)]}`;
        } else {
            if (aLi3[j] < numLin3 && aLf3[j] == 0) {
                matrix[aLi3[j] - 1][posj3[j]][3].setAttribute('class', 'numNeutro');
                matrix[aLi3[j] - 1][posj3[j]][3].innerHTML = `${caracteres[random(0, caracteres.length)]}`;

                if (temporizadorI3[j] > numLin3   && aLf3[j] == 0) {
                    matrix[aLi3[j]][posj3[j]][3].setAttribute('class', 'numNeutro');
                    matrix[aLi3[j]][posj3[j]][3].innerHTML = `${caracteres[random(0, caracteres.length)]}`;

                } else {
                    matrix[aLi3[j]][posj3[j]][3].setAttribute('class', 'numBrilha');
                    matrix[aLi3[j]][posj3[j]][3].innerHTML = `${mensagem1[posj3[j]]}`;
                }
            }
        }

        temporizadorI3[j] += 1;

        if (temporizadorI3[j] <= numLin3  ) {
            aLi3[j] += 1;
        };

        if (temporizadorI3[j] >= comprimento3[j] && aLf3[j] < numLin3-1) {

            matrix[aLf3[j]][posj3[j]][3].setAttribute('class', 'numOff');

            temporizadorF3[j] += 1;

            if (temporizadorF3[j] > numLin * 5) {
                clearInterval(tempAnima3);
             
            }

            if (temporizadorF3[j] < numLin3 -1) {
                aLf3[j] += 1;
            }

        }

    }

};


function start3() {
    for (var i = 0; i <= numCol; i++) {
        aLi3[i] = 0;
        aLf3[i] = 0;
        temporizadorI3[i] = 0;
        temporizadorF3[i] = 0;
    }
    tempAnima3 = setInterval(async () => await anima3(), 80);
    
  
}