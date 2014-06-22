$(document).ready(function(){
  // siteNavIndicator();
  if($('.pageNav').length > 0){
    pageNav();
  }
});

function pageNav(){
  var $pageNav = $('.pageNav'),
      activeSection = $pageNav.find('a:first').attr('href').slice(1);

  pageNavSetActiveStates();

  $pageNav.find('a').on('click',function(e){
    // e.preventDefault();

    activeSection = $(this).attr('href').slice(1);
    // $('.pageNav .active, .pageNavSection.active').removeClass('active');
    $('.pageNav .active').removeClass('active');
    $(this).addClass('active');

    pageNavSetActiveStates();
  });

  function pageNavSetActiveStates(){
    $pageNav.find($('a[href$="' + activeSection + '"]')).addClass('active');
    // $('.pageNavSection#' + activeSection).addClass('active');
  }
}
function setGmap(){
  var mapOptions = {
    center: new google.maps.LatLng(51.1348986,5.4256432),
    zoom: 15
  };
  var map = new google.maps.Map(document.getElementById("gmap"),
      mapOptions);
}

function siteNavIndicator(){
  var navInd = $.navIndicator({
    //options
  });
  // navInd.init();
}