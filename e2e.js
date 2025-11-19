const puppeteer = require('puppeteer');
(async ()=>{
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
        args: ["--window-size=1920,1080 "]
    });
    const page = await browser.newPage();
    await page.goto('https://namastedev.com/'); // Replace with your app's URL            
      console.log("Webapp loaded successfully");
    // You can add more end-to-end tests here using Puppeteer
    // await browser.close();
    await page.setViewport({width: 16200, height: 1080  })

    const signPageLink ="ul > li:nth-child(3)> a"
    await page.waitForSelector(signPageLink);
    await page.click(signPageLink);
}
)();    