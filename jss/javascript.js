$(document).ready(function(){
	$(".menubar").click(function () {
		$('.navbar .menu,.menubar i').toggleClass("active");
		$('.menubar i').toggleclass("active");
	});
	$(".scroll-up-btn").click(function () {
		$('html').animate({scrollTop:0});
	});
	$(window).scroll(function () {
		if(this.scrollY > 20){
			$('.navbar').addClass(" sticky");
		}else{
			$('.navbar').removeClass(" sticky");
		}
		if(this.scrollY>100){
			$('.scroll-up-btn').addClass("show");
		}else{
			$(".scroll-up-btn").removeClass("show");
		}
	});
});

