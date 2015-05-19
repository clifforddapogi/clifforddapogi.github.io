//<![CDATA[


$(document).ready(function() {
//fancybox
 $("ul.gallery li a").fancybox({
  'transitionIn' : 'elastic',
  'transitionOut' : 'elastic',
  'speedIn'  : 600, 
  'speedOut'  : 200, 
  'overlayShow' : false
 });

//hover effects
  function mousein(){
    $(this).fadeTo(500,1);
    return false;
  }

  function mouseout(){
    $(this).fadeTo(300,.3);
    return false;
  }

  $('ul.sociallink li a').css('opacity', .3);
  $('ul.sociallink li a').hoverIntent(mousein,mouseout);

    $('ul.gallery li a').css('opacity', .3);
  $('ul.gallery li a').hoverIntent(mousein,mouseout);
  
  $('#contact .sendButton').css('opacity', .3);
  $('#contact .sendButton').hoverIntent(mousein,mouseout);


        
        
        
});
// validate contact form
 $(function() {

 $("#contact").validate({
   rules: {
    name: {
     required: true,
     minlength: 4
    },
    
    email: {
     required: true,
     email: true
    },
    message: {
     minlength: 50
    }
   },
   messages: {
    name: {
     required: "Please enter your name",
     minlength: "Your name must consist of at least 4 characters"
    },
    password: {
     required: "Please provide a password",
     minlength: "Your password must be at least 5 characters long"
    },
    message: {
     minlength: "Your message must be at least 50 characters long",
     
    },
    email: "Please enter a valid email address"
   }
 })
  });

//]]>