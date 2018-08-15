module.exports = {
    app: {
        host: 'paiapp.com', // 域名 或 ip地址，登记时需要返回给登记者
        port: 3031, // 4502-4534  silverlight
        debug: true    // 调试环境还是生产环境
    },
    theme: {
        name: 'default'
    },
    session: {
        secret: '546gsfqwerqe4tgfghfghdfujtrt',
        expires: 1200, // 服务端session有效期，单位秒，空闲超时强制清除，客户端最好5分钟一次登记！超时20分钟不活动，判断为离线，个人聊天时无需精确状态消息，在close中不广播离线状态，在这里广播 离线状态？
        checktime: 60  // 多长时间 检查一次，单位秒
    },
    // mongodb 数据库
    db: {
        conn: 'mongodb://localhost/oa',
        poolSize: 5
    },
    // 缓存服务器
    redis: {
        host: 'localhost',
        port: 6379, // 6379在是手机按键上MERZ对应的号码，而MERZ取自意大利歌女Alessia Merz的名字
        password: ''
    },
    log: {
        level: 12
    },
    mysql:{
        //connectionLimit:10,
        //connectTimeout:10000,
        host:'localhost',
        user:'root',
        password:'zxd123456',
        database:'zxddb',
        port:3306
    }

};