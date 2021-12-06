const webdriver = require('selenium-webdriver');

exports.yandexStartPage = {
    searchInput: webdriver.By.xpath("//input[@id='text']"),
    searchButton: webdriver.By.xpath("//button[//*[text()='Найти']]"),
    logo: webdriver.By.className("home-logo__default"),
}