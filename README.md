# Students - Dockerizerd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Getting Started

In order to be able to run this, you will need to have docker installed locally on your machine

Once installed, run:
```bash
docker-compose up --build
```

This will build the project and then the STUDENTS-API will be available on `http://localhost:3001/` & the STUDENTS-APP will be available on `http://localhost:4200/`


## About the project

This is a dockerized application that contains both the API and the APP in the same directory

The <strong>API files</strong> are:
    - routes/
    - data/
    - server.js

This application reads in a a list of users from the API and displays them for the user. The user can then select on `View Student Details` to see additional information of the student.

Search functionality is available. However, this is an open bug on this (which if you delete from the search, the data does not re-populate and instead stays the same)

All of the data and manipulation of the data is done in the store, via selectors.

For Further information, please reach out to Oscar @ oflores2313@gmail.com
