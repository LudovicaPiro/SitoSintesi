// JavaScript Document

//setTimeout(function(){jQuery('#dailyskins').fadeIn('show')}, 200);

  // navbar background color change on scroll
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll < 1300) {
      $('.nav-bar-transition').css('background','none');
    }
    
    else {
      $('.nav-bar-transition').css('background','black');
    }
  })


$(document).ready(function(){	

//cart btn click makes text appear
        $(".cartbtn").click(
                    function() {

                        $("#cartcontent-cart").delay(500).fadeIn(500,"linear" );
                    });
// purchase click opens moralist page
        $(".purchasebtn").click(
                    function() {

                        $(".cartcontent-moral").delay(500).fadeIn(500,"linear" );
                    });
        
       $(".purchasebtn").click( 
                    function() {
                                 //close the cart
                                 $("#mySidenav").css("width", "0");
                                 $("#cartcontent-cart").fadeOut(500, "linear");
                              
                                 //open moralist page
                                 $("#mySidemoral").css("width", "50%");
                                 }
                                 );
//behind the scene button in moralist page fades text out
      $(".moralbtn").click(
                    function() {
                      $(".cartcontent-moral").fadeOut(500, "linear");
                    }
                    )

// category color change on hover and background image change
			 $(".whiteHover").hover(	
			 							function(){$(".whiteHover").css({"color": "white", "border": "2px solid white" });
			 										$(".categoryDescr").css("border-top-style", "none");
                                  $(".categoryLinks").css("color", "white");
			 										},
			 							function(){$(".whiteHover").css({"color": "#F39200", "border": "2px solid #F39200"});
			 										$(".categoryDescr").css("border-top-style", "none");
                                  $(".categoryLinks").css("color", "#F39200");
			 										},  											
    						 		); 
			 $("#MAKE").hover(	
  								function(){	$("#CategoryContainer").addClass("CategoryImgFadeIn");
  											$("#CategoryContainer").css("background-image", "url('assets/images/category01.jpg')")
  										  },
    							function(){	$("#CategoryContainer").removeClass("CategoryImgFadeIn");
    										$("#CategoryContainer").css("background-image", "none")
    										}
    						 );

			 $("#LEAVE").hover(
  								function(){$("#CategoryContainer").addClass("CategoryImgFadeIn");
  											$("#CategoryContainer").css("background-image", "url('assets/images/category02.jpg')")
  										  },
    							function(){	$("#CategoryContainer").removeClass("CategoryImgFadeIn");
    										$("#CategoryContainer").css("background-image", "none")
    										}
    						 );

			 $("#SWIM").hover(
  								function(){$("#CategoryContainer").addClass("CategoryImgFadeIn");
  											$("#CategoryContainer").css("background-image", "url('assets/images/category03.jpg')")
  											},
    							function(){$("#CategoryContainer").removeClass("CategoryImgFadeIn");
    										$("#CategoryContainer").css("background-image", "none")
    										}
    						 );
			 $("#FEEL").hover(
  								function(){$("#CategoryContainer").addClass("CategoryImgFadeIn");
  											$("#CategoryContainer").css("background-image", "url('assets/images/category04.jpg')")
  											},
    							function(){$("#CategoryContainer").removeClass("CategoryImgFadeIn");
    										$("#CategoryContainer").css("background-image", "none")
    										}
    						 );
});


//Reviews//
$(".show-more a").on("click", function() {
    var $this = $(this); 
    var $content = $this.parent().prev("div.content");
    var linkText = $this.text().toUpperCase();    
    
    if(linkText === "SHOW MORE"){
        linkText = "show less";
        $content.switchClass("hideContent", "showContent", 400);
		
    } else {
        linkText = "show more";
        $content.switchClass("showContent", "hideContent", 400);
    };
	
    $this.text(linkText);
	
});


function closeNav() {
  $("#mySidenav").css("width", "0");
  $("#main-content, #footer, #nav-content").css("opacity", "1");
  $("#body").css("background-color", "black");
  $("#cartcontent-cart").fadeOut(100, "linear");

}

function closeMoral() {
  $("#mySidemoral").css("width", "0");
  $("#main-content, #footer, #nav-content").css("opacity", "1");
  $("#body").css("background-color", "black");
  $(".cartcontent-moral").fadeOut(100, "linear");
}

function openNav() {
  $("#mySidenav").css("width", "50%");
  $("#main-content, #footer, #nav-content").css("opacity", "0.2");
  $("#body").css("background-color", "rgb(0,0,0,0.8)");
}




