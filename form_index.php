<!DOCTYPE html>
<html>
	<head>
		<title>
			Monumental Anxiety
		</title>
		<link rel = "stylesheet" href = "form_styles.css">
	</head>

	<body>
		<table>
			<tr>
				<td>
					<form action = "addmonument.inc.php" method = "POST">
						<div>
							<label>Name</label>
							<input type = "text" name = "name" id = "name">
						</div>
						<div>
							<label>Address</label>
							<input type = "text" name = "address" id = "address">
						</div>
						<div>
							<label>Description</label>
							<input type = "text" name = "description" id = "description">
						</div>
						<div>
							<label>Latitude</label>
							<input type = "text" name = "lat" id = "lat">
						</div>
						<div>
							<label>Longitude</label>
							<input type = "text" name = "lng" id = "lng">
						<div>
							<button type = "submit" name = "submit">Submit</button>
						</div>
					</form>
				</td>
				
			</tr>
		</table>

	</body>

</html>