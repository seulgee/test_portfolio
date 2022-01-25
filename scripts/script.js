$(document).ready(function() {

   $(window).scroll(function() {

   var upArrow = $('#up-arrow')
   var filter = $('.button-group-mobile')
   var toTop = $('.to-top')

   if ($(this).scrollTop()>600)
      {
         upArrow.fadeIn(300);
         console.log('working')
      }
   else
      {
      upArrow.fadeOut(300);
      }

      if (toTop.is(":visible")) {
         if ($(this).scrollTop()>30)
            {
               filter.fadeOut(200);
               console.log('working')
            }
         else
            {
            filter.fadeIn(200);
            }
      } else {}
   });

//landing preview images hover interactions

   var design = $('#image-design')
   var tattoo = $('#image-tattoo')

   design.hover(function(){

      $( this ).toggleClass("col-2-5 col-4")
      tattoo.toggleClass("col-2-5 col-1")
      console.log('design hover end func')
      
   })

   tattoo.hover(function(){
      
      $( this ).toggleClass("col-2-5 col-4")
      design.toggleClass("col-2-5 col-1")
      console.log('tattoo hover end func')
      
   })

})

