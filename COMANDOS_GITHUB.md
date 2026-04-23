# 🚀 COMANDOS GITHUB ESSENCIAIS

## 📋 COMANDOS BÁSICOS

### Clonar Repositório
```bash
git clone https://github.com/SEU_USERNAME/ranking-desbravadores.git
cd ranking-desbravadores
```

### Verificar Status
```bash
git status
```

### Adicionar Arquivos
```bash
git add .
git add nome_do_arquivo.js
```

### Fazer Commit
```bash
git commit -m "Descrição das mudanças"
```

### Enviar para GitHub
```bash
git push origin main
```

### Puxar Mudanças
```bash
git pull origin main
```

---

## 🔧 CONFIGURAÇÃO INICIAL

### Configurar Usuário (primeira vez só)
```bash
git config --global user.name "Seu Nome Completo"
git config --global user.email "seu-email@exemplo.com"
```

### Adicionar Remote (se clonou por outro método)
```bash
git remote add origin https://github.com/SEU_USERNAME/ranking-desbravadores.git
```

### Mudar Branch para Main
```bash
git branch -M main
```

---

## 🌿 COMANDOS DE BRANCH

### Criar Nova Branch
```bash
git checkout -b nome-da-branch
```

### Mudar de Branch
```bash
git checkout nome-da-branch
```

### Listar Branches
```bash
git branch
```

### Mesclar Branch
```bash
git checkout main
git merge nome-da-branch
```

### Deletar Branch
```bash
git branch -d nome-da-branch
```

---

## 📝 HISTÓRICO E LOGS

### Ver Histórico de Commits
```bash
git log --oneline
git log --graph --oneline
```

### Ver Mudanças em Arquivo
```bash
git log nome_do_arquivo.js
```

### Ver Mudanças entre Commits
```bash
git diff commit1 commit2
```

### Ver quem Alterou
```bash
git blame nome_do_arquivo.js
```

---

## 🔄 COMANDOS DE SYNC

### Sincronizar com GitHub
```bash
git fetch origin
git pull origin main
```

### Forçar Push (cuidado!)
```bash
git push -f origin main
```

### Ver Remotes
```bash
git remote -v
```

---

## 🚨 COMANDOS DE EMERGÊNCIA

### Desfazer Último Commit
```bash
git reset --soft HEAD~1
```

### Desfazer Mudanças Locais
```bash
git checkout -- nome_do_arquivo.js
git checkout .
```

### Limpar Repositório
```bash
git clean -fd
```

### Recuperar Arquivo Deletado
```bash
git checkout HEAD~1 -- nome_do_arquivo.js
```

---

## 📁 COMANDOS DE ARQUIVOS

### Ignorar Arquivos
```bash
# Adicionar ao .gitignore
echo "node_modules/" >> .gitignore
echo "*.log" >> .gitignore
```

### Remover do Git
```bash
git rm nome_do_arquivo.js
git rm --cached nome_do_arquivo.js  # remove mas mantém localmente
```

### Mover/Renomear
```bash
git mv nome_antigo.js nome_novo.js
```

---

## 🏷️ COMANDOS DE TAG

### Criar Tag
```bash
git tag v1.0.0
git tag -a v1.0.0 -m "Versão 1.0.0"
```

### Enviar Tags
```bash
git push origin --tags
```

### Ver Tags
```bash
git tag
```

---

## 🔐 COMANDOS DE CONFIG

### Ver Configuração
```bash
git config --list
```

### Configurar Editor
```bash
git config --global core.editor "code --wait"
```

### Configurar Ferramenta de Diff
```bash
git config --global diff.tool vscode
```

---

## 📊 COMANDOS DE ESTATÍSTICAS

### Estatísticas do Projeto
```bash
git shortlog -sn
git log --stat
```

### Linhas de Código
```bash
git ls-files | xargs wc -l
```

---

## 🚀 WORKFLOW COMPLETO

### Fluxo de Trabalho Padrão
```bash
# 1. Iniciar dia
git pull origin main

# 2. Criar branch para nova feature
git checkout -b nova-feature

# 3. Trabalhar e fazer commits
git add .
git commit -m "Implementar nova feature"

# 4. Enviar para GitHub
git push origin nova-feature

# 5. Abrir Pull Request no GitHub

# 6. Após merge, voltar para main
git checkout main
git pull origin main

# 7. Deletar branch local
git branch -d nova-feature
```

---

## 📱 GITHUB DESKTOP (OPCIONAL)

### Instalar GitHub Desktop
1. Baixe em: https://desktop.github.com
2. Faça login
3. Clone repositório pela interface
4. Use interface gráfica para commits

### Vantagens
- Interface visual
- Sincronização automática
- Fácil para iniciantes

---

## 🔑 AUTENTICAÇÃO GITHUB

### Configurar SSH (mais seguro)
```bash
# Gerar chave SSH
ssh-keygen -t rsa -b 4096 -C "seu-email@exemplo.com"

# Adicionar chave ao GitHub
# Copie conteúdo de ~/.ssh/id_rsa.pub
# Cole em Settings → SSH and GPG keys → New SSH key

# Usar SSH para clonar
git clone git@github.com:SEU_USERNAME/ranking-desbravadores.git
```

### Personal Access Token
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token
3. Selecione scopes: repo, workflow
4. Use token como senha

---

## 📞 AJUDA GITHUB

### Ajuda de Comando
```bash
git help [comando]
git [comando] --help
```

### Documentação Oficial
- https://git-scm.com/docs
- https://docs.github.com

---

## ✅ COMANDOS ESSENCIAIS RESUMIDOS

```bash
# Setup inicial
git clone https://github.com/SEU_USERNAME/ranking-desbravadores.git
cd ranking-desbravadores

# Workflow diário
git add .
git commit -m "Descrever mudanças"
git push origin main

# Sincronização
git pull origin main
```

**Estes comandos cobrem 95% das operações diárias com Git!** 🚀
