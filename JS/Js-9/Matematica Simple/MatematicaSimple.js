function triplicador(num) {
    return num * 3;
  }
  
  function multiplicador(a, b) {
    return a * b;
  }
  
  function division(a, b) {
    return a / b;
  }
  
  function resto(a, b) {
    return a % b;
  }
  

  let resultado = triplicador(5); //            5*3 = 15
resultado = multiplicador(resultado, 12); //    15*12 = 180
resultado = division(resultado, 12); //         180/12 = 15
resultado = resto(resultado, 3); //             resto de 15/3 = 0


alert(resultado)