import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TestData } from '../utils/TestData';
import { Assertions } from '../utils/Assertions';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
  });

  test('Login com credenciais validas', async ({ page }) => {
    const user = TestData.VALID_USERS.STANDARD_USER;
    const code = TestData.CODE_VERIFICATION;
    
    await loginPage.login(user.username, user.password);
    await loginPage.codeVerification(code.code);
    await Assertions.assertLoginSuccess(page);
  });
});