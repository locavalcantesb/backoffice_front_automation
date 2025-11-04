//Classe para gerenciar dados de teste

export class TestData {
  // Usuário válido para login no backoffice
  static readonly VALID_USERS = {
    STANDARD_USER: {
      username: 'automacaobackoffice@uorak.com',
      password: 'Senha@12345'
    }
  };

  // Codigo de verificacao de duas etapas
  static readonly CODE_VERIFICATION = {
    code: '454944'
  };

  // URLs das páginas
  static readonly URLS = {
    LOGIN: '/auth/login'
  };
}
