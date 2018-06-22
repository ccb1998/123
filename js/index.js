$(function() {
	//	ctrl+shift+f
	//	获取屏幕的宽高
	var nowpage = 0;
	//	当前页数
	var width = window.innerWidth;
	var height = window.innerHeight;

	$(".content").width(width);
	$(".content").height(4 * height);

	$(".page").width(width);
	$(".page").height(height);
	//不是jquery自带的，是引入的插件
	//手指触屏滑动的事件

	$(".content").swipe({
		swipe: function(event, direction, distance, duration, fingerCount) {
			if(direction == "up") {
				nowpage++;
			}
			if(direction == "down"){
				nowpage--
			}
			if(nowpage > 3)
			{
				nowpage=3
			}
			else if (nowpage<0){
				nowpage=0;
			}

			$(".content").animate({
				top: -nowpage * 100 + "%"
			}, {
				duration: 400,
				complete: function() {
					if(nowpage == 1) {
						$(".page2-farm").fadeIn(2000, function() {
							$(".page2-it").fadeIn(2000)
						})
					}
					if(nowpage==2){
						$(".page3-et").fadeIn(2000);
						$(".page3-lt").fadeIn(3000);
						$(".page3-bus").animate({left:"-100%"},{duration:2000});
						$(".page3-human").animate({left:"50%"},{duration:3000,complete:function(){
							$(".page3-bus").fadeOut("slow");
							$(".page3-station").fadeOut("slow");
							$(".page3-et").fadeOut("slow");
							$(".page3-human").fadeOut("slow");
							$(".page3-lt").fadeOut("slow",function(){
								$(".page3-wall").fadeIn("slow");
								$(".page3-human2").fadeIn("slow",function(){
									$(".page3-space").animate({width:"30%"},{duration:400,complete:function(){
										$(".page3-wheretxt").animate({width:"55%"},{duration:400})
									}})
								})
							});
							
						}});
					}
				}
			})
		}
	});
	//	animate({要做的动画效果},{duration:动画时长,comlete:动画执行完了要做的事情})
	$(".page1-Building").fadeIn(2000, function() {
		$(".page1-flight").animate({
			width: "65%"
		}, {
			duration: 2000
		})
	});
	
	
	

})

/*$(document).ready(function(){
	
})*/

//等文档完成之后再执行js代码