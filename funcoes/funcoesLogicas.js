/**
 * @description Verifica se a chuva recebida por parâmetro está visível baseado
 * na data recebida. Retorna true ou false
 *
 * Explicação Detalhada:
 * Objetivo: Retornar true se a data atual estiver dentro do período de atividade da chuva, e false caso contrário.
 * Lógica:
 * 1. Montagem das Datas: Ela pega o dia/mês de início e fim do objeto chuva e concatena com o ano da dataAtual para criar objetos Date de início e fim.
 * 2. Ajuste de Fim de Dia: Define o horário da data de fim para o último milissegundo do dia (23:59:59.999) para garantir que a comparação inclua o dia inteiro de encerramento.
 * 3. Tratamento de Virada de Ano:
 *    - Se dataInicio > dataFim (ex: Início em Dezembro, Fim em Janeiro), significa que a chuva cruza o ano novo.
 *    - O código ajusta o ano para verificar se a data atual cai no final do ano anterior (ex: Dezembro) ou no início do próximo ano (ex: Janeiro).
 * 4. Comparação Padrão: Se não cruza o ano, verifica simplesmente se dataAtual está entre dataInicio e dataFim.
 *
 * @param {Object} chuva
 * @param {Date} dataAtual
 * @returns {boolean}
 */
export const verificaChuvaVisivelPorData = (chuva, dataAtual) => {
    const anoAtual = dataAtual.getFullYear();

    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataFim = new Date(chuva.fim + '/' + anoAtual);

    dataFim.setHours(23, 59, 59, 999);

    let chuvaDentroDaData = false;

    if (dataInicio > dataFim) {

        dataInicio.setFullYear(anoAtual - 1);

        if(dataAtual >= dataInicio && dataAtual <= dataFim)
        {
            chuvaDentroDaData = true;
        }
        else
        {
            dataInicio.setFullYear(dataAtual.getFullYear());
            dataFim.setFullYear(anoAtual +1);

            chuvaDentroDaData = (dataAtual >= dataInicio && dataAtual <= dataFim);
        }
    }
    else
    {
        chuvaDentroDaData = (dataAtual >= dataInicio && dataAtual <= dataFim);
    }

    return (chuvaDentroDaData);
}

/**
 * @description Verifica se a chuva recebida por parâmetro estará visível nos
 * próximos 2 meses baseado na data recebida
 *
 * Explicação Detalhada:
 * Objetivo: Retornar true se a chuva começar dentro dos próximos 2 meses a partir da data fornecida.
 * Lógica:
 * 1. Cálculo do Limite: Cria uma dataLimite adicionando 2 meses à data atual.
 * 2. Ajuste de Ano Passado: Se a chuva (início e fim) já ocorreu neste ano (é menor que a data atual), o código incrementa o ano das datas da chuva para anoAtual + 1. Isso serve para verificar a ocorrência do próximo ano.
 * 3. Tratamento de Virada de Ano: Similar à função anterior, ajusta os anos caso o período da chuva atravesse de Dezembro para Janeiro.
 * 4. Validação Final: A chuva é considerada válida se:
 *    - Termina após a data atual (dataFim > dataAtual).
 *    - Começa após a data atual (dataInicio > dataAtual).
 *    - Começa antes ou na data limite (dataInicio <= dataLimite).
 *
 * @param {object} chuva
 * @param {Date} data
 * @returns {boolean}
 */
export const verificaChuvaVisivelProximos2Meses = (chuva, data) => {
    const dataAtual = data;
    const anoAtual = dataAtual.getFullYear();

    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataFim = new Date(chuva.fim + '/' + anoAtual);

    const dataLimite = new Date(dataAtual);
    dataLimite.setMonth(dataLimite.getMonth() + 2);

    dataFim.setHours(23, 59, 59, 999);

    let chuvaDentroDaData = false;

    if (dataFim < dataAtual && dataInicio < dataAtual){
        dataInicio.setFullYear(anoAtual + 1);
        dataFim.setFullYear(anoAtual + 1);
    }

    if (dataInicio > dataFim) {
        dataInicio.setFullYear(anoAtual - 1);

        if(dataAtual < dataInicio || dataAtual > dataFim)
        {
            dataInicio.setFullYear(dataAtual.getFullYear());
            dataFim.setFullYear(anoAtual +1);
        }
    }

    if (dataFim > dataAtual && dataInicio > dataAtual && dataInicio <= dataLimite) {
        chuvaDentroDaData = true;
    }

    return (chuvaDentroDaData);
}

/**
 * @description Inverte o mes e o dia de uma data que não possui ano definido
 *
 * Explicação Detalhada:
 * Objetivo: Converter o formato de data armazenado (provavelmente "Mês/Dia") para o formato de exibição brasileiro ("Dia/Mês").
 * Lógica: Recebe uma string (ex: "12/05"), divide pela barra /, e inverte a ordem dos elementos, retornando "05/12".
 *
 * @param {String} data
 */
export const inverteMesAno = (data) => {
    const dataInvertida = data.split('/');

    return dataInvertida[1] + '/' + dataInvertida[0];
}

/**
 * @description Retorna um texto com a intensidade da chuva
 *
 * Explicação Detalhada:
 * Objetivo: Transformar descrições textuais simples em uma string formatada com uma escala numérica implícita.
 * Lógica:
 * - Se contém "Forte" -> Retorna "3 (Forte)".
 * - Se contém "Média" -> Retorna "2 (Média)".
 * - Se contém "Irregular" -> Retorna "(Irregular)".
 * - Caso contrário (padrão) -> Retorna "1 (Fraca)".
 *
 * @param {String} intensidade
 */
export const retornaIntensidade = (intensidade) => {
    let novaIntensidade = '1 (Fraca)';

    if ( intensidade.indexOf('Forte') >= 0 ) {
        novaIntensidade = '3 (Forte)';
    } else if ( intensidade.indexOf('Média') >= 0 ) {
        novaIntensidade = '2 (Média)';
    } else if (  intensidade.indexOf('Irregular') >= 0 ) {
        novaIntensidade = '(Irregular)';
    }

    return novaIntensidade;
}

/**
 * @description Retorna o hemisfério baseado no valor da declinação
 *
 * Explicação Detalhada:
 * Objetivo: Traduzir a declinação (coordenada astronômica) para "Norte" ou "Sul".
 * Lógica: Se a declinação for maior ou igual a 0, é Hemisfério Norte. Caso contrário (negativa), é Hemisfério Sul.
 *
 * @param {Number} declinacao
 */
export const retornaHemisferio = (declinacao) => declinacao >= 0 ? 'Norte' : 'Sul';