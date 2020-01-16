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

//Hover category btn//
$(document).ready(function(){	
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



//Popup carello//
function openNav() {
	document.getElementById("mySidenav").style.width = "50%";
	document.getElementById("main-content").style.opacity = "0.2";
	document.getElementById("footer").style.opacity = "0.2";
	document.getElementById("nav-content").style.opacity = "0.2";
	document.body.style.backgroundColor = "rgb(0,0,0,0.8)";
	document.getElementById("nav-content").style.backgroundColor = "rgb(0,0,0,0.8)";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
  	document.getElementById("main-content").style.opacity = "1";
	document.getElementById("footer").style.opacity = "1";
	document.getElementById("nav-content").style.opacity = "1";
	document.body.style.backgroundColor = "black";
	document.getElementById("nav-content").style.backgroundColor = "black";
}


//Popup Moral//
function openMoral() {
	document.getElementById("mySidemoral").style.width = "50%";
	document.getElementById("main-content").style.opacity = "0.2";
	document.getElementById("footer").style.opacity = "0.2";
	document.getElementById("nav-content").style.opacity = "0.2";
	document.body.style.backgroundColor = "rgb(0,0,0,0.8)";
	document.getElementById("nav-content").style.backgroundColor = "rgb(0,0,0,0.8)";
}

function closeMoral() {
	document.getElementById("mySidemoral").style.width = "0";
  	document.getElementById("main-content").style.opacity = "1";
	document.getElementById("footer").style.opacity = "1";
	document.getElementById("nav-content").style.opacity = "1";
	document.body.style.backgroundColor = "black";
	document.getElementById("nav-content").style.backgroundColor = "black";
}



