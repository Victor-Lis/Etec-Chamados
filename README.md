# Etec Chamados with NextJS

Sistema de gerenciamento de chamados desenvolvido para otimizar os processos da secretaria da Etec Professor Carmine Biagio Tundisi.

## 📋 Sobre o Projeto

O Etec Chamados é uma aplicação web desenvolvida com NextJS que permite gerenciar:

- Chamados de atendimento
- Controle de mesas/guichês
- Cadastro de pessoas autorizadas
- Sistema de senhas preferenciais e comuns
- Monitoramento de tempo de atendimento

<br>

## 🚀 Tecnologias Utilizadas

- [Next.js 14](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Firebase](https://firebase.google.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

<br>

## 📌 Features

### 🔒 Autenticação
- Login via Google
- Proteção de rotas
- Gerenciamento de sessão

<br>

### 👥 Pessoas Autorizadas
- Cadastro de pessoas
- Listagem de autorizados
- Edição de cadastros
- Exclusão de registros

<br>

### 🪑 Mesas/Guichês
- Cadastro de mesas
- Associação com atendentes
- Gerenciamento de posições
- Controle de status

<br>

### 📞 Chamados
- Geração de senhas
- Controle de filas
- Atendimentos preferenciais
- Histórico de atendimentos
- Estatísticas e análises

<br>

## 🛠️ Instalação

1. Clone o repositório
  ```bash
  git clone https://github.com/seu-usuario/etec-chamados.git
  ```

2. Entre no diretório do projeto
  ```bash
  cd etec-chamados
  ```

3. Instale as dependências
  ```bash
  npm install
  ```

4. Configure as variáveis de ambiente Crie um arquivo `.env` na raiz do projeto e adicione:
  ```bash
  NEXT_AUTH_SECRET=suasecret
  NEXTAUTH_SECRET=suasecret
  SECRET=suasecret

  NODE_ENV=development

  NEXT_AUTH_URL=http://localhost:3000
  HOST_URL=http://localhost:3000

  # Google Auth
  GOOGLE_CLIENT_ID=seu_google_client_id
  GOOGLE_CLIENT_SECRET=seu_google_client_secret

  # Firebase Config
  NEXT_PUBLIC_APIKEY=
  NEXT_PUBLIC_AUTHDOMAIN=
  NEXT_PUBLIC_DATABASEURL=
  NEXT_PUBLIC_PROJECTID=
  NEXT_PUBLIC_STORAGEBUCKET=
  NEXT_PUBLIC_MESSAGINGSENDERID=
  NEXT_PUBLIC_APPID=
  NEXT_PUBLIC_MEASUREMENTID=
  ```

5. Inicie o servidor de desenvolvimento
  ```bash
  npm run dev
  ```

<br>

## 💻 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Produção
npm start
```

<br>

## 🤝 Como Contribuir

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature
  ```bash
  git checkout -b feature/AmazingFeature
  ```
3. Adicione suas mudanças
  ```bash
  git add .
  ```
4. Commit suas mudanças
  ```bash
  git commit -m 'Add some AmazingFeature'
  ```
5. Push para a Branch
  ```bash
  git push origin feature/AmazingFeature
  ```
6. Abra um Pull Request

<br>

## ✨ Autores 

- [@Victor-Lis](https://github.com/Victor-Lis)
