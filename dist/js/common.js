$(document).ready(function () {

//   function openNav() {
//     $('.menu-mobile--itself').style.width = "550px";
// }

  //----------------------MENU------------------------------

    $('.menu_icon, .close').on('click', function(){
    	$('.menu-mobile--itself').toggleClass('show');

      setTimeout(function() {
        //  $('body').toggleClass('body-overflow');
      }, 200);




    //  $('.menu-mobile--itself').addClass( "open-trigger" );
    })

    // $("body").click(function(e) {
    // 	$('body').toggleClass('body-overflow');
    // });


  //-------------CLOSE-CART-ON-CLICK-INSIDE-BLOCK-----------

  $(document).mouseup(function (e) {
      var container = $('.menu-mobile--itself');
      if (container.has(e.target).length === 0){
        //  container.hide();
        $('.menu-mobile--itself').removeClass('show');
        setTimeout(function() {
          $('body').removeClass('body-overflow');
        }, 200);
      }
  });

  //---------------SEARCHBLOCK-------------------------------

    $( "#search" ).click(function() {
      $( ".searchblock" ).slideToggle( 300, function() {
      });

      $( "#search" ).toggleClass('search-open');

      $('.searchblock').toggleClass( "open-trigger" );
    });


    //-------------CLOSE-SEARCHBLOCK-ON-CLICK-INSIDE-BLOCK---------

    $(document).mouseup(function (e) {
        var container = $('.searchblock');
        if (container.has(e.target).length === 0 && container.hasClass( "open-trigger" )) {
          //  container.hide();
          // $('.menu-mobile--itself').removeClass('show');
          // $('body').toggleClass('body-overflow');

          //alert('match');
          $( ".searchblock" ).slideUp( 300, function() {
          });
          $( "#search" ).removeClass('search-open');
          $('.searchblock').toggleClass( "open-trigger" );
        }
    });

  //-------------------CALLBACK----------------------------

    $( "#callback" ).click(function() {

      $( ".callback-block" ).slideToggle( 300, function() {
      });

      $('.callback-block').toggleClass( "open-trigger" );
    });



    //------------------CALLBACK-CLOSE----------------------

    $(document).mouseup(function (e) {
        var container = $('.callback-block');
        if (container.has(e.target).length === 0 && container.hasClass( "open-trigger" )){
          //  container.hide();
          //$('.menu-mobile--itself').removeClass('show');
          //$('body').removeClass('body-overflow');

          $( ".callback-block" ).slideUp( 300, function() {
          });
        }
    });

    $( "#callback-close" ).click(function() {
      $( ".callback-block" ).slideUp( 300, function() {
      });
    });


//--------------INPUT-NUMBER-STYLING------------------------
function catalogItemCounter(field){

			var fieldCount = function(el) {

				var
					// Мин. значение
					min = el.data('min') || false,

					// Макс. значение
					max = el.data('max') || false,

					// Кнопка уменьшения кол-ва
					dec = el.prev('.dec'),

					// Кнопка увеличения кол-ва
					inc = el.next('.inc');

				function init(el) {
					if(!el.attr('disabled')){
						dec.on('click', decrement);
						inc.on('click', increment);
					}

					// Уменьшим значение
					function decrement() {
						var value = parseInt(el[0].value);
						value--;

						if(!min || value >= min) {
							el[0].value = value;
						}
					};

					// Увеличим значение
					function increment() {
						var value = parseInt(el[0].value);

						value++;

						if(!max || value <= max) {
							el[0].value = value++;
						}
					};

				}

				el.each(function() {
					init($(this));
				});
			};

			$(field).each(function(){
				fieldCount($(this));
			});
		}

catalogItemCounter('.fieldCount');

//---------------------------------------------------------------


//-----------------------MAINPAGE-SLIDER-INIT--------------------

   var swiper = new Swiper('.top_slider', { 
     pagination: '.topslide-swiper-pagination', 
     paginationClickable: false,
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
     autoplay: {
       delay: 5000,
    }
   });

//----------------------CART-FLY-ANIMATION-----------------------

// $('.bbq-item-order').on('click', function(){
//
// 		var that = $(this).closest('.recommended-oneitem').find('img');
// 		var bascket = $(".menu_icon");
// 		var w = that.width();
//
//         that.clone()
//             .css({'width' : w,
// 			'position' : 'absolute',
// 			'z-index' : '9999',
// 			top: that.offset().top,
// 			left:that.offset().left})
//             .appendTo($( ".popular-bbq" ))
//             .animate({opacity: 0.05,
//                 left: bascket.offset()['left'],
//                 top: bascket.offset()['top'],
//                 width: 20}, 1000, function() {
// 					$(this).remove();
// 				});
// 	});





});
//47.857833, 35.097677
function initMap() {
     var uluru = {lat: 47.857833, lng: 35.097677};
     var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 17,
       styles: [
      {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              },
              {
                  "lightness": 33
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#f7f7f7"
              }
          ]
      },
      {
          "featureType": "poi.business",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#deecdb"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              },
              {
                  "lightness": "25"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "lightness": "25"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "labels",
          "stylers": [
              {
                  "saturation": "-90"
              },
              {
                  "lightness": "25"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "transit.line",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit.station",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#e0f1f9"
              }
          ]
      }
  ],

       center: uluru
     });
     var marker = new google.maps.Marker({
       position: uluru,
       icon: "img/location.svg",
       map: map
     });
   }

//GSAP-CART-ANIMATION
   window.onload = function(){


     $('.bbq-item-order').on('click', function(){

     		var that = $(this).closest('.recommended-oneitem').find('img');
     		// var bascket = $(".menu_icon");
     		// var w = that.width();

        // TweenLite.to(that, 2, {left:"542px",
        //                         position:"absolute"
        //                        backgroundColor:"black",
        //                        borderBottomColor:"#90e500",
        //                        color:"white"});

          // TweenLite.to(that, 1, {
          //   left:"0",
          //   top: "50%",
          //   position: "absolute",
          //   z-index: "999999",
          //   scale: "0.4"
          // });
     	});



   // var logo = document.getElementById("logo");
           // TweenLite.to(logo, 1, {left:"632px"});
};
