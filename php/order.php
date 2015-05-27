<?PHP header("Content-Type: text/html; charset=utf-8");?>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['product'])) {$product = $_POST['product'];}
if (isset($_POST['tel'])) {$tel = $_POST['tel'];}
if (isset($_POST['price'])) {$price = $_POST['price'];}	
if (isset($_POST['count'])) {$count = $_POST['count'];}
 
$address = 'mkashevsky@gmail.com';
$sub = "New message from iLikepet clients";
$mes = "Client: $name\nPhone num.: $tel\nWas ordered:\n
	$product count: $count total sum: $count*$price\n";
$verify = mail ($address,$sub,$mes,"Content-type:text/html; charset = utf-8\r\n");
if ($verify == 'true')
{
echo "<p>Message have been sent";
}
else 
{
echo "<p>Message have not been sent";
}

sleep(2);
header("Location: test1,ru");  
exit;
?>