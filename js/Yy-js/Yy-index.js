'use strict'
$(function(){
	let lis=$('.sm-header .container .row .menu');
	$(window).resize(function(){
		let width=$(window).width();
		if(width<=750){
			lis.off();
			lis.click(function(){
				$('body,html').toggleClass('sm-hidden');
				$('.sm-header .pull').slideToggle(500);
			})
		}
	})
	$(window).triggerHandler('resize');
	//轮播图
	let box=$('.banner');
	let img=$('.banner > .box > li');
	let li=$('.banner > .circle > li');
	let left=$('.banner > .left');
	let right=$('.banner > .right');
	getShuff(box,img,li,left,right);
	function getShuff(box,img,li,left,right){
		let n=0;
		let flag=true;
		function move(way='right'){
			if(way=='right'){
				n++;
				if(n>=img.length){
					n=0;
				}
			}
			else if(way=='left'){
				n--;
				if(n<0){
					n=img.length-1;
				}
			}
			img.fadeOut();
			li.removeClass('select');
			img.eq(n).fadeIn(200,function(){
				flag=true;
			});
			li.eq(n).addClass('select');
		}
		let t=setInterval(move,1800);
		box.mouseover(function(){
			clearInterval(t);	
		})
		box.mouseout(function(){
			t=setInterval(move,1800);
		})
		let m;
		li.click(function(){
			m=setTimeout(()=>{
				img.fadeOut();
				li.removeClass('select');
				img.eq($(this).index()).fadeIn(200);
				li.eq($(this).index()).addClass('select');
				n=$(this).index();
			},200)
			li.mouseout(function(){
				clearTimeout(m);
			})
		})
		left.click(function(){
			if(flag){
				flag=false;
				move('left');
			}
		})
		right.click(function(){
			if(flag){
				flag=false;
				move();
			}
		})
	}
	
})
