window.onload=function(){

  // banner
	let dian=document.querySelectorAll(".dian>ul>li");
	let imgs=document.querySelectorAll(".imgs>ul>li");
	let t = setInterval(fun,2000);
	let bannerright=document.querySelector(".bannerright");
	let tim=0;
  let flag = true;
	function fun(){
    if(flag){
       flag=false;
        tim++;
     if(tim>dian.length-1){
      tim=0;
     }

      for(let i = 0; i < imgs.length; i++){
          dian[i].classList.remove("active");
          imgs[i].classList.remove("active");
      }
          dian[tim].classList.add("active");
          imgs[tim].classList.add("active");
    }
    flag=true;
  }
     
	
   bannerright.onmouseover=function(){
   	clearInterval(t);
   }
   bannerright.onmouseout=function(){
    if (flag) {
      flag = false;
       t = setInterval(fun,2000);
        flag = true;
    }
   	 
   }

   dian.forEach(function(value,index){
   	value.onclick=function(){
   		for(let j = 0; j < dian.length; j++){
   			dian[j].classList.remove("active");
   			imgs[j].classList.remove("active");
   		}
   		this.classList.add("active");
   		imgs[index].classList.add("active");
   		tim=index;
   	}
   })


   let bannerjtleft=document.querySelector(".bannerjtleft");
   let bannerjtright=document.querySelector(".bannerjtright");
   bannerjtleft.onclick=function(){
   	tim--;
   	if(tim<0){
   	tim=imgs.length-1;
   }
    for(let i = 0; i < imgs.length; i++){
	 	dian[i].classList.remove("active");
	 	imgs[i].classList.remove("active");
	 }
     dian[tim].classList.add("active");
     imgs[tim].classList.add("active");
   }
   bannerjtright.onclick=function(){
   	fun();
   }


   let ce=document.querySelector('.daohanggouwuche');
   let xiala=document.querySelector('.daohanggouwuche>.ce');
 
    ce.onmousemove=function(){
       animate(xiala,{height:95}, 300);
       xiala.style.boxShadow='0 0 10px #ccc';
    }
       ce.onmouseout=function(){
       animate(xiala,{height:0}, 300)
       }



   // banner选项卡
   
   
    let zizi = document.querySelectorAll('.zizi>li');
    let yins = document.querySelectorAll('.yin>.on');
    console.log(yins)
    zizi.forEach(function(value,index){
          value.onmouseover=function(){
            for(let i = 0; i<zizi.length; i++){
              zizi[i].classList.remove("active");
              yins[i].classList.remove("active");
            }
            this.classList.add("active");
            yins[index].classList.add("active");
          }
    })
   
   let leftbox=document.querySelector(".bannerleft");
   let yin =document.querySelector(".yin");
       leftbox.onmouseover=function(){
         yin.classList.add("actives");
       }

       leftbox.onmouseout=function(){
        yin.classList.remove("actives");
       }


  // 导航
  
   let daos =document.querySelectorAll(".hehe>.one");
   let hezi = document.querySelectorAll(".hezi>ul");
   let big  =document.querySelector('.hezi')    
   let dada = document.querySelector('.hehe')
       daos.forEach(function(value,index){
          value.onmouseover=function(){
            animate(big,{height:200},200)
            for(let i=0;i<daos.length;i++){
                daos[i].classList.remove("active");
                hezi[i].classList.remove("active");
            }
                daos[index].classList.add("active");
                hezi[index].classList.add("active");
          }
          value.onmouseout=function(){
            animate(big,{height:0},1000);
          }
          
       })
       
        dada.onmouseover=function(){
            animate(big,{height:200},1000);
          }
        dada.onmouseout=function(){
            animate(big,{height:0},1000);
          }
           



    let boxs = document.querySelectorAll('.big');
     boxs.forEach(function (value) {
       xuanxiang(value);
     })
    function xuanxiang(par) {
    let wenzi = par.querySelectorAll('.kuang>li');
    let kuan = par.querySelectorAll('.zhong1>.zhong2');
        wenzi.forEach(function (value,index) {
            value.onmousemove=function () {
                for(let i =0;i<wenzi.length;i++){
                  wenzi[i].classList.remove('active');
                  kuan[i].classList.remove('active');
                }
                this.classList.add('active');
                kuan[index].classList.add('active');
            }
        })
      }



    let bo =document.querySelector('.danpintupian');
    let zuida = document.querySelector(".dada");
    let das = document.querySelectorAll(".dada>.da");
    let da=das[0];
    // console.log(da)
    let btn = document.querySelector(".mxdpjiantou>.jtleft");
    let btn1 = document.querySelector(".mxdpjiantou>.jtright");
    let widths = parseInt(getComputedStyle(da,null).width);
    // console.log(widths);
    let time = setInterval(move,3000);
     function move(){
         let left = parseInt(getComputedStyle(zuida,null).left);
         if(left==0){
             animate(zuida,{left:-widths},2000)
         }else if(left==-widths){
             animate(zuida,{left:0},2000)
         }

     }

    btn.onclick=function(){
    let left = parseInt(getComputedStyle(zuida,null).left);
      animate(zuida,{left:0},2000)
    }

    btn1.onclick=function(){
      move();
    }

    bo.onmouseover=function(){
      clearInterval(time);
    }

    bo.onmouseout=function(){
      time=setInterval(move,3000);
    }





// 为你推荐
   
    let dhz = document.querySelector('.dhz');
    // console.log(dhz);
    let xhz = document.querySelectorAll('.dhz>.xhz');
    // let xh = dhz.firstElementChild;
    let dd = document.querySelector('.mingxingdanpin');
    // console.log(xhz);
    let kk = parseInt(getComputedStyle(dd,null).width);
    // console.log(kk);
    let jtleft1 = document.querySelector('.jtleft1');
    // console.log(jtleft1);
    let jtright1 = document.querySelector('.jtright1');
    // console.log(jtright1);
    jtright1.onclick=function(){

      animate(dhz,{left:-kk},2000);

    }

    jtleft1.onclick=function(){
      animate(dhz,{left:0},800);
    }




 // 内容
   function boo(par){
    let act = par.querySelector('.act');
    // console.log(act);
    let tu = par.querySelectorAll('.act>li');
    let tu1 = tu[0];
    console.log(tu)
    let yuan = par.querySelectorAll('.yuan>li');
    // console.log(yuan)
    let widthese=parseInt(getComputedStyle(tu1,null).width);
    // console.log(widthese)
    let jiantou1 = par.querySelector('.jiantou1');
    // console.log(jiantou1)
    let jiantou2 = par.querySelector('.jiantou2');
    // console.log(jiantou2)
    let n = 0;
    jiantou1.onclick=function(value){
       n -- ;
      if(n<0){
          n = 0;
      }
      for(let i = 0; i<yuan.length; i++){
            yuan[i].classList.remove('active');
            }
            yuan[n].classList.add('active');
       animate(act,{left:-widthese*n},800);
    }


    jiantou2.onclick=function(){
       n ++ ;
      if(n>=tu.length){
          n = tu.length-1;
      }
      for(let i = 0; i<yuan.length; i++){
           yuan[i].classList.remove('active');
            }
            yuan[n].classList.add('active');
       animate(act,{left:-widthese*n},800);
    }

     yuan.forEach(function(value,index){
        value.onclick=function(){
          for(let j = 0; j<tu.length; j ++){
            yuan[j].classList.remove('active');
          }
          this.classList.add('active');
          animate(act,{left:-index*widthese},800);
        }
     }) 

   }


   let par = document.querySelectorAll('.reping');
    par.forEach(function(value){
        boo(value);
    })


    
    
}