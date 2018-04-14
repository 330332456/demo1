<?php 
    header('content-type:text/html;charset="utf-8"');

    $username = $_POST["username"];
    $password = $_POST["password"];
    $name = $_POST["name"];

//  $con = mysql_connect("localhost", "root", "123456");
	$con = mysql_connect("rm-2ze31n1u1rmhz8tx1o.mysql.rds.aliyuncs.com", "xiaoshumiao", "12138");

    /*if($con){
        echo "success";
    }else{
        echo "error";
        exit;
    }*/

    mysql_select_db("huangwei");

    $sql = "INSERT INTO user VALUES('$username','$password','$name');";

    $is_ok = mysql_query($sql);

    if($is_ok){
        echo "注册成功";
    }else{
        echo "用户名已经存在";
    }

 ?>