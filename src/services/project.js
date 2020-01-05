const mysql = require('./../db/mysql');

class Project {
    constructor() {

    }

    getList() {
        let data = mysql.query('select * from project');
        return data;
    }

    get(id) {
        let data = mysql.query('select * from project')
    }
}

module.exports = new Project();