// get the client
import mysql from 'mysql2/promise';

// create the connection to database
//dùng như bình thườnd
/* const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'traveltour'
}); */

//dùng promise wrapper
/* const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'traveltour'}); */

//dùng connection pools : giúp giảm thời gian kết nối đến db bằng cách sử dụng lại kết nối, giảm thời gian chờ các câu truy vấn
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'traveltour',
});

// simple query

export default pool;
