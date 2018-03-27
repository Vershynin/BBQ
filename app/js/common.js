$(document).ready(function () {

  //----------------------MENU------------------------------

    $('.menu_icon, .close').on('click', function(){
      $('.menu-mobile--itself').toggleClass('show');
      $('.main-overlay').toggleClass('overlayed');

        if($('.callback-block').hasClass('open-trigger')) {
          $( ".callback-block" ).slideToggle( 300, function() {
          });

          $('.callback-block').removeClass( "open-trigger" );
        }



        if($('.searchblock').hasClass('open-trigger')) {
          $( ".searchblock" ).slideToggle( 300, function() {
          });

          $('.searchblock').removeClass( "open-trigger" );
          $( "#search" ).removeClass('search-open');
        }

      setTimeout(function() {
      }, 200);

    })

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

      $( ".callback-block" ).slideUp( 300, function() {
      });

      $( ".searchblock" ).slideToggle( 300, function() {

      });

      $( "#search" ).toggleClass('search-open');

      $('.searchblock').toggleClass( "open-trigger" );

    });


    //-------------CLOSE-SEARCHBLOCK-ON-CLICK-INSIDE-BLOCK---------

    $(document).mouseup(function (e){
		var div = $("#search");
		if (!div.is(e.target) && div.has(e.target).length === 0) {

        var el = $('.search-field');
        if (!el.is(":focus")){
          $( "#search" ).removeClass('search-open');
          $( ".searchblock" ).slideUp( 300, function() {
          });
        // console.log('Not focused');
        }

		}
	});


  //-------------------CALLBACK----------------------------

    $( "#callback" ).click(function() {

      $( ".searchblock" ).slideUp( 300, function() {

      });

      $( ".callback-block" ).slideToggle( 300, function() {
      });

      $('.callback-block').toggleClass( "open-trigger" );


    });



    //------------------CALLBACK-CLOSE----------------------

    $(document).mouseup(function (e) {
        var container = $('.callback-block');
        if (container.has(e.target).length === 0 && container.hasClass( "open-trigger" )){

          $( ".callback-block" ).slideUp( 300, function() {
          });
        }
    });

    $( "#callback-close" ).click(function() {
      $( ".callback-block" ).slideUp( 300, function() {
      });
    });


//--------------INPUT-NUMBER-STYLING------------------------

function catalogItemCounter(field) {

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

      // if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
      // return false;
      // }

      $(this).on('keyup keypress', function(e) {
         if (e.keyCode == 8 || e.keyCode == 46) {}
         else {
           var letters=' 1234567890';
           return (letters.indexOf(String.fromCharCode(e.which))!=-1);
         }


         // if($(this).lengths == 0) {
         //   $(this).val("1");
         // }
      });

      // $(this).focusout(function(){
      //   asp = $(this).val();
      //   alert(asp);
      //   // if ($(this).val == '') {
      //   //      // $(this).val("1");
      //   //      alert('ololo');
      //   //  }
      // });

      // $(this).blur(function(){
      //     alert('Элемент foo потерял фокус.');
      //   });


      // if ($(this).val() == '') {
      //      alert('ololo');
      //  }
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
       delay: 7000,
    }
   });

   //------------------------resaurant-------------------------



});

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
        var that = $(this).parent().find('.animfind');
        $(this).parent().find('.animfind').clone().attr('id', 'animation-el').appendTo($(this).parent().find('a')[0]);

        imgFly = document.getElementById("animation-el");
        cartLabel = document.getElementById("cart_animation");

        var hScreen = "innerHeight" in window
               ? window.innerHeight
               : document.documentElement.offsetHeight;

               hScreen = hScreen / 2;


        function getOffset(el) {
          el = el.getBoundingClientRect();
          return {
            left: el.left + window.scrollX,
            top: el.top + window.scrollY
          }
        }

      var imgOffcet = getOffset(imgFly).top;
      var hCenter = getOffset(cartLabel).top;
      var hCenterHorisontal = getOffset(cartLabel).left;
      var dist = hCenter - imgOffcet;

console.log('--------------------------------------');
        console.log('imgOffcet  = ' + imgOffcet );
        console.log('hCenter = ' + hCenter);
        console.log('hScreen = ' + hScreen);
        console.log('dist= ' + dist);
console.log('--------------------------------------');

        if (dist >= hScreen) {
          dist =-dist
        }

        TweenMax.to(imgFly, 2, { x:hCenterHorisontal, y: dist, scale:0.25, opacity:0 , ease:Power4.easeInOut   });
        setTimeout(function() {
           imgFly.remove();
         }, 2000);

     		var bascket = $(".ic-cart-custom");
     		var w = that.width();
     	});

};


  //MSIE-MSEDGE-OBJECT-FIT-POLYFILL
     if ('objectFit' in document.documentElement.style === false) {
      document.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('img[data-object-fit]'), function (image) {
          (image.runtimeStyle || image.style).background = 'url("' + image.src + '") no-repeat 50%/' + (image.currentStyle ? image.currentStyle['object-fit'] : image.getAttribute('data-object-fit'));

          image.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + image.width + '\' height=\'' + image.height + '\'%3E%3C/svg%3E';
        });
      });
     }
