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
        array = val.split(",");
    }

    function setValue () {
        var value = document.getElementById('input_num').value;
            array.push (value);
            tableText.innerHTML = "";
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
        tableText.innerHTML = "";
        elemTbody();
    }

    function elemTbody() {
        for (i = 0; i < array.length; i++) {
            var newTr = document.createElement ('tr'),
                newTd = document.createElement ('td');
            newTd.innerHTML = array[i];
            newTr.innerHTML = `<input type = 'button' onclick='delElem(${i})'  value = 'x'/>`;
            newTr.append (newTd);
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










