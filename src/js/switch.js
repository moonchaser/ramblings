$(document).ready(function(){
    $("#timeMenu").change(function(){
	window.location.href = $(this).find("option:selected").attr("id") + '.html';
    });
});
