const Koa = require("koa");

const Router = require("koa-router");

const serve = require("koa-static");

const koaBody = require("koa-body");

const app = new Koa();

const path = require('path');

app.use(serve(__dirname + "/static"));

const router = new Router();
router.post('/upload', koaBody({
    multipart: true,
    formidable: {
      maxFileSize: 2000 * 1024 * 1024,	// 设置上传文件大小最大限制，20M
      uploadDir: path.resolve(__dirname, './static', 'upload')
    }
  }), async (ctx) => {
    ctx.body = '上传成功 使用koabody';
  });

app.use(router.routes());

app.listen(8080, () => {
  console.log("open server localhost:8080");
});
