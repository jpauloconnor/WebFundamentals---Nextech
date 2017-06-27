

$(document).ready(function(){

	$("#hide").click(function(){
		$("#image").hide();
	});

	$("#show").click(function(){
		$("#image").show();
	});	

	$("#explode").click(function(){
		$("#image").hide("explode", {pieces: 16}, 2000);
	});

	$("#fadeIn").click(function(){
		$("#image").fadeIn(5000);
	});

	$("#fadeOut").click(function(){
		$("#image").fadeOut(5000);
	});

	$("#upDown").click(function(){
		$("#image").slideUp(2000).slideDown(1000);
	});


});
