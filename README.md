## Como Executar

Passo a passo para executar!

### 1. Configure as Variáveis de Ambiente

Copie o arquivo .env.example para um arquivo .env

```env
POSTGRES_USER=postgres
POSTGRES_PASSWORD=supersecret
POSTGRES_DB=salas_db

# Variáveis para a sua aplicação Node.js se conectar ao banco
DB_USER=postgres
DB_PASSWORD=supersecret
DB_DATABASE=salas_db
DB_HOST=db
DB_PORT=5432
```

### 2. Suba os Containers Docker

Execute o comando abaixo na raiz do projeto para construir a imagem da API e iniciar os containers do backend e do banco de dados.
O banco de dados será automaticamente criado e populado com dados iniciais na primeira vez que for executado.

```bash
docker-compose up --build
```

A API estará disponível em `http://localhost:3000/api/salas`.

## Endpoints da API

Todas as rotas são prefixadas com `/api/salas`.

| Método | Endpoint                | Descrição                                         | Exemplo de Corpo (Body)                                                               |
| :----- | :---------------------- | :------------------------------------------------ | :------------------------------------------------------------------------------------ |
| `GET`    | `/`                     | Lista todas as salas de aula ativas.              | N/A                                                                                   |
| `GET`    | `/:id`                  | Busca uma única sala de aula ativa pelo seu ID.   | N/A                                                                                   |
| `POST`   | `/`                     | Cria uma nova sala de aula.                       | `{ "descricao": "Nova Sala", "localizacao": "Bloco Z", "capacidade": 50 }`             |
| `PUT`    | `/:id`                  | Atualiza os dados de uma sala de aula existente.  | `{ "descricao": "Sala Editada", "localizacao": "Bloco Y", "capacidade": 55 }`          |
| `DELETE` | `/:id`                  | Remove uma sala de aula (soft delete).            | N/A                                                                                   |

**Exemplo de URL completa para listar todas as salas:** `http://localhost:3000/api/salas`