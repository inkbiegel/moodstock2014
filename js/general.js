$(document).ready(function(){
  // siteNavIndicator();
  if($('.pageNav').length > 0){
    pageNav();
  }
  if($('#gmap').length > 0){
    setGmap();
  }
});

function pageNav(){
  var $pageNav = $('.pageNav'),
      pageNavLinks = [],
      activeSectionNr = 1;

  $pageNav.find('a').on('click',function(e){
    e.preventDefault();

    activeSectionNr = $(this).data('link');
    $('.pageNav .active, .pageNavSection.active').removeClass('active');
    $(this).addClass('active');
    $('.pageNavSection:nth-of-type(' + activeSectionNr + ')').addClass('active');
  });
}
function setGmap(){
  var msLatlng = new google.maps.LatLng(51.134729, 5.426029);
  var mapOptions = {
    center: new google.maps.LatLng(51.135167, 5.420879),
    zoom: 15
  };

  var map = new google.maps.Map(document.getElementById("gmap"), mapOptions);

  var marker = new google.maps.Marker({
      position: msLatlng,
      map: map,
      title: 'Moodstock',
      animation: google.maps.Animation.DROP
  });
}

function siteNavIndicator(){
  var navInd = $.navIndicator({
    //options
  });
  // navInd.init();
}