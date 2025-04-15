var knex = require('knex')({
    client:'mysql2',
    connection:{
        host:'localhost',
        user:'root',
        password:"bia123",
        database:'letriz_bd'
    }
});

module.exports = knex