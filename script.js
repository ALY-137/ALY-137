const largura = window.innerWidth;
const altura = window.innerHeight;

var numLin = Math.trunc((altura) / 20);
var numCol = Math.trunc((largura) / 20);

const Case0 = [];
const matrix0 = [];

const Case1 = [];
const matrix1 = [];

var boxAltura = numLin * 20;
var boxLargura = numCol * 20;

var boxMatrix0 = document.getElementById('box0');
boxMatrix0.style.height = `${boxAltura}px`;
boxMatrix0.style.width = `${boxLargura}px`;

var boxMatrix1 = document.getElementById('box1');
boxMatrix1.style.height = `${boxAltura}px`;
boxMatrix1.style.width = `${boxLargura}px`;

const caracteres = [1, "▲", 3, "♥", 7, "♦", "★", "♚", "✦", "☠", "♡", "兎", "A", "L", "Y"];

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const comprimento = [];

for (var i = 0; i < numCol; i++) {
    comprimento[i] = random(numLin * 2, numLin * 3);
}

criaMatrix0();
criaMatrix1();

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

function criaMatrix1() {
    let r = 0;
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
            r++
        }
    }
};

var aC = 0;

if (numCol % 2 == 0) {
    aC = random((numCol / 2 - 1), (numCol / 2 + 1));
} else {
    aC = Math.trunc(numCol / 2);
};

var aLi0 = [];
var aLf0 = [];
var temporizadorI0 = [];
var temporizadorF0 = [];

var posj = [];
for (var i = 0; i <= numCol - 1; i++) {
    posj[i] = i;
}

function randOrd() {
    return (Math.round(Math.random()) - 0.5);
}
posj.sort(randOrd);

var guarda = posj[0];

for (var i = 0; i <= numCol; i++) {
    if (posj[i] == aC) {
        posj[i] = guarda;
        posj[0] = aC;
    }
}

const sleep = ms => new Promise(resolve => setInterval(resolve, ms));

function bright(j) {
    matrix0[aLi0[j]][posj[j]].setAttribute('class', 'numBrilha');
    matrix0[aLi0[j]][posj[j]].innerHTML = `${caracteres[random(0, caracteres.length)]}`;
}

async function anima0() {
    for (var j = 0; j < numCol; j++) {
        await sleep(1500 / (j + 2));

        if (!aLi0[j])
            bright(j)
        else {
            if (aLi0[j] <= numLin && !aLf0[j]) {
                matrix0[aLi0[j] - 1][posj[j]].setAttribute('class', 'numNeutro');

                if (temporizadorI0[j] >= numLin && aLf0[j] == 0) {
                    matrix0[aLi0[j]][posj[j]].setAttribute('class', 'numNeutro');
                } else
                    bright(j)
            }
        }

        temporizadorI0[j] = temporizadorI0[j] + 1;

        if (temporizadorI0[j] < numLin) {
            aLi0[j] = aLi0[j] + 1;
        }

        if (temporizadorI0[j] >= comprimento[j]) {
            matrix0[aLf0[j]][posj[j]].setAttribute('class', 'numOff')

            temporizadorF0[j] = temporizadorF0[j] + 1;
            if (temporizadorF0[j] < numLin) {
                aLf0[j] = aLf0[j] + 1;
            } else if (temporizadorF0.every(temp => temp >= numLin)) {
                clearInterval(tempAnima0)
                break;
            }
        }
    }
};

var tempAnima0;

function start0() {
    clearInterval(tempAnima0);

    for (var i = 0; i < numCol; i++) {
        aLi0[i] = 0;
        aLf0[i] = 0;
        temporizadorI0[i] = 0;
        temporizadorF0[i] = 0;
    }

    tempAnima0 = setInterval(anima0, 80);
}
