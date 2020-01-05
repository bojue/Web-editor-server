const mysql = require('./../db/mysql');

class Project {
    constructor() {

    }

    getList() {
        let data = mysql.query('select * from project');
        return data;
    }
}

module.exports = new Project();