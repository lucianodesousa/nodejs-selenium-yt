const { Builder, By, Key } = require('selenium-webdriver');

//chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

async function run() {
    let driver = await new Builder().forBrowser('chrome').build()
    
    await driver.get('https://www.oabsp.org.br/');
    const consulta = await driver.findElement(By.linkText('Consultar Intimações')).click()
    await driver.findElement(By.id("ctl00_ContentPlaceHolder1_ctrLogin_UserName"))
    .sendKeys('tnovmaente')
    
   // const searchBar = await driver.findElement(By.xpath("/html/body/div[1]/div[2]/div/img"));
    //await searchBar.sendKeys("nodejs");
    //await searchBar.sendKeys(Key.ENTER);
    
    //console.log(x)
}


run();