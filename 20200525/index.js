const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const koaBody = require('koa-body');
const serve = require('koa-static');
const fs = require('fs');
const path = require('path');
// router.post('/users', koaBody(),
//   (ctx) => {
//     console.log(ctx.request.body);
//     // => POST body
//     ctx.body = JSON.stringify(ctx.request.body);
//   }
// );
// console.log(__dirname);
// console.log(path.resolve(__dirname, './static','upload'));

router.post('/users1', koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200 * 1024 * 1024,	// 设置上传文件大小最大限制，默认2M
    uploadDir: path.resolve(__dirname, './static', 'upload')
  }
}), async (ctx) => {
  ctx.body = '上传成功 直接使用koabody';
});


// postData with koabody
router.post('/users', koaBody({
  multipart:true,
  formidable:{
    maxFieldsSize:10*1024*1024,
    multipart:true}
  }), async (ctx) => {
  const file = ctx.request.files.file;	// 获取上传文件
  // console.log(ctx.request.body)
  // console.log(file);
	const reader = fs.createReadStream(file.path);	// 创建可读流
	const ext = file.name.split('.').pop();		// 获取上传文件扩展名
	const upStream = fs.createWriteStream(`static/upload/${Math.random().toString()}.${ext}`);		// 创建可写流
	reader.pipe(upStream);	// 可读流通过管道写入可写流
	return ctx.body = '上传成功，直接使用koabody';
})


// postData without koabody
router.post('/users0', async (ctx) => {
  console.log(ctx.request.body);
  // 解析上下文里node原生请求的POST参数
  let parsedData = await new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.addListener('data', (data) => {
        postdata += data
      })
      ctx.req.addListener("end", function () {
        // // console.log(parseData);
        resolve(postdata);
      })
    } catch (err) {
      reject(err)
    }
  })
  // => POST body
  // here we got the content of the file
  ctx.body = parsedData;  

  // so what we need to is saving the content to local file
  // const reader = fs.createReadStream(parsedData);	// 创建可读流
  // const ext = 'txt';		// 获取上传文件扩展名
  // const upStream = fs.createWriteStream(`./static/upload/${Math.random().toString()}.${ext}`);		// 创建可写流
  // reader.pipe(upStream);	// 可读流通过管道写入可写流

  let result = await new Promise ((resolve, reject) => {
    fs.writeFile(`./static/upload/${Math.random().toString()}.ann`, parsedData, 
    function(err){
      if(err) {
        reject(err)
      } else {
        resolve('写文件操作成功');
      } 
    })
  })
  ctx.body = result;  
 
});

// router.get('/users', (ctx) => {
//     console.log("user get");
//     // => POST body
//     ctx.body = "上传成功";
//   }
// );
// app.use(require('koa-static')(static,opts));
app.use(serve( __dirname,  './static'));
app.use(router.routes());
 
app.listen(3000);