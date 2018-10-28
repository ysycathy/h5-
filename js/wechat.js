//jquery基本语法：$(slect).action()
//1.$定义jquery
//2.slect为选择器，完全兼容四种选择器
//3.action为要执行的函数

//记录当前页面
var nowpage = 0;
//获取屏幕的宽高
var WD = window.innerWidth;
var HE = window.innerHeight;

//计算出最外层div的宽高
$(".container").width(WD);
$(".container").height(HE*4);

//计算每个页面的宽高
$(".page").width(WD);
$(".page").height(HE);

//触控监听,监听container
$(".container").swipe({
	swipe:function(event,direction,distance,duration,fingerCount){
		//判断滑动的方向
		if(direction == "up"){
			nowpage++;
		}
		else if(direction == "down"){
			nowpage--;
		}
		
		//处理第一页和最后一页
		if(nowpage < 0){
			nowpage = 0;
		}
		if(nowpage > 3){
			nowpage = 3;
		}
		
		//滑动动画
		$(".container").animate({top:-100*nowpage+"%"},500,start())
	}
});

//第一页动画效果
//楼房淡入
$(".page1-building").fadeIn(1500,function(){
	//人变大
	$(".page1-avatar").animate({width:"70%"},2000)
});

//监听事件里面的函数封装
function start(){
	//滑到第二页
	if(nowpage == 1){
		//背景图片淡入
		$(".page2-bg").fadeIn(2000,function(){
			$(".page2-farm").fadeIn(1000,function(){
				$(".page2-it").fadeIn(1000);
			})
		});
	}
	//滑到第三页
	if(nowpage == 2){
		//场景一
		//车向左移动
		$(".page3-bus").animate({left:"-100%"},2000);
		//人追
		$(".page3-avatar").animate({right:"50%"},3000,function(){
			//场景一消失   
			$(".page3-station,.page3-avatar,.page3-title,.page3-busTitle").fadeOut("slow",function(){
				//场景一消失后场景二的房子先淡入，小人再淡入
				$(".page3-wall").fadeIn(1000,function(){
					$(".page3-teamAvatar").fadeIn(1000,function(){
						//文字变宽
						$(".page3-space").animate({width:"40%"},1000,function(){
							$(".page3-txt").animate({width:"70%"},1000);
						})
					})
				})
			});
		});
		//文字出现
		$(".page3-title").animate({left:"0%"},1000,function(){
			$(".page3-busTitle").animate({left:"0%"},1000);
		});
	}
	//第四页灯的点击事件
	var btn = document.getElementById("page4-off");
	btn.onclick = function(){
		btn.src = "img/lightOn.png";
		//场景一消失
		$(".page4-bg,.page4-title,.page4-guide").fadeOut("slow",function(){
			//场景二淡入
			$(".page4-onBg").fadeIn(1000,function(){
				$(".page4-you").fadeIn(1000)
			})
		})
	}
}

var music = document.getElementById("music");

music.onclick = function(){
	var musicPlay = document.getElementById("musicplay");
	if(musicPlay.paused){
		musicPlay.play();
		music.src='img/musicBtn.png';
	}else{
		musicPlay.pause();
		music.src='img/musicBtnOff.png';
	}
}