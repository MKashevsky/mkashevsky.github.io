<?PHP header("Content-Type: text/html; charset=utf-8");?>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />

<div id="product-form">
	<div class="img-container">
		<img src="img/<?php echo $_GET["img"] ?>.jpg">
		<p class="price" id="price">
			<?php echo $_GET["price"] ?> Kč
		</p>
	</div>
	<form id="order" class="order"  method="post" action="order.php?price=<?php echo $_GET["price"] ?>&product=<?php echo $_GET["name"] ?>" accept-charset="utf-8">
		<p class="product-name"><?php echo $_GET["name"] ?></p>
		<div>
		<select id="count" class="count" name="count" required> 
			<option value="1" selected="selected">1</option>
			<option value="2" >2</option>
			<option value="3" >3</option>
			<option value="4" >4</option>
			<option value="5" >5</option>
			<option value="6" >6</option>
			<option value="7" >7</option>
			<option value="8" >8</option>
			<option value="9" >9</option>
			<option value="10" >10</option>
		</select>* - počet.
		<script type="text/javascript">
			$("#count").live("change", function () {
				$sum=<?php echo $_GET["price"] ?>*$('#count').val();
				document.getElementById("price").innerHTML = $sum + " Kč";
			});
		</script>
		</div>
		<input name="person-name" class="person-name" type="text" maxlength="255" size="8" placeholder="Jmeno" required />
		<input name="person-tel" class="person-name" type="text" maxlength="255" size="8" placeholder="Telefon" required />
		<input id="saveForm" class="button" type="submit" name="submit" value="Objednat" />
	</form>
</div>