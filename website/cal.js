function btnAC() {
    a = document.querySelector("#display");
    display.value = "";
}

function btnDE() {
    a = document.querySelector("#display");
    display.value = display.value.toString().slice(0, -1);
}

function btnsp1() {
    a = document.querySelector("#display");
    display.value += "%";
}

function btnsp2() {
    a = document.querySelector("#display");
    display.value += "/";
}

function btn7() {
    a = document.querySelector("#display");
    display.value += 7;
    // a.style.direction = "rtl";
}

function btn8() {
    a = document.querySelector("#display");
    display.value += 8;
}

function btn9() {
    a = document.querySelector("#display");
    display.value += 9;
}

function btnsp3() {
    a = document.querySelector("#display");
    display.value += "*";
}

function btn4() {
    a = document.querySelector("#display");
    display.value += 4;
}

function btn5() {
    a = document.querySelector("#display");
    display.value += 5;
}

function btn6() {
    a = document.querySelector("#display");
    display.value += 6;
}

function btnsp4() {
    a = document.querySelector("#display");
    display.value += "-";
}

function btn1() {
    a = document.querySelector("#display");
    display.value += 1;
}

function btn2() {
    a = document.querySelector("#display");
    display.value += 2;
}

function btn3() {
    a = document.querySelector("#display");
    display.value += 3;
}

function btnsp5() {
    a = document.querySelector("#display");
    display.value += "+";
}

function btn0() {
    a = document.querySelector("#display");
    display.value += 0;
}

function btn00() {
    a = document.querySelector("#display");
    display.value += "00";
}

function btnsp6() {
    a = document.querySelector("#display");
    display.value += ".";
}

function btnsp7() {
    a = document.querySelector("#display");
    display.value = eval(display.value);
}