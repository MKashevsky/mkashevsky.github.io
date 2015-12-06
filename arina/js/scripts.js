$(document).ready(function(){
  $("#info .collapse-toggle").on("click", function(){
	if ($(this).hasClass("toggle-off")){
	  $(this).removeClass("toggle-off").addClass("toggle-on");
	  $(this).find("i").removeClass("icon-chevron-right").addClass("icon-chevron-down");
	} else {
	  //alert("2");
	  $(this).removeClass("toggle-on").addClass("toggle-off");
	  $(this).find("i").removeClass("icon-chevron-down").addClass("icon-chevron-right");
	}
  });
});