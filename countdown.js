const dia = window.document.getElementById("dia");
const hora = window.document.getElementById("hora");
const minuto = window.document.getElementById("minuto");
const segundo = window.document.getElementById("segundo");
const lancamento = "19 mar 2024"

function countDown() {
    const dataLanc = new Date(lancamento);
    const diaActual = new Date(Date.now());

    //Precisamos inicialmente saber quantos segundos há entre a data de lançamento e a data de hoje
    const segTotal = (dataLanc - diaActual)/1000;

    // o valor % "modula" toma el restante de min, horas e segundos e com o Math Floor tomamos el numero menos 
    const finalDias = Math.floor(segTotal/60/60/24);
    const finalHoras = Math.floor(segTotal/60/60) % 24;
    const finalMinutos = Math.floor(segTotal/60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML =  formatoTempo(finalDias) + "D";
    hora.innerHTML = formatoTempo(finalHoras) + "H";
    minuto.innerHTML = formatoTempo(finalMinutos) + "M";
    segundo.innerHTML = formatoTempo(finalSegundos) + "S";
}

// funcao to add zero no tempo quando seja  < 10
function formatoTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000);