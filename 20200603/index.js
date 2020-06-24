const Koa = require('koa');

const Router = require('koa-router');

const serve = require('koa-static');

const koaBody = require('koa-body');

const axios = require('axios');

const app = new Koa();

app.use(serve(__dirname + "/static"));

app.use(
    koaBody({
      multipart: true,
    })
  );

const router = new Router();

router.get("/getData", (ctx) => {
    ctx.body = 'get'
})

router.post("postData", (ctx) => {
    ctx.body = 'post'
})

app.listen(8080, () => {
    console.log("open server localhost:8080");
  });