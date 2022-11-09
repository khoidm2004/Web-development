function calculateHandler() {
    const n1 = parseInt(document.getElementById("number-1").value);
    const n2 = parseInt(document.getElementById("number-2").value);
    const action = document.querySelector('input[name="math"]:checked').value
    let result = 0;
    switch(action) {
      case "+":
        result = n1 + n2
        break;
     case "-":
        result = n1 - n2
        break;
      case "*": 
        result = n1 * n2
        break;
      case "/":
        result = n1 / n2
        break;
      default: 
        result = n1 + n2
        break;
    }
    alert(result);
  }