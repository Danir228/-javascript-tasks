// Задача №1 - Даны 3 инпута и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в четвертый инпут

let inputCreate = document.querySelector ('.item1_2');

var arr = [],
    i;

function getValueOne() {
    var inpVal = document.querySelector ('.item1_11').value;
    let str1 = parseInt(inpVal);
    arr.push(str1);
}

function getValueTwo() {
    var inpValOne = document.querySelector ('.item1_12').value;
    let str2 = parseInt(inpValOne);
    arr.push(str2);
}

function getValueThree() {
    var inpValTwo = document.querySelector ('.item1_13').value;
    let str3 = parseInt(inpValTwo);
    arr.push(str3);
}

function sumValue() {
    let result = 0;
    arr.forEach(function(item) {
      result += item;
    });
    arr = result;
}

function createVal() {
    var inputResult = document.querySelector ('.item1_3');
    inputResult.value = arr;
}

inputCreate.onclick = function() {
    getValueOne();
    getValueTwo();
    getValueThree();
    sumValue();
    createVal();
}

// Задача №2 - Даны N инпутов с классом .num и кнопка.
// По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац с id="result"

var array = [];

function getValueFirst() {
    var inpNumFirst = document.querySelector ('.num').value;
    let num1 = parseInt(inpNumFirst);
    array.push(num1);
}

function getValueSecond() {
    var inpNumSecond = document.querySelector ('.num').value;
    let num2 = parseInt(inpNumSecond);
    array.push(num2);
}

function getValueThird() {
    var inpNumThird = document.querySelector ('.num').value;
    let num3 = parseInt(inpNumThird);
    array.push(num3);
}

function sumNum() {
    let result = 0;
    array.forEach(function(item) {
      result += item;
    });
    array = result;
}

function createValue() {
    var inpResult = document.getElementById ("result");
    inpResult.innerHTML = array;
}

let inpCreate = document.querySelector ('.item2_2');

inpCreate.onclick = function() {
    getValueFirst();
    getValueSecond();
    getValueThird();
    sumNum();
    createValue();
}

// Задача №3 - Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.

var focusInp = document.getElementById ("focus");

function sumNewValue() {
    var sum = 0;
    var str = focusInp.value;
	var newArray = str.split('');
    for (var i = 0; i < newArray.length; i++) {
		sum += +newArray[i];
    }
    var blurInp = document.getElementById ("focus_result");
    blurInp.innerHTML = sum;
}

focusInp.onblur = function() {
    sumNewValue();
}


