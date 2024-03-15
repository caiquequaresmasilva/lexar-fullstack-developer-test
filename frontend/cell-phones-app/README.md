# Teste técnico Full Stack Javascript Developer Lexart Labs Jr.

# Objetivo

Desenvolver aplicação web em `React.js` para o gerenciamento de produtos (celulares). Quando devidamente cadastrado e logado, o usuário poderá listar, criar, editar e excluir os produtos em questão. A aplicação foi hospedada no `Vercel`.

## Tecnologias usadas
* React.js
* Typescript
* Vite
* Tailwind

## Desenvolvimento local

* Clone o repositório:
```bash
git clone git@github.com:caiquequaresmasilva/lexar-fullstack-developer-test.git
``` 

* Entre na pasta da API no repositório clonado e instale as dependências:

```bash
cd lexar-fullstack-developer-test/frontend/cell-phones-app
npm install
``` 
## Executando a aplicação

* Para rodar a aplicação execute:
```bash
npm run dev
``` 

Para rodar a API, é necessário configurar as variáveis de ambiente para comunicação com as API's auxiliares no arquivo `.env`

```
VITE_USER_API_HOST=https://vercel.user-api.host/
VITE_PRODUCT_API_HOST=https://vercel.proruct-api.host/
``` 
---

---

## Funcionalidades
---


* `Cadastro`: O usuário deve inserir os dados corretamente para criar seu cadastro no sistema e receber seu token de acesso.


![SIGNUP](/frontend/cell-phones-app/images/signup.png)

---

* `Login`: O usuário deve inserir seus dados de cadastro para receber seu token de autenticação e entrar no sistema.

![LOGIN](/frontend/cell-phones-app/images/LOGIN.png)

---

* `Home`: Área principal do app, onde a lista de produtos disponíveis pode ser observada.

![HOME](/frontend/cell-phones-app/images/HOME.png)

---

* `Edição`: Ao clicar no botão `EDIT` de um produto, o usuário irá para a página de edição, onde as informações do produto em questão podem ser alteradas.

![EDIT](/frontend/cell-phones-app/images/EDIT.png)

---

* `Criar variante`: Ao clicar no botão `ADD VARIANT` de um produto, um modal surgirá, permitindo que crie um novo produto a partir de um produto base, mudando apenas as informações `Price` e `Color`.

![ADD_VARIANT](/frontend/cell-phones-app/images/ADD_VARIANT.png)

---

* `Deletar`: Ao clicar no botão `DELETE` de um produto, um modal surgirá, confirmando o desejo de excluir o produto selecionado.

![DELETE](/frontend/cell-phones-app/images/DELETE.png)

---

* `Pesquisar`: Ao clicar no botão `SEARCH` de um produto, um modal surgirá, permitindo que o usuário pesquise um produto por algum termo que componha seu nome.

![SEARCH](/frontend/cell-phones-app/images/SEARCH.png)

---

* `Filtrar`: Ao clicar no botão `Filter` de um produto, um modal surgirá, permitindo que o usuário filtre os produtos desejado com base nos parâmetros `Brand`, `Color` e `Price`.

![FILTER](/frontend/cell-phones-app/images/FILTER.png)

---

* `Criação regular`: Ao clicar no botão `ADD PRODUCT`  no `header` da página, o usuário irá para a página de criação de produtos. A primeira alternativa é a criaçao regular de produtos, onde os dados de um produto são inseridos e criados um de cada vez.

![REGULAR-ADD](/frontend/cell-phones-app/images/REGULAR-ADD.png)

---
* `Criação em lote`: Ao clicar no botão `BULK`, o usuário irá para a opção de criação de produtos em lote. Primeiro, deve-se definir o modelo do produto, através dos parâmetros `Name`, `Brand`,`Model`. Em seguida, é liberado a inserção de variantes de preço e cor do produto, pelos parâmetros `Color` e `Price`. Se desejar, o usuário pode voltar e adicionar um novo modelo, assim como mais de suas variantes. Uma lista com os produtos adicionados é mostrada. Ao final, ao clicar no botão `CREATE`, todos os produtos são mandados para serem criado de uma vez do sistema.

![BULK_ADD](/frontend/cell-phones-app/images/BULK_ADD.png)

![BULK_ADD_LOCK](/frontend/cell-phones-app/images/BULK_ADD_LOCK.png)

![REGULAR-ADD_LIST](/frontend/cell-phones-app/images/BULK_ADD_LIST.png)

---

## Link da aplicação hospedada no Vercel
```
https://caique-lexar-cell-phone-app.vercel.app/
```























