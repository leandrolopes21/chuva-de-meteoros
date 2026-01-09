import chuvaDeMeteoros from './data/chuva-de-meteoros.js';
import verificaChuvaVisivelHoje from './funcoes/hoje.js';
import verificaChuvaVisivelProximos2Meses from './funcoes/doisMeses.js';
import defineDados from './funcoes/formataDados.js';

const dataAtual = new Date();

const chuvasHoje = chuvaDeMeteoros.filter((chuva) => verificaChuvaVisivelHoje(chuva, dataAtual));

const chuvasHojeFormatada = chuvasHoje.map((chuva) => defineDados(chuva));

const chuvasProximas = chuvaDeMeteoros.filter((chuva) => verificaChuvaVisivelProximos2Meses(chuva, dataAtual));

const chuvaProximaFormatada = chuvasProximas.map((chuva) => defineDados(chuva));

console.log('\n----------CHUVA DE METEOROS----------');

if (chuvasHoje.length > 0) {
    console.log('CHUVAS QUE PODEM SER VISTAS HOJE');

    console.log(chuvasHoje);
} else {
    console.log('\n---------Não há chuvas hoje!---------\n');
}

console.log(`ENCONTRADAS ${chuvasProximas.length} CHUVAS QUE PODERÃO SER VISTAS NOS PRÓXIMOS 2 MESES\n`);

chuvasHojeFormatada.forEach(chuva => 
    console.log(chuva)
);

chuvaProximaFormatada.forEach(chuva => 
    console.log(chuva)
);

console.log(`\n----------Fim da aplicação!----------`)
