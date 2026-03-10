# BravUp - Sistema de Gincana para Desbravadores

BravUp é uma plataforma de ranking e gamificação para Clubes de Desbravadores (Pathfinder Clubs). O sistema permite que múltiplos clubes gerenciem suas próprias competições, pontos e rankings de forma independente.

## 🎯 Características

- ✅ Gerenciamento de Clubes
- ✅ Gerenciamento de Membros (Desbravadores)
- ✅ Gerenciamento de Unidades
- ✅ Sistema de Competições
- ✅ Sistema de Pontuação Customizável
- ✅ Rankings Individuais e por Unidade
- ✅ Modo Projetor para Reuniões
- ✅ Relatórios e Exportação de Dados
- ✅ Controle de Acesso por Roles
- ✅ Design Responsivo

## 🛠️ Stack Tecnológico

### Backend
- Node.js
- Express.js
- MySQL
- JWT Authentication
- Bcrypt para hashs de senha

### Frontend
- React
- Vite
- TailwindCSS
- React Router
- Axios
- Responsive Design

## 📁 Estrutura do Projeto

```
bravup/
├── backend/
│   ├── controllers/        # Lógica de negócio
│   ├── models/            # Modelos de dados
│   ├── routes/            # Rotas da API
│   ├── middlewares/       # Middlewares (autenticação, etc)
│   ├── services/          # Serviços auxiliares
│   ├── config/            # Configurações
│   ├── utils/             # Funções utilitárias
│   ├── server.js          # Arquivo principal
│   ├── package.json
│   └── .env               # Variáveis de ambiente
│
├── frontend/
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── layouts/       # Layouts
│   │   ├── services/      # Serviços de API
│   │   ├── context/       # Context API
│   │   ├── assets/        # Imagens e assets
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── package.json
│   └── .env               # Variáveis de ambiente
│
├── database/
│   └── schema.sql         # Schema do banco MySQL
│
├── docs/
│   └── API.md            # Documentação da API
│
└── README.md
```

## 🚀 Instalação e Setup

### Pré-requisitos
- Node.js (v16+)
- npm ou yarn
- MySQL (v5.7+)
- Git

### Backend Setup

1. **Entre no diretório do backend**
```bash
cd backend
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
Crie um arquivo `.env` baseado em `.env.example`:
```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=bravup
JWT_SECRET=sua_chave_secreta_aqui
PORT=5000
```

4. **Configure o banco de dados**
```bash
# Abra seu cliente MySQL e execute:
mysql -u root -p < ../database/schema.sql
```

Ou importe o arquivo `database/schema.sql` manualmente no seu cliente MySQL.

5. **Inicie o servidor**
```bash
npm run dev
```

O backend estará rodando em `http://localhost:5000`

### Frontend Setup

1. **Entre no diretório do frontend**
```bash
cd frontend
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
Crie um arquivo `.env` baseado em `.env.example`:
```bash
VITE_API_URL=http://localhost:5000/api
```

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

O frontend estará acessível em `http://localhost:5173`

## 🔗 API Endpoints

### Autenticação
- `POST /api/auth/login` - Login de usuário

### Clubes
- `GET /api/clubs` - Listar clubes
- `GET /api/clubs/:id` - Obter clube específico
- `POST /api/clubs` - Criar clube
- `PUT /api/clubs/:id` - Atualizar clube
- `DELETE /api/clubs/:id` - Deletar clube

### Membros
- `GET /api/members` - Listar membros do clube
- `GET /api/members/:id` - Obter membro específico
- `POST /api/members` - Criar membro
- `PUT /api/members/:id` - Atualizar membro
- `DELETE /api/members/:id` - Deletar membro

### Unidades
- `GET /api/units` - Listar unidades
- `GET /api/units/:id` - Obter unidade específica
- `POST /api/units` - Criar unidade
- `PUT /api/units/:id` - Atualizar unidade
- `DELETE /api/units/:id` - Deletar unidade

### Competições
- `GET /api/competitions` - Listar competições
- `POST /api/competitions` - Criar competição

### Pontuação
- `GET /api/points` - Listar pontos
- `POST /api/points` - Adicionar pontos

### Ranking
- `GET /api/ranking/members` - Ranking de membros
- `GET /api/ranking/units` - Ranking de unidades

## 👥 Roles de Usuário

- **System Admin** - Acesso total ao sistema
- **Director** - Gerencia club, competições e pontos
- **Associate Director** - Mesmo acesso do Director
- **Secretary** - Gerencia membros e unidades
- **Treasurer** - Visualiza relatórios financeiros
- **Chaplain** - Acesso limitado
- **Instructor** - Acesso limitado
- **Unit Counselor** - Gerencia sua unidade
- **Associate Counselor** - Acesso limitado
- **Pathfinder** - Membro normal, visualiza apenas rankings

## 📄 Páginas da Aplicação

1. **Login** - Autenticação de usuários
2. **Dashboard** - Visão geral com estatísticas e destaques
3. **Ranking** - Rankings individuais e por unidade
4. **Unidades** - Gerenciamento de unidades
5. **Membros** - Gerenciamento de desbravadores
6. **Adicionar Pontos** - Registrar novas pontuações
7. **Competições** - Gerenciamento de gincanas
8. **Relatórios** - Exportação em Excel/PDF
9. **Modo Projetor** - Tela otimizada para projetor
10. **Configurações** - Alterações de configuração do clube

## 🎨 Design

O projeto utiliza TailwindCSS com design moderno inspirado em dashboards SaaS como Notion e Stripe.

**Paleta de cores:**
- Primária: Azul (#3B82F6)
- Secundária: Laranja (#F97316)
- Fundo: Cinza claro (#F9FAFB)

## 🔐 Segurança

- JWT para autenticação
- Bcrypt para hash de senhas
- CORS configurado
- Role-based access control (RBAC)
- Validação de entrada

## 📱 Responsividade

O sistema é totalmente responsivo:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

## 🤝 Contribuindo

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Autor

BravUp Development Team

## 📞 Suporte

Para dúvidas ou problemas, abra uma issue no repositório do GitHub.

---

**Última atualização:** Março de 2026