function cronometro() {
  let hora = 0,
    munito = 0,
    segundo = 0;

  while (true) {
    if (segundo < 60) {
      segundo++;
    } else {
      segundo = 0;
      minuto++;

      if (minuto < 60) {
        minuto++;
      } else {
        minuto = 0;
        hora++;
      }
    }
    //Pausa de 1 segundo
    //opcion1
    //let fecha=new Date();
    //let fecha2= new Date();
    //while (fecha2-fecha<1000){
    //    fecha2 = new Date()
    //}

    //Opcion 2

    

    console.log(hora + ":" + minutos + ":" + segundo);
  }
}

cronometro();
