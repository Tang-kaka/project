<?php

	include("./header.php");
	include("./conndb.php");

	//2、数据保存在数据库中
	
	//3）、传输数据（过桥）
	$sqlstr = "select max(typeid) from goodsType";
	$result = mysqli_query($conn,$sqlstr);//执行查询的sql语句后，有返回值，返回的是查询结果
	if(!$result){
		die("获取数据失败".mysqli_error());
	}
	//查询行数
    $query_num =mysqli_num_rows($result);
    //echo "行数：".$query_num;
	
	
	$query_row = mysqli_fetch_array($result);//游标下移,拿出结果集中的某一行，返回值是拿到的行；
	$str="";
	if($query_row){
		$str = $query_row[0];
	}
	
	//4、关闭数据库
	mysqli_close($conn);
	
	//3、给客户端返回商品的json数组！
	echo $str;
?>
