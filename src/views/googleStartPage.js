const webdriver = require('selenium-webdriver');

exports.googleStartPage = {
    searchInput: webdriver.By.name("q"),
    googleSearchButton: webdriver.By.name("btnK"),
    logo: webdriver.By.id("hplogo"),
}