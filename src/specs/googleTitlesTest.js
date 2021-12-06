const chromedriver = require('chromedriver');
const webdriver = require('selenium-webdriver');
const assert = require('assert');
const { googleStartPage } = require('../views/googleStartPage');

let driver = null

describe('Google titles test', () => {
    before(async () => {
        driver = await new webdriver.Builder()
            .forBrowser('chrome')
            .build();
    });

    after(function () {
        return driver.quit();
    });

    it('Google main page has correct title', async () => {
        await driver.get('http://www.google.com');
        await driver.getTitle().then(function (title) {
            assert.equal('Google', title)
        });
    });

    it('Search value can be inputted', async () => {
        const loginInput = await driver.findElement(googleStartPage.searchInput)
        await loginInput.click()
        await loginInput.sendKeys("Input value")
        assert.equal('Input value', await loginInput.getAttribute('value'))
    });

    it('Title contains searched value', async () => {
        await driver.sleep(1000)
        const searchButton = await driver.findElement(googleStartPage.googleSearchButton)
        await searchButton.click()
        await driver.sleep(5000)
        const title = await driver.getTitle()
        assert.equal('Input value - Поиск в Google', title)
    });
})
