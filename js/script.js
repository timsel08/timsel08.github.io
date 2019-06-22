// event pada saat link di klik
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	//pindahkan scroll
	$('html').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1500, 'easeInOutExpo');

	e.preventDefault();
	
});


// parallax
// about
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});


$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// jumbotron
	$('.jumbotron img').css ({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css ({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css ({
		'transform' : 'translate(0px, '+ wScroll +'%)'
	});


	// portfolio
	if(wScroll > $('.portfolio').offset().top - 150) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 250 *(i+1));
		});

		
	}
});






