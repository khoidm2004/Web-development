function Addition(){
    const num = document.getElementById("num")
    let sum = 0;
    if (num.value<=0){
    alert("N is at least 1")
    }else{
    for (let i = 1; i <= num.value; i++){
        sum +=i;
    }
    alert(sum);
}
}