# 📋 Projeto: Sistema da Corregedoria

Este projeto é um sistema de gerenciamento interno para uma **Corregedoria**, desenvolvido com:

- **Backend**: Spring Boot (Java)
- **Frontend**: React (com Material UI)
- **Banco de Dados**: MySQL (usado via DBeaver)

---

## 🧩 Funcionalidades

- Cadastro e gerenciamento de:
  - Corregedorias
  - Funcionários
  - Pessoas
  - Denúncias
  - Processos Investigativos
  - Atribuições
  - Atos Processuais
  - Envolvimentos

- Tela de login com três tipos de acesso:
  - **admin** (login: `admin` / `admin`)
  - **funcionário** (nome + matrícula)
  - **pessoa** (nome + ID)

- Dashboard interativo com gráficos e filtros
- Controle de acesso por tipo de usuário

---

## 🚀 Como rodar o projeto

### 🛢️ Banco de Dados (MySQL)

1. Abra o **DBeaver**
2. Crie uma nova conexão com o MySQL (porta padrão: `3306`)
3. **Execute o script SQL** fornecido no projeto para criar as tabelas
4. Certifique-se de que o banco está ativo e com os dados corretos

---

### 🖥️ Backend (Spring Boot)

1. No terminal, vá até a pasta do backend:

   ```bash
   cd backend
