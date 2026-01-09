# 🌠 Chuva de Meteoros

Este projeto é uma aplicação em JavaScript desenvolvida para identificar chuvas de meteoros ativas na data atual. Ele faz parte de uma rotina de estudos de lógica de programação e manipulação de datas.

## 📋 Funcionalidades

- **Verificação de Data**: Obtém a data atual do sistema automaticamente.
- **Lógica de Intervalos**: Compara a data de hoje com os períodos de início e fim de diversas chuvas de meteoros.
- **Suporte a Virada de Ano**: O algoritmo trata corretamente chuvas que começam em um ano e terminam no outro (ex: de Dezembro a Janeiro).
- **Feedback Visual**: Retorna uma mensagem no console listando os nomes das chuvas ativas ou informando que não há atividade hoje.
- **Listagem Próximas Chuvas**: Exibe as chuvas que acontecerão nos próximos 2 meses.

## 🚀 Como executar

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. Clone este repositório.
2. Navegue até a pasta do projeto no seu terminal.
3. Execute o script de lógica:

```bash
node index.js
```

## 📂 Estrutura de Arquivos

- `data/chuva-de-meteoros.js`: (Suposto) Arquivo contendo a lista de objetos com dados das chuvas (nome, início, fim).
- `funcoes/funcoesLogicas.js`: Contém a função `retornaChuvaDeHoje` e a lógica principal de filtragem.

## 🛠️ Tecnologias Utilizadas

- JavaScript (ES6 Modules)
- Node.js

## 📝 Autor

Desenvolvido durante estudos de programação.