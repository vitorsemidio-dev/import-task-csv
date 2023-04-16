# Import Task CSV

Esta é uma aplicação Node.js para guardar informações de uma lista de tarefas (TODO List). A aplicação permite que o usuário adicione, atualize, delete e liste as tarefas, além de importá-las a partir de um arquivo CSV.

A aplicação foi construída utilizando o módulo HTTP nativo do Node.js, sem utilizar bibliotecas externas.

## Sobre o desafio

Nesse desafio você desenvolverá uma API para realizar o CRUD de suas _tasks_ (tarefas).

A API deve conter as seguintes funcionalidades:

- [x] Criação de uma task
- [x] Listagem de todas as tasks
- [x] Atualização de uma task pelo `id`
- [x] Remover uma task pelo `id`
- [x] Marcar pelo `id` uma task como completa
- [x] E o verdadeiro desafio: Importação de tasks em massa por um arquivo CSV

### Rotas e regras de negócio

Antes das rotas, vamos entender qual a estrutura (propriedades) que uma task deve ter:

- `id` - Identificador único de cada task
- `title` - Título da task
- `description` - Descrição detalhada da task
- `completed_at` - Data de quando a task foi concluída. O valor inicial deve ser `null`
- `created_at` - Data de quando a task foi criada.
- `updated_at` - Deve ser sempre alterado para a data de quando a task foi atualizada.

Rotas:

- [x] `POST - /tasks`
      Deve ser possível criar uma task no banco de dados, enviando os campos `title` e `description` por meio do `body` da requisição.
      Ao criar uma task, os campos: `id`, `created_at`, `updated_at` e `completed_at` devem ser preenchidos automaticamente, conforme a orientação das propriedades acima.
- [x] `GET - /tasks`
      Deve ser possível listar todas as tasks salvas no banco de dados.
      Também deve ser possível realizar uma busca, filtrando as tasks pelo `title` e `description`
- [x] `PUT - /tasks/:id`
      Deve ser possível atualizar uma task pelo `id`.
      No `body` da requisição, deve receber somente o `title` e/ou `description` para serem atualizados.
      Se for enviado somente o `title`, significa que o `description` não pode ser atualizado e vice-versa.
      Antes de realizar a atualização, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.
- [x] `DELETE - /tasks/:id`
      Deve ser possível remover uma task pelo `id`.
      Antes de realizar a remoção, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.
- [x] `PATCH - /tasks/:id/complete`
      Deve ser possível marcar uma task como completa ou incompleta pelo id.
      Se a task estiver marcada como completa, o campo `completed_at` deve ser atualizado para null.
      Se a task estiver marcada como incompleta, o campo `completed_at` deve ser atualizado com a data e hora atual.
      Antes de realizar a atualização, deve ser feito uma validação se o id pertence a uma task salva no banco de dados.
- [x] `POST - /tasks/import`
      Deve ser possível importar um arquivo csv contendo informações das tasks e salvá-las no banco de dados. O arquivo deve ser enviado como `multipart/form-data` no `body` da requisição. As informações do arquivo devem ser mapeadas para o modelo de tasks no banco de dados.

### Indo além

Algumas sugestões do que pode ser implementado:

- [x] Validar se as propriedades `title` e `description` das rotas `POST` e `PUT` estão presentes no `body` da requisição.
- [x] Nas rotas que recebem o `/:id`, além de validar se o `id` existe no banco de dados, retornar a requisição com uma mensagem informando que o registro não existe.

## Como rodar a aplicação

**Clone o projeto**

**Instale as dependências**

```
npm install
```

**Execute a aplicação**

```
npm run dev
```

_O servidor irá iniciar em [http://localhost:3333/tasks](http://localhost:3333/tasks)_

## Descrição completa do desafio

Para visualizar a descrição do desafio, [clique aqui](./desafio.md)
