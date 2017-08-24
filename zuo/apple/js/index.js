$(document).ready(function(){
	$(window).resize(function(){
		let width=$(window).width();
		if(width<=735){
			//先清除事件，防止多次触发click事件
			$('.banner > .small-screen > .nav1 > a').eq(0).off().click(function(){
				$(this).toggleClass('on');//变为×
				$('html,body').toggleClass('hidden');//没有滚动条,占满全屏
				$('.banner > .small-screen>ul ').slideToggle(600);//ul出现或消失。通过高度变化
				$('.banner > .small-screen>ul >li').toggleClass('active');//li变化，呈现透明度和波浪效果
			});
			$('.mincolumn  div h3').off().click(function(){
				$(this).toggleClass('on');
				$(this).next('ul').slideToggle();
			})
		}else{
			$('.banner > .small-screen > .nav1 > a').eq(0).removeClass('on');//变为×
			$('html,body').removeClass('hidden');//没有滚动条
			$('.banner > .small-screen>ul ').hide();//ul出现或消失。通过高度变化
			$('.banner > .small-screen>ul >li').removeClass('active');//li变化，呈现透明度和波浪效果
			$('.mincolumn  div h3').off();
			$('.mincolumn  div h3').removeClass('on');
			$('.mincolumn  div h3').next('ul').hide();
		}
		
	})
	
	$(window).triggerHandler('resize');
	let now=0,next=0;
	let lis=$('.banner-img > li');
	let rects=$('.circle>li>div>p');//横线
	rects.eq(now).addClass('active');
	//横线动画
	rects.on('animationend.end',function(){
		next=now+1;
		if(next>=rects.size()){
			next=0;
		}
		lis.removeClass();
		lis.eq(now).addClass('now-out');
		lis.eq(next).addClass('zindex next-in');
		rects.removeClass('active').eq(next).addClass('active');
		now=next;
	})
	function movel(){
		next=now+1;
		if(next>lis.size()-1){
			next=0;
		}
		rects.removeClass().eq(next).addClass('visible');
		lis.removeClass();
		lis.eq(now).addClass('now-out');
		lis.eq(next).addClass('zindex next-in');
		now=next;
	}
	function mover(){
		next=now-1;
		if(next<0){
			next=lis.size()-1;
		}
		rects.removeClass().eq(next).addClass('visible');
		lis.removeClass();
		lis.eq(now).addClass('next-out zindex');
		lis.eq(next).addClass('now-in');
		now=next;
	}
	$('.arrow>.left>a').click(function(){
		rects.off('animationend.end');
		mover();
	})
	
	$('.arrow>.right>a').click(function(){
		rects.off('animationend.end');
		movel();
	})

	$('.circle>li').click(function(){
		rects.off('animationend.end');//检测动画完成
		let index=$(this).index();
		if(index>now){
			rects.removeClass().eq(index).addClass('visible');
			lis.removeClass();
			lis.eq(now).addClass('now-out');
			lis.eq(index).addClass('zindex next-in');
			now=index;
		}else if(index<now){
			rects.removeClass().eq(index).addClass('visible');
			lis.removeClass();
			lis.eq(now).addClass('next-out zindex');
			lis.eq(index).addClass('now-in');
			now=index;
		}
		
	})

	
	
	
})
