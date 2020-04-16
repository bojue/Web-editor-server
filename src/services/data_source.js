const mysql = require('../db/mysql');

class DataSourceService {
    constructor() {

    }

    getDataSource() {
        let sql = `select * from data_source`;
        let data = mysql.query(sql);
        return data;
    }

    getDataSourceByType(dataType) {
        let sql = `select * from data_source where dataType = ${dataType}`;
        let data = mysql.query(sql);
        return data;
    }

}

module.exports = new DataSourceService();