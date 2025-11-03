Funcionalidade: Login de usuário
  Como um usuário do sistema
  Eu quero fazer login na aplicação
  Para acessar as funcionalidades disponíveis

Contexto:
  Dado que estou na página de login do backoffice

Cenário: Login com credenciais válidas
  Quando eu preencho o campo usuário com "usuario_valido"
  E eu preencho o campo senha com "senha_valida"
  E eu clico no botão de login
  E preencho o a verificacao de duas etapas
  Então eu devo ser redirecionado para a página principal

Cenário: Login com credenciais inválidas
  Quando eu preencho o campo usuário com "usuario_invalido"
  E eu preencho o campo senha com "senha_invalida"
  E eu clico no botão de login
  E preencho o a verificacao de duas etapas
  Então eu devo ser redirecionado para a página principal