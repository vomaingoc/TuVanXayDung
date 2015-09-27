$(function () {
    var pull = $('#pull');
    btnClose = $('#btnClose');
    menu = $('.navx > ul');
    navx = $('.navx');
    menuli = $('.navx > ul > li');
    menuli_ul = $('.navx > ul > li>ul');
	$(".closeIco").hide();
    menuHeight = menu.height();
	var btnOpenS = $('.openIco');
	var btnCloseS= $('.closeIco');

    $(btnOpenS).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
		btnCloseS.show();
		btnOpenS.hide();
    });
	$(btnCloseS).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
 		btnOpenS.show();
		btnCloseS.hide();
    });
    $(btnClose).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });
    var w1 = $(window).width();
    if (w1 < 768) {
        navx.addClass("navxMb");
        menuli_ul.addClass('dropdown');
        menuli.on('click', function () {
		if ($(this).find('ul.dropdown').is(':hidden')) {
			$(this).find('ul.dropdown').slideToggle();
			$(this).find('ul.dropdown').addClass('open');
		}
		else {
			$(this).find('ul.dropdown').slideToggle();
			//$(".closeIco").hide();
			return;
		}
        });
    }
	
	if (w1 > 768){
		$( ".navx>ul>li>ul" ).addClass("wow fadeInUp");
	$( ".navx ul ul ul" ).addClass("wow fadeInUp");
	}
     
	$( ".navx>ul>li" ).has( "ul" ).addClass("parent");
	
	$( ".list-media article" ).addClass("wow fadeInUp");
	 $( ".pagination a, .pagination b" ).addClass("wow rotateInUpLeft");
  
	  $(".search-icon").on('click', function (e) {
        e.preventDefault();
        $(".search-h").slideToggle();
 
 
    });
 
	
	
});

$(function () {
	 
	$( ".navy >ul > li" ).append("<i class='fa fa-caret-right'></i>");
	
 
        var w = $(window).width();
        if (w < 768) {
			$( ".navy .tt-side" ).append("<i class='fa fa-plus-square-o'></i>");
        }
 		 arrowplus = $('.navy .tt-side i.fa');
		 $(arrowplus).on('click', function (e) {
         
        $( ".navy  ul" ).slideToggle();
    });
});
 
 


//slider nivo
 $(window).load(function() {
	$('#slider').nivoSlider();
});

//slider nivo 2
 $(window).load(function() {
	$('#slider2').nivoSlider({	
	 controlNavThumbs: true,
        pauseOnHover: true,
		controlNav: true,
	});
});
 
 //back top
  (function($){
	$.fn.UItoTop = function(options) {

 		var defaults = {
			text: '',
			min: 500,			
			scrollSpeed: 800,
  			containerID: 'back-top',
  			containerClass: 'fa fa-chevron-up',
			easingType: 'linear'
					
 		};

 		var settings = $.extend(defaults, options);
		var containerIDhash = '#' + settings.containerID;
		var containerHoverIDHash = '#'+settings.containerHoverID;
			
		$('body').append(' <a href="#" id="'+settings.containerID+'" class="'+settings.containerClass+'" >'+settings.text+'</a> ');		
		
		$(containerIDhash).hide().click(function(){			
			$('html, body').stop().animate({scrollTop:0}, settings.scrollSpeed, settings.easingType);
			$('#'+settings.containerHoverID, this).stop().animate({'opacity': 0 }, settings.inDelay, settings.easingType);
			return false;
		})
		
								
		$(window).scroll(function() {
			var sd = $(window).scrollTop();
			if(typeof document.body.style.maxHeight === "undefined") {
				$(containerIDhash).css({
					'position': 'absolute',
					'top': $(window).scrollTop() + $(window).height() - 50
				});
			}
			if ( sd > settings.min ) 
				$(containerIDhash).stop(true,true).fadeIn(600);
			else 
				$(containerIDhash).fadeOut(600);
		});
};
})(jQuery);

 
//popup search
 
 var notH = 1,
$pop = $('.popupSearch').hover(function () { notH ^= 1; });

  $(document).on('mouseup keyup', function (e) {
	  if (notH || e.which == 27) $pop.stop().hide();
  });
  $('.popupSearch').hide();
$(document).ready(function () {
  $('.trigger').click(function () {
	  $('.popupSearch').slideToggle();  
  });
  $('.btn-close').click(function () {
	  $('.popupSearch').slideUp('fast');
  });
}); 

function FloatTopDiv()   
    {   
        startLX = ((document.body.clientWidth -MainContentW)/2)-LeftBannerW-LeftAdjust , startLY = TopAdjust+80;   
        startRX = ((document.body.clientWidth -MainContentW)/2)+MainContentW+RightAdjust , startRY = TopAdjust+80;   
        var d = document;   
        function ml(id)   
        {   
            var el=d.getElementById?d.getElementById(id):d.all?d.all[id]:d.layers[id];   
            el.sP=function(x,y){this.style.left=x + 'px';this.style.top=y + 'px';};   
            el.x = startRX;   
            el.y = startRY;   
            return el;   
        }   
        function m2(id)   
        {   
            var e2=d.getElementById?d.getElementById(id):d.all?d.all[id]:d.layers[id];  
            e2.sP=function(x,y){this.style.left=x + 'px';this.style.top=y + 'px';};   
            e2.x = startLX;   
            e2.y = startLY;   
            return e2;   
        }   
        window.stayTopLeft=function()   
        {   
            if (document.documentElement && document.documentElement.scrollTop)   
                var pY =  document.documentElement.scrollTop;   
            else if (document.body)   
                var pY =  document.body.scrollTop;   
             if (document.body.scrollTop > 30){startLY = 3;startRY = 3;} else  {startLY = TopAdjust;startRY = TopAdjust;};   
            ftlObj.y += (pY+startRY-ftlObj.y)/16;   
            ftlObj.sP(ftlObj.x, ftlObj.y);   
            ftlObj2.y += (pY+startLY-ftlObj2.y)/16;   
            ftlObj2.sP(ftlObj2.x, ftlObj2.y);   
            setTimeout("stayTopLeft()", 1);   
        }   
        ftlObj = ml("divAdRight");   
        //stayTopLeft();   
        ftlObj2 = m2("divAdLeft");   
        stayTopLeft();   
    }   
    function ShowAdDiv()   
    {   
        var objAdDivRight = document.getElementById("divAdRight");   
        var objAdDivLeft = document.getElementById("divAdLeft");     
        if (document.body.clientWidth < 1000)   
        {   
            objAdDivRight.style.display = "none";   
            objAdDivLeft.style.display = "none";   
        }   
        else   
        {   
            objAdDivRight.style.display = "block";   
            objAdDivLeft.style.display = "block";  
            FloatTopDiv();   
        }   
    }

document.write("<script type='text/javascript' language='javascript'>MainContentW = 1050;LeftBannerW = 160;RightBannerW = 160;LeftAdjust = 20;RightAdjust = 20;TopAdjust = 250;ShowAdDiv();window.onresize=ShowAdDiv;;<\/script>");
 