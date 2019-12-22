-- 1.初始化数据库
create database temp_web_editor;  

-- 2.选择数据库
use tempo_web_editor;

-- 3.创建表格
-- 3.1 创建账户表
CREATE TABLE IF NOT EXISTS  `twe_account`(
	`id` INT(20),
    `name`  VARCHAR(100) NOT NULL,
    `username` VARCHAR(100) NOT NULL,
    `regist_time` DATE,
    `update_time` DATE,
    PRIMARY KEY ( `id` )
) 

-- 3.2 账号表插入数据
INSERT INTO twe_account (id, name, username,regist_time,update_time) 
VALUES 
(1, 'admin', 'admin', NOW(), NOW());
INSERT INTO twe_account (id, name, username,regist_time,update_time) 
VALUES 
(2, '测试账户', 'test', NOW(), NOW());

-- 3.3 查询
select * from twe_account;

-- 3.4 删除
-- DROP TABLE twe_account;
