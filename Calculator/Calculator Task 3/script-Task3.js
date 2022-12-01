let add =document.getElementById("add");
let sub =document.getElementById("sub");
let number =document.getElementById("number-1");

add.addEventListener('click',()=>{
    number.value= parseInt(number.value)+1;
});

sub.addEventListener('click',()=>{
    number.value= parseInt(number.value)-1;
});

let add1= document.getElementById("add1");
let sub1=document.getElementById("sub1");
let number2= document.getElementById("number-2");

add1.addEventListener('click',()=>{
    number2.value= parseInt(number2.value)+1;
});

sub1.addEventListener('click',()=>{
    number2.value= parseInt(number2.value)-1;
});



function calculation(){
    var result;
    if(document.getElementById("operator-3").value=="+"){
        result= Number(document.getElementById("number-1").value) + Number(document.getElementById("number-2").value)
        alert(result);  
    }
    else if(document.getElementById("operator-3").value=="-"){
        result= Number(document.getElementById("number-1").value) - Number(document.getElementById("number-2").value)
        alert(result);  
    }
    else if(document.getElementById("operator-3").value=="*"){
        result= Number(document.getElementById("number-1").value) * Number(document.getElementById("number-2").value)
        alert(result);  
    }
    else if(document.getElementById("operator-3").value=="/"){
        result= Number(document.getElementById("number-1").value) / Number(document.getElementById("number-2").value)
        alert(result);  
    }
}



