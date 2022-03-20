<?php
	//处理前端传来的特殊字符： 单引号，双引号，逗号，圆括号 
	function preDo($str){

		$str = str_replace("'","‘",$str);
		$str = str_replace("\"","”",$str);
		$str = str_replace("(","（",$str);
		$str = str_replace(")'","）",$str);
		$str = str_replace(",'","，",$str);

		return $str;
	}
?>