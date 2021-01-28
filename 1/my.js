// Задача №1 - Даны 3 инпута и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в четвертый инпут

let inputCreate = document.querySelector ('.item1_2');

function getValueInp() {
    let result = 0;
    let num1 = document.querySelector ('.item1_11').value;
    result += parseInt(num1);
    let num2 = document.querySelector ('.item1_12').value;
    result += parseInt(num2);
    let num3 = document.querySelector ('.item1_13').value;
    result += parseInt(num3);
    let inputResult = document.querySelector ('.item1_3');
    inputResult.value = result;
}

inputCreate.onclick = function() {
    getValueInp();
};

// Задача №2 - Даны N инпутов с классом .num и кнопка.
// По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац с id="result"

let inpCreate = document.querySelector ('.item2_2');

function getValueInp() {
    let inpNumAll = document.getElementsByClassName ('num');
    let result = 0;
    for (let i = 0; i < inpNumAll.length; i++) {
        result += parseInt(inpNumAll[i].value);
    }
    let inputResult = document.getElementById ('result');
    inputResult.innerHTML = result;
}

inpCreate.onclick = function() {
    getValueInp();
};

// Задача №3 - Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.

let focusInp = document.getElementById ("focus");

function sumNewValue() {
    let sum = 0;
    let str = focusInp.value;
	let newArray = str.split('');
    for (let i = 0; i < newArray.length; i++) {
		sum += +newArray[i];
    }
    let blurInp = document.getElementById ("focus_result");
    blurInp.innerHTML = sum;
}

focusInp.onblur = function() {
    sumNewValue();
};

// Задача №4 - Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество)

let lossFocusFirst = document.getElementById ("loss_focus1");

lossFocusFirst.onkeyup = function () {
    this.value = this.value.replace (/[^\d,.]/g, '');
};

function focusFirst() {
    let sum = 0;
    let str = lossFocusFirst.value;
	let newArray = str.split(',');
    for (let i = 0; i < newArray.length; i++) {
		sum += +newArray[i] / newArray.length;
    }
    let resultFocusFirst = document.getElementById ("loss_focus1_result");
    resultFocusFirst.innerHTML = sum;
}

lossFocusFirst.onblur = function() {
    focusFirst();
};

// Задача №5 - Дан инпут. В него вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в отдельные инпуты

let lossFocusSecond = document.getElementById ("loss_focus2"),
    resultFocusLastName = document.getElementById ("loss_focus2_result1"),
    resultFocusName = document.getElementById ("loss_focus2_result2"),
    resultFocusMidleName = document.getElementById ("loss_focus2_result3");

function focusName() {
    let str = lossFocusSecond.value;
	let newArr = str.split(' ');
    resultFocusLastName.value = newArr[0];
    resultFocusName.value = newArr[1];
    resultFocusMidleName.value = newArr[2];
}

lossFocusSecond.onblur = function() {
    focusName();
};

//  Задача №6 - Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в том же инпуте).

let lossFocusThird = document.getElementById ("loss_focus3");

function fullName() {
    let res = [];
    let str = lossFocusThird.value;
    let newArr = str.split(' ');
    for (let i = 0; i < newArr.length; i++) {
        res.push(newArr[i].toUpperCase());
    }
    let lossFocThird = document.getElementById ("loss_focus3");
    lossFocThird.value = res.join(" ");
}

lossFocusThird.onblur = function() {
    fullName();
};

// Задача №7 - Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.

let lossFocusFo = document.getElementById ("loss_focus4");

function lenghtName() {
    let str = lossFocusFo.value;
    let newArr = str.split(' ');
    let lenghtWords = newArr.length;
    let lossFocusRes = document.getElementById ("loss_focus4_result");
    lossFocusRes.innerHTML = lenghtWords;
}

lossFocusFo.onblur = function() {
    lenghtName();
};

// Задача №8 - Дан инпут. В него вводится текст. По потери фокуса узнайте количество символов в самом длинном слове в этом тексте.

let lossFocusFive = document.getElementById ("loss_focus5");

function maxLengthName() {
    let len = '';
    let str = lossFocusFive.value;
    let newArr = str.split(' ');
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].length > newArr.length) {
            len = newArr[i].length;
        }
    }
    let lossFocusRes = document.getElementById ("loss_focus5_result");
    lossFocusRes.innerHTML = len;
}

lossFocusFive.onblur = function() {
    maxLengthName();
};

// Задача №9 - Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.

let lossFocusSix = document.getElementById ("loss_focus6");

function newDateFormat() {
    let str = lossFocusSix.value;
    let newArr = str.split('.');
    let sorted = newArr.reverse();
    lossFocusSix.value = sorted.join('-');
}

lossFocusSix.onblur = function() {
    newDateFormat();
};

// Задача №10 - Дан инпут. В него вводится год рождения пользователя. По нажатию на кнопку выведите в абзац ниже сколько пользователю лет.

let lossFocusSeven = document.getElementById ("loss_focus7");

function howManyYeas() {
    let d = new Date();
    let year = d.getFullYear();
    let val = lossFocusSeven.value;
    let result = year - parseInt(val);
    let paragraph = document.getElementById ("loss_focus7_result");
    paragraph.textContent = result;
}

lossFocusSeven.onblur = function() {
    howManyYeas();
};

// Задача №11 - Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.

function dayWeek() {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    let result = new Date (document.getElementById ("loss_focus8").value);
    let res = days[result.getDay()];
    let paragraph = document.getElementById ("loss_focus8_result");
    paragraph.textContent = res;
}



let lossFocusEight = document.getElementById ("loss_focus8");

lossFocusEight.onblur = function() {
    dayWeek();
};


// Задача №12 - Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).

let lossFocusNine = document.getElementById ("loss_focus9");

function similarWord() {
    let count = 0;
    let val = lossFocusNine.value;
    let arr = val.split("");
    for (let i = 0; i < arr.length; i++) {
        let k = arr.length - 1 - i;
        if (arr[i] == arr[k]) {
            count += 1;
        }
    }
    if (arr.length == count) {
        document.getElementById ("loss_focus9_result").textContent = 'Одинаково';
    } else {
        document.getElementById ("loss_focus9_result").textContent = 'Неодинаково';
    }
}

let lossFocusNineSubmit = document.getElementById ("loss_focus10");

lossFocusNineSubmit.onclick = function() {
    similarWord();
};

// Задача №13 - Дан инпут. В него вводится число. Проверьте по вводу, что это число содержит внутри себя цифру 3.

let lossFocusEleven = document.getElementById ("loss_focus11");

lossFocusEleven.onkeyup = function () {
    this.value = this.value.replace (/[^\d,.]/g, '');
};

function checkNum() {
    let arr = lossFocusEleven.value;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == 3) {
            document.getElementById ("loss_focus11_result").textContent = 'Цифра 3 присутствует';
            break;
        } else {
            document.getElementById ("loss_focus11_result").textContent = 'Цифра 3 отсутствует';
        }
    }
}

lossFocusEleven.oninput = function() {
    checkNum();
};

// Задача №14 - Даны N абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.

const allParagraphs = document.querySelectorAll ('.backg'),
      btnNum = document.getElementById ("loss_focus12");

btnNum.addEventListener('click', () => {
    let num = 1;
    allParagraphs.forEach(function(item) {
        item.insertAdjacentHTML('beforeend', `<span>№:${num}</span>`);
        num++;
    });
});

// Задача №15 - Даны N абзацев с числами. По нажатию на кнопку выведите эти числа в инпут через запятую в порядке возрастания.

const nums = document.querySelectorAll('.nums'),
      buttonNum = document.getElementById("loss_focus13"),
      unpResultNums = document.getElementById("loss_focus14");

function sortedNum(a, b) {
    if(a < b) return -1;
}

buttonNum.addEventListener('click', () => {
    let array = [];
    [].forEach.call(nums, el => {
        let number = el.textContent;
        let res = parseInt(number);
        array.push(res);
    });
    let result = array.sort(sortedNum);
    unpResultNums.value = result.join(",");
});

// Задача №16 - Даны ссылки. По загрузке страницы добавьте в конец каждой ссылки ее href в круглых скобках.

const linksItem = document.querySelectorAll(".links1_item");

window.addEventListener('load', () => {
    linksItem.forEach(function(item) {
        item.insertAdjacentHTML('beforeend', ` <span>(${item.href})</span>`);
    });
});

// Задача №17 - Даны ссылки. По загрузке страницы, если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).

const links = document.querySelectorAll(".links2_item");

window.addEventListener('load', () => {
    links.forEach(function(item) {
        if(item.href.indexOf('https://') != -1) {
            item.insertAdjacentHTML('beforeend', ` <span>&rarr;</span>`);
        }
    });
});

// Задача №18 - Даны N абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.

const itemEightenNums = document.querySelectorAll('.item18_nums'),
      itemParent = document.getElementById("item_18");

itemParent.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;
    itemEightenNums.forEach( item => {
        if(target == item) {
            let num = item.textContent;
            let result = parseInt(num);
            item.textContent = Math.pow(result, 2);
        }
    });
});

// Задача №19 - Даны картинки. По нажатию на любую картинку увеличьте ее в 2 раза.

const itemNineImg = document.querySelectorAll('.item19_img'),
      imgParent = document.getElementById("item_19");

imgParent.addEventListener('click', (e) => {
    const target = e.target;
    itemNineImg.forEach( item => {
        if(target == item) {
            item.style.width = "200px";
        }
    });
});
// Задача №20 - Даны картинки. По первому нажатию на любую картинку увеличьте ее в 2 раза. По второму нажатию - уменьшите обратно.

const itemTenImg = document.querySelectorAll('.img20 img');

itemTenImg.forEach(item => {
    item.addEventListener('click', bigImg);
});

function bigImg() {
    this.width = this.width * 2;
    this.removeEventListener('click', bigImg);
	this.addEventListener('click', smallImg);
}

function smallImg() {
    this.width = this.width / 2;
    this.removeEventListener('click', smallImg);
	this.addEventListener('click', bigImg);
}

// Задача №21 - Даны N картинок размера 30px. По нажатию на картинку под ними эта картинка появляется размером в 50px.

const itemElevenImg = document.querySelectorAll('.img21 img'),
      imgPar = document.getElementById("item_21");

imgPar.addEventListener('click', (e) => {
    const target = e.target;
    itemElevenImg.forEach(item => {
        if(target == item) {
            let clone = item.cloneNode();
            clone.style.height = "50px";
            item.after(clone);
        }
    });
});

// Задача №22 - Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.

let lossFocusFiveTeen = document.getElementById("loss_focus15"),
    lossFocusSixTeen = document.getElementById("loss_focus16"),
    lossFocusSevenTeen = document.getElementById("loss_focus17");

lossFocusSixTeen.onclick = function() {
    let num = lossFocusFiveTeen.value;
    let plus = parseInt(num);
    let result = plus + 1;
    lossFocusFiveTeen.value = result;
};

lossFocusSevenTeen.onclick = function() {
    let num = lossFocusFiveTeen.value;
    let plus = parseInt(num);
    if(plus > 0) {
        let result = plus - 1;
        lossFocusFiveTeen.value = result;
    } else {
        lossFocusFiveTeen.value = undefined;
    }
};

// Задача №23 - Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.

let lossFocusEighteen = document.getElementById("loss_focus18");

lossFocusEighteen.onblur = function() {
    let value = lossFocusEighteen.value;
    if(value <= 100) {
        lossFocusEighteen.style.background = "green";
    } else {
        lossFocusEighteen.style.background = "red";
    }
};

// Задача №24 - Дан инпут. Выделите любой текст на странице. По окончанию выделения этот текст должен записаться в этот инпут.

let lossFocusNineteen = document.getElementById("loss_focus19");

window.addEventListener('mouseup', () => {
    let textDocum = document.getSelection();
    lossFocusNineteen.value = textDocum;
});

// Задача №25 - Даны абзацы с числами. По нажатию на кнопку найдите абзац, в котором хранится максимальное число, и сделайте его красного цвета.

const paragTweentyNums = document.querySelectorAll('.item24_nums'),
      inpTweentyNums = document.getElementById("loss_focus20");

inpTweentyNums.onclick = function() {
    let max = 0, maxIndex = 0;
    paragTweentyNums.forEach(function(item, i) {
        let value = item.textContent;
        let nums = parseInt(value);
        if (nums > max) {
            max = nums;
            maxIndex = i;
        }
    });
    paragTweentyNums[maxIndex].style.background = "red";
};

// Задача №26 - Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам

const itemTwentyFoo = document.querySelectorAll('.item25_nums'),
      itemTwentyFooParent = document.getElementById("inputs_item24_block1");
let inpTwentyFoo = document.getElementById("loss_focus21");

let clicks = 0;
function clickME() {
    clicks += 1;
    inpTwentyFoo.value = clicks;
}

itemTwentyFooParent.addEventListener('click', (e) => {
    const target = e.target;
    itemTwentyFoo.forEach(function(item) {
        if(target == item) {
            clickME();
        }
    });
});

// Задача №27 - Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.

let lossFocusTwentyTwo = document.getElementById("loss_focus22");

setInterval(function() {
    let nums = lossFocusTwentyTwo.value;
    let num = parseInt(nums);
    let sum = num * 2;
    lossFocusTwentyTwo.value = sum;
}, 1000);

// Задача №28 - Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.

let lossFocusTwentyThreeInput = document.getElementById("loss_focus23"),
    lossFocusTwentyFooInput = document.getElementById("loss_focus24"),
    lossFocusTwentyFiveSubmit = document.getElementById("loss_focus25"),
    lossFocusTwentySixInput = document.getElementById("loss_focus26");

lossFocusTwentyThreeInput.onkeyup = function () {
    this.value = this.value.replace (/[^\w]/g, '');
};

function rundomStr(leng, arr) {
    let array = '';
    for(let i = leng; i > 0; i--) {
        array += arr[Math.floor(Math.random() * arr.length)];
    }
    return array;
}

lossFocusTwentyFiveSubmit.onclick = function() {
    let strThree = lossFocusTwentyThreeInput.value;
    let strFoo = lossFocusTwentyFooInput.value;
    let strFooNum = parseInt(strFoo);
    let str = rundomStr(strFooNum, strThree);
    lossFocusTwentySixInput.value = str;
};

// Задача №29 - Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится.

let lossFocusTwentySevenInput = document.getElementById("loss_focus27"),
    lossFocusTwentySevenParagraph = document.getElementById("item28_nums");

function triggerNum() {
    let number = lossFocusTwentySevenParagraph.textContent;
    let nums = 0;
    if(number > 0) {
        nums = number - 1;
    } else {
        nums = NaN;
    }
    lossFocusTwentySevenParagraph.textContent = nums;
}

lossFocusTwentySevenInput.onblur = function() {
    let str = lossFocusTwentySevenInput.value;
    let num = parseInt(str);
    lossFocusTwentySevenParagraph.textContent = num;
    setInterval(triggerNum, 2000);
};

// Задача №31 - Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.

let lossFocusTwentyEightBlock = document.getElementById("inputs_item29_block1");

let colorPar = ['green', 'red'];

let z = 0;

setInterval(function() {
    lossFocusTwentyEightBlock.style.background = colorPar[z++];
    z = z % colorPar.length;
},1000);

// Задача №32 - Дан абзац. Дан массив цветов ['red', 'green', 'blue']. Сделайте так, чтобы каждую секунду абзац менял свой цвет на определенное значение их массива: сначала 'red', потом 'green' и так далее. Как только цвета в массиве закончатся - все начнется сначала. Количество цветов в массиве может быть любым.

let colors = [
    'red',
    'green',
    'LightBlue',
    'Yellow',
    'YellowGreen',
    'Brown',
    'White',
    'Blue',
    'Burlywood',
    'Gold',
    'Cyan',
];

let lossFocusTwentyNineBlock = document.getElementById("inputs_item30_block1");

let q = 0;

setInterval(function() {
    lossFocusTwentyNineBlock.style.background = colors[q++];
    q = q % colors.length;
},1000);

// Задача №33 - Дан абзац. Дан массив строк ['один', 'два', 'три']. Под абзацем ссылка 'следующая строка'. По заходу на страницу в абзаце должен стоять нулевой элемент этого массива, а по нажатию на ссылку - вставлятся следующий элемент.

let lossFocusThirdteenParagraph = document.getElementById("item21_nums");
let lossFocusThirdteenOneSubmit = document.getElementById("item22_nums");

let arrayStr = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь'];

lossFocusThirdteenParagraph.textContent = arrayStr[0];

let k = 1;

function strValueRec(){
    lossFocusThirdteenParagraph.textContent = arrayStr[k++];
}

lossFocusThirdteenOneSubmit.addEventListener('click', strValueRec);

// Задача №34 - Даны инпуты с числами. Произвольное количетсво, пусть три. В первый инпут запишите 1, через секунду во второй инпут запишите 2, еще через секунду в третий инпут 3, потом через секунду в первый инпут запишите 4, во второй 5 и так далее до бесконечности.

let lossFocusThirdteenTwoInput = document.getElementById("item33_nums"),
    lossFocusThirdteenThreeInput = document.getElementById("item34_nums"),
    lossFocusThirdteenFooInput = document.getElementById("item35_nums");

setInterval(function(){
    let num = lossFocusThirdteenFooInput.value;
    let nums = parseInt(num);
    lossFocusThirdteenTwoInput.value = nums + 1;
},3000);

setInterval(function(){
    let num = lossFocusThirdteenTwoInput.value;
    let nums = parseInt(num);
    lossFocusThirdteenThreeInput.value = nums + 1;
},1000);

setInterval(function(){
    let num = lossFocusThirdteenThreeInput.value;
    let nums = parseInt(num);
    lossFocusThirdteenFooInput.value = nums + 1;
},2000);

// Задача №35 -
// Задача №36 -
// Задача №37 -





