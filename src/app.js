const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser')
const Router = require("koa-router");
const loadsh = require('lodash')

const router = new Router();

const HOST_NAME = 'localhost';
const POST = 3000;
const projectService = require('./services/project_service');
const projectStatusService = require('./services/project_status_service');
const pageService = require('./services/page_service');
const dataSourceService = require('./services/data_source');

const getDataSourceByType = async(ctx) => {
  let params = ctx.request.body;
  const data = await dataSourceService.getDataSource();
  ctx.body = {
    msg:"success",
    data:data
  }
}

const getProjects = async(ctx) => {
  const data = await projectService.getList();
  ctx.body = {
    msg:'success',
    data:data
  }
}

const createProject = async(ctx, next) => {
  let params = ctx.request.body;
  const data = await projectService.create(params);
  ctx.body = {
    msg:"success",
    data:data
  }
}

const getProject = async (ctx) => {
  const id = ctx.params['id'];
  if(!id) {
    ctx.body = {
      mes:'error'
    }
  }else {
    const data = await projectService.getById(id);
    ctx.body = {
      msg:'scuess',
      data:data
    }
  }
}

const deleteProject = async(ctx, next) => {
  let params = ctx.params['projectId']
  const data = await projectService.delete(params);
  ctx.body = {
    msg:"success"
  };
}


const getPages = async(ctx) => {
  const projectId = ctx.params['projectId'] || 1;
  try {
    const data = await pageService.getList(projectId);
    ctx.body = {
      msg:'success',
      data:data
    }
  } catch (error) {
    ctx.throw(statusCode, message)
  }

}

const createPage = async(ctx, next) => {
  let params = ctx.request.body;
  const data = await pageService.create(params);
  ctx.body = {
    msg:"success",
    data:data
  }
}

const updatePage = async(ctx, next) => {
  let params = ctx.request.body;
  const data = await pageService.update(params);
  ctx.body = {
    msg:"success"
  };
}

const deletePage = async(ctx, next) => {
  let params = ctx.params['pageId']
  const data = await pageService.delete(params);
  ctx.body = {
    msg:"success"
  };
}

const getStates = async(ctx, next) => {
  try {
    const data = await projectStatusService.getStates();
    ctx.body = {
      msg:'success',
      data:data
    }
  } catch (error) {
    ctx.throw(statusCode, message)
  }
}

router
  .post('/project', createProject)
  .get('/projects', getProjects)
  .get('/project/:id', getProject)
  .delete('/project/:projectId',deleteProject)
  .get('/pages/:projectId', getPages)
  .post('/page', createPage)
  .put('/page', updatePage)
  .delete('/page/:pageId', deletePage)
  .get('/states', getStates)
  .get('/dataSource', getDataSourceByType)

app.on("error", (err, ctx) => {
  ctx.body ={
    msg:'error'
  }
});
app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(POST, () => {
    console.log(`Server running at http://${HOST_NAME}:${POST}`)
});