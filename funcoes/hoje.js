const verificaChuvaVisivelHoje = (chuva, dataAtual) => {
    const anoAtual = dataAtual.getFullYear();

    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataFim = new Date(chuva.fim + '/' + anoAtual);

    if (dataInicio.getMonth() + 1 > dataFim.getMonth() + 1) {
        const anoFinal = dataFim.getFullYear();
        dataFim.setFullYear(anoFinal + 1);
    }

    return (dataAtual >= dataInicio && dataAtual <= dataFim);
}



export default verificaChuvaVisivelHoje;