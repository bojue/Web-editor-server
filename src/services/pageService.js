const mysql = require('../db/mysql');

class PageService {
    constructor() {

    }

    getList(projectId) {
        let data = mysql.query(`select * from page where projectId = ${projectId}`);
        return data;
    }

    getById(id) {
        let data = mysql.query(`select * from page where id = ${id}`)
        return data;
    }
}

module.exports = new PageService();