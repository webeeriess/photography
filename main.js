// animate smooth scoll
$('#view-work').on('click',function(){
	const images = $('#image').position().top;

	$('html,body').animate(
	  {
	  	scrolltop: images
	  },
	  900
	);
});