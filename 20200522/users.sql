/*
Navicat MySQL Data Transfer

Source Server         : MyDatabase
Source Server Version : 50730
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50730
File Encoding         : 65001

Date: 2020-05-31 10:15:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `password` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'xiao', '19', null);
INSERT INTO `users` VALUES ('2', 'xiaoming', '19', null);
INSERT INTO `users` VALUES ('3', 'xiaoming', '19', null);
INSERT INTO `users` VALUES ('4', 'xiaoming', null, '19');
INSERT INTO `users` VALUES ('5', 'xiaoming', null, '123');
