<?php
	require 'monument.php';
	$mon = new monument;
	$mon->setId($_REQUEST['id']);
	$mon->setLng($_REQUEST['lng']);
	$mon->setLat($_REQUEST['lat']);
	$status = $mon->updateMonumentWithLatLng();
	if($status == true)
	{
		echo "Updated....";
	} else {
		echo "Failed....";
	}
?>