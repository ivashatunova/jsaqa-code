const { test, expect } = require("@playwright/test");
const { user, password } = require("../user");

test("login success", async ({ page }) => {
  // Go to https://netology.ru/?modal=sign_in
  await page.goto("https://netology.ru/?modal=sign_in");

  // Добавляем email
  await page.fill('input[name="email"][placeholder="Email"]', user);

  // Добавляем пароль
  await page.fill('input[name="password"]', 'invalidPassword');

  // Click text=Войти
  await page.click('button[type="submit"]');

  // Проверяем текст об ошибке в появившемся блоке
  await page.waitForSelector('[data-testid="login-error-hint"]');
  const errorMessage = await page.textContent('[data-testid="login-error-hint"]');
  expect(errorMessage).toBe('Вы ввели неправильно логин или пароль');
});
  