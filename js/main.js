console.log("Hello, world!");

$(window).on('load', function() {
  var $preloader = $('#page-preloader'),
    $spinner = $preloader.find('.spinner');
  $spinner.fadeOut();
  $preloader.delay(350).fadeOut('slow');
});

$.backstretch([
  "img/placeholder_800x400_1.jpg",
  "img/placeholder_800x400_2.jpg",
  "img/placeholder_800x400_3.jpg"
], {
    fade: 750,
    duration: 4000
});
