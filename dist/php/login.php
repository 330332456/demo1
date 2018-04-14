<?php
	header('content-type:text/html;charset="utf-8"');

	$username = $_POST["username"];
	$password = $_POST["password"];
	
//	$con = mysql_connect("localhost", "root", "123456");
	$con = mysql_connect("rm-2ze31n1u1rmhz8tx1o.mysql.rds.aliyuncs.com", "xiaoshumiao", "12138");
	
//	if($con){
//		echo "验证成功，";
//	}else{
//		echo "验证失败，";
//		exit;
//	}
	
	mysql_select_db("huangwei");
	
	$sql = "SELECT * FROM user WHERE username='$username' and password='$password';";
    $res = mysql_query($sql);
	$row = mysql_fetch_array($res);
    if($row){
        echo $row['name'];
    }else{
        echo "账户名或密码错误";
    }

?>