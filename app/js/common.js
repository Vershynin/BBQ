$(document).ready(function () {


//-------------DISABLE-ENTER-ON-SUBMIT-DELIVERY-MODALS--------------------------

$('#test_lunch, #subscribe-form').on('keyup keypress', function(e) {
var keyCode = e.keyCode || e.which;
	if (keyCode === 13) {
		e.preventDefault();
		return false;
	}
});

//--------------phone-numbers-slider-----------------------------------------


   function phone_slider() {
      slider_phone1();
  }

  function slider_phone1() {
     // $('#slider_image1').slideDown(500);
     $('#slider_phone1').fadeIn(500);
      $('#slider_phone2').css('display', 'none');
      $('#slider_phone3').css('display', 'none');

      setTimeout(slider_phone2, 3500);
  }

  function slider_phone2() {
      $('#slider_phone1').css('display', 'none');
      //$('#slider_image2').slideDown(500);
      $('#slider_phone2').fadeIn(500);
      $('#slider_phone3').css('display', 'none');

      setTimeout(slider_phone3, 3500);
  }

  function slider_phone3() {
      $('#slider_phone1').css('display', 'none');
      $('#slider_phone2').css('display', 'none');
      $('#slider_phone3').fadeIn(500);
      //$('#slider_image3').slideDown(500);

      setTimeout(slider_phone1, 3500);
  }

  phone_slider();



  //----------------------MENU------------------------------

    $('.menu_icon, .close').on('click', function(){
      $('.menu-mobile--itself').toggleClass('show');
      $('.main-overlay').toggleClass('overlayed');
      $("html").toggleClass('cartoverflow');

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
        $("html").removeClass('cartoverflow');
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

//not('.order-name')

// if($(this).not('.order-name')) {
//   alert(123);
// }






   // document.querySelectorAll('.order-name').forEach(function() {
   //    $(this).on('keyup keypress', function(e) {
   //       if (e.keyCode == 8 || e.keyCode == 46) {}
   //       else {
   //        var letters=' 1234567890';
   //        return (letters.indexOf(String.fromCharCode(e.which))!=-1);
   //       }
   //    });
   //
   //  });



		}

catalogItemCounter('.fieldCount');

//document.querySelectorAll('.fieldCount').forEach(function() {
/* Only works in Blink browsers and Firefox 50+
   no Safari or IE/Edge support */
// co
   $(this).find('.fieldCount').focus(function(e) {

     console.log(this);
      // if( $(this).hasClass('.fieldCount')) {
      //      console.log('hasClass, match');
      //   if (e.keyCode == 8 || e.keyCode == 46) {}
      //   else {
      //     var letters='1234567890';
      //     return (letters.indexOf(String.fromCharCode(e.which))!=-1);
      //   }
      // }


      this.onkeypress= function(event) {

      //  console.log('hasClass, match')

       event= event || window.event;
       if (event.charCode && (event.charCode < 49 || event.charCode > 57))
       // проверка на event.charCode - чтобы пользователь мог нажать backspace, enter, стрелочку назад...
        return false;
      };


   });

   $(this).find('.fieldCount').blur(function(){
       inputValue = $(this).val();
       if( inputValue < 1) {
         $(this).val(1);
       }
   });


 //});

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

      //  $(this).parent().find('.animfind').attr('id', 'animation-el');
        imgFly = document.getElementById("animation-el");
        cartLabel = document.getElementById("cart_animation");



          var c = imgFly.getBoundingClientRect()



        //  console.log('top:' + c.top + ' left: ' + c.left +'');


        imgFly.style.position = "fixed";
        imgFly.style.top = c.top + "px";
        imgFly.style.left = c.left + "px";


          var d = cartLabel.getBoundingClientRect()
        //  console.log('top:' + d.top + ' left: ' + d.left +'');

        //  console.log(c.top);



// console.log('--------------------------------------');
//         console.log('d.top->cartLabel - ' + d.top);
//         console.log('d.left->cartLabel - ' + d.left);
//         console.log('-------------------------');
//         console.log('c.top->imgFly - ' + c.top);
//         console.log('c.left->imgFly - ' + c.left);
//
// console.log('--------------------------------------');





// var hScreen = "innerHeight" in window
//        ? window.innerHeight
//        : document.documentElement.offsetHeight;
//
//        hScreen = (hScreen / 2);



          // TweenMax.to(imgFly, 2, { x:d.left, y:d.top, scale:0.25, opacity:0 , ease:Power0.easeNone   });
          // setTimeout(function() {
          //    imgFly.remove();
          //  }, 2000);





          //
          // setTimeout(timeoutFunc, 150);
          //
          //
          //
          //
          //
          // function timeoutFunc(){
          //     imgFly.style.top = d.top + "px";
          //     imgFly.style.left = d.left + 60 + "px";
          //   setTimeout(timeoutRemoveFunc, 150);
          //   function timeoutRemoveFunc(){
          //     imgFly.remove();
          //   }
          // }



          setTimeout(timeoutFunc, 50);
          function timeoutFunc(){
            imgFly.style.top = d.top - 50 + "px";
            imgFly.style.left = d.left + 100 + "px";
            imgFly.style.opacity = 1;
            imgFly.style.visibility = "visible";
            imgFly.style.transform = "scale(0.25)";
            //transform: scale(0.7);
            imgFly.style.transition = "1.5s";
            //transition:  3s;
            setTimeout(timeoutRemoveFunc, 1500);
            function timeoutRemoveFunc() {
              imgFly.remove();
            }
          }

      //  function clickFunc(btnF) {
          //btnF.id = 'btn1';
          //var btnId = document.getElementById('btn1');
          //var c = btnId.getBoundingClientRect()
          //console.log('top:' + c.top + ' left: ' + c.left +'');

          //var blCart =  document.getElementById('blockCart');

        //  var d = blCart.getBoundingClientRect()





      //  }

        // var hScreen = "innerHeight" in window
        //        ? window.innerHeight
        //        : document.documentElement.offsetHeight;
        //
        //        hScreen = hScreen / 2;


        // function getOffset(el) {
        //   el = el.getBoundingClientRect();
        //   return {
        //     left: el.left + window.scrollX,
        //     top: el.top + window.scrollY
        //   }
        // }

      // var imgOffcet = getOffset(imgFly).top;
      // var hCenter = getOffset(cartLabel).top;
      // var hCenterHorisontal = getOffset(cartLabel).left;
      // var dist = hCenter - imgOffcet;

// console.log('--------------------------------------');
//         console.log('imgOffcet  = ' + imgOffcet );
//         console.log('hCenter = ' + hCenter);
//         console.log('hScreen = ' + hScreen);
//         console.log('dist= ' + dist);
// console.log('--------------------------------------');

        // if (dist >= hScreen) {
        //   dist =-dist
        // }

        // TweenMax.to(imgFly, 2, { x:hCenterHorisontal, y: dist, scale:0.25, opacity:0 , ease:Power4.easeInOut   });
        // setTimeout(function() {
        //    imgFly.remove();
        //  }, 2000);

     		//var bascket = $(".ic-cart-custom");
     		//var w = that.width();
     	});

};


  //---------------------MSIE-MSEDGE-OBJECT-FIT-POLYFILL----------------------------

     if ('objectFit' in document.documentElement.style === false) {
      document.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('img[data-object-fit]'), function (image) {
          (image.runtimeStyle || image.style).background = 'url("' + image.src + '") no-repeat 50%/' + (image.currentStyle ? image.currentStyle['object-fit'] : image.getAttribute('data-object-fit'));

          image.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + image.width + '\' height=\'' + image.height + '\'%3E%3C/svg%3E';
        });
      });
     }

     //------------------swiper buttons-disable- anchor top------------------

$('.swiper-button-prev, .swiper-button-next').click(function(e) {

  var current = $(this);

    if ( current.hasClass('swiper-button-disabled') ) {
      e.stopPropagation();
    }
  });


  //--------------radioblock-checked----------------------------------------

  //$("#item").removeClass();

  // if ($("#delivery-intime:checked")) {
  //   alert('check');
  // };



$('#delivery-intime').click(function() {
   if($(this).is(':checked')) {

     $('#cart-datepicker, #cart-timepicker').removeClass('radio-disabled');
   }
});


$('#delivery-fast').click(function() {
   if($(this).is(':checked')) {
      $('#cart-datepicker, #cart-timepicker').addClass('radio-disabled');
   }

});
