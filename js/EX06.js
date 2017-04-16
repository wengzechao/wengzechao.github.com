$(document).ready(function(){
	$(".ui-box-top-item").click(function(){
		$(this).show(item);
	});
	$(".ui-box-bottom-item").click(function(){
		$(this).show();
	});
});
function item{
	$(this).width("600px");
	$(this).height("600px");
};