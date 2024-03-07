# Teste técnico Full Stack Javascript Developer Lexart Labs Jr.

# Objetivo

Desenvolver uma API em `Node.js` que faça o registro e o login de novos usuários, disponibilizando um token de acesso. A API deve ser hospedada na plataforma do `Vercel`.

## Tecnologias usadas
* Node.js;
* Express.js;
* Typescript;
* JWT(JSON Web Token);
* Sequelize(ORM);

## Desenvolvimento local

* Clone o repositório:
```bash
git git@github.com:caiquequaresmasilva/lexar-fullstack-developer-test.git
``` 

* Entre na pasta da API dentro do repositório clonado e instale as dependências:

```bash
cd lexar-fullstack-developer-test.git/backend/users-api
npm install
``` 
 

## Executando a aplicação

Para rodar a API corretamente, é necessário configurar as variáveis de ambiente para conexão com um banco de dados **Postgress** no arquivo `.env`

```
TOKEN_SECRET # Chave para geração dos tokens JWT
API_PORT # Porta de operação da API

POSTGRES_USER # Usuário do banco Postgress
POSTGRES_HOST # Host do banco
POSTGRES_PASSWORD # Senha do banco
POSTGRES_DATABASE # Nome do banco
``` 
---

* Para rodar o backend, execute o script:
```bash
npm start
``` 
---

## Endpoints
---

* `POST /user` Se conter dados válidos, cria um novo usuário e retorna um token de autenticação.

   Request body:
  ```json
  {
    "name": string
    "email": string,
    "password": string
  }
  ``` 
  
   Response body:
  ```json
  {
    name: string,
    token: string
 
  }
  ``` 
  HTTP STATUS: `201 CREATED`

  A senha de conter no mínimo 8 caracteres, incluindo letras maiúscula, minúsculas e números.

 
* `POST /login` Se possuir os dados corretos, retorna um token para permitir acesso à aplicação web.

   Response body:
  ```json
  {
    "email": string,
    "password": string
  }
  ``` 
  HTTP STATUS: `200 OK`
  
---
  
## Executando Testes

* Para rodar os testes unitários, rode o script:
  ```bash
  npm test
  ```

---

## Deploy no Vercel
```
Host: https://caique-lexar-users-api.vercel.app/ 
```