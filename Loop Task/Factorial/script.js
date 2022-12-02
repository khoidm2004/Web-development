function factorial() {
    const num = document.getElementById('num')
    var product = 1;
    if ( num.value < 1) {
        alert("number can not be null or less than 1!")
    }else{
        for (let i = 1; i <= num.value; i++) {
            product *= i;
        }
        alert(product)
    }
}