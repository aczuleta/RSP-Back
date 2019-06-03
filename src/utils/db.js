'use strict';
const  knex  =  require('knex');
const Db = () => {
    let host, user, password, database, connection;

    function loadDb(){
        host = "techtestdb.ck546wcxien1.us-west-2.rds.amazonaws.com"; //process.env.DB_HOST;
        user = "root"; //process.env.DB_USER;
        password = "r00tPasswd!"; //process.env.DB_PASSWORD;
        database = "RPS"; //process.env.DB_DATABASE;
        connection = null;
    }

    function connect(table){
        /** 
        if(connection){
            throw Error("There is already an existing connection!");
        }*/

        loadDb();
        connection = knex({
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
        })(table);

        return connection;
    };

    return {
        connect: connect
    }

}

export {Db};
