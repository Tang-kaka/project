<?php
	include("./header.php");
	include("./conndb.php");
	include("./tools.php");

// 添加评论
	
	// header("content-type","text/html;charset=utf-8");
	date_default_timezone_set("Asia/Shanghai");
	
	//一、接收前端传来的数据
	$goodsId = preDo($_POST["goodsId"]);
	$vipName = preDo($_POST["vipName"]);
	$content = preDo($_POST["content"]);
	$commentTime = date('Y-m-d H:i:s', time());
	
	//二、保存数据
	
	//2、执行SQL语句
	$sqlStr = "insert into comment_table(goodsId,vipName,content,commentTime)
              values('$goodsId','$vipName','$content','$commentTime')";
		
	$result = mysqli_query($conn,$sqlStr);
	
	//3、关闭数据库
	mysqli_close($conn);
	
	//三、给前端响应
    if($result==1){
		echo "success";//表示注册成功
	}else{
		echo "fail";//表示注册失败
	}

?>