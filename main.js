window.onload = () => {
  const estilos = document.styleSheets[0];
  const segundero = document.getElementById("segundero");
  const minutero = document.getElementById("minutero");
  const horario = document.getElementById("horario");
  const actualizar = () => {
    const reloj = document.getElementById("reloj");
    let ahora = new Date();
    let hora = ahora.getHours();
    let min = ahora.getMinutes();
    let sec = ahora.getSeconds();
    console.log(hora, min, sec);

    let gradosSec = (sec * 360) / 60;
    let gradosMin = (min * 360) / 60;
    let gradosHora = (hora * 360) / 12;

    segundero.style.transform = `rotate(${gradosSec}deg)`;
    minutero.style.transform = `rotate(${gradosMin}deg)`;
    horario.style.transform = `rotate(${gradosHora}deg)`;
  };
  setInterval(actualizar, 1000);
};
