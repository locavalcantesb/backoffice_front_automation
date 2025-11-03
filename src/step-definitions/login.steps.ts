import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Assertions } from '../utils/Assertions';

let loginPage: LoginPage;

Given('que estou na página de login do backoffice', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigateToLogin();
  await expect(this.page).toHaveURL(/.*auth\/login/);
});

When('eu preencho o campo usuário com {string}', async function (username: string) {
  await loginPage.fillUsername(username);
});

When('eu preencho o campo senha com {string}', async function (password: string) {
  await loginPage.fillPassword(password);
});

When('eu clico no botão de login', async function () {
  await loginPage.clickLoginButton();
});

When('eu preencho o código de verificação com {string}', async function (code: string) {
  await loginPage.fillCodeVerification(code);
});

When('eu clico no botão de enviar', async function () {
  await loginPage.clickLoginButtonCodeVer();
});

Then('eu devo ser redirecionado para a página principal', async function () {
  await Assertions.assertCurrentPage(this.page, /.*dashboard/);
});

Then('eu devo ver que o login foi realizado com sucesso', async function () {
  await Assertions.assertLoginSuccess(this.page);
});