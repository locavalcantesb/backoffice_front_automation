import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { TestData } from '../utils/TestData';

//Objeto de Página para a página de login do Back Office
export class LoginPage extends BasePage {

  // Seletores dos elementos da página
  private readonly usernameField: Locator;
  private readonly passwordField: Locator;
  private readonly loginButton: Locator;
  private readonly codeVerificationField: Locator;
  private readonly loginButtonCodeVer: Locator;

  constructor(page: Page) {
    super(page);
    
    // Inicializa os localizadores
    this.usernameField = page.getByRole('textbox', { name: 'Email' });
    this.passwordField = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Entrar' });
    this.codeVerificationField = page.getByRole('textbox', { name: 'Digite o código' });
    this.loginButtonCodeVer = page.getByRole('button', { name: 'Enviar', exact: true });
  }

//Navega para a página de login
  async navigateToLogin(): Promise<void> {
    await this.navigateTo(TestData.URLS.LOGIN);
    await this.waitForPageLoad();
  }

//Realiza login com usuário e senha
  async login(username: string, password: string): Promise<void> {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
  
//Realiza a verificacao de duas etapas
  async codeVerification(code: string): Promise<void> {
    await this.codeVerificationField.fill(code);
    await this.loginButtonCodeVer.click();
  }

//Preenche apenas o campo de usuário
  async fillUsername(username: string): Promise<void> {
    await this.usernameField.fill(username);
  }

//Preenche apenas o campo de senha
  async fillPassword(password: string): Promise<void> {
    await this.passwordField.fill(password);
  }
  
 //Clica no botão de login
 async clickLoginButton(): Promise<void> {
   await this.loginButton.click();
  }

//Clica no botão de login de verificacao de duas etapas
 async clickLoginButtonCodeVer(): Promise<void> {
   await this.loginButtonCodeVer.click();
  }
  
//Preenche verificacao de duas etapas
  async fillCodeVerification(code: string): Promise<void> {
    await this.codeVerificationField.fill(code);
  }
}