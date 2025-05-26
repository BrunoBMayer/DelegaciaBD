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
3. Execute o script a seguir para criar o banco de dados:

    ```bash
    create database corregedoria;
    use corregedoria;

    CREATE TABLE Corregedoria (
        CNPJ VARCHAR(20) PRIMARY KEY,
        nome VARCHAR(255),
        endereco_rua VARCHAR(255),
        endereco_bairro VARCHAR(100),
        endereco_cidade VARCHAR(100)
    );

    CREATE TABLE Funcionario (
        matricula VARCHAR(20) PRIMARY KEY,
        nome VARCHAR(255),
        fk_Corregedoria_CNPJ VARCHAR(20),
        tipo_funcionario ENUM('Delegado', 'Investigador', 'Escrivao', 'Secretaria', 'Outro'),
        FOREIGN KEY (fk_Corregedoria_CNPJ) REFERENCES Corregedoria(CNPJ)
    );

    CREATE TABLE Pessoa (
        id_pessoa VARCHAR(20) PRIMARY KEY,
        nome VARCHAR(255),
        CPF VARCHAR(20),
        outros_dados_identificacao VARCHAR(255)
    );

    CREATE TABLE Denuncia (
        id_denuncia VARCHAR(20) PRIMARY KEY,
        data_ocorrencia DATE,
        data_registro_sistema DATE,
        descricao_fato VARCHAR(500),
        status_denuncia ENUM('Recebida', 'Em Análise', 'Arquivada', 'Procedente', 'Improcedente'),
        denunciante_anonimo BOOLEAN,
        fk_Funcionario_matricula_registrou VARCHAR(20),
        fk_Pessoa_id_pessoa VARCHAR(20),
        fk_Funcionario_matricula_avaliador VARCHAR(20),
        FOREIGN KEY (fk_Funcionario_matricula_registrou) REFERENCES Funcionario(matricula),
        FOREIGN KEY (fk_Pessoa_id_pessoa) REFERENCES Pessoa(id_pessoa),
        FOREIGN KEY (fk_Funcionario_matricula_avaliador) REFERENCES Funcionario(matricula)
    );

    CREATE TABLE ProcessoInvestigativo (
        id_processo VARCHAR(20) PRIMARY KEY,
        numero_protocolo_interno VARCHAR(50),
        tipo_processo ENUM('Sindicância', 'PAD', 'Inquérito Policial', 'Verificação Preliminar'),
        data_abertura DATE,
        data_conclusao DATE,
        status_processo ENUM('Em Andamento', 'Concluído', 'Arquivado', 'Suspenso'),
        descricao_resumida_objeto VARCHAR(500),
        fk_Funcionario_matricula_responsavel_principal VARCHAR(20),
        fk_Denuncia_id_origem VARCHAR(20),
        FOREIGN KEY (fk_Funcionario_matricula_responsavel_principal) REFERENCES Funcionario(matricula),
        FOREIGN KEY (fk_Denuncia_id_origem) REFERENCES Denuncia(id_denuncia)
    );

    CREATE TABLE AtribuicaoTarefaInvestigativa (
        id_atribuicao VARCHAR(20) PRIMARY KEY,
        descricao_tarefa VARCHAR(500),
        data_atribuicao DATE,
        prazo_conclusao DATE,
        status_tarefa ENUM('Pendente', 'Em Andamento', 'Concluída'),
        fk_ProcessoInvestigativo_id_processo VARCHAR(20),
        fk_Funcionario_matricula_designado VARCHAR(20),
        FOREIGN KEY (fk_ProcessoInvestigativo_id_processo) REFERENCES ProcessoInvestigativo(id_processo),
        FOREIGN KEY (fk_Funcionario_matricula_designado) REFERENCES Funcionario(matricula)
    );

    CREATE TABLE AtoProcessualDocumento (
        id_ato_documento VARCHAR(20) PRIMARY KEY,
        tipo_ato_documento ENUM('Relatório Parcial', 'Relatório Final', 'Auto de Prisão em Flagrante', 'Mandado de Prisão', 'Termo de Depoimento', 'Coleta de Evidência', 'Perícia', 'Outro Documento'),
        data_criacao_ato DATE,
        conteudo_resumido_ou_referencia_arquivo VARCHAR(500),
        fk_ProcessoInvestigativo_id_processo VARCHAR(20),
        fk_Funcionario_matricula_autor VARCHAR(20),
        fk_Pessoa_id_alvo_ato VARCHAR(20),
        FOREIGN KEY (fk_ProcessoInvestigativo_id_processo) REFERENCES ProcessoInvestigativo(id_processo),
        FOREIGN KEY (fk_Funcionario_matricula_autor) REFERENCES Funcionario(matricula),
        FOREIGN KEY (fk_Pessoa_id_alvo_ato) REFERENCES Pessoa(id_pessoa)
    );

    CREATE TABLE EnvolvimentoProcesso (
        id_envolvimento VARCHAR(20) PRIMARY KEY,
        papel_no_processo ENUM('Investigado', 'Indiciado', 'Testemunha', 'Vítima', 'Detido'),
        fk_ProcessoInvestigativo_id_processo VARCHAR(20),
        fk_Pessoa_id_envolvido VARCHAR(20),
        FOREIGN KEY (fk_ProcessoInvestigativo_id_processo) REFERENCES ProcessoInvestigativo(id_processo),
        FOREIGN KEY (fk_Pessoa_id_envolvido) REFERENCES Pessoa(id_pessoa)
    );
    
4. Certifique-se de que o banco está ativo e com os dados corretos

---

### 🖥️ Backend (Spring Boot)

1. No terminal, vá até a pasta do backend:

   ```bash
   cd backend
   ```

2. Execute o projeto com o Maven Wrapper:

    ```bash
    ./mvnw spring-boot:run
    ```
    
    Se estiver no Windows (cmd/powershell/etc) use:

    ```bash
    mvnw.cmd spring-boot:run
    ```
    
    O backend estará rodando em http://localhost:8080

💻 Frontend (React)

1. Abra outro terminal, vá até a pasta do frontend:
    ```bash
    cd frontend
    ```

2. Instale as dependências (caso ainda não tenha feito):

    ```bash
    npm install
    ```

3. Inicie o frontend:

    ```bash
    npm start
    ```

A aplicação estará disponível em:
    http://localhost:3000

✅ Observações

  O frontend está configurado para se comunicar com o backend usando um proxy no package.json.

  O login do tipo admin é o único com acesso a todas as funcionalidades.

  Usuários do tipo funcionário ou pessoa têm acesso restrito à própria home e visualização de seus dados.

📁 Estrutura do Projeto

├── backend\
│   └── src/main/java/com/api/ProjetoBD/...\
├── frontend/\
│   ├── src/pages/\
│   ├── src/components/\
│   └── package.json\
└── README.md
