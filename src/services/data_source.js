const mysql = require('../db/mysql');

class DataSourceService {
    constructor() {

    }

    getDataSource(params) {
       
        // let sql = `select * from data_source`;
        let sql = `select idustry,idustry_name from data_source group by idustry,idustry_name `;
    
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