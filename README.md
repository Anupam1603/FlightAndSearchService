# Welcome to Flights Service

## project Setup
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