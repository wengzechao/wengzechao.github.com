$(document).ready(function() {
	$(".ui-step1-item").click(function(){
		var img=$(this).find("img").attr("src");
		$("#ui-show").hide();
		$("#ui-hide-img").attr("src",img);
		$("#ui-hide").fadeIn(800);
    });
    $("#ui-hide").click(function(){
		$(this).fadeOut(800,function(){
			$("#ui-show").show();
        });
    });
    $("#ui-step2").find("li").click(function(){
		$(this).css("background-color","#808080");
		$("#ui-step2").find("li").not(this).css("background-color","#FFFFFF");
        $("#ui-step2-content").html($(this).val());
    }); 

    var child = document.getElementById('ui-step3-list-item'),
        $item=$(child.cloneNode(true));

    var num = $(".ui-step3-list").length;

    $("button").click(addData);
    $(".ui-step3-list-delete").click(deleteData);

    function addData(){
        
    	var $newItem=$item.clone();
        $newItem.children("div.ui-step3-list-index").text(num+1);
        $newItem.children("div.ui-step3-list-delete").bind("click",deleteData);
        if(num==0){
	        $("#ui-nolist").hide(function(){
	        	$("#ui-step3-data").append($newItem);
	        });
	    }
	    $("#ui-step3-data").append($newItem);
        num++;
    }

     function deleteData(){
        num--;
        $("#ui-step3-data").css("margin-top","15px");
        $(this).parent().hide(function(){
            $(this).remove();
            if(num==0){
                $("#ui-nolist").show();
            }
            for (var i=0;i<num;i++) {
                $(".ui-step3-list-index").eq(i).text(i+1);
            }
        });
    }
});
    
   