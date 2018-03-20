$(document).ready(function () {

//   function openNav() {
//     $('.menu-mobile--itself').style.width = "550px";
// }

  //----------------------MENU------------------------------

    $('.menu_icon, .close').on('click', function(){
    	$('.menu-mobile--itself').toggleClass('show');
        	$('.main-overlay').toggleClass('overlayed');

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
        $('.main-overlay').removeClass('overlayed');
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


//.find("#mychilddivid3").text("text2");


     		//var that = $(this).closest('.recommended-oneitem').find('img');

        var that = $(this).parent().find('.animfind');
        $(this).parent().find('.animfind').clone().attr('id', 'animation-el').appendTo($(this).parent().find('a')[0]);


        imgFly = document.getElementById("animation-el");
        cartLabel = document.getElementById("cart_animation");


        var hCenter = (window.clientHeight) / 2;

        function getOffset(el) {
          el = el.getBoundingClientRect();
          return {
            left: el.left + window.scrollX,
            top: el.top + window.scrollY
          }
        }

      var test = getOffset(imgFly).top;
      console.log(test);

        // var currentEl = $(this).offset().top - $(window).scrollTop();
        // var dist = hCenter - currentEl;
        //
        // if (dist > hCenter) {
        //   alert( '11' );
        //     hCenter =-hCenter;
        //
        // } else {
        //   alert( '22' );
        // }

        //alert('offset = ' + currentEl);

        TweenMax.to(imgFly, 2, { x:1500, y: hCenter, scale:0.3, opacity:0 , ease:Power4.easeInOut   });
        setTimeout(function() { imgFly.remove() }, 2000);



        //currentEl = $(this).offset().top - $(window).scrollTop;

        //var distance = imgFly.offsetTop - imgFly.offsetTop - cartLabel.offsetHeight;
      //  var distance = imgFly.offsetTop;
        //var distance = event.clientY;

        //$('#imgFly').offset().top - $('#cart_animation').offset().top - $('#cart_animation').outerHeight()



        //screen.height




    //    console.log(distance);




        //that.clone().addClass('itmcopy').appendTo("body");





// imgFly.animate({
//         left: '3000px',
//     });


        //newpic = $('copy');

        //TweenLite.to(bascket, 10, {left:"632px"});
          //console.log(that);
          //that.clone();



              //TweenMax.to(that, 3, { x:1500 , opacity:0 , ease:Power1.easeInOut   });

          // TweenLite.to(that, 10, {
          //   left:"0",
          //   top: "50%",
          //   position: "absolute",
          //   z-index: "999999",
          //   scale: "0.4",
          // });

     		var bascket = $(".ic-cart-custom");
     		var w = that.width();
        //  that.clone();




          //TweenMax.to(that, 10, {opacity: 0});


        // TweenLite.to(that, 20, {left:"542px",
        //                         position:"absolute"
        //                        backgroundColor:"black",
        //                        borderBottomColor:"#90e500",
        //                        color:"white"});


     	});



   // var logo = document.getElementById("logo");
           // TweenLite.to(logo, 1, {left:"632px"});
};
