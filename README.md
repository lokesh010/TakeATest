## This is a NODEJS,React and MYSQL

## Live

```
http://65.0.3.186:8080/

Student
    studentone@test.com
    123123

    studenttwo@test.com
    123123

Admin
    adminone@test.com
    123123

    admintwo@test.com
    123123
```

### How to setup this code

First of all

create database named `takeatest` and execute all commands from takeAtest.sql in home dir
Then

```
git clone https://github.com/lokesh010/TakeATest.git
```

then go inside folder and you can see `backend` folder and `frontend` folder

then inside backend folder copy `env.example` file to `.env` with your environment variables

now you need to install whole package,

`npm install`

then

`npm start` (I have installed nodemon)
`npm run dev` (to run react and nodemon concurrently, iif `npm i` has run inside frontend )
(react build file included in git)

That's it for backend

then go to the `frontend` folder

first you need to install whole package

`npm install`

then

`npm start`

Thats it

note: if you face any problem then please contact with me through phone or email.

## All scripts to make runnable

```
create database takeatest; (then execute takeAtest.sql)
`git clone https://github.com/lokesh010/TakeATest.git`
(copy .env.example to .env with environment vairables)
`cd frontend && npm i && cd ../backend && npm i`
`npm run dev`
```
