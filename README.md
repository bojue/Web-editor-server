## Web-editor-server-node

[Web-Editor](https://github.com/bojue/Web-Editor)服务端，基于Koa.js开发

### 1. 下载

```javascript
git clone https://github.com/bojue/Web-editor-server-node.git

cd Web-editor-server-node

npm install

```

### 2. 初始化数据库

创建数据库(Database): ` tempo `,并且将

` Web-editor-server-node/init_db_mysql/ `目录下面数据库表导入数据库 ` tempo `


### 3. 配置

- 服务器

默认服务器地址localhost:3000

通过项目` src/app.js `文件配置自己需要的服务器:

```javascript
const HOST_NAME = 'localhost';
const POST = 3000;
```

- 数据库

目录: ` src/configs/DB_mysql.js `配置服务器连接信息:

```javascript
const config = {
    host     : 'localhost',
    user     : 'root',
    password : "admin123",
    database : 'tempo'
}
```
### 4. Run server

```javascript
npm run start
```
