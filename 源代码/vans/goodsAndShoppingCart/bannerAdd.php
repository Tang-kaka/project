<?php	
	include("./header.php");
	include("./conndb.php");
	include("./tools.php");
	
	//一、接收前端传来的数据
	$id = preDo($_POST["id"]);
	$img = preDo($_POST["img"]);
	$url = preDo($_POST["url"]);
	
	//二、保存数据
	
	//2、执行SQL语句
	$sqlStr = "insert into banner(id,img,url)
              values('$id','$img','$url')";

	// echo $sqlStr;
	
	$result = mysqli_query($conn,$sqlStr);
	
	//3、关闭数据库
	mysqli_close($conn);
	
	//三、给前端响应
    if($result==1){
		echo "1";
	}else{
		echo "0";//表示注册失败
	}
?>