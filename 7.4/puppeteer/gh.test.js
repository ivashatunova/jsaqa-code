async function setupPage(browser, url) {
  const page = await browser.newPage();
  await page.goto(url);
  return page;
}

describe("Github page tests", () => {
  let page;

  beforeEach(async () => {
    page = await setupPage(browser, "https://github.com/team");
  });

  afterEach(() => {
    page.close();
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  }, 60000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 60000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-mktg.btn-large-mktg.btn-muted-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Sign up for free");
  }, 60000);
});

describe("Features page tests", () => {
  let page;

  beforeEach(async () => {
    page = await setupPage(browser, "https://github.com/features/actions");
  });

  afterEach(() => {
    page.close();
  });

  test("The h1 header content", async () => {
    const element = await page.$(".h2-mktg.mb-3.mx-auto");
    const text = await page.evaluate((el) => el.textContent, element);
    expect(text).toEqual("Automate your workflow from idea to production");
  }, 60000);

  test("The title github.com/features/actions", async () => {
    const actual = await page.title();
    expect(actual).toEqual("Features • GitHub Actions · GitHub");
  }, 60000);

  test("The h3 header content", async () => {
    const element = await page.$(
      ".text-mono.f4-mktg.text-normal.color-fg-muted.mb-3"
    );
    const text = await page.evaluate((el) => el.textContent, element);
    expect(text).toEqual("GitHub Actions");
  }, 60000);
});
