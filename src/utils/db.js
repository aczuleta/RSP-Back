'use strict';
import  knex  from 'knex';
require('dotenv').config();

let connection;
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;

const Db = () => {
    function connect(table){ 
        connection = knex(config())(table);

        return connection;
    };

    function rawConnection(){
        return knex(config());
    }

    function config(){
        return {
            client: 'mysql',
            connection: {
                host: host,
                user: user,
                password: password,
                db: database,
                database: database,
                dateStrings: 'date',
                pool: { min: 0, max: 5 }
            }
        }
    }

    return {
        connect,
        rawConnection
    }

}

export {Db};
