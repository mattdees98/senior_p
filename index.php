<!DOCTYPE html>
<html>
<head>
	<title>Monumental Anxiety</title>
	<script type = "text/javascript" src = "googlemap.js"></script>
	<style type = "text/css">
		html, body {
        height: 370px;
        padding: 0;
        margin: 0;
        }
      #map {
       height: 500px;
       width: 600px;
       overflow: hidden;
       float: left;
       border: thin solid #333;
       }
      #sidebar {
       height: 500px;
       width: 350px;
       overflow: hidden;
       float: left;
       background-color: #ECECFB;
       border: thin solid #333;
       border-left: none;
  	   }	
	   #data, #allData {
			display:none;
	   }
	</style>
</head>
<body>
	<div id = "container">
		<center><h1>Test map</h1></center>
		<?php
			require 'monument.php';
			$mon = new monument;
			$coll = $mon->getMonumentBlankLatLng();
			$coll = json_encode($coll, true);
			echo '<div id = "data">' . $coll . '</div>';

			$allData = $mon->getAllMonuments();
			$allData = json_encode($allData, true);
			echo '<div id = "allData">' . $allData . '</div>';
		?>
		<div id = "map"></div>
		<div id= "sidebar">
		    
		</div>
	</div>

		
</body>
<script async defer
	src = "https://maps.googleapis.com/maps/api/
	js?key=AIzaSyBTtuV1kRCo1AZy_oD81NlxdCNP2ZR5How&callback=loadMap">
	</script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script
</html>
