$(document).ready(function () {

  $('.menu_icon, .close').on('click', function(){
  	$('.menu-mobile--itself').toggleClass('show');
    $('body').toggleClass('body-overflow');

    $('.menu-mobile--itself').addClass( "open-trigger" );
  })


  $( "#search" ).click(function() {
    $( ".searchblock" ).slideToggle( 300, function() {
    });

    $( "#search" ).toggleClass('search-open');

    $('.searchblock').addClass( "open-trigger" );
  });


  $( "#callback" ).click(function() {
    // alert('wwww');
    //$( ".callback-block" ).show(300);
    $( ".callback-block" ).slideDown( 300, function() {
    });

    $('.callback-block').addClass( "open-trigger" );
    //$(“.class”).not(this)
  });

});
