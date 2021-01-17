var array = [],
    i;

input_text.onkeyup = function () {
    this.value = this.value.replace (/[^\d,.]/g, '');
};

input_num.onkeyup = function () {
    this.value = this.value.replace (/[^\d]/g, '');
};

function getValue () {
    var val = document.getElementById('input_text').value;
    let newArr = val.split(",");
    for (let i = 0; i < newArr.length; i++) {
        array.push(newArr[i]);
    }
}

function setValue () {
    var value = document.getElementById('input_num').value;
    array.push (value);
}

var tableText = document.getElementById('table_test').getElementsByTagName('tbody')[0];

function delElem(index) {
    let arr = [];
    for (i = 0; i < array.length; i++) {
        if (i != index) {
            arr.push (array[i]);
        }
    }
    console.log(index);
    array = arr;
    elemTbody();
}

function editElem(value, index) {
    array[index] = value;
}

function elemTbody() {
    tableText.innerHTML = "";
    for (i = 0; i < array.length; i++) {
        var newTr = document.createElement ('tr');
        newTr.innerHTML = `<td></td><td><input class='edit' type='text' value = '${array[i]}' onchange='editElem(value, ${i})'></td> <td><input type = 'button' onclick='delElem(${i})' value = 'x'/></td>`;
        tableText.append (newTr);
    }
}

input_btn.onclick = function() {
    getValue ();
    elemTbody();
};

input_sub.onclick = function() {
    setValue ();
    elemTbody();
};

let checkone = document.getElementById ("checkone"),
    checktoo = document.getElementById ("checktoo"),
    inputText = document.getElementById ("input_text"),
    inputBtn = document.getElementById ("input_btn"),
    inputNum = document.getElementById ("input_num"),
    inputSub = document.getElementById ("input_sub"),
    checkBoxes = document.getElementsByName('check');

var toogleInput = function(e){
    target = e.target;
    if (target.checked == true) {
        inputText.disabled = false;
        inputBtn.disabled = false;
        inputNum.disabled = true;
        inputSub.disabled = true;
    }
};

toogleInput({target: checkone});
checkone.addEventListener("change", toogleInput);

var toogleInp = function(e){
    target = e.target;
    if (target.checked == true) {
        inputNum.disabled = false;
        inputSub.disabled = false;
        inputText.disabled = true;
        inputBtn.disabled = true;

    } else {
        inputNum.disabled = true;
        inputSub.disabled = true;
    }
};

toogleInp({target: checktoo});
checktoo.addEventListener("change", toogleInp);















