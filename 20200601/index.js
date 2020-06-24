const Koa = require('koa');

const serve = require('koa-static');

const Router = require("koa-router");

const koaBody = require('koa-body')

const app1 = new Koa();
const app2 = new Koa();


app1.use(serve(__dirname + "/static"));
app2.use(serve(__dirname + "/static"));

app1.use(
    koaBody({ 
        multipart: true
    })
);
app2.use(
    koaBody({
      multipart: true,
    })
  );

const router1 = new Router();
const router2 = new Router();

router1.get("/getData",(ctx)=>{
    ctx.body='123'
})
app1.use(router1.routes());

router2.get("/getData", (ctx) => {
    ctx.set("Access-Control-Allow-Origin", "http://localhost:8080");
    // 允许带 cookie
    ctx.set("Access-Control-Allow-Credentials", true);
    // Content-Language
    ctx.set("Content-Language", "ch");
    ctx.set("Access-Control-Export-Headers", "Content-Language");
    ctx.body = "8081";
  });
  app2.use(router2.routes());
  
  app2.listen(8081, () => {
    console.log("open server localhost:8081");
  });

app1.listen(8080, () => {
    console.log("open server localhost:8080");
  });

