# graphql

## Architecture of graphql 
1. This is a basic Architecture of graphql
![Contribution guidelines for this project](doc/images/1.png)
![Contribution guidelines for this project](doc/images/2.png)
![Contribution guidelines for this project](doc/images/3.png)
![Contribution guidelines for this project](doc/images/4.png)

2. If sceenshort are not clear thne you can go to this [url](https://app.eraser.io/workspace/g8qRKRVaoXoOxIYgnyk3?origin=share) 

## Package user
 1. express
 2. node js 
 3. graphql (apollo server)
 4. typescript 
 5. prisma
 6. mysql

## How to run
 1. npm i 
 2. npm run dev 
 3. [normal url](http://localhost:4000/) 
 4. [graphql url](http://localhost:4000/graphql) 

## steps to make table using prisma
   run this command to set a prisma 
   ```
   npx prisma init
   ```
   1. Go to .env file change the DATABASE_URL varible according to you type of database 
   2. Go to file schema.prisma file 
   3. change provider in DB according to database like i am using mysql so it make it 
   ```
   provider = "mysql"
   ```
   4. then create model its like a table schema for the database of your choice help form this url [Model Guide](https://www.prisma.io/docs/orm/prisma-schema/data-model/models)
   5. then run a command to check you have any error on the step or not 
   ```
   npx prisma generate
   ```
   6. then run a command to migrate a new table 
  ```
  npx prisma migrate dev --name create_you_table_name
  ```
  7. this will create table in your database 
  8. For details information follow [prisma doc](https://www.prisma.io/docs/orm/more)



