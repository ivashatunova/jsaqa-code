const { test, expect } = require("@playwright/test");
const { user, password } = require("../user");

test("login success", async ({ page }) => {
  // Go to https://netology.ru/?modal=sign_in
  await page.goto("https://netology.ru/?modal=sign_in");

  // Добавляем email
  await page.fill('input[name="email"][placeholder="Email"]', user);

  // Добавляем пароль
  await page.fill('input[name="password"]', password);

  // Click text=Войти
  await page.click('button[type="submit"]');
  await page.screenshot({ path: `screenshots/clicked-login-button.png` });
  await expect(page).toHaveURL("https://netology.ru/profile");

  // Проверяем, что мы авторизовались успешно
  const successMessage = await page.waitForSelector(
    "h2.src-components-pages-Profile-Programs--title--Kw5NH"
  );
  expect(await successMessage.textContent()).toContain("Моё обучение");
});
