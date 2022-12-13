# EncostAi -> React-Native + Node.js
![logo](https://user-images.githubusercontent.com/104457353/207320930-e9edcd29-87b1-4a4c-9dee-3229c41dfb08.png)

Trabalho desenvolvido para a disciplina de PI e Mobile do terceiro período. Desenvolvimento realizado com React Native no Expo para o front-end e Node.js no back-end.
Esse repositório é a parte do back-end do projeto do EncostAi e a parte do front-end seria este repositório: https://github.com/rsjronald0/encostai-react.

No back-end, contamos com 3 rotas: /user /vistoria e /sms.
Cada rota contém várias operações, como /user/add ou /user/update/:id (para acessar todas as rotas da API, acesse a pasta routes)
Os models utilizados nas rotas como User, Vistoria estão na pasta /model

O banco de dados utilizado no back-end é o MongoDB.

Antes de rodar este projeto, execute "npm install" na pasta raiz do projeto para instalar todas as bibliotecas utilizadas.

Para executar o projeto, execute "node app.js" na pasta raiz do projeto para abrir a porta 3000 e servir como servidor do banco de dados e API.
