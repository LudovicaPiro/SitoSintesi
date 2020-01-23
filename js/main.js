// JavaScript Document


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

//variables
//this list has to be completed with all the page names
var listTour = ["01-pizza", "02-pizza"];
var pageName;

console.log("dd");

$(document).ready(function(){	

pageName= location.pathname.substring(location.pathname.lastIndexOf("/")+1);
pageName= pageName.substring(0,pageName.lastIndexOf("."))
console.log(pageName);

CheckCartIcon();
FillCart();

// this function checks if the cart is full or empty and changes cart icon
function CheckCartIcon() { 
              var empty= true;

              for (var i = 0; i < listTour.length; i++) {
                                                            if (localStorage.getItem(listTour[i])== "true") 
                                                                { 
                                                                  console.log("c'è" + listTour[i]);
                                                                  empty=false;
                                                                }
                                                        }

            // Let's check if we are in the homepage!

            var pathImgFull="../assets/images/icon-backpack-full.png";
            var pathImgEmpty ="../assets/images/icon-backpack.png";

            if(pageName=="index")
            {
              pathImgFull="assets/images/icon-backpack-full.png";
              pathImgEmpty="assets/images/icon-backpack.png";
            }


              if(empty== true) {
                $("#icon-backpack").attr('src',pathImgEmpty);}
              else{$("#icon-backpack").attr('src',pathImgFull);}

}


function FillCart() {
         for (var i = 0; i < listTour.length; i++) { 
            if (localStorage.getItem(listTour[i])== "true") 
                                                                { 
                                                                  console.log("c'è" + listTour[i]);
                                                                  $("#cartelement-"+listTour[i]).removeClass("cartelement-testclass");
                                                                }
                                                                else {
                                                                  console.log("non c'è" + listTour[i]);
                                                                  $("#cartelement-"+listTour[i]).addClass("cartelement-testclass");

                                                                      }
            }
}


/*$(".cartelement-x").click(function(){
                                        if ($("#cartcontent-test, #cartcontent-test1").hasClass('cartelement-testclass')) 
                                          {$("#icon-backpack").attr('src',"../assets/images/icon-backpack.png");} 

                                        else {$("#icon-backpack").attr('src',"../assets/images/icon-backpack-full.png");}

})*/

//add to cart btn unhides elements
$("#addCartbtn").click(function() {
                                    
                                    localStorage.setItem(pageName, "true");
                                    CheckCartIcon();
                                    FillCart();

                                  }

                      ); 

//remove elements from cart
$(".cartelement-x").click(function() {
  var xSuffix=$(this).attr('id').substring($(this).attr('id').lastIndexOf("_")+1);
                                      localStorage.removeItem(xSuffix);
                                      CheckCartIcon();
                                      FillCart();
                                    }
                           );

//cart btn click makes text appear
        $(".cartbtn, #addCartbtn").click(
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
  $("body").css("background-color", "black");
  $("#cartcontent-cart").fadeOut(100, "linear");

}

function closeMoral() {
  $("#mySidemoral").css("width", "0");
  $("#main-content, #footer, #nav-content").css("opacity", "1");
  $("body").css("background-color", "black");
  $(".cartcontent-moral").fadeOut(100, "linear");
}

function openNav() {
  $("#mySidenav").css("width", "50%");
  $("#main-content, #footer, #nav-content").css("opacity", "0.2");
  $("body").css("background-color", "rgb(0,0,0,0.8)");
}




