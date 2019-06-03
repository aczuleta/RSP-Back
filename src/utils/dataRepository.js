'use strict';
import {Db} from './db';
import {messages as GlobalMessages}  from './globalMessages';
import * as _  from 'lodash';

//Factory Function for a generic Data Repository
export const dataRepository = (table) => {
    
    const connection = Db().connect(table);

    function getConnection(){
        return connection;
    }

    //Generic create operation
    async function create(obj) {
        return new Promise((resolve, reject) => {
                connection.returning('id').insert(obj)
                .then((rows) => {
                    resolve(rows[0]);
                })
                .catch(function (error) {
                    console.log(error);
                    reject(GlobalMessages.db.dbError);
                });
        });
    };
    
    //Generic retrieve opration
    async function retrieve(where = {}, fields, page = 1, rowsPerPage = 0, orderBy = []) {
        return new Promise((resolve, reject) => {
            let whereOrder = {};
            let knex = connection;
            if (where !== {})
                applyWheres(knex, where);
            //pagination
            if (page >= 1 && rowsPerPage > 0) {
                knex.limit(rowsPerPage);
                knex.offset(rowsPerPage * (page - 1));
            }
            if (orderBy.length > 0) {
                for (let order of orderBy) {
                    if (order.includes(':')) {
                        knex.orderBy(order.split(':')[0], order.split(':')[1]);
                    }
                    else {
                        knex.orderBy(order, 'ASC');
                    }
                }
            }
            knex
                .then((rows) => {
                    resolve(rows);
                })
                .catch((error) => {
                    console.log(error);
                    reject(GlobalMessages.db.dbError);
                });
        });
    };

    function applyWheres(knex, where) {
        let specialWhere = {};
        let orWhere = {};
        for (let key in where) {
            if (key.includes(':') && !key.includes('or:')) {
                if (where[key] !== '' && where[key] !== undefined && where[key] !== null) {
                    specialWhere[key.split(':')[0]] = { value: where[key], operation: key.split(':')[1] }
                }
                delete where[key];
            }
            else if (key.includes('or:')) {
                if (where[key] !== '' && where[key] !== undefined && where[key] !== null) {
                    let _key = key.replace('or:', '');
                    orWhere[_key.split(':')[0]] = { value: where[key], operation: _key.split(':')[1] }
                }
                delete where[key];
            }
        }
        //usual where
        for (let key in where) {
            if (where[key] !== '' && where[key] !== undefined && where[key] !== null)
                knex.where(key, where[key]);
        }
        for (let key in specialWhere) {
            knex.where(key, specialWhere[key].operation, specialWhere[key].value)
        }
        for (let key in orWhere) {
            knex.orWhere(key, orWhere[key].operation, orWhere[key].value)
        }
    }

    /** 
     * 
     * //retrieve
    //update
    async function update(id, object) {
        var _this = this;
        return new Promise((resolve, reject) => {
            let where = {};
            let key = _this.key();
            where[key] = id;
            //actualizo la db
            _this.connection(_this.table)
                .where(where)
                .update(object)
                .then((rows) => {
                    resolve(rows);
                })
                .catch((error) => {
                    console.log(error);
                    reject(GlobalMessages.db.dbError);
                });
        });
    }
    //delete
    async function delete(id) {
        var _this = this;
        return new Promise((resolve, reject) => {
            let where = {};
            let key = _this.key();
            where[key] = id;
            //actualizo la db
            _this.connection(_this.table)
                .where(where)
                .del()
                .then((rows) => {
                    resolve(rows);
                })
                .catch((error) => {
                    console.log(error);
                    reject(GlobalMessages.db.dbError);
                });
        });
    }
    //otras funciones
    function key() {
        return _.findKey(this.schema.properties, (obj) => { return obj.primary === true; });
    }


    //hacer queries
    async function query(query, parameters) {
        var _this = this;
        return new Promise((resolve, reject) => {
            _this.connection.raw(query, parameters)
                .then((rows) => {
                    rows = rows.length > 0 ? rows[0] : [];
                    resolve(rows);
                })
                .catch((error) => {
                    console.log(error);
                    reject(GlobalMessages.db.dbError);
                });
        });
    }
     * 
    */

    return {
        create,
        getConnection,
        retrieve
    }
    

}
