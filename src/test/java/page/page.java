package page;

import org.junit.After;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.io.IOException;


public class page {

    static WebDriver driver;

    private static String botaoFechar= "div[class='modal-header borderless'] button[type='button'] span[aria-hidden='true']";
    private static String botaoProgramacao = "div.collapse.navbar-collapse.hidden-sm > ul.nav.navbar-nav.menu-link.menu-link-top > li:nth-child(3) > a";
    private static String agora = "//*[@id=\"schedules-container\"]/div[3]/div/div";
    private static String clicarProgramacao = "//*[@id=\"schedules-container\"]/div[4]/div[3]/div/div/div[1]/div[2]/div/div/div/div[5]/div/div[1]";
    private static String titulo = "//*[@id=\"modal\"]/div/div[2]/div/div/div[1]/div/div[2]/div[1]/h2";
  
    public page(WebDriver driver) {
        page.driver = driver;
    }

    public void acessarUrlLogin(String url) throws IOException {

        page.driver.get(url);
    }

    public void acessarProgramacao()
    {
    	WebDriverWait wait = new WebDriverWait(driver, 30);
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(botaoFechar))).click();
        page.driver.findElement(By.cssSelector(botaoProgramacao)).click();
    }

    public void programacaoSelecionada()
    {
        JavascriptExecutor jse = (JavascriptExecutor)driver;
        jse.executeScript("scrollBy(0,850)", "");
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(agora)));
        page.driver.findElement(By.xpath(clicarProgramacao)).click();
    }

    public void validaTitulo()
    {
       WebElement element = driver.findElement(By.xpath(titulo));
       String text = element.getText();
       Assert.assertTrue(text.contains(text));
    }

    @After
    public void fecharNavegador() {

        System.out.println("Navegador fechado");
        driver.close();

    }
}
