$(document).ready(function () {
    $window = $(window);
    
    $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {                         
        var yPos = -($window.scrollTop() / $scroll.data('speed')); 
         
        // background position
        var coords = '50% '+ yPos + 'px';
 
        // move the background
        $scroll.css({ backgroundPosition: coords });    
      }); // end window scroll
   });  // end section function

  //Might as well use this to init my popovers as well :D
  $popElems = $(".hasPop"); //cache elements with popovers
  $popElems.popover({ trigger: "click", html: true });
  $popElems.find("a").click(function (evt) {$(".hasPop").popover('hide');});
});