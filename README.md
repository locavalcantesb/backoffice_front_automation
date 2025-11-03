# Chassis de Testes Automatizados Web

Este projeto é um chassis completo para testes automatizados web utilizando TypeScript, Playwright e Page Objects, com cenários BDD para o site saucedemo.com.

## 🚀 Tecnologias Utilizadas

- **TypeScript** - Linguagem de programação
- **Playwright** - Framework de automação de testes
- **Cucumber** - Framework BDD (Behavior Driven Development)
- **Page Object Model** - Padrão de design para testes
- **Jest** - Framework de asserções

## 📁 Estrutura do Projeto

```
src/
├── pages/                 # Page Objects
│   ├── BasePage.ts       # Classe base para todas as páginas
│   ├── LoginPage.ts      # Página de login
│   ├── ProductsPage.ts   # Página de produtos
│   ├── CartPage.ts       # Página do carrinho
│   ├── CheckoutPage.ts   # Página de checkout
│   ├── CheckoutOverviewPage.ts  # Página de resumo do checkout
│   └── CheckoutCompletePage.ts  # Página de conclusão
├── tests/                # Testes tradicionais
│   ├── login.spec.ts     # Testes de login
│   ├── products.spec.ts  # Testes de produtos
│   └── checkout.spec.ts  # Testes de checkout
├── features/             # Arquivos de feature BDD
│   ├── login.feature     # Cenários de login
│   └── cadastro.feature  # Cenários de cadastro/compra
├── step-definitions/     # Step definitions BDD
│   ├── login.steps.ts    # Steps de login
│   └── cadastro.steps.ts # Steps de cadastro
└── utils/                # Utilitários e helpers
    ├── TestData.ts       # Dados de teste
    ├── TestHelpers.ts    # Funções auxiliares
    └── Assertions.ts     # Asserções customizadas
```

## 🛠️ Instalação

1. **Clone o repositório:**
```bash
git clone <url-do-repositorio>
cd chassis_front_autom
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Instale os navegadores do Playwright:**
```bash
npm run install:browsers
```

## 🚀 Como Executar os Testes

### Testes Tradicionais

```bash
# Executar todos os testes
npm test

# Executar testes em modo visual (headed)
npm run test:headed

# Executar testes em modo debug
npm run test:debug

# Executar testes com interface gráfica
npm run test:ui

# Executar testes específicos
npx playwright test login.spec.ts
npx playwright test products.spec.ts
npx playwright test checkout.spec.ts
```

### Testes BDD

```bash
# Executar cenários BDD
npx cucumber-js src/features/login.feature
npx cucumber-js src/features/cadastro.feature

# Executar todos os cenários BDD
npx cucumber-js src/features/
```

### Relatórios

```bash
# Visualizar relatório HTML
npm run test:report
```

## 📋 Cenários de Teste Implementados

### Login
- ✅ Login com credenciais válidas
- ✅ Login com usuário bloqueado
- ✅ Login com credenciais inválidas
- ✅ Login sem preencher usuário
- ✅ Login sem preencher senha
- ✅ Login sem preencher nenhum campo
- ✅ Logout do sistema

### Produtos
- ✅ Verificar carregamento da página
- ✅ Adicionar produto ao carrinho
- ✅ Adicionar múltiplos produtos
- ✅ Navegar para o carrinho
- ✅ Ordenar produtos (A-Z, Z-A, preço)
- ✅ Verificar produtos específicos
- ✅ Logout através do menu

### Checkout
- ✅ Finalizar compra com dados válidos
- ✅ Finalizar compra sem dados obrigatórios
- ✅ Cancelar checkout
- ✅ Verificar resumo do pedido
- ✅ Voltar para produtos após compra

## 🎯 Funcionalidades do Chassis

### Page Objects
- **BasePage**: Classe base com métodos comuns
- **LoginPage**: Gerenciamento da página de login
- **ProductsPage**: Gerenciamento da página de produtos
- **CartPage**: Gerenciamento do carrinho
- **CheckoutPage**: Gerenciamento do checkout
- **CheckoutOverviewPage**: Resumo do pedido
- **CheckoutCompletePage**: Conclusão da compra

### Utilitários
- **TestData**: Dados de teste centralizados
- **TestHelpers**: Funções auxiliares
- **Assertions**: Asserções customizadas

### Configurações
- **playwright.config.ts**: Configuração do Playwright
- **tsconfig.json**: Configuração do TypeScript
- **package.json**: Dependências e scripts

## 🔧 Configurações Avançadas

### Executar em Navegadores Específicos

```bash
# Chrome
npx playwright test --project=chromium

# Firefox
npx playwright test --project=firefox

# Safari
npx playwright test --project=webkit

# Mobile
npx playwright test --project="Mobile Chrome"
```

### Executar em Modo Headless

```bash
# Modo headless (padrão)
npx playwright test

# Modo headed (com interface)
npx playwright test --headed
```

### Executar com Retry

```bash
# Executar com 3 tentativas
npx playwright test --retries=3
```

## 📊 Relatórios e Screenshots

- Screenshots são capturados automaticamente em caso de falha
- Relatórios HTML são gerados em `playwright-report/`
- Vídeos são gravados em caso de falha
- Traces são capturados para debugging

## 🐛 Debugging

### Modo Debug
```bash
npm run test:debug
```

### Interface Gráfica
```bash
npm run test:ui
```

### Screenshots
Os screenshots são salvos automaticamente em caso de falha na pasta `screenshots/`.

## 📝 Adicionando Novos Testes

### 1. Criar novo Page Object
```typescript
// src/pages/NewPage.ts
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class NewPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  
  // Implementar métodos específicos da página
}
```

### 2. Criar novo teste
```typescript
// src/tests/new.spec.ts
import { test, expect } from '@playwright/test';
import { NewPage } from '../pages/NewPage';

test.describe('New Tests', () => {
  test('New test case', async ({ page }) => {
    const newPage = new NewPage(page);
    // Implementar teste
  });
});
```

### 3. Criar nova feature BDD
```gherkin
# src/features/new.feature
Feature: New Feature
  Scenario: New scenario
    Given some condition
    When some action
    Then some result
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através dos issues do repositório.

---

**Desenvolvido com ❤️ para automação de testes web**
