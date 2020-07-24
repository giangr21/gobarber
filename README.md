
<h1 align="center">
  <img alt="Gobarber" src="https://ik.imagekit.io/hwyksvj4iv/gobarber_19xmN2BUU.svg" width="250px" />
</h1>

<h1 align="center">
  <p align="center">
    <img src='./images/web.gif'>
    <img src="./images/mobile.png" height="310">
  </p>
</h1>

# Summary
 - [About](#-fastfeet)
 - [Features](#-features)
 - [Techs](#-techs)
 - [Back end](#-instructions-backend)
 - [Front end](#-instructions-frontend)
 - [Mobile](#-instructions-mobile)

---
GoBarber is a service scheduling platform for barbershops or beauty salons.
In this application, the user has access to service providers through a mobile app,
in this app the user can choose a provider to book a appointment. The service provider through a web interface, can check the informations about your available and scheduled appointments. It is a complete application that allows you to gain agility and efficiency in serving each client.

Node.js: it is a REST API that does all the CRUD of the application, data persistence, exception handling and that serves data for both the front-end and the mobile.

ReactJS: is a web page on which the service provider has access to the entire schedule of appointments.

React Native: is an application in which the user has access to all service providers registered in the App, with this he can make an appointment that the provider of preference.

---

## ✨ Features

- CRUD Appointments
- CRUD Users
- CRUD Providers
 - Schedule Appointments
 - Upload and Delete of Avatar
 - Email Services

---

## ⚙ Techs

 - ReactJS
 - React Native
 - Node.js
 - Postgres
 - Redis
 - TypeORM
 - Styled-Components
 - Context API
 - Nodemailer
 - Multer

---

> To run the project, before everything you need to clone this repository
```bash
  git clone https://github.com/giangr21/gobarber
```

---

## 💻 Instructions Backend

You will need in your machine **Node.js**,  **Yarn** and **Docker**. 

 - Run `yarn` to download all the dependencies needed to execute the project;

 - Lets install two images of two databases: Postgres, to storage our tables and Redis, a extremely perfomatic database that will send our emails with queues .
    ```bash
      # do a container with postgres image
      docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres

      # do a container with redis image
      docker run --name redis -p 6379:6379 -d -t redis:alpine
    ```
 - Configure ormconfig.json

 - Run the `migrations` to create all the tables necessary for our application.
	  ```
   yarn typeorm migration:run
   ```

  - In the root of the project, create a `.env` file and fill the informations according with the example `.env.example`;

 - After that, run `yarn dev` to start the backend.

---

## 💻 Instructions frontend

 - Run `yarn` to download all the dependencies needed to execute the project.

 - After that, run `yarn start` to start the frontend.

---

## 📱 Instruções para o mobile

 - Run `yarn` to download all the dependencies needed to execute the project.

 - After that,  if it is your first execution run  `yarn android (if you are using android OR) cd ios | pod install | cd .. | yarn run ios`.  Or `yarn start` to start the app;

---
