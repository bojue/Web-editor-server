const moment = require('moment');
const mysql = require('../db/mysql');

class ProjectService {
    constructor() {

    }

    getList() {
        let data = mysql.query('select * from project');
        return data;
    }

    create(project) {
        project['status'] |= 0;
        project['vip_staus'] |= 0; 
        project['type'] |= 'cutome';
        project['create_time'] = this.momentDate(project['create_time']);
        project['update_time'] = this.momentDate(project['update_time']);
        let sql = `
            INSERT INTO project 
                (name,appendName,description,creator,vip_staus,type,create_time ,update_time)
            VALUES (
                "${project['name']}",
                "${project['appendName']}", 
                "${project['description']}",
                ${project['creator']},
                ${project['vip_staus']},
                "${project['type']}",
                "${project['create_time']}",
                "${project['update_time']}")`;
        let data = mysql.query(sql);
        return data;
    }

    momentDate(time) {
        let _time = time || new Date();
        return moment(_time).format('YYYY-MM-DD HH:mm:ss');
    }

    getById(id) {
        let data = mysql.query(`select * from project where id = ${id}`);
        return data;
    }
}

module.exports = new ProjectService();