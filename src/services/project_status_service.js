const mysql = require('../db/mysql');

class ProejctStatusService {
    constructor() {

    }

    getStates() {
        let data = mysql.query(`select * from status order by id`);
        return data;
    }
}

module.exports = new ProejctStatusService();