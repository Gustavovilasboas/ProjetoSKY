package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import org.openqa.selenium.WebDriver;
import page.page;

public class Steps {

    WebDriver driver = config.config.CreateWebDriver("chrome");

    page page = new page(driver);

    @Dado("^que acesso o site da sky (.*)$")
    public void AcessoSite(String url) throws Exception {
        page.acessarUrlLogin(url);
    }

    @E("^clico no botao programacao$")
    public void BotaoProgramacao() {
        page.acessarProgramacao();
    }

    @Quando("^seleciono a programacao do horario$")
    public void selecionoProgramacao() {
        page.programacaoSelecionada();
    }

    @Entao("^valido se o titulo for o mesmo$")
    public void validacaoTitulo() {
        page.validaTitulo();
        page.fecharNavegador();
    }
}
