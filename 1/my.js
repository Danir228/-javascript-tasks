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

// Задача №4 - Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество)

loss_focus1.onkeyup = function () {
    this.value = this.value.replace (/[^\d,.]/g, '');
};

var lossFocusFirst = document.getElementById ("loss_focus1");

function focusFirst() {
    var sum = 0;
    var str = lossFocusFirst.value;
	var newArray = str.split(",");
    for (var i = 0; i < newArray.length; i++) {
		sum += +newArray[i] / newArray.length;
    }
    var resultFocusFirst = document.getElementById ("loss_focus1_result");
    resultFocusFirst.innerHTML = sum;
}

lossFocusFirst.onblur = function() {
    focusFirst();
}

// Задача №5 - Дан инпут. В него вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в отдельные инпуты

var lossFocusSecond = document.getElementById ("loss_focus2");

function focusLastName() {
    var str1;
    var str = lossFocusSecond.value;
	var newArr = str.split(" ");
    for (var i = 0; i < newArr.length; i++) {
        str1 = newArr[0];
    }
    var resultFocusLastName = document.getElementById ("loss_focus2_result1");
    resultFocusLastName.value = str1;
}

function focusName() {
    var str1;
    var str = lossFocusSecond.value;
	var newArr = str.split(" ");
    for (var i = 0; i < newArr.length; i++) {
        str1 = newArr[1];
    }
    var resultFocusName = document.getElementById ("loss_focus2_result2");
    resultFocusName.value = str1;
}

function focusMidleName() {
    var str1;
    var str = lossFocusSecond.value;
	var newArr = str.split(" ");
    for (var i = 0; i < newArr.length; i++) {
        str1 = newArr[2];
    }
    var resultFocusMidleName = document.getElementById ("loss_focus2_result3");
    resultFocusMidleName.value = str1;
}

lossFocusSecond.onblur = function() {
    focusLastName();
    focusName();
    focusMidleName();
}

//  Задача №6 - Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в том же инпуте).

var lossFocusThird = document.getElementById ("loss_focus3");

function fullName() {
    var res = [];
    var str = lossFocusThird.value;
    var newArr = str.split(" ");
    for (i = 0; i < newArr.length; i++) {
        newArr[i] = newArr[i].toUpperCase();
        res.push(newArr[i]);
    }
    var lossFocThird = document.getElementById ("loss_focus3");
    lossFocThird.value = res.join(" ");
}

lossFocusThird.onblur = function() {
    fullName();
}