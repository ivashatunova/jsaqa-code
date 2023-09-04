const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultviewport: null,
    args: ["--start-maximized"],
    devtools: true,
  });

  const page = await browser.newPage();
  await page.goto("https://github.com/team");
})();
