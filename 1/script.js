function squareSum(){
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    newArray = [],
    i;

    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray.push(array[i]);
        }
    }

    document.write(newArray,`<br/>`);

    let result = 0;
    newArray.forEach(function(item) {
      result += Math.sqrt(item);
    });
    return result;
}

document.write( squareSum() );




