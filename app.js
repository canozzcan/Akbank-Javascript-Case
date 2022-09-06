function oddishOrEvenish() {
    // Take user input with DOM element
    var num = document.getElementById('num').value;
    console.log(num);

    /* Take input and convert to string, then split it (4433 = "4","4","3","3")
    then take this elements with map() as number with Number()
    finally sum all with reduce method   */ 
    let total = num.toString().split("").map(x => Number(x)).reduce((a, b) => a + b)

    if (total % 2 == 0) {
        document.getElementById("result").innerHTML =
            num + " is an Evenish number";
    } else {
        document.getElementById("result").innerHTML =
            num + " is an Oddish number";
    }
    console.log(total);
}