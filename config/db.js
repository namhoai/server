
/*
    create by NamVH;
*/

/*MySql connection*/
import connection from 'express-myconnection';
import mysql from 'mysql';

const db =  connection(mysql, {
    host: 'localhost',
    user: 'root',
    // password : '123456789',
    password: 'vuhoainam',
    database: 'database_server',
}, 'request')

export default db;
