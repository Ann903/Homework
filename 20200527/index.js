const Koa = require("koa");
const serve = require("koa-static");
const Router = require("koa-router");
// var timestamp = require('timestamp')

const app = new Koa();

app.use(serve(__dirname + "/static"));

const router = new Router();

router.get("/getData", (ctx) => {
//   ctx.set('Access-Control-Allow-Origin','*')
  var timestamp = Date.parse(new Date());
  ctx.body = timestamp; 
});

app.use(router.routes());

app.listen(8080, () => {
  console.log("open server localhost:8080");
});
