# Letmeask NLW Together - React JS


### Projeto desenvolvido no evento Next Level Week Together da Rocketseat. Consiste de uma aplicação capaz de criar salas utilizando o autenticador do Google, "ouvir" perguntas de usuários e acessar salas criadas previamente. Além disso, possui funções de administrador como: excluir uma perguntar, marcar como destaque e marcar como respondida.

# Tecnologias
- [React](https://pt-br.reactjs.org/)
- [Firebase](https://firebase.google.com/)

# Como executar o projeto

## Configurando o Firebase
### Para executar o projeto, inicialmente é necessário configurar o firebase. 

### - Faça o login no - [Firebase](https://firebase.google.com/), no menu superior clique em "ir para console", adicionar projeto (nome da escolha do usuário), desative o google analitcs e clique em criar projeto.

### - No menu esquerdo em "Criação" clique em "authentication" e na aba "Sign-in-method" selecione "Google". No mesmo menu lateral esquerdo, acesse "Realtime database" e clique em "Criar banco de dados", deixe a opção "modo bloqueado" ativado e clique em ativar.

### - No menu esquerdo, na parte superior, clique em "Visão geral do projeto", nos botoões selecione "web", preencha o nome do projeto, deixe "firebase-hosting" marcado e clique em Registrar App.

### - Após registrado o app, será disponibilizado uma box com códigos, copie os valores de "firebaseConfig" e crie um arquivo.env.local na raiz do projeto, e preencha os seguintes valores:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_DATABASE_URL=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NODE_ENV=
```

## Configurando o Realtime Database

### No menu esquerdo, clique em Realtime database e na aba "regras" copie e cole o seguinte código:

```bash
{
  "rules": {
    "rooms": {
      ".read": true,
      ".write": "auth != null",
      "$roomId": {
        ".read": true,
        ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.uid)",
        "questions": {
          ".read": true,
          ".write": "auth != null && (!data.exists() || data.parent().child('authorId').val() == auth.uid)",
          "likes": {
            ".read": true,
            ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.uid)",
          }
        }
      }
    }
  }
}
```

## Executando o projeto

### Após finalizado todas as configurações execute o seguinte comando:

```bash
yarn start
```
