import chuvaDeMeteoros from "../data/chuva-de-meteoros.js";

let data = new Date();

// Sugestão ajustada: função para apresentar chuvas ativas hoje (considerando intervalos e cruzamentos de ano), retornando uma mensagem com os nomes das chuvas específicas
function retornaChuvaDeHoje(chuvaDeMeteoros, data) {
    const anoAtual = data.getFullYear();
    const mesAtual = data.getMonth();  // 0-based
    const diaAtual = data.getDate();

    let chuvasHoje = chuvaDeMeteoros.filter(chuva => {
        const [mesInicio, diaInicio] = chuva.inicio.split('/').map(Number);
        const [mesFim, diaFim] = chuva.fim.split('/').map(Number);

        // Cria objetos Date para comparação (usando ano atual)
        const dataInicio = new Date(anoAtual, mesInicio - 1, diaInicio);
        const dataFim = new Date(anoAtual, mesFim - 1, diaFim);
        const dataAtual = new Date(anoAtual, mesAtual, diaAtual);

        // Ajusta para chuvas que cruzam o ano (ex.: dezembro a janeiro)
        if (dataInicio > dataFim) {
            // Chuva cruza o ano: verifica se dataAtual >= dataInicio OU <= dataFim
            return dataAtual >= dataInicio || dataAtual <= dataFim;
        } else {
            // Chuva dentro do mesmo ano: verifica se dataAtual >= dataInicio E <= dataFim
            return dataAtual >= dataInicio && dataAtual <= dataFim;
        }
    });

    if (chuvasHoje.length > 0) {
        const nomes = chuvasHoje.map(chuva => chuva.nome).join(', ');
        return `Chuvas ativas hoje (${data.toLocaleDateString('pt-BR')}): ${nomes}`;
    } else {
        return `Sem chuva para o dia de hoje (${data.toLocaleDateString('pt-BR')})`;
    }
}

console.log(retornaChuvaDeHoje(chuvaDeMeteoros, data));