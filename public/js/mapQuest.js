function initMap() {
	// add your code here
	L.mapquest.key = '2Wn4kHXNasLOdaofnJZd9aLfXZvG2Z6e';

	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}