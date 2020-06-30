$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Sky.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Programacao Sky",
  "description": "\nComo um usuario\nGostaria de cadastrar contas\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "programacao-sky",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "programacao-sky;deve-inserir-uma-conta-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 9,
  "name": "que acesso o site da sky \u003curl\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "clico no botao programacao",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "seleciono a programacao do horario",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "valido se o titulo for o mesmo",
  "keyword": "Entao "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "programacao-sky;deve-inserir-uma-conta-com-sucesso;",
  "rows": [
    {
      "cells": [
        "url"
      ],
      "line": 16,
      "id": "programacao-sky;deve-inserir-uma-conta-com-sucesso;;1"
    },
    {
      "cells": [
        "https://www.sky.com.br/"
      ],
      "line": 17,
      "id": "programacao-sky;deve-inserir-uma-conta-com-sucesso;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 17,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "programacao-sky;deve-inserir-uma-conta-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 9,
  "name": "que acesso o site da sky https://www.sky.com.br/",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "clico no botao programacao",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "seleciono a programacao do horario",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "valido se o titulo for o mesmo",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.sky.com.br/",
      "offset": 25
    }
  ],
  "location": "Steps.AcessoSite(String)"
});
formatter.result({
  "duration": 19525240000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.BotaoProgramacao()"
});
formatter.result({
  "duration": 74413720600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.selecionoProgramacao()"
});
formatter.result({
  "duration": 7576352400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.validacaoTitulo()"
});
formatter.result({
  "duration": 7018691000,
  "status": "passed"
});
});