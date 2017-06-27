//alert("Hey. It's working!");

$(document).ready(function(){

	$("#add").on("click", function(){


		var song = $("#song").val();
	
		var listItem = "<li>" + song + "</li>";
	
		$("#song-list").append(listItem);

		$("#song").val("");
	})

	
});