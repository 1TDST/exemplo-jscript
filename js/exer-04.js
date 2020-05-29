function validaForme(frm1) {
   var cp1 = parseInt(frm1.campo1.value);
   var cp2 = parseInt(frm1.campo2.value);
   var op = frm1.operacao.value;

  if(typeof(cp1) == "string" || typeof(cp2) == "string" ){
    alert("Somente números podem ser digitados neste campo [ " + frm1.campo1.name + " ]")
    alert("Somente números podem ser digitados neste campo [ " + frm1.campo2.name + " ]")
    return false;
  } else {

    if(op == "soma"){
      alert("Resultado da operação: "+(cp1+cp2))
    } else if (op == "sub"){
      alert("Resultado da operação: "+(cp1-cp2))
    } else if (op == "multi"){
      alert("Resultado da operação: "+(cp1*cp2))
    } else if (op == "divi"){
      alert("Resultado da operação: "+(cp1/cp2))
    } else{
    alert("Valores dos campos : " +cp1+" - "+cp2);
    return true;
  }
}
}
