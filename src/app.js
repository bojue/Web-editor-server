const Koa = require('koa');
const app = new Koa();

const HOST_NAME = 'localhost';
const POST = 3000;

app.use(async ctx => {
  ctx.body = JSON.stringify({key: 'value', hello: 'world'})
});

app.listen(POST, () => {
  console.log(`Server running at http://${HOST_NAME}:${POST}`)
});