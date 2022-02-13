package demo.ssrmfe

import org.junit.jupiter.api.Test
import org.openqa.selenium.By
import org.openqa.selenium.chrome.ChromeDriver
import java.util.concurrent.TimeUnit

class WebTests {

    @Test
    fun indexPageHasAHelloWorldText() {
        System.setProperty(
            "webdriver.chrome.driver",
            "src/test/resources/chromedriver"
        );
        val driver = ChromeDriver()
        driver.get("http://localhost:8080")
        driver.findElement(By.name("welcome-text"))
        driver.manage().timeouts().implicitlyWait(1000, TimeUnit.MILLISECONDS)
        driver.quit()
    }

    @Test
    fun indexPageHasAFeedbackButton() {
        System.setProperty(
            "webdriver.chrome.driver",
            "src/test/resources/chromedriver"
        );
        val driver = ChromeDriver()
        driver.get("http://localhost:8080")
        driver.findElement(By.name("feedback-button"))
        driver.manage().timeouts().implicitlyWait(1000, TimeUnit.MILLISECONDS)
        driver.quit()
    }

}