<?php	
	include("./header.php");
	include("./conndb.php");
	include("./tools.php");
	
	//一、接收前端传来的数据
	$id = $_GET["id"];
	
	//二、保存数据
	
	//2、执行SQL语句
	$sqlStr = "delete from banner where id='$id'";
	$result = mysqli_query($conn,$sqlStr);
	
	//3、关闭数据库
	mysqli_close($conn);
	
	//三、给前端响应
    if($result==1){
		echo "success";
	}else{
		echo "fail";
	}
?>