var Koa = require('koa');
var app = new Koa();
var Router = require("koa-router");
var router = new Router();

var HOST_NAME = 'localhost';
var POST = 3000;
const project = require('./services/project')

const getProjects = async(ctx) => {
  const data = await project.getList();
  ctx.body = {msg:'success',data:data}
}
const getProject = async (ctx) => {
  const id = ctx.params['id'];
  const data = await project.getById(id);
  ctx.body = {
    msg:'scuess',
    data:data
  }
}

router
  .get('/projects', getProjects)
  .get('/project/:id', getProject)


app
  .use(router.routes())
  .use(router.allowedMethods())

app.
  listen(POST, () => {
    console.log(`Server running at http://${HOST_NAME}:${POST}`)
});