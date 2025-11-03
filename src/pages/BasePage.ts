import { Page } from '@playwright/test';

/**
 * Classe base para todas as páginas
 * Contém métodos comuns que podem ser reutilizados
 */
export abstract class BasePage {
  protected page: Page;
  // URL base da aplicação
  protected static readonly BASE_URL = 'https://backoffice.starbem.dev';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navega para uma página usando o caminho relativo combinado com a URL base
   * @param path - Caminho relativo (ex: '/auth/login' ou valores de TestData.URLS)
   */
  async navigateTo(path: string): Promise<void> {
    const fullUrl = path.startsWith('http') ? path : `${BasePage.BASE_URL}${path.startsWith('/') ? path : '/' + path}`;
    await this.page.goto(fullUrl);
  }

  /**
   * Aguarda o carregamento da página
   */
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }
}
