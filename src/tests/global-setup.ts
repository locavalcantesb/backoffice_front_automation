import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  console.log('🚀 Iniciando setup global dos testes...');
  
  // Criar diretórios necessários
  const fs = require('fs');
  const path = require('path');
  
  const directories = [
    'screenshots',
    'videos',
    'traces',
    'test-results',
    'reports'
  ];
  
  directories.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`📁 Diretório criado: ${dir}`);
    }
  });
  
  console.log('✅ Setup global concluído!');
}

export default globalSetup;
