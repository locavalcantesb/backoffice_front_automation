import { expect } from '@playwright/test';

/**
 * Classe com asserções customizadas para os testes
 */
export class Assertions {
  /**
   * Verifica se o usuário está na página correta
   */
  static async assertCurrentPage(page: any, expectedUrl: string | RegExp): Promise<void> {
    await expect(page).toHaveURL(expectedUrl);
  }

  /**
   * Verifica se o login foi bem-sucedido
   */
  static async assertLoginSuccess(page: any): Promise<void> {
    await expect(page).toHaveURL(/admin\/index/);
  }
}
