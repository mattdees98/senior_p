var map;
var geocoder;

function loadMap()
{
	var center = {lat: 38.9072, lng: -77.0369};
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: center
	});

	var cdata = JSON.parse(document.getElementById('data').innerHTML);
	geocoder = new google.maps.Geocoder();
	codeAddress(cdata);

	var allData = JSON.parse(document.getElementById('allData').innerHTML);
	showAllMonuments(allData)


function showAllMonuments(allData)
{
	var infoWind = new google.maps.InfoWindow;
	Array.prototype.forEach.call(allData, function(data)
	{
		var content = document.createElement('div');
		var strong = document.createElement('strong');
		var html = "<div id = 'data' style = 'overflow:hidden;line-height:15px;color:black;height:200px;width:225px;'><span style='font weight:500;text-decoration:none;font-size:13px;'>" + data.name + "</span><br><span style = 'font-size:10px;'>" + data.address + "<br>" + data.description + "</div";
		strong.textContent = data.name;
		content.appendChild(strong);

		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(data.lat, data.lng),
			map: map
		});
		marker.infoWind = new google.maps.InfoWindow({ content: '<h3>' + data.name + '</h3>' + '<br>' + '<p>' + data.address + '</p>' + '<p>' + data.description + '</p>' }); 

		google.maps.event.addListener(marker, 'click', function () {   
                                this.infoWind.open(map, this);
                                bindInfoWindow(marker, map, infoWind, html);          
                            });
	}
)};

function bindInfoWindow(marker, map, infoWind, html)
{
	google.maps.event.addListener(marker, 'click', function()
	{
		document.getElementById('sidebar').innerHTML = html;
	});
}

function codeAddress(cdata)
{
	Array.prototype.forEach.call(cdata, function(data)
	{
		var address = data.name + ' ' + data.address;
		geocoder.geocode( { 'address': address}, function(results, status) {
			if (status == 'OK') {
				map.setCenter(results[0].geometry.location);
				var points = {};
				points.id = data.id;
				points.lat = map.getCenter().lat();
				points.lng = map.getCenter().lng();
				updateMonumentWithLatLng(points);
			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}
		});
    });
}

function updateMonumentWithLatLng(points)
{
	$.ajax({
		url:"action.php",
		method:"post",
		data: points,
		success: function(res)
		{
			console.log(res);
		}
	})

}
}