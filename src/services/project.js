const mysql = require('./../db/mysql');

class Project {
    constructor() {

    }

    getList() {
        let data = mysql.query('select * from project');
        return data;
    }

    getById(id) {
        let data = mysql.query(`select * from project where id = ${id}`)
        return data;
    }
}

module.exports = new Project();