package com.nebrora.sa.server;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.devtools.DevTools;
import org.openqa.selenium.devtools.v118.page.Page;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;
import java.util.Optional;

@SpringBootApplication
public class ServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);

        // Настройка ChromeDriver
        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--disable-blink-features=AutomationControlled");
        // Создание экземпляра WebDriver
        ChromeDriver driver = new ChromeDriver(options);
        DevTools devTools = driver.getDevTools();
        devTools.createSession();
        // Отправка команды через Chrome DevTools Protocol
        // Отправка команды через Chrome DevTools Protocol с исправленными параметрами
        devTools.send(Page.addScriptToEvaluateOnNewDocument(
                "delete window.cdc_adoQpoasnfa76pfcZLmcfl_Array;\n" +
                        "delete window.cdc_adoQpoasnfa76pfcZLmcfl_Promise;\n" +
                        "delete window.cdc_adoQpoasnfa76pfcZLmcfl_Symbol;\n" +
                        "delete window.cdc_adoQpoasnfa76pfcZLmcfl_Reflect;\n" +
                        "delete window.cdc_adoQpoasnfa76pfcZLmcfl_Getter;",
                Optional.empty(),  // worldName parameter
                Optional.empty(),  // includeCommandLineAPI parameter
                Optional.empty()   // awaitPromise parameter
        ));
        try {
            // Открытие страницы
            driver.get("https://chat.openai.com/");

            // Ожидание для загрузки страницы
            Thread.sleep(600000); // Время в миллисекундах

            // Нахождение элемента ввода и отправка текста
            WebElement inputField = driver.findElement(By.id("prompt-textarea"));
            inputField.sendKeys("Привет, как дела?");

            // Отправка данных (имитация нажатия Enter)
            inputField.submit();

            // Ожидание ответа
            Thread.sleep(5000);

            // Получение списка всех элементов с данным селектором
            List<WebElement> elements = driver.findElements(By.cssSelector(".w-full.text-token-text-primary"));

            if (elements.isEmpty()) {
                System.out.println("Элементы не найдены.");
            } else {
                // Получение последнего элемента из списка
                WebElement lastElement = elements.get(elements.size() - 1);
                System.out.println("Текст последнего элемента: " + lastElement.getText());
            }
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        } finally {
            // Закрытие браузера
            driver.quit();
        }

    }
}
