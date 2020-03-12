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

    create(page) {
        console.log(page)
        page['creator'] |= 1;
        page['style'] |= '{"width":1000, "height":1000,"backgrund":"#fff}';
        page['description'] |= "";
        page['appendName'] |= page['name'] || '';
        page['vip_status'] |=  0;
        page['componentList'] = "[]";
        page['create_time'] = this.momentDate(page['create_time']);
        page['update_time'] = this.momentDate(page['update_time']);

        let sql = `
            INSERT INTO page 
                (projectId,name,appendName,description,creator,style,vip_status,type,componentList,create_time ,update_time)
            VALUES (
                ${page['projectId']}, 
                "${page['name']}",
                "${page['appendName']}", 
                "${page['description']}",
                ${page['creator']},
                ${page['style']},
                ${page['vip_status']},
                "${page['type']}",
                "${page['componentList']}",
                "${page['create_time']}","${page['update_time']}")`;
            console.log(sql);
        let data = mysql.query(sql);
        return data;
    }

    momentDate(time) {
        let _time = time || new Date();
        return moment(_time).format('YYYY-MM-DD HH:mm:ss');
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

    delete(pageId) {
        let sql = `
            DELETE FROM page WHERE id=${pageId}`
        let data = mysql.query(sql);
        return data;
    }
}

module.exports = new PageService();