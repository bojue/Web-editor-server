var Koa = require('koa');
var app = new Koa();
var Router = require("koa-router");
var router = new Router();

var HOST_NAME = 'localhost';
var POST = 3000;
const project = require('./services/project')

router
  .get("/projects", async (ctx)=> {
    let data = await project.getList();
    ctx.body = {msg:'success',data:data}
  })

app
  .use(router.routes())
  .use(router.allowedMethods())

app.
  listen(POST, () => {
    console.log(`Server running at http://${HOST_NAME}:${POST}`)
});