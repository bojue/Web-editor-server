var Koa = require('koa');
var app = new Koa();
var Router = require("koa-router");
var router = new Router();

var HOST_NAME = 'localhost';
var POST = 3000;
const projectService = require('./services/projectService')
const pageService = require('./services/pageService')

const getProjects = async(ctx) => {''
  const data = await projectService.getList();
  ctx.body = {
    msg:'success',
    data:data
  }
}

const getProject = async (ctx) => {
  const id = ctx.params['id'];
  const data = await projectService.getById(id);
  ctx.body = {
    msg:'scuess',
    data:data
  }
}

const getPages = async(ctx) => {
  const projectId = ctx.params['projectId'];
  if(projectId === undefined || projectId === null) {
    ctx.body = {
      msg = 'error',
    }
  } else {
    const data = await pageService.getList(projectId);
    ctx.body = {
      msg:'success',
      data:data
    }
  }

}

const updatePage = (ctx) => {
  console.log(ctx)
}

router
  .get('/projects', getProjects)
  .get('/project/:id', getProject)
  .get('/pages/:projectId', getPages)
  .post('page/:projectId/:pageId', updatePage)

app
  .use(router.routes())
  .use(router.allowedMethods())

app.
  listen(POST, () => {
    console.log(`Server running at http://${HOST_NAME}:${POST}`)
});