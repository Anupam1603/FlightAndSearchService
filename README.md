# Welcome to Flights Service

## Project Setup
- clone the project
- Execute `npm install` on the same path as of your root directory the downloaded project.
- Create a `.env` file in the root directory  and add the following environment variable
    - `PORT = 3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": "<Your Username>",
    "password": "<Your Password>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you've added your db  config as listed above, go to the src folder from your terminal and execute  `npx sequelize db:create`
  and then execute
  `npx sequelize db:migrate`
```
 ## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City 

  - A flight belongs to an airplane  but one airplane  can be used  in multiple flights .
  - A city has  many airports  but one airport  belongs to  a city .
  - One airport can habe many flights , but a flight belongs  to one airport



 ## Flights Table
 - id -unique id to identify the flights  
 -
