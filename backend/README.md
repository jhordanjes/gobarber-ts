<h1 align="center">
  <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">GoBarber - Backend</h3>


# 💻 Projeto

Gobarber é uma aplicação para prestadores de serviço, como Barbeiros, Cabeleireiros, controlarem agendamentos de clientes, recebidos via aplicação Mobile. E faça o gerenciamento pela aplicação web.


# Docker

Você vai precisar criar uma imagem de **Postgres**, **Mongo** e **Redis**.

Postgres: https://hub.docker.com/_/postgres
Mongo: https://hub.docker.com/_/mongo
Redis: https://hub.docker.com/_/redis/


# 🚀 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta rodando `cd gobarber-backend`;
3. Rode `yarn` para instalar as dependências;
6. Rode `cp .env.example .env` e preencha o arquivo `.env` com SUAS variáveis ​​ambiente;
7. Rode `yarn sequelize db:migrate` para executar como migrações;
8. Rode `yarn dev` para iniciar o servidor.
9. Rode `yarn queue` para iniciar a fila.

#   Mapeando as funcionalidades da aplicação
## Recuperação de senha

**RF**
- O usuário deve poder recuperar sua senha informando seu email;
- O usuário deve receber um email com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**
- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilziar Amazon SES para envios em produção;
- O envio de emails deve acontecer em segundo plano (background job);

**RN**
- O link enviado por email para resetar senha, deve expirar em 2 horas;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

## Atualização de perfil
**RF**
- O usuário deve poder atualizar seu nome, email, senha;

**RNF**

**RN**
- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

## Agendamento de serviços
**RF**
- O usuário deve poder listar todos os prestadores de serviço cadastrados.
- O usuário deve poder listar os dias de um mês com pelos menos um horário disponível de um prestador.
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**
- A listagem de prestadores deve ser armazenada em cache;

**RN**
- Cada agendamento deve durar 1 hora;
- Os agendamentos devem estar disponíveis entre 8h às 18h(Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não poder agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;

## Painel do prestador
**RF**
- O usuário deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificação sempre que hovuer um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**
- Os agendamentos do prestador no dia devem ser armazanados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Soket.io;

**RN**
- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;
