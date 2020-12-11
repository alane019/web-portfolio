$(document).ready(function() {


	console.log("script.js");


	$("#hour-9 .description").val(localStorage.getItem("hour-9"));
	$("#hour-10 .description").val(localStorage.getItem("hour-10"));
	$("#hour-11 .description").val(localStorage.getItem("hour-11"));


	// listen for save button clicks
	$(".nav-link-div-container").on("click", function() {
	
		if($(this).hasClass("currentTab")){ return false;  }
		else if($(this).attr('id') == 'contact') {window.location.href = "contact.html"}
		else if($(this).attr('id') == 'portfolio') {window.location.href = "portfolio.html"}
		else if($(this).attr('id') == 'index') {window.location.href = "index.html"}
		
	});

  
  });
  