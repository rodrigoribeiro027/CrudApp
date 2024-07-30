# PetLovers App - README

![PetLovers App](https://github.com/rodrigoribeiro027/CrudApp/blob/main/src/assets/app/app.png)

## Descrição
O **PetLovers** é um aplicativo desenvolvido com Angular e Ionic para facilitar o gerenciamento de consultas e serviços para pets. A aplicação possui funcionalidades como login, cadastro de usuários, cadastro de pets, agendamento de consultas e visualização de informações pessoais e de pets.


## Pré-requisitos

Para iniciar o aplicativo, você precisará ter o seguinte instalado em sua máquina:

- Node.js (versão 12 ou superior)
- Angular CLI (versão 12 ou superior)
- Ionic CLI (versão 5 ou superior)

## Instalação

Siga os passos abaixo para clonar o repositório, instalar as dependências e iniciar o servidor de desenvolvimento:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/petlovers.git
   cd petlovers
   ```
2. Instale as dependências:
   ```bash
    npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
    ionic serve
     ```
O aplicativo estará disponível em http://localhost:4200.

## Estrutura dos Componentes

### Login
- Permite que os usuários façam login na aplicação.
- Disponibiliza um botão para cadastro de novos usuários.

### Cadastro de Usuário
- Facilita o registro de novos usuários na aplicação.
- Coleta informações como nome completo, email, idade e senha.

### Serviços
- Exibe os serviços oferecidos pela aplicação.
- Possibilita agendar consultas e solicitar serviços de banho e tosa.

### Agendar Consulta
- Permite selecionar o pet, escolher o serviço desejado, e agendar data e hora da consulta.
- Disponibiliza um campo opcional para complementos adicionais.

### Cadastro de Pets
- Facilita o registro de novos pets na aplicação.
- Coleta informações como nome, idade, tipo, tamanho, raça e complementos.

### Perfil
- Exibe informações do perfil do usuário.
- Permite visualizar pets cadastrados, consultas agendadas e realizar logout.

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes scripts:

### `ionic serve`
Roda o aplicativo no modo de desenvolvimento.
Abra [http://localhost:4200](http://localhost:4200) para visualizar no navegador.

### `ng build`
Compila a aplicação para produção na pasta `dist/`.
Ele agrupa corretamente o Angular no modo de produção e otimiza a build para melhor desempenho.

### `ng test`
Roda os testes unitários via [Karma](https://karma-runner.github.io).

### `ng e2e`
Roda os testes end-to-end via [Protractor](http://www.protractortest.org/).

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

