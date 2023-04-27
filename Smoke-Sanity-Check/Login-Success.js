const { Builder, By, Key, until, Actions } = require('selenium-webdriver')
const assert = require('assert')

describe('Login-Success', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Login-Success', async function() {
    await driver.get("https://www.hudl.com/")
    await driver.manage().window().setRect({ width: 1920, height: 1036 })
    await driver.findElement(By.linkText("Log in")).click()
    await driver.findElement(By.css(".subnav__group:nth-child(1) .subnavitem--icon > .subnavitem__label")).click()
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("spin751@gmail.com")
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("Eagle7512$")
    await driver.findElement(By.id("logIn")).click()
	})
})