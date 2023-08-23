//when user tap on box  myfunction should execute
function myfunc() {

// setting DOM to all HTML-input

var cell_1, cell_2, cell_3, cell_4, cell_5, cell_6, cell_7, cell_8, cell_9;

cell_1 = document.getElementById("cell_1").value;
cell_2 = document.getElementById("cell_2").value;
cell_3 = document.getElementById("cell_3").value;
cell_4 = document.getElementById("cell_4").value;
cell_5 = document.getElementById("cell_5").value;
cell_6 = document.getElementById("cell_6").value;
cell_7 = document.getElementById("cell_7").value;
cell_8 = document.getElementById("cell_8").value;
cell_9 = document.getElementById("cell_9").value;

var btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9;

btn1 = document.getElementById("cell_1");
btn2 = document.getElementById("cell_2");
btn3 = document.getElementById("cell_3");
btn4 = document.getElementById("cell_4");
btn5 = document.getElementById("cell_5");
btn6 = document.getElementById("cell_6");
btn7 = document.getElementById("cell_7");
btn8 = document.getElementById("cell_8");
btn9 = document.getElementById("cell_9");

//check if Player X won or not. then disable all other cell

if ((cell_1 == 'x' || cell_1 == 'X') && (cell_2 == 'x' ||
		cell_2 == 'X') && (cell_3 == 'x' || cell_3 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		btn4.disabled = true;
		btn5.disabled = true;
		btn6.disabled = true;
		btn7.disabled = true;
		btn8.disabled = true;
		btn9.disabled = true;

		btn1.style.color = "yellow";
		btn2.style.color = "yellow";
		btn3.style.color = "yellow";
	}

else if((cell_1 == 'x' || cell_1 == 'X') && (cell_4 == 'x' || 
        cell_4 == 'X') && (cell_7 == 'x' || cell_7 == 'X')){
    document.getElementById('print')
    .innerHTML = " Player X won";

    btn2.disabled = true;
    btn3.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;

    btn1.style.color = "green";
    btn4.style.color = "green";
    btn7.style.color = "green";
}

else if((cell_7 == 'x' || cell_7 == 'X') && (cell_8 == 'x' || cell_8 == 'X') && (cell_9 == 'x' || cell_9 == 'X')){
    document.getElementById('print')
    .innerHTML = " Player X won";

    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;

    btn7.style.color = "pink";
    btn8.style.color = "pink";
    btn9.style.color = "pink";
}

else if((cell_4 == 'x' || cell_4 == 'X') && (cell_5 == 'x' || cell_5 == 'X') && (cell_6 == 'x' || cell_6 == 'X')){
    document.getElementById('print')
    .innerHTML = " Player X won";

    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;

    btn4.style.color = "orange";
    btn5.style.color = "orange";
    btn6.style.color = "orange";
}

else if((cell_2 == 'x' || cell_2 == 'X') && (cell_5 == 'x' || cell_5 == 'X') && (cell_8 == 'x' || cell_8 == 'X')){
    document.getElementById('print')
    .innerHTML = " Player X won";

    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn9.disabled = true;

    btn2.style.color = "blue";
    btn5.style.color = "blue";
    btn8.style.color = "blue";
}

else if((cell_3 == 'x' || cell_3 == 'X') && (cell_6 == 'x' || cell_6 == 'X') && (cell_9 == 'x' || cell_9 == 'X')){
    document.getElementById('print')
    .innerHTML = " Player X won";

    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;

    btn3.style.color = "brown";
    btn6.style.color = "brown";
    btn9.style.color = "brown";
}

else if((cell_1 == 'x' || cell_1 == 'X') && (cell_5 == 'x' || cell_5 == 'X') && (cell_9 == 'x' || cell_9 == 'X')){
    document.getElementById('print')
    .innerHTML = " Player X won";

    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;

    btn1.style.color = "purple";
    btn5.style.color = "purple";
    btn9.style.color = "purple";
}

else if((cell_3 == 'x' || cell_3 == 'X') && (cell_5 == 'x' || cell_5 == 'X') && (cell_7 == 'x' || cell_7 == 'X')){
    document.getElementById('print')
    .innerHTML = " Player X won";

    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    btn6.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;

    btn3.style.color = "violet";
    btn5.style.color = "violet";
    btn7.style.color = "violet";
}

//check if Player O won or not. then disable all other cell

else if ((cell_1 == '0' || cell_1 == '0') && (cell_2 == '0' ||
		cell_2 == '0') && (cell_3 == '0' || cell_3 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		btn4.disabled = true;
		btn5.disabled = true;
		btn6.disabled = true;
		btn7.disabled = true;
		btn8.disabled = true;
		btn9.disabled = true;

		btn1.style.color = "red";
		btn2.style.color = "red";
		btn3.style.color = "red";
	}

    else if ((cell_1 == '0' || cell_1 == '0') && (cell_4 == '0' ||
    cell_4 == '0') && (cell_7 == '0' || cell_7 == '0')) {
    document.getElementById('print')
        .innerHTML = "Player 0 won";
    btn2.disabled = true;
    btn3.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;

    btn1.style.color = "green";
    btn4.style.color = "green";
    btn7.style.color = "green";
}


else if ((cell_7 == '0' || cell_7 == '0') && (cell_8 == '0' ||
		cell_8 == '0') && (cell_9 == '0' || cell_9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		btn1.disabled = true;
		btn2.disabled = true;
		btn3.disabled = true;
		btn4.disabled = true;
		btn5.disabled = true;
		btn6.disabled = true;

		btn7.style.color = "pink";
        btn8.style.color = "pink";
        btn9.style.color = "pink";
	}

else if((cell_4 == '0' || cell_4 == '0') && (cell_5 == '0' || cell_5 == '0') && (cell_6 == '0' || cell_6 == '0')){
    document.getElementById('print')
    .innerHTML = " Player 0 won";

    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;

    btn4.style.color = "orange";
    btn5.style.color = "orange";
    btn6.style.color = "orange";
}

else if((cell_2 == '0' || cell_2 == '0') && (cell_5 == '0' || cell_5 == '0') && (cell_8 == '0' || cell_8 == '0')){
    document.getElementById('print')
    .innerHTML = " Player 0 won";

    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn9.disabled = true;

    btn2.style.color = "blue";
    btn5.style.color = "blue";
    btn8.style.color = "blue";
}

else if((cell_3 == '0' || cell_3 == '0') && (cell_6 == '0' || cell_6 == '0') && (cell_9 == '0' || cell_9 == '0')){
    document.getElementById('print')
    .innerHTML = " Player 0 won";

    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;

    btn3.style.color = "brown";
    btn6.style.color = "brown";
    btn9.style.color = "brown";
}

else if((cell_1 == '0' || cell_1 == '0') && (cell_5 == '0' || cell_5 == '0') && (cell_9 == '0' || cell_9 == '0')){
    document.getElementById('print')
    .innerHTML = " Player 0 won";

    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;

    btn1.style.color = "purple";
    btn5.style.color = "purple";
    btn9.style.color = "purple";
}

else if((cell_3 == '0' || cell_3 == '0') && (cell_5 == '0' || cell_5 == '0') && (cell_7 == '0' || cell_7 == '0')){
    document.getElementById('print')
    .innerHTML = " Player 0 won";

    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    btn6.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;

    btn3.style.color = "violet";
    btn5.style.color = "violet";
    btn7.style.color = "violet";
}

//checking for a draw result

else if ((cell_1 == 'X' || cell_1 == '0') && (cell_2 == 'X'
|| cell_2 == '0') && (cell_3 == 'X' || cell_3 == '0') &&
(cell_4 == 'X' || cell_4 == '0') && (cell_5 == 'X' ||
    cell_5 == '0') && (cell_6 == 'X' || cell_6 == '0') &&
(cell_7 == 'X' || cell_7 == '0') && (cell_8 == 'X' ||
    cell_8 == '0') && (cell_9 == 'X' || cell_9 == '0')) {
document.getElementById('display')
    .innerHTML = "this round the game is a draw ";
}
else {

// Here, Printing Result

if (flag == 1) {
    document.getElementById('display')
        .innerHTML = "Player X Turn";
}
else {
    document.getElementById('display')
        .innerHTML = "Player 0 Turn";
}
}
}
//reset function

function reset() {
    location.reload();
    cell_1 = cell_2 = cell_3 = cell_4 = cell_5 = cell_6 = cell_7 = cell_8 = cell_9 = '';
}


//  functions check turn of the player and put accordingly value X or 0 at cell_1
flag = 1;
function cell_1() {
    if (flag == 1) {
        document.getElementById("cell_1").value = "X";
        document.getElementById("cell_1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("cell_1").value = "0";
        document.getElementById("cell_1").disabled = true;
        flag = 1;
    }
}

//  functions check turn of the player and put accordingly value X or 0 at cell_2

flag = 1;
function cell_2() {
    if (flag == 1) {
        document.getElementById("cell_2").value = "X";
        document.getElementById("cell_2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("cell_2").value = "0";
        document.getElementById("cell_2").disabled = true;
        flag = 1;
    }
}


//  functions check turn of the player and put accordingly value X or 0 at cell_3

flag = 1;
function cell_3() {
    if (flag == 1) {
        document.getElementById("cell_3").value = "X";
        document.getElementById("cell_3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("cell_3").value = "0";
        document.getElementById("cell_3").disabled = true;
        flag = 1;
    }
}

//  functions check turn of the player and put accordingly value X or 0 at cell_4

flag = 1;
function cell_4() {
    if (flag == 1) {
        document.getElementById("cell_4").value = "X";
        document.getElementById("cell_4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("cell_4").value = "0";
        document.getElementById("cell_4").disabled = true;
        flag = 1;
    }
}

//  functions check turn of the player and put accordingly value X or 0 at cell_5

flag = 1;
function cell_5() {
    if (flag == 1) {
        document.getElementById("cell_5").value = "X";
        document.getElementById("cell_5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("cell_5").value = "0";
        document.getElementById("cell_5").disabled = true;
        flag = 1;
    }
}

//  functions check turn of the player and put accordingly value X or 0 at cell_6

flag = 1;
function cell_6() {
    if (flag == 1) {
        document.getElementById("cell_6").value = "X";
        document.getElementById("cell_6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("cell_6").value = "0";
        document.getElementById("cell_6").disabled = true;
        flag = 1;
    }
}

//  functions check turn of the player and put accordingly value X or 0 at cell_7

flag = 1;
function cell_7() {
    if (flag == 1) {
        document.getElementById("cell_7").value = "X";
        document.getElementById("cell_7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("cell_7").value = "0";
        document.getElementById("cell_7").disabled = true;
        flag = 1;
    }
}


//  functions check turn of the player and put accordingly value X or 0 at cell_8

flag = 1;
function cell_8() {
    if (flag == 1) {
        document.getElementById("cell_8").value = "X";
        document.getElementById("cell_8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("cell_8").value = "0";
        document.getElementById("cell_8").disabled = true;
        flag = 1;
    }
}

//  functions check turn of the player and put accordingly value X or 0 at cell_9

flag = 1;
function cell_9() {
    if (flag == 1) {
        document.getElementById("cell_9").value = "X";
        document.getElementById("cell_9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("cell_9").value = "0";
        document.getElementById("cell_9").disabled = true;
        flag = 1;
    }
}



