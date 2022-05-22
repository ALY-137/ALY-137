const largura = window.innerWidth;
const altura = window.innerHeight;

var numLin = Math.trunc((altura) / 20);
var numCol = Math.trunc((largura) / 20);



const Case0 = [];
const matrix0 = [];

const Case1 = [];
const matrix1 = [];

const Case2 = [];
const matrix2 = [];

const Case3 = [];
const matrix3 = [];



var boxAltura = numLin * 20;
var boxLargura = numCol * 20;



var boxMatrix0 = document.getElementById('box0');
boxMatrix0.style.height = `${boxAltura}px`;
boxMatrix0.style.width = `${boxLargura}px`;

var boxMatrix1 = document.getElementById('box1');
boxMatrix1.style.height = `${boxAltura}px`;
boxMatrix1.style.width = `${boxLargura}px`;

var boxMatrix2 = document.getElementById('box2');
boxMatrix2.style.height = `${boxAltura}px`;
boxMatrix2.style.width = `${boxLargura}px`;

var boxMatrix3 = document.getElementById('box3');
boxMatrix3.style.height = `${boxAltura}px`;
boxMatrix3.style.width = `${boxLargura}px`;



const caracteres = ["▲","★","✦","♡"];
const caracteres1 = ["兎"," ", 1, 3, 7,"A"," ","L","Y"];
const caracteres2 = ["@","X","E","A","O","","✦","★"];
//const caracteres = ["▗","▘","▙","▚","▛","▜","▝","▞","▟","■"];



const random = (min, max) => Math.floor(Math.random() * (max - min) + min);


const comprimento0 = [];
for (var i = 0; i < numCol; i++) {
    comprimento0[i] = random(numLin * 2, numLin * 3);
}

criaMatrix0();
criaMatrix2();
criaMatrix3();

function criaMatrix0() {
    for (var i = 0; i < numLin; i++) {
        Case0[i] = [];
        for (var j = 0; j < numCol; j++) {
            Case0[i][j] = document.createElement("div");
            Case0[i][j].setAttribute('class', `case`);
            Case0[i][j].setAttribute('id', `case${i}.${j}.${0}`);
            document.getElementById('box0').appendChild(Case0[i][j]);
        }
    }
    for (var i = 0; i < numLin; i++) {
        matrix0[i] = [];
        for (var j = 0; j < numCol; j++) {
            matrix0[i][j] = document.createElement("div");
            matrix0[i][j].setAttribute('id', 'nums');
            matrix0[i][j].setAttribute('class', 'numOff');
            matrix0[i][j].innerHTML = `兎`;
            document.getElementById(`case${i}.${j}.${0}`).appendChild(matrix0[i][j]);
        }
    }
};

criaMatrix1();

function criaMatrix1() {
    for (var i = 0; i < numLin; i++) {
        Case1[i] = [];
        for (var j = 0; j < numCol; j++) {
            Case1[i][j] = document.createElement("div");
            Case1[i][j].setAttribute('class', `case`);
            Case1[i][j].setAttribute('id', `case${i}.${j}.${1}`);
            document.getElementById('box1').appendChild(Case1[i][j]);
        }
    }
    for (var i = 0; i < numLin; i++) {
        matrix1[i] = [];
        for (var j = 0; j < numCol; j++) {
            matrix1[i][j] = document.createElement("div");
            matrix1[i][j].setAttribute('id', 'nums');
            matrix1[i][j].setAttribute('class', 'numOff');
            matrix1[i][j].innerHTML = `兎`;
            document.getElementById(`case${i}.${j}.${1}`).appendChild(matrix1[i][j]);
        }
    }
};


var aC = 0;

if (numCol % 2 == 0) {
    aC = random((numCol / 2 - 1), (numCol / 2 + 1));
    var par = 1;
} else {
    aC = Math.trunc(numCol / 2);
    var par = 0;
};

var aC1 = aC;

var aLi0 = [];
var aLf0 = [];
var temporizadorI0 = [];
var temporizadorF0 = [];


var aLi1 = [];
var aLf1 = [];
var temporizadorI1 = [];
var temporizadorF1 = [];

var aLi2 = [];
var aLf2 = [];
var temporizadorI2 = [];
var temporizadorF2 = [];

var aLi3 = [];
var aLf3 = [];
var temporizadorI3 = [];
var temporizadorF3 = [];

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

const wait = ms => new Promise(resolve => setInterval(resolve, ms));
let espera = null;
var prox0 = 0;

function trocador(c) {
    for (var a = 0; a < numLin; a++) {
        for (var b = 0; b < numCol; b++) {
            if (b % 2 == 0) {
                c[a][b].innerHTML = `${caracteres[random(0, caracteres.length)]}`;
            }
        }
    }
}


async function anima0() {
    trocador(matrix0);

    for (var j = 0; j < numCol; j++) {

        espera = await wait(1500 / (j + 2));

        if (aLi0[j] == 0) {
            matrix0[aLi0[j]][posj0[j]].setAttribute('class', 'numBrilha');
            matrix0[aLi0[j]][posj0[j]].innerHTML = `${caracteres1[random(0, caracteres1.length)]}`;
        } else {
            if (aLi0[j] <= numLin && aLf0[j] == 0) {
                matrix0[aLi0[j] - 1][posj0[j]].setAttribute('class', 'numNeutro');
                matrix0[aLi0[j] - 1][posj0[j]].innerHTML = `${caracteres[random(0, caracteres.length)]}`;

                if (temporizadorI0[j] >= numLin && aLf0[j] == 0) {
                    matrix0[aLi0[j]][posj0[j]].setAttribute('class', 'numNeutro');
                    matrix0[aLi0[j]][posj0[j]].innerHTML = `${caracteres[random(0, caracteres.length)]}`;

                } else {
                    matrix0[aLi0[j]][posj0[j]].setAttribute('class', 'numBrilha');
                    matrix0[aLi0[j]][posj0[j]].innerHTML = `${caracteres1[random(0, caracteres1.length)]}`;
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
            matrix0[aLf0[j]][posj0[j]].setAttribute('class', 'numOff');
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

var tempAnima0;

var nome;
var numNome;
var fraseNome = [];
const mensagem1 = [];
const sequencia1 = [];
var ref1 = 0;
var posj3 = [];
var numLin3;
const comprimento3 = [];

numLin3=Math.floor(numLin/2 +1);

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

var comeco1  = sequencia1[numNome-2];
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
    comprimento3[i] = random(numLin * 2, numLin * 3);
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

var prox1 = 0;

async function anima1() {
    trocador(matrix1);

    for (var j = 0; j < numCol; j++) {

        espera = await wait(1500 / (j + 2));

        if (aLi1[j] == 0) {
            matrix1[aLi1[j]][posj0[j]].setAttribute('class', 'numBrilha');
            matrix1[aLi1[j]][posj0[j]].innerHTML = `${caracteres1[random(0, caracteres1.length)]}`;
        } else {
            if (aLi1[j] <= numLin && aLf1[j] == 0) {
                matrix1[aLi1[j] - 1][posj0[j]].setAttribute('class', 'numNeutro');
                matrix1[aLi1[j] - 1][posj0[j]].innerHTML = `${caracteres[random(0, caracteres.length)]}`;

                if (temporizadorI1[j] >= numLin && aLf1[j] == 0) {
                    matrix1[aLi1[j]][posj0[j]].setAttribute('class', 'numNeutro');
                    matrix1[aLi1[j]][posj0[j]].innerHTML = `${caracteres[random(0, caracteres.length)]}`;

                } else {
                    matrix1[aLi1[j]][posj0[j]].setAttribute('class', 'numBrilha');
                    matrix1[aLi1[j]][posj0[j]].innerHTML = `${caracteres1[random(0, caracteres1.length)]}`;
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

            matrix1[aLf1[j]][posj0[j]].setAttribute('class', 'numOff');

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

var tempAnima1;

function start1() {

    for (var i = 0; i <= numCol; i++) {
        aLi1[i] = 0;
        aLf1[i] = 0;
        temporizadorI1[i] = 0;
        temporizadorF1[i] = 0;
    }
    tempAnima1 = setInterval(async () => await anima1(), 80);
}



function criaMatrix2() {
    for (var i = 0; i < numLin; i++) {
        Case2[i] = [];
        for (var j = 0; j < numCol; j++) {
            Case2[i][j] = document.createElement("div");
            Case2[i][j].setAttribute('class', `case`);
            Case2[i][j].setAttribute('id', `case${i}.${j}.${2}`);
            document.getElementById('box2').appendChild(Case2[i][j]);
        }
    }
    for (var i = 0; i < numLin; i++) {
        matrix2[i] = [];
        for (var j = 0; j < numCol; j++) {
            matrix2[i][j] = document.createElement("div");
            matrix2[i][j].setAttribute('id', 'nums');
            matrix2[i][j].setAttribute('class', 'numOff');
            matrix2[i][j].innerHTML = `兎`;
            document.getElementById(`case${i}.${j}.${2}`).appendChild(matrix2[i][j]);
        }
    }
};


const frase = ["B","O","A","S","-","V","I","N","D","A","S"];
var numMens0 = frase.length;

const mensagem0 = [];
for(var i=0;i<numCol;i++){
    mensagem0[i]= i;
}

const sequencia = [];

var ref = 0;
for(var i= 0;i<numMens0;i++){
    if(i==0){
        sequencia[i]= aC;

    }else{
        if(ref==0){
            aC= aC-i;

            ref += 1;
        }else{
            aC= aC+i;

            ref -= 1;
        }
        sequencia[i]=aC;
    }

}

var posj2 = [];
for(var i=0;i<numMens0;i++){
        posj2[i]= sequencia[i];
}

var comeco  = sequencia[numMens0-2];
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
for (var i = 0; i < numMens0; i++) {
    comprimento2[i] = random(numLin * 2, numLin * 3);
}

var numLin2;

numLin2=Math.floor(numLin/2);

async function anima2() {
    for (var a = 0; a < numLin2 -1 ; a++) {
        for (var b = 0; b < numCol; b++) {
            if (b % 2 == 0) {
                matrix2[a][b].innerHTML = `${caracteres[random(0, caracteres.length)]}`;
            }
        }
    }
   
    for (var j = 0; j < numMens0; j++) {

        espera = await wait(1500 / (j + 2));

        if (aLi2[j] == 0) {
            matrix2[aLi2[j]][posj2[j]].setAttribute('class', 'numBrilha');
            matrix2[aLi2[j]][posj2[j]].innerHTML = `${caracteres1[random(0, caracteres1.length)]}`;
        } else {
            if (aLi2[j] < numLin2 && aLf2[j] == 0) {
                matrix2[aLi2[j] - 1][posj2[j]].setAttribute('class', 'numNeutro');
                matrix2[aLi2[j] - 1][posj2[j]].innerHTML = `${caracteres[random(0, caracteres.length)]}`;

                if (temporizadorI2[j] > numLin2   && aLf2[j] == 0) {
                    matrix2[aLi2[j]][posj2[j]].setAttribute('class', 'numNeutro');
                    matrix2[aLi2[j]][posj2[j]].innerHTML = `${caracteres[random(0, caracteres.length)]}`;

                } else {
                    matrix2[aLi2[j]][posj2[j]].setAttribute('class', 'numBrilha');
                    matrix2[aLi2[j]][posj2[j]].innerHTML = `${mensagem0[posj2[j]]}`;
                }
            }
        }

        temporizadorI2[j] += 1;

        if (temporizadorI2[j] <= numLin2  ) {
            aLi2[j] += 1;
        };

        if (temporizadorI2[j] >= comprimento2[j] && aLf2[j] < numLin2-1) {

            matrix2[aLf2[j]][posj2[j]].setAttribute('class', 'numOff');

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

var tempAnima2;
function start2() {

    for (var i = 0; i <= numCol; i++) {
        aLi2[i] = 0;
        aLf2[i] = 0;
        temporizadorI2[i] = 0;
        temporizadorF2[i] = 0;
    }
    tempAnima2 = setInterval(async () => await anima2(), 80);
}




function criaMatrix3() {
    for (var i = 0; i < numLin; i++) {
        Case3[i] = [];
        for (var j = 0; j < numCol; j++) {
            Case3[i][j] = document.createElement("div");
            Case3[i][j].setAttribute('class', `case`);
            Case3[i][j].setAttribute('id', `case${i}.${j}.${3}`);
            document.getElementById('box3').appendChild(Case3[i][j]);
        }
    }
    for (var i = 0; i < numLin; i++) {
        matrix3[i] = [];
        for (var j = 0; j < numCol; j++) {
            matrix3[i][j] = document.createElement("div");
            matrix3[i][j].setAttribute('id', 'nums');
            matrix3[i][j].setAttribute('class', 'numOff');
            matrix3[i][j].innerHTML = `兎`;
            document.getElementById(`case${i}.${j}.${3}`).appendChild(matrix3[i][j]);
        }
    }
};

async function anima3() {
    for (var a = 0; a < numLin3 -1 ; a++) {
        for (var b = 0; b < numCol; b++) {
            if (b % 2 == 0) {
                matrix3[a][b].innerHTML = `${caracteres[random(0, caracteres.length)]}`;
            }
        }
    }
   
    for (var j = 0; j < numNome; j++) {

        espera = await wait(1500 / (j + 2));

        if (aLi3[j] == 0) {
            matrix3[aLi3[j]][posj3[j]].setAttribute('class', 'numBrilha');
            matrix3[aLi3[j]][posj3[j]].innerHTML = `${caracteres1[random(0, caracteres1.length)]}`;
        } else {
            if (aLi3[j] < numLin3 && aLf3[j] == 0) {
                matrix3[aLi3[j] - 1][posj3[j]].setAttribute('class', 'numNeutro');
                matrix3[aLi3[j] - 1][posj3[j]].innerHTML = `${caracteres[random(0, caracteres.length)]}`;

                if (temporizadorI3[j] > numLin3   && aLf3[j] == 0) {
                    matrix3[aLi3[j]][posj3[j]].setAttribute('class', 'numNeutro');
                    matrix3[aLi3[j]][posj3[j]].innerHTML = `${caracteres[random(0, caracteres.length)]}`;

                } else {
                    matrix3[aLi3[j]][posj3[j]].setAttribute('class', 'numBrilha');
                    matrix3[aLi3[j]][posj3[j]].innerHTML = `${mensagem1[posj3[j]]}`;
                }
            }
        }

        temporizadorI3[j] += 1;

        if (temporizadorI3[j] <= numLin3  ) {
            aLi3[j] += 1;
        };

        if (temporizadorI3[j] >= comprimento3[j] && aLf3[j] < numLin3-1) {

            matrix3[aLf3[j]][posj3[j]].setAttribute('class', 'numOff');

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

var tempAnima3;
function start3() {
    for (var i = 0; i <= numCol; i++) {
        aLi3[i] = 0;
        aLf3[i] = 0;
        temporizadorI3[i] = 0;
        temporizadorF3[i] = 0;
    }
    tempAnima3 = setInterval(async () => await anima3(), 80);
}












