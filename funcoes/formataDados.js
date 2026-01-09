const defineDados = (chuva) => {

    let nomeDaChuva = chuva.nome.padEnd(20, ' ');
    let classificacao = chuva.intensidade;
    let hemisferio = chuva.declinacao;
    let resultado;
    let resultadoHemisferio;

    switch (classificacao) {
        case 'Fraca':
            resultado = '1 (Fraca)';
            break;
        case 'Média':
            resultado = '2 (Média)';
            break;
        case 'Forte':
            resultado = '3 (Forte)';
            break;
        case 'Irregular':
            resultado = '(Irregular)';
            break;

        default:
            resultado = '1 (Fraca)';
            break;
    }

    if (hemisferio >= 0) {
        resultadoHemisferio = 'Norte';
    } else {
        resultadoHemisferio = 'Sul';
    }

    const dataApp = new Date();
    const anoAtual = dataApp.getFullYear();
    const mesAtual = dataApp.getMonth();
    const diaAtual = dataApp.getDate();

    const [mesInicio, diaInicio] = chuva.inicio.split('/').map(Number);
    const [mesFim, diaFim] = chuva.fim.split('/').map(Number);

    const dataInicio = new Date(anoAtual, mesInicio - 1, diaInicio);
    const dataFim = new Date(anoAtual, mesFim - 1, diaFim);

    const apresentaData = `${dataInicio.toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit'})} à ${dataFim.toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit'})}`;

    let dados = `Nome: ${nomeDaChuva} - Intensidade: ${resultado} - Hemisfério: ${resultadoHemisferio} - Período: ${apresentaData}`;

    return dados;
}

export default defineDados;