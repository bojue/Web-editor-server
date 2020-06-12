-- MySQL dump 10.13  Distrib 8.0.12, for macos10.13 (x86_64)
--
-- Host: localhost    Database: tempo
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `page`
--

DROP TABLE IF EXISTS `page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8 ;
CREATE TABLE `page` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `projectId` int(20) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `appendName` varchar(100) NOT NULL,
  `description` varchar(200) NOT NULL,
  `status` int(10) DEFAULT NULL,
  `creator_id` int(100) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `creator` int(20) DEFAULT NULL,
  `style` varchar(500) DEFAULT NULL,
  `componentList` varchar(5000) DEFAULT NULL,
  `vip_status` int(20) DEFAULT NULL,
  `width` int(225) DEFAULT '1200',
  `height` int(225) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `page`
--

LOCK TABLES `page` WRITE;
/*!40000 ALTER TABLE `page` DISABLE KEYS */;
INSERT INTO `page` VALUES (1,1,'列表','列表','无',0,NULL,'2020-01-05 14:38:23','2020-01-09 15:27:56',NULL,1,'{\'width\':\'1000\',\'height\':\'800\',\'background\':\'#fff\'}','[{\"compIndex\":2,\"name\":\"图片\",\"type\":\"img\",\"data\":{\"img_url\":\"assets/imgs/es.jpeg\"},\"style\":{\"position\":\"absolute\",\"top\":68,\"left\":75,\"height\":80,\"width\":120,\"borderColor\":\"#FF0000\",\"borderWidth\":1,\"borderStyle\":\"solid\",\"paddingTopBottom\":0,\"paddingLeftRight\":0,\"fontSize\":14,\"textAlign\":\"center\"},\"contentPageSize\":{\"top\":66,\"left\":227,\"rigth\":0,\"bottom\":0}},{\"compIndex\":2,\"name\":\"输入框\",\"type\":\"input\",\"data\":{\"input_val\":\"\",\"placeholder\":\"输入\"},\"style\":{\"position\":\"absolute\",\"top\":246,\"left\":68,\"height\":30,\"width\":220,\"borderColor\":\"#FF0000\",\"borderWidth\":1,\"borderStyle\":\"solid\",\"paddingTopBottom\":0,\"paddingLeftRight\":0,\"fontSize\":14,\"textAlign\":\"center\"},\"contentPageSize\":{\"top\":66,\"left\":227,\"rigth\":0,\"bottom\":0}},{\"compIndex\":2,\"name\":\"图片\",\"type\":\"img\",\"data\":{\"img_url\":\"assets/imgs/es.jpeg\"},\"style\":{\"position\":\"absolute\",\"top\":223,\"left\":243,\"height\":80,\"width\":120,\"borderColor\":\"#FF0000\",\"borderWidth\":1,\"borderStyle\":\"solid\",\"paddingTopBottom\":0,\"paddingLeftRight\":0,\"fontSize\":14,\"textAlign\":\"center\"},\"contentPageSize\":{\"top\":66,\"left\":227,\"rigth\":0,\"bottom\":0}},{\"compIndex\":2,\"name\":\"输入框\",\"type\":\"input\",\"data\":{\"input_val\":\"\",\"placeholder\":\"输入\"},\"style\":{\"position\":\"absolute\",\"top\":50,\"left\":254,\"height\":30,\"width\":220,\"borderColor\":\"#FF0000\",\"borderWidth\":1,\"borderStyle\":\"solid\",\"paddingTopBottom\":0,\"paddingLeftRight\":0,\"fontSize\":14,\"textAlign\":\"center\"},\"contentPageSize\":{\"top\":66,\"left\":227,\"rigth\":0,\"bottom\":0}},{\"compIndex\":2,\"name\":\"图片\",\"type\":\"img\",\"data\":{\"img_url\":\"assets/imgs/es.jpeg\"},\"style\":{\"position\":\"absolute\",\"top\":120,\"left\":265,\"height\":80,\"width\":120,\"borderColor\":\"#FF0000\",\"borderWidth\":1,\"borderStyle\":\"solid\",\"paddingTopBottom\":0,\"paddingLeftRight\":0,\"fontSize\":14,\"textAlign\":\"center\"},\"contentPageSize\":{\"top\":66,\"left\":227,\"rigth\":0,\"bottom\":0}},{\"compIndex\":3,\"name\":\"饼图\",\"type\":\"chart_pie\",\"data\":{},\"style\":{\"position\":\"absolute\",\"top\":293,\"left\":66,\"height\":300,\"width\":300,\"borderColor\":\"#FF0000\",\"borderWidth\":1,\"borderStyle\":\"solid\",\"paddingTopBottom\":0,\"paddingLeftRight\":0,\"fontSize\":14,\"textAlign\":\"center\"},\"event\":{},\"contentPageSize\":{\"top\":66,\"left\":227,\"rigth\":0,\"bottom\":0}}]',NULL,1200,700),(21,1,'详情','0','0',NULL,NULL,'2020-03-27 00:38:44','2020-03-27 00:38:44','default',1,'0','[]',1,1200,700),(25,5,'页面','0','0',NULL,NULL,'2020-03-27 10:31:04','2020-03-27 10:35:06',NULL,1,'0','[{\"compIndex\":3,\"name\":\"按钮\",\"type\":\"button\",\"data\":{\"button_val\":\"确认\"},\"style\":{\"position\":\"absolute\",\"top\":102,\"left\":200,\"height\":30,\"width\":80,\"borderColor\":\"rgba(255,0,0,0.6)\",\"borderWidth\":1,\"borderStyle\":\"solid\",\"paddingTopBottom\":0,\"paddingLeftRight\":0,\"fontSize\":14,\"textAlign\":\"center\",\"userDrag\":\"element\"},\"event\":{\"clickBool\":false,\"click\":{\"data\":null},\"routeBool\":true,\"route\":{\"route_link\":\"home\",\"data\":null}},\"contentPageSize\":{\"top\":65,\"left\":227,\"rigth\":0,\"bottom\":0}}]',1,1200,700),(26,9,'test','0','0',NULL,NULL,'2020-03-27 13:32:54','2020-03-27 16:01:59',NULL,1,'0','[]',1,1200,700),(46,6,'测试','0','0',NULL,NULL,'2020-04-04 21:56:15','2020-04-07 14:33:46',NULL,1,'0','[{\"compIndex\":3,\"name\":\"按钮\",\"type\":\"button\",\"data\":{\"button_val\":\"确认\"},\"style\":{\"position\":\"absolute\",\"top\":41,\"left\":234,\"height\":30,\"width\":80,\"borderColor\":\"rgba(255,0,0,0.6)\",\"borderWidth\":1,\"borderStyle\":\"solid\",\"paddingTopBottom\":0,\"paddingLeftRight\":0,\"fontSize\":14,\"textAlign\":\"center\",\"userDrag\":\"element\"},\"event\":{\"routeBool\":false,\"route\":{\"route_url\":\"home\",\"data\":{\"param\":\"23\",\"pageId\":\"7\",\"projectId\":\"6\"}}},\"contentPageSize\":{\"top\":65,\"left\":227,\"rigth\":0,\"bottom\":0}}]',1,1200,700),(47,2,'3232','3232','0',NULL,NULL,'2020-04-04 22:47:27','2020-04-04 23:00:59',NULL,1,'null','[{\"compIndex\":3,\"name\":\"按钮\",\"type\":\"button\",\"data\":{\"button_val\":\"确认\"},\"style\":{\"position\":\"absolute\",\"top\":75,\"left\":317,\"height\":30,\"width\":80,\"borderColor\":\"rgba(255,0,0,0.6)\",\"borderWidth\":1,\"borderStyle\":\"solid\",\"paddingTopBottom\":0,\"paddingLeftRight\":0,\"fontSize\":14,\"textAlign\":\"center\",\"userDrag\":\"element\"},\"event\":{\"clickBool\":false,\"click\":{\"data\":null},\"routeBool\":true,\"route\":{\"route_link\":\"home\",\"data\":null}},\"contentPageSize\":{\"top\":65,\"left\":227,\"rigth\":0,\"bottom\":0}},{\"compIndex\":2,\"name\":\"图片\",\"type\":\"img\",\"data\":{\"img_url\":\"assets/imgs/you.jpg\"},\"style\":{\"position\":\"absolute\",\"top\":0,\"left\":0,\"height\":225,\"width\":258,\"borderColor\":\"rgba(255,0,0,0.6)\",\"borderWidth\":1,\"borderStyle\":\"solid\",\"paddingTopBottom\":0,\"paddingLeftRight\":0,\"fontSize\":14,\"textAlign\":\"center\",\"userDrag\":\"element\"},\"contentPageSize\":{\"top\":65,\"left\":227,\"rigth\":0,\"bottom\":0}}]',1,1200,700);
/*!40000 ALTER TABLE `page` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-16 23:07:56
