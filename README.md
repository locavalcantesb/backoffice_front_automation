# Backoffice Front Automation

Repositório de testes automatizados front da plataforma do Backoffice utilizando TypeScript, Playwright e Page Objects, com suporte a cenários BDD.

## Requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** (geralmente vem com o Node.js)
- **Git** (para clonar o repositório)

## Instalação

Siga os passos abaixo para instalar o projeto:

```bash
# 1. Clone o repositório
git clone <https://github.com/locavalcantesb/backoffice_front_automation.git>
cd backoffice_front_automation

# 2. Instale as dependências do projeto
npm install

# 3. Instale os navegadores do Playwright
npm run install:browsers
```

## Como Executar os Testes

### Passo 1: Configurar os Dados de Teste

Antes de executar os testes, configure os dados de teste no arquivo `src/utils/TestData.ts`:
- URLs das páginas
- Credenciais de usuários
- Códigos de verificação de duas etapas

### Passo 2: Executar os Testes

#### Testes Tradicionais (Playwright)

```bash
# Executar todos os testes
npm test

# Executar testes em modo visual (com interface do navegador)
npm run test:headed

# Executar testes com interface gráfica do Playwright
npm run test:ui
```

#### Testes BDD (Cucumber)

```bash
# Executar todos os cenários BDD
npx cucumber-js src/features/

# Executar um arquivo de feature específico
npx cucumber-js src/features/login.feature
```

### Passo 3: Visualizar os Relatórios

```bash
# Visualizar relatório HTML do Playwright
npm run test:report
```

Os relatórios são salvos em:
- **Playwright**: `playwright-report/` (abra o arquivo `index.html`)
- **Cucumber**: `reports/cucumber-report.html`

## Tecnologias Utilizadas

- **TypeScript** - Linguagem de programação
- **Playwright** - Framework de automação de testes
- **Cucumber** - Framework BDD (Behavior Driven Development)
- **Page Object Model** - Padrão de design para testes

## Estrutura do Projeto

```
src/
├── pages/                 # Page Objects
│   ├── BasePage.ts       # Classe base para todas as páginas
│   └── LoginPage.ts      # Página de login do Backoffice
├── tests/                # Testes tradicionais
│   ├── global-setup.ts   # Configuração global antes dos testes
│   ├── global-teardown.ts # Limpeza global após os testes
│   └── login.spec.ts     # Testes de login
├── features/             # Arquivos de feature BDD
│   └── login.feature     # Cenários de login em Gherkin
├── step-definitions/     # Step definitions BDD
│   └── login.steps.ts    # Implementação dos steps de login
└── utils/                # Utilitários e helpers
    ├── TestData.ts       # Dados de teste centralizados
    └── Assertions.ts     # Asserções customizadas
```

## Cenários de Teste Implementados

### Login
- ✅ Login com credenciais válidas e verificação de duas etapas (2FA)
- ✅ Login com credenciais inválidas

## Comandos Úteis

### Debugging

```bash
# Executar testes em modo debug
npm run test:debug

# Visualizar traces de testes que falharam
npx playwright show-trace test-results/[test-name]/trace.zip
```

### Executar em Navegadores Específicos

```bash
npx playwright test --project=chromium  # Chrome
npx playwright test --project=firefox   # Firefox
npx playwright test --project=webkit    # Safari
```

### Executar Testes Específicos

```bash
# Executar um arquivo de teste específico
npx playwright test login.spec.ts

# Executar testes em modo visual (com navegador aberto)
npx playwright test --ui
```

## Relatórios e Evidências

Os seguintes arquivos são gerados automaticamente:

- **Screenshots**: `screenshots/` (capturados em caso de falha)
- **Vídeos**: `videos/` (gravados em caso de falha)
- **Traces**: `traces/` e `test-results/` (para debugging)
- **Relatórios HTML**: `playwright-report/` e `reports/`
- **Relatórios JSON/JUnit**: `test-results/`
