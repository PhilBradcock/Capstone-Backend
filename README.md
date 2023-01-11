
# Capstone Project - Back-end

To create a back-end application that will handle all CRUD functionality and manage user permissions for a fakestore application.



## Installation

Install my-project with npm

```bash
  npm install

```
    
## Screenshots

![System Architecture Design](https://user-images.githubusercontent.com/115436217/211714815-1cbe3b83-a15d-438e-ad44-6e4bcf0a350e.png)


## API Reference

#### Get all data

```http
  GET /fakestore/all - http://localhost:8080/fakestore/all
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `all`      | `string` | Fetches all data |

#### Get item by id

```http
  GET /fakestore/item - http://localhost:8080/fakestore/item?id=3
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | Fetches item based on id|

#### Get item by category

```http
  GET /fakestore/categories - http://localhost:8080/fakestore/categories?category=men's clothing
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `category` | `string` | Fetches all specific data to a category|

#### PUT update item by id

```http
  PUT /fakestore/update - http://localhost:8080/fakestore/update/20
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | Updates entry based on id (JSON)|

#### DELETE item by id

```http
  DELETE /fakestore/update - http://localhost:8080/fakestore/delete/23
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | Deletes entry based on id (JSON)|

#### POST create new item

```http
  POST /fakestore/update - http://localhost:8080/fakestore/create
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `create` | `string` | Creates new entry and updates DB (JSON)|



## Packages / Dependencies


* npm i axios
* npm i cors
* npm i mysql
* npm i swagger-ui-express -S
* npm i bcrypt
* npm i fs
* npm i path

## Database Management System

* MySQL

## API

* https://fakestoreapi.com/products

## Features

- Back-end application to handle CRUD Functionality
- Database Table to manage Fakestore data
- Database Table to manage users


