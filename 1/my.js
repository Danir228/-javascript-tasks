// Задача №1 - Даны 3 инпута и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в четвертый инпут



var inputCreate = document.querySelector ('.item1_2');

function getValueInp() {
    var result = 0;
    var num1 = document.querySelector ('.item1_11').value;
    result += parseInt(num1);
    var num2 = document.querySelector ('.item1_12').value;
    result += parseInt(num2);
    var num3 = document.querySelector ('.item1_13').value;
    result += parseInt(num3);
    var inputResult = document.querySelector ('.item1_3');
    inputResult.value = result;
}

inputCreate.onclick = function() {
    getValueInp();
}

// Задача №2 - Даны N инпутов с классом .num и кнопка.
// По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац с id="result"

var inpCreate = document.querySelector ('.item2_2');

function getValueInp() {
    var inpNumAll = document.getElementsByClassName ('num');
    var result = 0;
    for (i = 0; i < inpNumAll.length; i++) {
        result += parseInt(inpNumAll[i].value);
    }
    var inputResult = document.getElementById ('result');
    inputResult.innerHTML = result;
}

inpCreate.onclick = function() {
    getValueInp();
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
	var newArray = str.split(',');
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

var lossFocusSecond = document.getElementById ("loss_focus2"),
    resultFocusLastName = document.getElementById ("loss_focus2_result1"),
    resultFocusName = document.getElementById ("loss_focus2_result2"),
    resultFocusMidleName = document.getElementById ("loss_focus2_result3");

function focusName() {
    var str = lossFocusSecond.value;
	var newArr = str.split(' ');
    resultFocusLastName.value = newArr[0];
    resultFocusName.value = newArr[1];
    resultFocusMidleName.value = newArr[2];
}

lossFocusSecond.onblur = function() {
    focusName();
}

//  Задача №6 - Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в том же инпуте).

var lossFocusThird = document.getElementById ("loss_focus3");

function fullName() {
    var res = [];
    var str = lossFocusThird.value;
    var newArr = str.split(' ');
    for (i = 0; i < newArr.length; i++) {
        res.push(newArr[i].toUpperCase());
    }
    var lossFocThird = document.getElementById ("loss_focus3");
    lossFocThird.value = res.join(" ");
}

lossFocusThird.onblur = function() {
    fullName();
}

// Задача №7 - Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.

var lossFocusFo = document.getElementById ("loss_focus4");

function lenghtName() {
    var len = 0;
    var str = lossFocusFo.value;
    var newArr = str.split(' ');
    for (i = 0; i < newArr.length; i++) {
        len += newArr[i].length;
    }
    var lossFocusRes = document.getElementById ("loss_focus4_result");
    lossFocusRes.innerHTML = len;
}

lossFocusFo.onblur = function() {
    lenghtName();
}

// Задача №8 - Дан инпут. В него вводится текст. По потери фокуса узнайте количество символов в самом длинном слове в этом тексте.

var lossFocusFive = document.getElementById ("loss_focus5");

function maxLengthName() {
    var len = '';
    var str = lossFocusFive.value;
    var newArr = str.split(' ');
    for (i = 0; i < newArr.length; i++) {
        if (newArr[i].length > newArr.length) {
            len = newArr[i].length;
        }
    }
    var lossFocusRes = document.getElementById ("loss_focus5_result");
    lossFocusRes.innerHTML = len;
}

lossFocusFive.onblur = function() {
    maxLengthName();
}

// Задача №9 - Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.

var lossFocusSix = document.getElementById ("loss_focus6");

function newDateFormat() {
    var str = lossFocusSix.value;
    var newArr = str.split('.');
    var sorted = newArr.reverse();
    lossFocusSix.value = sorted.join('-');
}

lossFocusSix.onblur = function() {
    newDateFormat();
}

