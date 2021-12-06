const chromedriver = require('chromedriver');
const webdriver = require('selenium-webdriver');
const assert = require('assert');
const { googleStartPage } = require('../views/googleStartPage');

let driver = null

describe('Logo test', () => {
    beforeEach(async () => {
        driver = await new webdriver.Builder()
            .forBrowser('chrome')
            .build();
        await driver.get('http://www.google.com');
        await driver.manage().window().maximize();
    });

    afterEach(function () {
        return driver.quit();
    });

    it('Logo is displayed', async () => {
        const isDisplayed = await driver.findElement(googleStartPage.logo).isDisplayed()
        assert(true, isDisplayed)
    });
})
