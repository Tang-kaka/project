# Host: localhost:3308  (Version: 5.7.26)
# Date: 2021-10-11 18:12:54
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "comment_table"
#

DROP TABLE IF EXISTS `comment_table`;
CREATE TABLE `comment_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsId` varchar(10) NOT NULL,
  `vipName` varchar(10) NOT NULL,
  `commentTime` datetime NOT NULL,
  `content` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Structure for table "goodsinfo"
#

DROP TABLE IF EXISTS `goodsinfo`;
CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `typeId` char(3) NOT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  `goodsTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`goodsId`),
  KEY `typeId` (`typeId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Structure for table "goodstype"
#

DROP TABLE IF EXISTS `goodstype`;
CREATE TABLE `goodstype` (
  `typeid` char(3) NOT NULL,
  `goodstype` varchar(20) NOT NULL,
  PRIMARY KEY (`typeid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Structure for table "shoppingcart"
#

DROP TABLE IF EXISTS `shoppingcart`;
CREATE TABLE `shoppingcart` (
  `vipName` varchar(10) DEFAULT NULL,
  `goodsId` varchar(10) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Structure for table "vip"
#

DROP TABLE IF EXISTS `vip`;
CREATE TABLE `vip` (
  `username` varchar(20) NOT NULL,
  `userpass` varchar(16) NOT NULL,
  `sex` char(2) DEFAULT '女',
  `age` int(11) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
