<?php
	include("./header.php");
	include("./conndb.php");
	include("./tools.php");

	//1、接受客户端的数据（用户输入的数据）
	$goodsId   =  preDo($_REQUEST['goodsId']);
	$goodsName =  preDo($_REQUEST['goodsName']);
	$typeId =  preDo($_REQUEST['typeId']);
	$goodsPrice =  preDo($_REQUEST['goodsPrice']);
	$goodsCount =  preDo($_REQUEST['goodsCount']);
	$goodsDesc =  preDo($_REQUEST['goodsDesc']);
	$goodsImg  =  preDo($_REQUEST['goodsImg']);
	$beiyong1  =  preDo($_REQUEST['beiyong1']);
	$beiyong2  =  preDo($_REQUEST['beiyong2']);
	$beiyong3  =  preDo($_REQUEST['beiyong3']);
	$beiyong4  =  preDo($_REQUEST['beiyong4']);
	$beiyong5  =  preDo($_REQUEST['beiyong5']);
	$beiyong6  =  preDo($_REQUEST['beiyong6']);
	$beiyong7  =  preDo($_REQUEST['beiyong7']);
	$beiyong8  =  preDo($_REQUEST['beiyong8']);
	$beiyong9  =  preDo($_REQUEST['beiyong9']);
	$beiyong10 =  preDo($_REQUEST['beiyong10']);
	$beiyong11 =  preDo($_REQUEST['beiyong11']);
	$beiyong12 =  preDo($_REQUEST['beiyong12']);
	$beiyong13 =  preDo($_REQUEST['beiyong13']);
	
	//2、数据保存在数据库中
	
	//3）、传输数据（过桥）
	$sqlstr = "insert into goodsInfo(goodsId,goodsName,typeId,goodsPrice,goodsCount,goodsDesc,goodsImg ,beiyong1 ,beiyong2 ,beiyong3 ,beiyong4,beiyong5,beiyong6,beiyong7,beiyong8,beiyong9, beiyong10, beiyong11, beiyong12, beiyong13 ) values('$goodsId','$goodsName','$typeId'
	,'$goodsPrice','$goodsCount','$goodsDesc','$goodsImg'
	,'$beiyong1','$beiyong2','$beiyong3','$beiyong4'
	,'$beiyong5','$beiyong6','$beiyong7','$beiyong8'
	,'$beiyong9','$beiyong10','$beiyong11','$beiyong12','$beiyong13')";
	

	echo $sqlstr;

	$count = mysqli_query($conn,$sqlstr);
	if(!$count){
		die('插入失败！'.mysqli_error());
	}
	//4）、关闭连接（拆桥）
	mysqli_close($conn);
	
	//3、给客户端返回（响应）一个注册成功！
	if($count>0){
		 echo "保存成功,<a href='addGoods.html'>继续添加</a>";
	}
	
?>