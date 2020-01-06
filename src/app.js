const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser')
const Router = require("koa-router");
const router = new Router();
const HOST_NAME = 'localhost';
const POST = 3000;
const projectService = require('./services/projectService')
const pageService = require('./services/pageService')
const getProjects = async(ctx) => {
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
      msg :'error',
    }
  } else {
    const data = await pageService.getList(projectId);
    ctx.body = {
      msg:'success',
      data:data
    }
  }

}

const createPage = async(ctx, next) => {
  let params = ctx.request.body;
  const data = await pageService.create(params);
  ctx.body = {
    msg:"success"
  }
}

const updatePage = async(ctx, next) => {
  let params = ctx.request.body;
  const data = await pageService.update(params);
  ctx.body = {
    msg:"success"
  };
}

router
  .get('/projects', getProjects)
  .get('/project/:id', getProject)
  .get('/pages/:projectId', getPages)
  .post('/page', createPage)
  .put('/page', updatePage)

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(POST, () => {
    console.log(`Server running at http://${HOST_NAME}:${POST}`)
});