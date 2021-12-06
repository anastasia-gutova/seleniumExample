const chromedriver = require('chromedriver');
const webdriver = require('selenium-webdriver');
const assert = require('assert');
const { yandexStartPage } = require('../views/yandexStartPage');

let driver = null

describe('Yandex test', () => {
    before(async () => {
        driver = await new webdriver.Builder()
            .forBrowser('chrome')
            .build();
        await driver.get('http://www.yandex.ru');
        await driver.manage().window().maximize();
    });

    after(function () {
        return driver.quit();
    });

    it('Logo is displayed', async () => {
        const isDisplayed = await driver.findElement(yandexStartPage.logo).isDisplayed()
        assert(true, isDisplayed)
    });

    it('Yandex main page has correct title', async () => {
        await driver.getTitle().then(function (title) {
            assert.equal('Яндекс', title)
        });
    });

    it('Search value can be inputted', async () => {
        const loginInput = await driver.findElement(yandexStartPage.searchInput)
        await loginInput.click()
        await loginInput.sendKeys("Input value")

        assert.equal('Input value', await loginInput.getAttribute('value'))
    });

    it('Title contains serched value', async () => {
        const searchButton = await driver.findElement(yandexStartPage.searchButton)
        await searchButton.click()
        await driver.sleep(5000)
        const isContainTitle = await driver.getTitle().then((title) => {
            console.log(title)
            return title.startsWith('Input value')
        })
        assert.equal(true, isContainTitle)
    });
})
