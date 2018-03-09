$(document).ready(function () {

//----------------------MENU------------------------------

  $('.menu_icon, .close').on('click', function(){
  	$('.menu-mobile--itself').toggleClass('show');
    $('body').toggleClass('body-overflow');

  //  $('.menu-mobile--itself').addClass( "open-trigger" );
  })

  // $("body").click(function(e) {
  // 	$('body').toggleClass('body-overflow');
  // });


//-------------CLOSE-CART-ON-CLICK-INSIDE-BLOCK---------

$(document).mouseup(function (e) {
    var container = $('.menu-mobile--itself');
    if (container.has(e.target).length === 0){
      //  container.hide();
      $('.menu-mobile--itself').removeClass('show');
      $('body').removeClass('body-overflow');
    }
});

//---------------SEARCHBLOCK-----------------------------

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
});
