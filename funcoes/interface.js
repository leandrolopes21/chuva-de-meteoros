import { inverteMesAno, retornaHemisferio, retornaIntensidade } from "./funcoesLogicas.js";

/**
 * @description Imprime uma tabela com a lista de chuvas
 *
 * Explicação Detalhada:
 * Objetivo: Exibir a tabela completa de chuvas.
 * Lógica:
 * 1. Imprime o cabeçalho da tabela (NOME DA CHUVA - INTENSIDADE...).
 * 2. Itera sobre a lista recebida (array de objetos) e executa a função imprimeChuva para cada item.
 *
 * @param {Array} lista
 */
const imprimeListaDeChuvas = (lista) => {
    console.log('\nNOME DA CHUVA               - INTENSIDADE - HEMISFÉRIO - PERÍODO');

    lista.forEach( imprimeChuva );
}

/**
 * @description Imprime uma linha da tabela de lista de chuvas
 *
 * Explicação Detalhada:
 * Objetivo: Formatar e imprimir uma única linha da tabela.
 * Lógica:
 * 1. Formatação de Espaços: Usa o método .padEnd() para garantir que o nome, a intensidade e o hemisfério ocupem um tamanho fixo de caracteres. Isso mantém as colunas da tabela alinhadas visualmente no console.
 * 2. Processamento de Dados: Chama as funções auxiliares (retornaIntensidade, retornaHemisferio, inverteMesAno) importadas de funcoesLogicas.js para tratar os dados brutos antes de exibir.
 * 3. Saída: Imprime a string formatada final (ex: Perseidas - 3 (Forte) - Norte - 17/07 à 24/08).
 *
 * @param {Object} chuva
 */
const imprimeChuva = (chuva) => {
    const nome = chuva.nome.padEnd(27,' ');
    let intensidade = retornaIntensidade(chuva.intensidade);
    let hemisferio = retornaHemisferio(chuva.declinacao);

    intensidade = intensidade.padEnd(11, ' ');
    hemisferio = hemisferio.padEnd(10,' ');

    const dataInicio = inverteMesAno(chuva.inicio);
    const dataFim = inverteMesAno(chuva.fim);

    console.log(`${nome} - ${intensidade} - ${hemisferio} - ${dataInicio} à ${dataFim} `);
}

export default imprimeListaDeChuvas;