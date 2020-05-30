

function validarForm(fm1) {

  var camp1 = parseInt(fm1.campo1.value);
  var camp2 = parseInt(fm1.campo2.value);
  var operacao = fm1.Operacao.value;

  if(typeof(camp1) == "string" || typeof(camp2) == "string") {
    alert("Somente numeros são permitidos nesse campo ["+ fm1.camp1.name +"]")
    alert("Somente numeros são permitidos nesse campo.["+ fm1.camp2.name +"]")
    return false;
  }else {

      if (operacao == "soma") {
        alert("O resultado da operação: "+operacao+" "+(camp1+camp2))
      }else if (operacao == "sub") {
        alert("O resultado da operação: "+operacao+" "+(camp1-camp2))
      } else if (operacao == "mult") {
        alert("O resultado da operação: "+operacao+" "+(camp1*camp2))
      }else {
        alert("O resultado da operação: "+operacao+" "+(camp1/camp2))
      }


    alert("OS valores dos campos: "+camp1+" e "+camp2);
    return true;
  }

}
