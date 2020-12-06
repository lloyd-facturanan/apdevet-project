$(document).ready(function(){

	// Show / Hide Main Navigation on Small Devices 
	$("#menu-btn").click(function(){
		$("#hidden-nav").slideToggle('slow');
	});

	// Hide Main Navigation when you click on it
	$(".test").click(function(){
		$("#hidden-nav").slideUp(500);
	})
});