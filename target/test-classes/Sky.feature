#language: pt
Funcionalidade: Programacao Sky

  Como um usuario
  Gostaria de cadastrar contas
  Para que eu possa distribuir meu dinheiro de uma forma mais organizada

  Esquema do Cenario: Deve inserir uma conta com sucesso
    Dado que acesso o site da sky <url>
    E clico no botao programacao
    Quando seleciono a programacao do horario
    Entao valido se o titulo for o mesmo


  Exemplos:
    | url                     |
    | https://www.sky.com.br/ |