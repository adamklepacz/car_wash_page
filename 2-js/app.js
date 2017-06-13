/* ---------------------------------------------
Navigation smooth scroll effect
--------------------------------------------- */
$(function($)
{
  //  scroll reset
  $.scrollTo(0)

  // scroll from menu option to proper section
  $('#link1').click(function(){$.scrollTo($('#intro'),500);});
  $('#link2').click(function(){$.scrollTo($('#about-me'),500);});
  $('#link3').click(function(){$.scrollTo($('#offer'),500);});
  $('#link4').click(function(){$.scrollTo($('#pricelist'),500);});
  $('#link5').click(function(){$.scrollTo($('#contact'),500);});
  $('#link6').click(function(){$.scrollTo($('#contact'),500);});
  $('#link7').click(function(){$.scrollTo($('#offer'),500);});
  $('#link8').click(function(){$.scrollTo($('#contact'),500);});
  $('#link9').click(function(){$.scrollTo($('#map-area'),500);});
});

/* ---------------------------------------------
Google Map
--------------------------------------------- */
function initMap() {
  var bukownica = {lat: 51.469482, lng: 18.050946};
  var map = new google.maps.Map(document.getElementById('map'), {
    scrollwheel: false,
    zoom: 11,
    center: bukownica,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]  // styles object end
    });
    var marker = new google.maps.Marker({
      position: bukownica,
      map: map
    });
} // initMap function end


/* ---------------------------------------------
 Map section overlay toggle
 --------------------------------------------- */
$(document).ready(function() {
  $('.map-toggle').click(function() {
    $('.map-section').toggleClass("js-active");
    $('.map-open').toggleClass("map-inactive");
    $('.map-close').toggleClass("map-active");
  });
}); // ready function end

/* ---------------------------------------------
 Icons appears from background when scroll
 --------------------------------------------- */

$(document).ready(function() {
  // Changing the defaults
  window.sr = ScrollReveal({  reset: true  });

  // Customizing a reveal set for .icons-wrapper-icon and icons-descr
	sr.reveal('.icons-wrapper-icon, .icons-descr', {

		// 'bottom', 'left', 'top', 'right'
		origin: 'bottom',

		// Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.
		distance: '0px',

		// Time in milliseconds.
		duration: 1500,
		delay: 0,

		// Starting angles in degrees, will transition from these values to 0 in all axes.
		rotate: { x: 0, y: 0, z: 0 },

		// Starting opacity value, before transitioning to the computed opacity.
		opacity: 0,

		// Starting scale value, will transition from this value to 1
		scale: 0.7,

		// Accepts any valid CSS easing, e.g. 'ease', 'ease-in-out', 'linear', etc.
		easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',

		// `<html>` is the default reveal container. You can pass either:
		// DOM Node, e.g. document.querySelector('.fooContainer')
		// Selector, e.g. '.fooContainer'
		container: window.document.documentElement,

		// true/false to control reveal animations on mobile.
		mobile: true,

		// true:  reveals occur every time elements become visible
		// false: reveals occur once as elements become visible
		reset: false,

		// 'always' — delay for all reveal animations
		// 'once'   — delay only the first time reveals occur
		// 'onload' - delay only for animations triggered by first load
		useDelay: 'always',

		// Change when an element is considered in the viewport. The default value
		// of 0.20 means 20% of an element must be visible for its reveal to occur.
		viewFactor: 0.2,

		// Pixel values that alter the container boundaries.
		// e.g. Set `{ top: 48 }`, if you have a 48px tall fixed toolbar.
		// --
		// Visual Aid: https://scrollrevealjs.org/assets/viewoffset.png
		viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },

		// Callbacks that fire for each triggered element reveal, and reset.
		beforeReveal: function (domEl) {},
		beforeReset: function (domEl) {},

		// Callbacks that fire for each completed element reveal, and reset.
		afterReveal: function (domEl) {},
		afterReset: function (domEl) {}
	});

}); // ready function end
