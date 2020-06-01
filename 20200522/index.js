const Koa = require('koa');

const Router = require('koa-router')
const mysql = require('mysql2/promise');
const app = new Koa();

const router = new Router();

(async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'test'
    });

    router.get('/addUser',async(ctx)=>{
        // 添加数据到 db
        if(ctx.query.age){
            const {username,age} = ctx.query
            const sql = `INSERT INTO users (id,username,age) VALUES (0,?,?)`
            const [rows] = await connection.execute(sql,[username,age]);
            // ctx.body = rows;
            if(rows.affectedRows === 1){
                ctx.body = "add user success";
            } else {
                ctx.body = "add user fail";
            }
        } else{
            const {username,password} = ctx.query
            const sql = `INSERT INTO users (id,username,password) VALUES (0,?,?)`
            const [rows] = await connection.execute(sql,[username,password]);
            // ctx.body = rows;
            if(rows.affectedRows === 1){
                ctx.body = "add user success";
            } else {
                ctx.body = "add user fail";
            }
        }
        
    })
})();
app.use(router.routes());

app.listen(8080,()=>{
    console.log("open server localhost:8080");
})