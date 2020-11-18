$( document ).ready(function() {
    console.log( "ready!" );
});



let map;

function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 42.2808,
      lng: -83.7430 },
    zoom: 13,
  });

// Bells Diner

  var infowindow = new google.maps.InfoWindow({
    content: document.getElementById("bellsContent"),
    maxWidth: 350,
  });

  var marker = new google.maps.Marker({
    map: map,
    position: {
      lat: 42.273318,
      lng: -83.776514
    }
  });
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });

  // Get the modal
  var modalBells= document.getElementById("bellsModal");

  // Get the button that opens the modal
  var btnBells = document.getElementById("bellsButton");

  // Get the <span> element that closes the modal
  var spanBells = document.getElementById("closeBells");

  // When the user clicks the button, open the modal
  btnBells.onclick = function() {
    modalBells.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  spanBells.onclick = function() {
    modalBells.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modalBells) {
      modalBells.style.display = "none";
    }
  }

  var menuBells = document.getElementById("menuBells");

  menuBells.onclick = function() {
    modalBells.style.display = "block";
  }



// Evergreen

var evergreeninfowindow = new google.maps.InfoWindow({
  content: document.getElementById("evergreenContent"),
  maxWidth: 350,
});

var evergreenMarker = new google.maps.Marker({
  map: map,
  // icon: 'images/mglogoredrect2.png',
  position: {
    lat: 42.303825,
    lng: -83.705722
  }
})
evergreenMarker.addListener("click", () => {
  evergreeninfowindow.open(map, evergreenMarker);
});

// Get the modal
var modalEvergreen = document.getElementById("evergreenModal");

// Get the button that opens the modal
var btnEvergreen = document.getElementById("evergreenButton");

// Get the <span> element that closes the modal
var spanEvergreen = document.getElementById("closeEvergreen");

// When the user clicks the button, open the modal
btnEvergreen.onclick = function() {
  modalEvergreen.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanEvergreen.onclick = function() {
  modalEvergreen.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalEvergreen) {
    modalEvergreen.style.display = "none";
  }
}

var menuEvergreen = document.getElementById("menuEvergreen");

menuEvergreen.onclick = function() {
  modalEvergreen.style.display = "block";
}



// Frita Batidos

var fritainfowindow = new google.maps.InfoWindow({
  content: document.getElementById("fritaContent"),
  maxWidth: 350,
});

var fritaMarker = new google.maps.Marker({
  map: map,
  // icon: 'images/mglogoredrect2.png',
  position: {
    lat: 42.280407,
    lng: -83.749436
  }

})

fritaMarker.addListener("click", () => {
  fritainfowindow.open(map, fritaMarker);
});

// Get the modal
var modalFrita = document.getElementById("fritaModal");

// Get the button that opens the modal
var btnFrita = document.getElementById("fritaButton");

// Get the <span> element that closes the modal
var spanFrita = document.getElementById("closeFrita");

// When the user clicks the button, open the modal
btnFrita.onclick = function() {
  modalFrita.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanFrita.onclick = function() {
  modalFrita.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalFrita) {
    modalFrita.style.display = "none";
  }
}

var menuFrita = document.getElementById("menuFrita");

menuFrita.onclick = function() {
  modalFrita.style.display = "block";
}



// Pacific Rim

var pacificinfowindow = new google.maps.InfoWindow({
  content: document.getElementById("pacificContent"),
  maxWidth: 350,
});

var pacificMarker = new google.maps.Marker({
  map: map,
  // icon: 'images/mglogoredrect2.png',
  position: {
    lat: 42.279703,
    lng: -83.749413
  }
})

pacificMarker.addListener("click", () => {
  pacificinfowindow.open(map, pacificMarker);
});

// Get the modal
var modalPacific = document.getElementById("pacificModal");

// Get the button that opens the modal
var btnPacific = document.getElementById("pacificButton");

// Get the <span> element that closes the modal
var spanPacific = document.getElementById("closePacific");

// When the user clicks the button, open the modal
btnPacific.onclick = function() {
  modalPacific.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanPacific.onclick = function() {
  modalPacific.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalPacific) {
    modalPacific.style.display = "none";
  }
}

var menuPacific = document.getElementById("menuPacific");

menuPacific.onclick = function() {
  modalPacific.style.display = "block";
}


// TeaHaus

var teainfowindow = new google.maps.InfoWindow({
  content: document.getElementById("teahausContent"),
  maxWidth: 350,
});

var teaMarker = new google.maps.Marker({
  map: map,
  // icon: 'images/mglogoredrect2.png',
  position: {
    lat: 42.282576,
    lng: -83.747015
  }

})
teaMarker.addListener("click", () => {
  teainfowindow.open(map, teaMarker);
});

// Get the modal
var modalTeahaus = document.getElementById("teahausModal");

// Get the button that opens the modal
var btnTeahaus = document.getElementById("teahausButton");

// Get the <span> element that closes the modal
var spanTeahaus = document.getElementById("closeTeahaus");

// When the user clicks the button, open the modal
btnTeahaus.onclick = function() {
  modalTeahaus.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanTeahaus.onclick = function() {
  modalTeahaus.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalTeahaus) {
    modalTeahaus.style.display = "none";
  }
}

var menuTeahaus = document.getElementById("menuTeahaus");

menuTeahaus.onclick = function() {
  modalTeahaus.style.display = "block";
}


// Knight's

var knightsinfowindow = new google.maps.InfoWindow({
  content: document.getElementById("knightsContent"),
  maxWidth: 350,
});

var knightsMarker = new google.maps.Marker({
  map: map,
  // icon: 'images/mglogoredrect2.png',
  position: {
    lat: 42.284940,
    lng: -83.778105
  }

})

knightsMarker.addListener("click", () => {
  knightsinfowindow.open(map, knightsMarker);
});

// Get the modal
var modalKnights = document.getElementById("knightsModal");

// Get the button that opens the modal
var btnKnights = document.getElementById("knightsButton");

// Get the <span> element that closes the modal
var spanKnights = document.getElementById("closeKnights");

// When the user clicks the button, open the modal
btnKnights.onclick = function() {
  modalKnights.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanKnights.onclick = function() {
  modalKnights.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalKnights) {
    modalKnights.style.display = "none";
  }
}

var menuKnights = document.getElementById("menuKnights");

menuKnights.onclick = function() {
  modalKnights.style.display = "block";
}


// Hello Faz Pizza

var fazinfowindow = new google.maps.InfoWindow({
  content: document.getElementById("fazContent"),
  maxWidth: 350,
});

var fazMarker = new google.maps.Marker({
  map: map,
  // icon: 'images/mglogoredrect2.png',
  position: {
    lat: 42.273744,
    lng: -83.777467
  }

})

fazMarker.addListener("click", () => {
  fazinfowindow.open(map, fazMarker);
});

// Get the modal
var modalFaz = document.getElementById("fazModal");

// Get the button that opens the modal
var btnFaz = document.getElementById("fazButton");

// Get the <span> element that closes the modal
var spanFaz = document.getElementById("closeFaz");

// When the user clicks the button, open the modal
btnFaz.onclick = function() {
  modalFaz.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanFaz.onclick = function() {
  modalFaz.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalFaz) {
    modalFaz.style.display = "none";
  }
}

var menuFaz = document.getElementById("menuFaz");

menuFaz.onclick = function() {
  modalFaz.style.display = "block";
}



// Tomukun BBQ

var tomukuninfowindow = new google.maps.InfoWindow({
  content: document.getElementById("tomukunContent"),
  maxWidth: 350,
});

var tomukunMarker = new google.maps.Marker({
  map: map,
  // icon: 'images/mglogoredrect2.png',
  position: {
    lat: 42.279528,
    lng: -83.742819
  }

})

tomukunMarker.addListener("click", () => {
  tomukuninfowindow.open(map, tomukunMarker);
});

// Get the modal
var modalTomukun = document.getElementById("tomukunModal");

// Get the button that opens the modal
var btnTomukun = document.getElementById("tomukunButton");

// Get the <span> element that closes the modal
var spanTomukun = document.getElementById("closeTomukun");

// When the user clicks the button, open the modal
btnTomukun.onclick = function() {
  modalTomukun.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanTomukun.onclick = function() {
  modalTomukun.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalTomukun) {
    modalTomukun.style.display = "none";
  }
}

var menuTomukun = document.getElementById("menuTomukun");

menuTomukun.onclick = function() {
  modalTomukun.style.display = "block";
}

// Totoro

var totoroinfowindow = new google.maps.InfoWindow({
  content: document.getElementById("totoroContent"),
  maxWidth: 350,
});

var totoroMarker = new google.maps.Marker({
  map: map,
  // icon: 'images/mglogoredrect2.png',
  position: {
    lat: 42.279769,
    lng: -83.740634
  }

})

totoroMarker.addListener("click", () => {
  totoroinfowindow.open(map, totoroMarker);
});

// document.getElementById("totoroContent").style.display = "none";

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("totoroButton");

// Get the <span> element that closes the modal
var span = document.getElementById("close");

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var menuTotoro2 = document.getElementById("menuTotoro2");

menuTotoro2.onclick = function() {
  modal.style.display = "block";
}



// Belly Deli

var bellyinfowindow = new google.maps.InfoWindow({
  content: document.getElementById("bellyContent"),
  maxWidth: 350,
});

var bellyMarker = new google.maps.Marker({
  map: map,
  // icon: 'images/mglogoredrect2.png',
  position: {
    lat: 42.275124,
    lng: -83.732649
  }

})

bellyMarker.addListener("click", () => {
  bellyinfowindow.open(map, bellyMarker);
});

// Get the modal
var modalBelly = document.getElementById("bellyModal");

// Get the button that opens the modal
var btnBelly = document.getElementById("bellyButton");

// Get the <span> element that closes the modal
var spanBelly = document.getElementById("closeBelly");

// When the user clicks the button, open the modal
btnBelly.onclick = function() {
  modalBelly.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanBelly.onclick = function() {
  modalBelly.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalBelly) {
    modalBelly.style.display = "none";
  }
}

var menuBelly = document.getElementById("menuBelly");

menuBelly.onclick = function() {
  modalBelly.style.display = "block";
}



// Good Time Charley's

var charleysinfowindow = new google.maps.InfoWindow({
  content: document.getElementById("charleysContent"),
  maxWidth: 350,
});

var charleysMarker = new google.maps.Marker({
  map: map,
  // icon: 'images/mglogoredrect2.png',
  position: {
    lat: 42.274838,
    lng: -83.734871
  }

})

charleysMarker.addListener("click", () => {
  charleysinfowindow.open(map, charleysMarker);
});

// Get the modal
var modalCharleys = document.getElementById("charleysModal");

// Get the button that opens the modal
var btnCharleys = document.getElementById("charleysButton");

// Get the <span> element that closes the modal
var spanCharleys = document.getElementById("closeCharleys");

// When the user clicks the button, open the modal
btnCharleys.onclick = function() {
  modalCharleys.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanCharleys.onclick = function() {
  modalCharleys.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalCharleys) {
    modalCharleys.style.display = "none";
  }
}

var menuCharleys = document.getElementById("menuCharleys");

menuCharleys.onclick = function() {
  modalCharleys.style.display = "block";
}


// Real Seafood

var seafoodinfowindow = new google.maps.InfoWindow({
  content: document.getElementById("seafoodContent"),
  maxWidth: 350,
});

var seafoodMarker = new google.maps.Marker({
  map: map,
  // icon: 'images/mglogoredrect2.png',
  position: {
    lat: 42.278392,
    lng: -83.748318
  }

})

seafoodMarker.addListener("click", () => {
  seafoodinfowindow.open(map, seafoodMarker);
});

// Get the modal
var modalSeafood = document.getElementById("seafoodModal");

// Get the button that opens the modal
var btnSeafood = document.getElementById("seafoodButton");

// Get the <span> element that closes the modal
var spanSeafood = document.getElementById("closeSeafood");

// When the user clicks the button, open the modal
btnSeafood.onclick = function() {
  modalSeafood.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanSeafood.onclick = function() {
  modalSeafood.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalSeafood) {
    modalSeafood.style.display = "none";
  }
}

var menuSeafood = document.getElementById("menuSeafood");

menuSeafood.onclick = function() {
  modalSeafood.style.display = "block";
}



// Blimpy Burger

var blimpyinfowindow = new google.maps.InfoWindow({
  content: document.getElementById("blimpyContent"),
  maxWidth: 350,
});

var blimpyMarker = new google.maps.Marker({
  map: map,
  // icon: 'images/mglogoredrect2.png',
  position: {
    lat: 42.279370,
    lng: -83.750053
  }

})

blimpyMarker.addListener("click", () => {
  blimpyinfowindow.open(map, blimpyMarker);
});

// Get the modal
var modalBlimpy = document.getElementById("blimpyModal");

// Get the button that opens the modal
var btnBlimpy = document.getElementById("blimpyButton");

// Get the <span> element that closes the modal
var spanBlimpy = document.getElementById("closeBlimpy");

// When the user clicks the button, open the modal
btnBlimpy.onclick = function() {
  modalBlimpy.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanBlimpy.onclick = function() {
  modalBlimpy.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalBlimpy) {
    modalBlimpy.style.display = "none";
  }
}

var menuBlimpy = document.getElementById("menuBlimpy");

menuBlimpy.onclick = function() {
  modalBlimpy.style.display = "block";
}





}



/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
