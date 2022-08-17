const h1 = document.querySelector('.container h1');
const data = new Date();

function getDayWeekText(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo';
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = 'Segunda-Feira';
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = 'Terça-Feira';
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = 'Quarta-Feira';
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = 'Quinta-Feira';
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = 'Sexta-Feira';
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = 'Sabado';
      return diaSemanaTexto;
    default:
      diaSemanaTexto = '';
      return diaSemanaTexto;
  }
}

function getNameMonth(numeroMes) {
  let nomeMes;

  switch (numeroMes) {
    case 0:
      nomeMes = 'Janeiro';
      return nomeMes;
    case 1:
      nomeMes = 'Fevereiro';
      return nomeMes;
    case 2:
      nomeMes = 'Março';
      return nomeMes;
    case 3:
      nomeMes = 'Abril';
      return nomeMes;
    case 4:
      nomeMes = 'Maio';
      return nomeMes;
    case 5:
      nomeMes = 'Junho';
      return nomeMes;
    case 6:
      nomeMes = 'julho';
      return nomeMes;
    case 7:
      nomeMes = 'Agosto';
      return nomeMes;
    case 8:
      nomeMes = 'Setembro';
      return nomeMes;
    case 9:
      nomeMes = 'Outubro';
      return nomeMes;
    case 10:
      nomeMes = 'Novembro';
      return nomeMes;
    case 11:
      nomeMes = 'Dezembro';
      return nomeMes;
    default:
      nomeMes = '';
      return nomeMes;
  }
}

function zeroAEsquerda (num){
  return num >= 10 ? num: `0${num}`;
}

function criadate(data){
  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();

  const nomeDia = getDayWeekText(diaSemana);
  const nomeMes = getNameMonth(numeroMes);

  return (
    `${nomeDia}, ${data.getDate()}, de ${nomeMes}` + 
    ` de ${data.getFullYear()} ` +
    `${zeroAEsquerda(data.getHours())}:${data.getMinutes()}`
  );
}

h1.innerHTML = criadate(data);

//ou forma Pratica segundo a documentação js:

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// h1.innerHTML =  data.toLocaleDateString('pt-BR', {dateStyle: 'full'}) + ' ' + 'Horário' +' '+ data.toLocaleTimeString('pt-BR', {timeStyle: 'short' });