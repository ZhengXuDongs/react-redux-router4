const Koa = require('koa');
const apps = new Koa();
const bodyParser = require('koa-bodyparser');
const log4js = require('log4js');
let cfg = require('../config/app');//引用相关参数
let fs = require('fs');
let app = require('./app.js');//跳转到app.js

/*
 * 创建日志目录
 */

/*try {
    if (!fs.existsSync('./log'))
        fs.mkdirSync('./log');

    if (!fs.existsSync('./log/err'))
        fs.mkdirSync('./log/err');

    if (!fs.existsSync('./log/hour'))
        fs.mkdirSync('./log/hour');

    if (!fs.existsSync('./log/http'))
        fs.mkdirSync('./log/http');
} catch (e) {
    console.error('Create log directory exp: %s', e.message);
}*/

const log = log4js.getLogger('index');
log4js.configure('config/log4js.json',	{ reloadSecs: 300 });

async function main() {
    const port = process.env.PORT || cfg.app.port;
    const host = process.env.HOST || '';
    await new Promise((res,rej) =>{
        const server = app.listen(port, host, res);
        server.on('error', rej);
    });
    log.info('koa start on port: %s',port);
}

main().catch(err => setImmediate( ()=>{throw err} ));