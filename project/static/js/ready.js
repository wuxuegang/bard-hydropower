/**
 * layout.js
 *
 * initialize the interface between UI and business logic
 */

/**
 * Document On-Ready Listener: set the buttons and messages to initial state
 */
$(document).on("ready", function() {

	$("#about-btn").click(function() {
		$("#aboutModal").modal("show");
		$(".navbar-collapse.in").collapse("hide");
		return false;
	});
	
	$('.btn-goToDrawing').click(function(){
		$('#tabStep1').trigger('click');
	});
	$('.btn-goToParams').click(function(){
		$('#tabStep2').trigger('click');
	});
  
  // build the message control init
  //messageControl.init(map);
  //messageControl.onDrawStart();
  
  // set up the buttons
  buttonControl.init();
	
	// set up the parameter control
	paramControl.init();
	
	// set up the draw control
	drawControl.initDrawListeners(map);
	
	// make sure things are hidden
	$(".gp-msg").hide();
	//$("#site-tab-results").hide();
	
	console.log("document is ready");
	console.log("*****************************");
});

/**
 * Document On-Load Listener: when everything is ready, remove the loading screen
 */
$(document).on("load", function() {
	$("#loading").hide();
	console.log("window is loaded");
});