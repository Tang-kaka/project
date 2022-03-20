<?php
// 添加评论
	include("./header.php");
	include("./conndb.php");

	date_default_timezone_set("Asia/Shanghai");
	
	//一、接收前端传来的数据
	$goodsId = $_GET["goodsId"];
	$pagecount = $_GET["pageCount"]; //每页的条数
	$pageIndex = $_GET["pageIndex"]; //页码
	
	//二、
	// 1、获取总条数
	$sqlStr = "select count(*) from  comment_table where  goodsId = '$goodsId'";
	$result = mysqli_query($conn,$sqlStr);
	$query_row = mysqli_fetch_array($result);
	$count = $query_row[0];


	// 2、获取当前页面的数据

	$firstIndex = ($pageIndex-1)*$pagecount;
	//2、执行SQL语句
	$sqlStr = "select * from  comment_table where goodsId = '$goodsId' order by commentTime desc limit $firstIndex,$pagecount ";
	
	$result = mysqli_query($conn,$sqlStr);

	//3、关闭数据库
	mysqli_close($conn);
	
	//查询列数
	$query_cols = mysqli_num_fields($result);
	
    //查询行数
    $query_num =mysqli_num_rows($result);
   
    $str="[";
   
   $query_row = mysqli_fetch_array($result);//游标下移,拿出结果集中的某一行，返回值是拿到的行；
   while($query_row){
	   $str = $str.'{ "id":"'.$query_row[0].'","goodsId":"'.$query_row[1].'"
	   ,"vipName":"'.$query_row[2].'","commentTime":"'.$query_row[3].'"
	   ,"content":"'.$query_row[4].'"}';
	   
	   $query_row = mysqli_fetch_array($result);
	   if($query_row){
		   $str = $str.",";
	   }
   }
   $str = $str."]";

   $arr = array("status"=>"success","count"=>$count,"data"=>$str);
	
   echo json_encode($arr);	

?>