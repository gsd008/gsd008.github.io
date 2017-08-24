window.onload=function(){

  let chu = document.querySelector('.banner-right');
	let dian = document.querySelectorAll(".dian>li");
	let imgs = document.querySelectorAll(".imgs-s>li");
	let t = setInterval(fun,3000);
	let time = 0;
	function fun(){
		time++;
    	if(time>imgs.length-1){
     	time=0;
    }
		for(let i = 0; i<imgs.length;i++){
			dian[i].classList.remove("active");
			imgs[i].classList.remove("active");
		}

		dian[time].classList.add("active");
		imgs[time].classList.add("active");
	}
	
   dian.forEach(function(value,index){
     	value.onclick=function(){
     		 for(let j=0;j<dian.length;j++){
              dian[j].classList.remove("active");
			  imgs[j].classList.remove("active");
         }
         this.classList.add("active");
		     imgs[index].classList.add("active");
		     time=index;
     	}
        
    })

   chu.onmouseover=function(){
       clearInterval(t);
   }

   chu.onmouseout=function(){
      t=setInterval(fun,3000);
   }



     //选项卡
     
    let zis = document.querySelectorAll('.zizi>li');
    let yins = document.querySelectorAll('.yin>li');
    zis.forEach(function(value,index){
          value.onmouseover=function(){
          	for(let i = 0; i<zis.length; i++){
          		zis[i].classList.remove("active");
          		yins[i].classList.remove("active");
          	}
          	zis[index].classList.add("active");
          	yins[index].classList.add("active");
          }
    })
   
   let leftbox=document.querySelector(".banner-left");
   let yin =document.querySelector(".yin");
       leftbox.onmouseover=function(){
       	 yin.classList.add("actives");
       }

       leftbox.onmouseout=function(){
       	yin.classList.remove("actives");
       }




  let color=["pink","blue","yellow","green","#666",'lightpink','lightblue','lightgreen'];
  let lou = document.querySelectorAll(".lou");
  // console.log(lou);
  let boo = document.querySelector(".boo");
  let ding = document.querySelector(".boo>.dingbu");
  // console.log(ding);
  let kuang = document.querySelectorAll(".boo .wz");
  // console.log(kuang);
  let search = document.querySelector('.search');
  let now;
  let flag = true;
  let flag2 = false;
  window.onscroll = function(){
    let obj=document.body.scrollTop==0?document.documentElement:document.body;
    let stop = obj.scrollTop;

      if (stop>lou[0].offsetTop-1000) {
        boo.style.display="block";

        if(flag){
               flag = false;
               animate(search,{top:0},500,function () {
                   flag2 = true;
               })
           }
      }

       if (stop<lou[0].offsetTop-1000) {
        boo.style.display="none";

         if(flag2){
               flag2=false;
               animate(search,{top:-150},500,function () {
                   flag = true;
               })
           }
      }
    
    lou.forEach(function (value,index) {
            if(stop>=value.offsetTop-500){
                for(let i=0;i<kuang.length;i++){
                    kuang[i].style.backgroundColor='white';
                }
                kuang[index].style.backgroundColor=color[index];
                now = index;
            }
        })
      }


    kuang.forEach(function (value,index) {
        value.onclick=function () {
            animate(document.body,{scrollTop:lou[index].offsetTop-300},500);
            now=index;


        }
       value.onmouseover=function(){
              this.style.backgroundColor=color[index];
       }
       value.onmouseout=function () {
           if(now!=index){
               this.style.backgroundColor="#fff";
           }
       }

    })

    ding.onclick=function(){
      animate(document.body,{scrollTop:0},500);
      animate(document.documentElement.body,{scrollTop:0},500);
    }

}