import { FullConfig } from '@playwright/test';

async function globalTeardown(config: FullConfig) {
  console.log('🧹 Iniciando teardown global dos testes...');
  
  // Aqui você pode adicionar limpeza de recursos, envio de relatórios, etc.
  
  console.log('✅ Teardown global concluído!');
}

export default globalTeardown;
