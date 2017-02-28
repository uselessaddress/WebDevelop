$(function(){
	$("#menuList").on("click","a",function(){

		// if($(this).hasClass("btn-active")){
		// 	$("#expandZone #closeBtn").click();
		// 	return false;
		// }

		var curIndex = $(this).index(); //得到第几个一级菜单被点击
		console.log(curIndex);
		var mlValue = "-" + curIndex*100 + "%"; //显示的二级菜单的margin-left
		
		if($("#expandZone").hasClass("active")){
			$("#expandZone .expdiv").animate({marginLeft:mlValue});
		}
		else{
			$("#expandZone .expdiv").css({marginLeft:mlValue});
			$("#expandZone").animate({height:"130px"}).addClass("active");
		}
		// $(this).addClass("btn-active").siblings().removeClass("btn-active");
		return false;
	});

	$("#expandZone #closeBtn").on("click",function(){
		$("#expandZone").animate({height:0},function(){
			$(this).removeClass("active");
			// $("#menuList .btn-active").removeClass("btn-active");
		});
		return false;
	});
});