// Nav script // 

$( document ).ready(function() {
  console.log( 'ready!' );
	
	$('.main-nav a').on( "click", function() {
		
		var t = $( this ).text();
				t = t.toLowerCase();

			  console.log( t );

		
				$('.caption').removeClass('caption-flex').addClass('hidden');
				$('.'+t).removeClass('hidden').addClass('caption-flex');


				
				$('.main-nav a').removeClass('border-bottom');
				$(this).addClass('border-bottom');
		
		return false;
	});
	
	$('.logo a').on( "click", function() {
		
				$('.caption').removeClass('caption-flex').addClass('hidden');
				$('.main-nav a').removeClass('border-bottom');
		
		return false;
	});
});

// Background movement // 

$(document).ready(function() {
	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	$(".wrapper").mousemove(function(e){
	          var pageX = e.pageX - ($(window).width() / .5);
	          var pageY = e.pageY - ($(window).height() / .5);
	          var newvalueX = width * pageX * -6 - .5;
	          var newvalueY = height * pageY * -6 - .5;
	          $('.wrapper').css("background-position", newvalueX+"px     "+newvalueY+"px");
	});
});


$(document).ready(function(){

		var mouse = {x:0,y:0},
            offset = {x:-500, y:-300};
        $('.inline').on('mouseenter', function() {
            var src = $(this).attr('src');
            $('.popover').html('<img src="'+src+'">').show();
            offset.x = -$('.popover').width()/2;
            clearTimeout(this.timer);
        }).on('mouseleave', function() {
            this.timer = setTimeout(function() {
                $('.popover').hide();
            }, 10);
        });
        document.addEventListener('mousemove', function(e){
            mouse.x = e.pageX;
            mouse.y = e.pageY;
            $('.popover').css({
                left: (mouse.x + offset.x) + 'px',
                top: (mouse.y + offset.y) + 'px',

                });
        });

});
