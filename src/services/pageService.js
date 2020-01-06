const moment = require('moment');
const mysql = require('../db/mysql');

class PageService {
    constructor() {

    }

    getList(projectId) {
        let sql = `select * from page where projectId = ${projectId}`;
        let data = mysql.query(sql);
        return data;
    }

    getById(id) {
        let sql = `select * from page where id = ${id}`;
        let data = mysql.query(sql)
        return data;
    }

    update(page) {
        const update_time = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        let sql = `
            UPDATE page 
            SET 
                name = '${page['name']}',
                appendName = '${page['appendName']}',
                description = '${page['description']}', 
                update_time ="${update_time}", 
                status = ${page['status']},
                type = ${page['type']},
                creator = ${page['creator']},
                style = "${page['style']}",
                vip_status = ${page['vip_status']}, 
                componentList = '${page['componentList']}' 
            WHERE   
                id = ${page['id']} && 
                projectId = ${page['projectId']}`
        let data = mysql.query(sql);
        return data;
    }
}

module.exports = new PageService();