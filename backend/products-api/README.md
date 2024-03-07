# Teste técnico Full Stack Javascript Developer Lexart Labs Jr.

# Objetivo

Desenvolver uma API REST para realizar operações CRUD, auxiliando a aplicação web de gerenciamento de produtos. A aplicação foi hospedada no `Vercel`.

## Tecnologias usadas
* Node.js;
* Express.js;
* Typescript;
* JWT(JSON Web Token);
* Sequelize(ORM);

## Desenvolvimento local

* Clone o repositório:
```bash
git clone git@github.com:caiquequaresmasilva/lexar-fullstack-developer-test.git
``` 

* Entre na pasta da API no repositório clonado e instale as dependências:

```bash
cd lexar-fullstack-developer-test/backend/products-api
npm install
``` 
## Executando a aplicação

* Para rodar a aplicação execute:
```bash
npm start
``` 

Para rodar a API, é necessário configurar as variáveis de ambiente para conexão com um banco de dados **Postgress** no arquivo `.env`

```
TOKEN_SECRET # Chave para geração dos tokens JWT
API_PORT # Porta de operação da API

POSTGRES_USER # Usuário do banco Postgress
POSTGRES_HOST # Host do banco
POSTGRES_PASSWORD # Senha do banco
POSTGRES_DATABASE # Nome do banco
``` 
---

---

## Endpoints
---

Para acessar todas as rotas, o usuário deverá enviar um `Bearer Token`, recebido após fazer login e receber o token da API de usuários (users-api).

* `POST /product` Se conter dados válidos, cria um novo produto a partir de 3  estruturas de dados diferentes:.

   Request body:
  ```json
  {
    "name": "Xiaomi Redmi 9",
    "brand": "Xiaomi",
    "model": "Redmi 9",
    "color": "red",
    "price": "10000"
  }

  {
    "name": "Xiaomi Redmi 9",
    "details": {
        "brand": "Xiaomi",
        "model": "Redmi 9",
        "color": "red",
    },
    "price": "10000"
  }

  [
    {
      "name": "Xiaomi Redmi 9",
      "brand": "Xiaomi",
      "model": "Redmi 9",
      "data": [
        {
          "color": "red",
          "price": "10000"  
        },
                {
          "color": "blue",
          "price": "10000"  
        }
      ]

    }
    

  ]
  ``` 
  
   Response body:
  ```json
  {
    "message":"Product created"
  }
  ``` 
  HTTP STATUS: `201 OK`

 
* `PUT /product/:id` Atualiza dados do produto indicado pelo `id`.;

   Request body:
  ```json
    {
    "name": "Xiaomi Redmi 9",
    "brand": "Xiaomi",
    "model": "Redmi 9",
    "color": "red",
    "price": "10000"
  }
  ``` 

  Response body:
  ```json
    {
      "message": "Product updated"
  }
  ``` 
  HTTP STATUS: `200 OK`
  
---

 
* `GET /product` Retorna todos os produtos disponíveis.
  
  Response body:
  ```json
  [
     {
    "id": "daadfdads-asdaasdasd-asdasdad",
    "name": "Xiaomi Redmi 9",
    "brand": "Xiaomi",
    "model": "Redmi 9",
    "color": "red",
    "price": "10000"
  },
  ...
  
  ]
  ``` 
  HTTP STATUS: `200 OK`
 
* `GET /product/:id` Retorna o produto especificado.
  
  Response body:
  ```json
  {
    "id": "1",
    "name": "Xiaomi Redmi 9",
    "brand": "Xiaomi",
    "model": "Redmi 9",
    "color": "red",
    "price": "10000"
  }

  ``` 
  HTTP STATUS: `200 OK`
---
  
* `GET /product/filter?name={:name}&brand={:brand}&color={:color}&maxPrice={:maxPrice}&minPrice={minPrice}` Retorna lista de produtos segundo os parâmetros de filtro em sua URL.

  Response body:
  ```json
  [
  {
    "id": "1",
    "name": "Xiaomi Redmi 9",
    "brand": "Xiaomi",
    "model": "Redmi 9",
    "color": "red",
    "price": "10000"
  },
  ...
  ]
  ``` 
  HTTP STATUS: `200 OK`
  
* `DELETE /product/:id` Deleta o produto especificado.
  
    Response body:
  ```json
  {
    "message": "Product deleted"
  }
  ``` 
  HTTP STATUS: `200 OK`
  
* `GET /color` Retorna uma lista das cores de produto disponíveis.

   Response body:
  ```json
  [
    {
    "id": 1,
    "name": "red"
   },
   ...
  ]

  ``` 
  HTTP STATUS: `200 CREATED`
  
* `GET /brand` Retorna uma lista das marcas de produto disponíveis.

  ```json
  [
    {
    "id": 1,
    "name": "Apple"
   },
   ...
  ]

  ``` 
  HTTP STATUS: `200 OK`
  
## Deploy no Vercel
  ```
  https://caique-lexar-products-api.vercel.app/
  ```
