$(document).ready(function() {


	console.log("script.js");


	// nav link click listener
	$(".nav-link-div-container").on("click", function() {
	
		if($(this).hasClass("currentTab")){ return false;  }
		else if($(this).attr('id') == 'contact') {window.location.href = "contact.html"}
		else if($(this).attr('id') == 'portfolio') {window.location.href = "portfolio.html"}
		else if($(this).attr('id') == 'index') {window.location.href = "index.html"}

		
		
	});

  
  });
  