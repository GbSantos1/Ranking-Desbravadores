# Guia de Configuração - BravUp

Este guia fornece instruções passo a passo para configurar e executar o projeto BravUp no seu computador.

## Pré-requisitos

Certifique-se de que você tem instalado:

- **Node.js** (v16 ou superior) - [Baixe aqui](https://nodejs.org/)
- **npm** ou **yarn** (geralmente vem com Node.js)
- **MySQL** (v5.7 ou superior) - [Baixe aqui](https://dev.mysql.com/downloads/mysql/)
- **Git** - [Baixe aqui](https://git-scm.com/)

Para verificar se tudo está instalado, execute:
```bash
node --version
npm --version
mysql --version
git --version
```

## Paso 1: Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/bravup.git
cd bravup
```

## Passo 2: Configurar o Banco de Dados MySQL

### Opção A: Usando MySQL Command Line

1. Abra o terminal e acesse MySQL:
```bash
mysql -u root -p
```

2. Digite sua senha do MySQL

3. Execute o script SQL:
```bash
source database/schema.sql;
```

### Opção B: Usando um Cliente MySQL (MySQL Workbench, phpMyAdmin, etc.)

1. Abra seu cliente MySQL
2. Abra o arquivo `database/schema.sql`
3. Execute o script

### Verificar se o banco foi criado:
```bash
mysql -u root -p -e "SHOW DATABASES;"
```
Você deve ver `bravup` na lista.

## Passo 3: Configurar o Backend

### 3.1 Instalar Dependências
```bash
cd backend
npm install
```

### 3.2 Configurar Variáveis de Ambiente

1. Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```

2. Edite o arquivo `.env` com suas credenciais do MySQL:
```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha_do_mysql
DB_NAME=bravup
JWT_SECRET=sua_chave_secreta_super_segura_aqui
PORT=5000
NODE_ENV=development
```

### 3.3 Iniciar o Servidor Backend

```bash
npm run dev
```

Você deve ver a mensagem:
```
Server running on port 5000
MySQL connected
```

O backend estará disponível em `http://localhost:5000`

## Passo 4: Configurar o Frontend

### 4.1 Instalar Dependências

Em outro terminal (mantenha o backend rodando):
```bash
cd frontend
npm install
```

### 4.2 Configurar Variáveis de Ambiente

1. Verifique se o arquivo `.env` existe:
```bash
cat .env
```

2. Deve conter:
```bash
VITE_API_URL=http://localhost:5000/api
```

### 4.3 Iniciar o Servidor Frontend

```bash
npm run dev
```

Você verá algo como:
```
  VITE v5.0.0  ready in 234 ms

  ➜  Local:   http://localhost:5173/
```

## Passo 5: Acessar a Aplicação

Abra seu navegador e acesse:
```
http://localhost:5173
```

Você será redirecionado para a página de Login.

### Credenciais de Teste

Para testar, você precisa de um membro criado no banco. Você pode:

1. Usar o MySQL para inserir um teste:
```sql
INSERT INTO members (name, phone, password, role, club_id, unit_id) 
VALUES ('Teste User', '1234567890', '$2a$10$...', 'Pathfinder', 1, 1);
```

2. Ou criar um endpoint de seed no backend para dados de teste.

---

## Troubleshooting

### Erro: "MySQL connection failed"
- Verifique se MySQL está rodando
- Verifique as credenciais no `.env`
- Certifique-se que o banco `bravup` foi criado

### Erro: "Cannot find module"
- Execute `npm install` no backend e frontend
- Delete `node_modules` e `.package-lock.json`, depois instale novamente

### Porta 5000 ou 5173 já em uso
- Mude a porta no `.env` do backend
- Ou feche a aplicação que está usando a porta

### CORS Error
- Verifique se o `VITE_API_URL` no frontend está correto
- Certifique-se de que o backend tem CORS habilitado

---

## Scripts Disponíveis

### Backend
```bash
npm run dev      # Inicia em modo desenvolvimento
npm start        # Inicia em modo produção
```

### Frontend
```bash
npm run dev      # Inicia servidor desenvolvimento
npm run build    # Faz build para produção
npm run preview  # Visualiza build de produção
npm run lint     # Verifica erros de código
```

---

## Estrutura de Pastas Importante

```
bravup/
├── backend/           # API Express
│   ├── server.js      # Arquivo principal
│   ├── package.json
│   └── .env           # Configuração local (não commit)
│
├── frontend/          # Aplicação React
│   ├── src/
│   │   └── main.jsx
│   ├── package.json
│   └── .env           # Configuração local (não commit)
│
└── database/
    └── schema.sql     # Schema do MySQL
```

---

## Próximos Passos

1. Crie usuários de teste no banco
2. Explore todas as páginas da aplicação
3. Teste o fluxo de login e adição de pontos
4. Configure suas competições e unidades
5. Personalize as cores e logo no settings

---

## Suporte

Se encontrar problemas:

1. Verifique se todos os pré-requisitos estão instalados
2. Leia os logs do terminal cuidadosamente
3. Abra uma issue no GitHub com detalhes do erro
4. Verifique se o banco de dados foi criado corretamente

Bom desenvolvimento! 🚀