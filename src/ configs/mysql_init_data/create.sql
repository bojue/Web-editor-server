CREATE database  tempo;

use tempo;

CREATE TABLE IF NOT EXISTS  project(
	`id` INT(20),
    `name`  VARCHAR(100) NOT NULL,
    `appendName` VARCHAR(100) NOT NULL,
    `description` VARCHAR(200) NOT NULL,
    `status` INT (10),
    `vip_staus` INT (10), 
    `creator_id` INT(100),
    `create_time` DATETIME,
    `update_time` DATETIME,
    `type` VARCHAR(50),
    PRIMARY KEY ( `id` )
) 

CREATE TABLE IF NOT EXISTS  page(
	`id` INT(20),
	`projectId` INT(20),
    `name`  VARCHAR(100) NOT NULL,
    `appendName` VARCHAR(100) NOT NULL,
    `description` VARCHAR(200) NOT NULL,
    `status` INT (10),
    `vip_staus` INT (10), 
    `creator_id` INT(100),
    `create_time` DATETIME,
    `update_time` DATETIME,
    `type` VARCHAR(50),
    PRIMARY KEY ( `id` )
) 
