import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa-cors';
import staticFile from 'koa-static';
import fs from 'fs';
const views = require('koa-views');
const path = require('path');
const convert = require('koa-convert');
//var Router = require('koa-router');
//const route = new Router();
const log = require('log4js').getLogger('app');

log.info(6554654)
console.log(5454)
const app = new Koa();
//export default app;//src/index.js 要用import app from './app';引入进来
module.exports = app; //src/index.js 要用var app = require('./app.js');引入进来

app.use(staticFile('./public'));
app.use(staticFile(path.join(process.cwd(), './dist')));
console.log(path.join(process.cwd(), './dist'))
app.use(views(path.join(process.cwd(), './dist'), {
    /*extension: 'ejs',*/
    map: {
        html: 'html'
    }
}))

app.use(bodyParser());
app.use(cors());

// 加载路由中间件,处理路由匹配,无法匹配的,回到静态文件处理,静态文件找不到的,返回不存在错误!
/*app.use(router.routes());*/
log.info('process.cwd()',process.cwd())
console.log('dsdsds:',path.resolve(process.cwd(), 'dist', 'index.html'))
// 在你应用 JavaScript 文件中包含了一个 script 标签
// 的 index.html 中处理任何一个 route
app.use(async ctx=>{
    ctx.type = 'html';
    ctx.body = fs.createReadStream('./dist/index.html');
})

/*
app.use(async ctx => {
    let title = "Koa2";
    console.log(121);
    log.info(556555454)
    // 渲染模板及返回参数
    await ctx.render("index", {
        title
    });
});*/
