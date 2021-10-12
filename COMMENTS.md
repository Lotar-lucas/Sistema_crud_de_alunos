## Decisão da arquitetura utilizada ?
    
        Foi Utilizada a arquitetura MSC na API e levei em consideração também API REST para a comunicação.

        A comunicação entre back-end e front-end é realizada por requisições, assim como aplicações Web.

        Escolhi MSC pois é uma arquitetura, se bem organizada, de fácil entendimento, manutenção e adição de funcionalidades, pois cada camada fica restrita somente a uma responsabilidade e também foi a arquitetura em que mais pratiquei..

        Já no front-end levei em considerando a componentização sem uma estruta específica, visto que foi meu primeiro contato com Vue.JS.

## Lista de bibliotecas de terceiros utilizadas ?
    Para o back-end foi usado:
    - body-parser
    - dotenv
    - HTTP-status-code
    - Joi
    - mysql2
    - EsLint
    - EsLint -> AIRBNB
    - Nodemon
    
      Para o front-end foi usado:
    -EsLint
    -Vuetify
    -Vuex
## O que você melhoraria se tivesse mais tempo ?



        - Melhoraria no front o componente StudentList.vue pois ele acabou ficando grande, e como foi meu primeiro contato com Vue, tive certas dificuldades em desacoplar quando existe várias dependências dentro do código;

        - Iria aplicar testes unitários com Jest no front-end e no back-end com Mocha e Chai, pois acredito que os testes de hoje geram menos horas de manutenção no futuro;

        - Aplicaria o Sequelizar ORM na camada de Model, pois ela deixaria mais escalável a aplicação, alem de agilizar o processo de desenvolvimento.

    
## Quais requisitos obrigatórios que não foram entregues ?
        Não foi atendido o requisito da barra de pesquisa ao lado do botão "Cadastrar Aluno" e também a ação de quando clicar em "Alunos" dentro do "Módulo Acadêmico", onde ela abriria o componente que mostra a lista de alunos.


## Comando para iniciar back-end
- Com Nodemon

    `npm run dev`

- Com Node.JS

    `npm start`


## Comando para iniciar front-end

- Com Vue.JS

    `npm run serve`
