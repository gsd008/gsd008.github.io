window.onload=function () {
    let banner=document.querySelector('.banner');
    let img=document.querySelectorAll('.guntu>li');
    let dian=document.querySelectorAll('.dian>li');
    let zuo=document.querySelector('.zuo-jiantou');
    let you=document.querySelector('.you-jiantou');
    let width=parseInt(getComputedStyle(banner,null).width);
    let now=0;
    let next=0;
    let t=setInterval(move,3000);
    let flag=true;
    function move() {
        if(!flag){
            return;
        }
        flag=false;
        next=now+1;
        if (next==img.length){
            next=0;
        }
        img[next].style.left="100%";
        animate(img[now],{left:-width},800,function () {
                flag = true;
        });
        animate(img[next],{left:0},800);
        dian[now].classList.remove('active');
        dian[next].classList.add('active');

        now=next;
    }

    banner.onmouseover=function(){
        clearInterval(t);
    }

    banner.onmouseout=function(){
        t=setInterval(move,3000);
    }

    zuo.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        next=now-1;
        if(next<0){
            next=img.length-1;
        }
        img[next].style.left='-100%';
        animate(img[now],{left:width},800);
        animate(img[next],{left:0},800,function () {
            flag=true;
        });
        dian[now].classList.remove('active');
        dian[next].classList.add('active');
        now = next;
    }

    you.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        next=now+1;
        if(next==img.length){
            next=0;
        }
        img[next].style.left='100%';
        animate(img[now],{left:-width},800);
        animate(img[next],{left:0},800,function () {
            flag=true;
        });
        dian[now].classList.remove('active');
        dian[next].classList.add('active');
        now=next;
    }

    dian.forEach(function(value,index){
        value.onclick=function(){
            if(now<index){
                img[index].style.left='100%';
                animate(img[now],{left:-width},800);
                animate(img[index],{left:0},800);
            }else if(now>index){
                img[index].style.left='-100%';
                animate(img[now],{left:width},800);
                animate(img[index],{left:0},800);
            }else{
                flag=true;
            }
            dian[now].classList.remove('active');
            dian[index].classList.add('active');
            now=index;
        }
    });


    // 搜索
   
   let input = document.querySelector('.kuan>input');

        input.onfocus=function () {
            input.value="";
        }
        input.onblur=function () {
            if (input.value==""){
                input.value='包月流量包';
            }
        }

    let input1 = document.querySelector('.bottom>.shuru>input');
    console.log(input1)
        input1.onfocus=function () {
            input1.value="";
        }
        input1.onblur=function () {
            if (input1.value==""){
                input1.value='请输入手机号码';
            }
        }



    // 太原
    
    let taiyuan = document.querySelector('.header>.taiyuan');
    let dizhi = document.querySelector('.taiyuan>ul');
    // console.log(dizhi);
    document.onclick=function(e){
        let obj=e.target;
        if(obj.nodeName!='SPAN'){
            dizhi.style.display='none'
        }else{
            dizhi.style.display='block'
        }
    }





    let nei = document.querySelector(".nei");
    let kuan1 =nei.firstElementChild;
    // console.log(kuan1);
    let li = kuan1.firstElementChild;
    // console.log(li);
    let right = document.querySelector(".right-jiantou");
    // console.log(right);
    let left = document.querySelector(".left-jiantou");
    let widths = parseInt(getComputedStyle(li,null).width);
    // console.log(widths)
    let flag1 = true;
    let time = setInterval(fun,2000);
      function fun(){
      	  if(flag1){
             flag1=false;
              animate(kuan1,{left:-widths},800,function () {
              let first = kuan1.firstElementChild;
              kuan1.appendChild(first);
              kuan1.style.left=0;
              flag1=true;
          });
      	  }
         
          nei.onmouseover=function () {
              clearInterval(time);
          }

          nei.onmouseout=function () {
             time = setInterval(fun,2000);
          }

	      left.onclick=function(){
	        if(flag1) {
	            flag1 = false;
	            kuan1.style.left=-widths+'px';
	            animate(kuan1,{left: 0},800,function () {
	                flag1 = true;
	            });
	        }
	    }

          right.onclick=fun;
    }



    let pao = document.querySelector(".pao");
    let lefts = document.querySelector(".kuang-left");
    // console.log(lefts)
    let rights = document.querySelector(".kuang-right");
    let s = setInterval(moves,2000);
    function moves(){
       pao.appendChild(pao.firstElementChild);
    }

    lefts.onclick=function(){
    	pao.insertBefore(pao.lastElementChild,pao.firstElementChild);
    }

    rights.onclick=function(){
    	moves();
    }







}

