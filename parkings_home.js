// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.361145, lng: -71.057083},
    zoom: 13,
    //mapTypeId: 'roadmap'

    });
  		
  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
  setMarkers(map);

  	
}

var parking_spaces= [
 	['40 Beach st.', 42.351703, -71.061734, 4],
 	['660 Washington St. - Garage',42.351814,-71.06237,3],
 	['47 Boylston St. - Ritz Carlton Garage',42.352468,-71.063785,1],
 	['88 Kingston St. - State Street Financial Center Garage',42.356029,-71.054051,2],
 	['45 Stuart St. - AVA Theater District - Valet',42.351306,-71.064054,5],
 	['99 Kneeland St. - One Greenway Garage',42.350007,-71.060104,6],
 	['1 Avenue de Lafayette - Lafayette Garage',42.353652,-71.060937,7],
 	['24 Kingston St. (99 Summer Garage',42.353729,-71.058619,8],
 	['17-23 West St. - Lot',40.706796,74.016801,9],
 	['821 Washington St. - DoubleTree - Valet Garage',42.348923,-71.064208,10],
 	['200 Stuart St. - Garage',42.350415,-71.067466,11],
 	['201 Stuart St. - Motor Mart Garage',42.351022,-71.068104,12],
 	['33 Arch St. - Garage',42.356159,-71.058059,13],
 	['100 High St. - Garage',42.355111,-71.052692,14],
 	['45 Province St. - Valet Garage',42.357282,-71.059953,15],
 	['1 Federal St. - Garage',42.356007,-71.056796,16],
 	['280 Congress St. - Garage',42.353198,-71.052846,17],
 	['Pi Alley - Garage',42.358147,-71.058067,18],
 	['34 Cooper St.', 42.364153, -71.056851, 37],
 	['47 Huntington Ave. boston', 42.348273, -71.078623, 38],
	['100 Huntington Ave. boston', 42.347334, -71.078874,39],
	['61 Exeter St.’, 42.349153', -71.07963, 40],
	['121 Nashua St.', 42.366155, -71.062608, 41],
	['110 Huntington Ave.', 42.34702, -71.079289, 42],
	['377 D St.', 42.343454, -71.045385, 43],
	['776 Boylston St.', 42.348775, -71.081348, 44],
	['181 N Washington St.', 42.366513, -71.058356, 45],
	['54 Hull St.', 42.367416, -71.056997, 46],
	['7 Durham St.', 42.343852, -71.081176, 47],
	['2 Battery Wharf', 42.366876, -71.051403, 48],
	['269 Commonwealth Ave.', 42.350706, -71.0843, 49],
	['553 Columbus Ave.', 42.341453, -71.08105, 50],
	['39 Dalton St.', 42.346384, -71.084023, 51],
	['270 Northern Ave.', 42.348669, -71.037756, 52],
	['1 Constitution Rd.', 42.371222, -71.057774, 53],
	['35 Westland Ave.', 42.343848, -71.087624, 54],
	['88 Constitution Rd.', 42.37273, -71.058682, 55],
	['94 Pearl St. (225 Franklin St. Boston)' ,42.356029, -71.054051, 19],
	['One Post Office Square, boston' , 42.356627, -71.054327, 20],
	['10 St James Ave, boston', 42.350377, -71.070954, 21],
	['115 Purchase St, boston',42.354914, -71.052633, 22],
	['Center Plaza, boston', 42.359793, -71.060246, 23],
	['10 Necco St., boston', 42.349306, -71.050683, 24],
	['75 State St., boston', 42.358662, -71.055065, 25],
	['400 Stuart Street , boston', 42.348983, -71.07365, 26],
	['500 Boylston St. , boston', 42.350742, -71.074378, 27],
	['17 Farnsworth St. , boston', 42.351234, -71.048318, 28],
	['30 Rowes Wharf , boston', 42.356693, -71.050227, 29],
	['70 Sleeper St., boston', 42.353751, -71.04821, 30],
	['100 Clarendon St., boston', 42.348093, -71.074322, 31],
	['11 Stillings St., boston', 42.350276, -71.047124, 32],
	['116 W 1st St., boston', 42.343328, -71.052458, 33],
	['Government Center , boston', 42.36048, -71.059062, 34],
	['144 Charles St., boston', 42.359881, -71.070934, 35],
	['131 Dartmouth St., boston', 42.346918, -71.07504, 36]
 ]

function setMarkers(map) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  for (var i = 0; i < parking_spaces.length; i++) {
    var place = parking_spaces[i];
    var marker = new google.maps.Marker({
      position: {lat: place[1], lng: place[2]},
      map: map,
      icon: image,
      shape: shape,
      title: place[0],
      zIndex: place[3]
    });
  }
}
