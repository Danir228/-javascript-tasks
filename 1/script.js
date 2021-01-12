    var array = [],
    newArray = [],
    i;

    input_text.onkeyup = function () {
        this.value = this.value.replace (/[^\d,.]/g, '');
    };

    function getValue () {
        let val = document.getElementById('input_text').value;
        array = val.split(",");
    }

    function squareSum(){
        for (i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                newArray.push(array[i]);
            }
        }

        document.write(newArray, `<br/>`);

        var result = 0;
        newArray.forEach(function(item) {
            result += Math.sqrt(item);
        });
        return result;
    }

    input_btn.onclick = function() {
        getValue ();
        document.write( squareSum() );
    };






