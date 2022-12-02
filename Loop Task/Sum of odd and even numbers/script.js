function calculation(){
    const num = document.getElementById("num")
    let sumOdd=0;
    let sumEven=0;
    if(num.value<=0){
        alert("number cannot be equal or smaller than 0")
    }else{
        for (let i =1; i<= num.value; i+=2){
            sumOdd +=i;
        }
        alert(sumOdd);
        for (let i= 2; i<=num.value; i+=2){
            sumEven +=i;
        }
        alert (sumEven);
    }
}