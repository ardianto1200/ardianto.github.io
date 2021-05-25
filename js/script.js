//event pada saat link di klik
$('.page-scroll').on('click', function(){
//ambil isi href
var tujuan = $(this).attr('href');
//tangkap elemen
var elemenTujuan = $(tujuan);

//pindahkan scroll top

$('html, body').animate({
    scrollTop: elemenTujuan.offset().top - 50
}, 1500, 'easeInOutExpo');
// console.log(elemenTujuan.offset().top);

e.preventDefault();

});

// paralax about
$(window).on('load', function(){
	$('.pKiri').addClass('pKiri-go');
	$('.pKanan').addClass('pKanan-go')
});


// parallax Jumbotron
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform': 'translate(0px, '+ wScroll / 4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform': 'translate(0px, '+ wScroll / 2 +'%)'
	});

	$('.jumbotron p').css({
		'transform': 'translate(0px, '+ wScroll / 1.2 +'%)'
	});	


    // karya
	if( wScroll > $('.karya').offset().top - 600 ) {
		
		$('.karya .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.karya .thumbnail').eq(i).addClass('muncul');
			}, 450 * (i+1))

		});

	}


});