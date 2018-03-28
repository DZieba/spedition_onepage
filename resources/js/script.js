
window.onload=function(){
window.onscroll = function(){
behavior:'smooth';
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        
    
    document.getElementsByTagName('header')[0].style.height="75px";
}
else{
    
    document.getElementsByTagName('header')[0].style.height="100px";
}
}


function initMap() {
   
  var uluru = {lat: 50.291523, lng: 18.958507  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
initMap();



$('.scroll-sec').click(function(e){
  var headeHeight=$('header').outerHeight();
  
  var linkHref=$(this).attr('href');
  $('html, body').animate({
    scrollTop: $(linkHref).offset().top-headeHeight
  },500);
  e.preventDefault();
});

var slidecount=0;
function slider(){
 var current=$('#clients-list li.active');
 if(current.length==0){
   $('#clients-list li:first-child').addClass('active');
 }
 else{
   var next=current.removeClass('active').next();
   if(next.length==0){
    $('#clients-list li:first-child').addClass('active');
   }
   else{
     next.addClass('active');
   }
 }


    }
 setInterval(slider,5000);

    /*
  var current=$('#clients-list li.active');
  if(current.length==0){
   current= $('#clients-list li:first-child');
   current.addClass('active');
    
  }
  else{
    var next=current.removeClass('active').next();
    next.addClass('active');
    
  }

}*/


var $clientcarousel = $('#clients-list');
var clients = $clientcarousel.children().length;


}

