$(document).ready(function(){

  if($('.pageNav').length > 0){
    pageNav();
  }
  if($('#gmap').length > 0){
    setGmap();
  }
  if($('.artistGrid').length > 0){
    artistGridOverlapFix();
  }
  if($('#ticketsOrder').length > 0){
    setTicketsOrderUrl();
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

function artistGridOverlapFix(){
  $('.artist').hover(function(){
    $(this).parents('li').toggleClass('active');
  });
}

function setTicketsOrderUrl(){
  if(window.innerWidth >= 486) {
    var url = $('#ticketsOrder').attr('src'),
        newUrl = url.replace('https://m','https://shop');

    $('#ticketsOrder').attr('src',newUrl);
  }
}