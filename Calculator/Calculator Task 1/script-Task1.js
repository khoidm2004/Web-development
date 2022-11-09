function calculation(){
    var result;
    if (document.getElementById("operator-1").value=="+"){
        result= Number(document.getElementById("num1").value) + Number(document.getElementById("num2").value)
        alert(result);
    }
    else if (document.getElementById("operator-1").value=="-"){
        result= Number(document.getElementById("num1").value) - Number(document.getElementById("num2").value)
        alert(result);
    }
    else if (document.getElementById("operator-1").value=="*"){
        result= Number(document.getElementById("num1").value) * Number(document.getElementById("num2").value)
        alert(result);
    }
    else if (document.getElementById("operator-1").value=="/"){
        result= Number(document.getElementById("num1").value) / Number(document.getElementById("num2").value)
        alert(result);
    }
}