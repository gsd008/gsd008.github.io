window.onload=function(){
	let dian = document.querySelectorAll(".dian>li");
	let imgs =document.querySelectorAll(".imgs>li");
	let banner = document.querySelector(".banner");
  console.log(banner);
  let t = setInterval(fun,2000);
  let falg = true;
  let tim = 0;
    function fun(dr = 'r'){
      if(falg){
        flag = true;
        if(dr == 'r'){
            tim++;
           if(tim>dian.length-1){
                tim=0;
           }
          }else if(dr == 'l'){
            tim --;
            if (tim<0) {
              tim=dian.length-1;
              flag = true;
          }
      }
    

    }
       
       for(let j = 0; j <dian.length; j++){
          dian[j].classList.remove("active");
          imgs[j].classList.remove("active");
       }
       dian[tim].classList.add("active");
       imgs[tim].classList.add("active");
      }

      

    banner.onmouseover=function() {
       clearInterval(t);
    }
   
    banner.onmouseout = function(){
    	t = setInterval(fun,2000);
    }


    dian.forEach(function(value,index){
    	value.onclick= function(){
    	  for(let k = 0; k<dian.length;k++){
           dian[k].classList.remove("active");
           imgs[k].classList.remove("active");
       }
       this.classList.add("active");
       imgs[index].classList.add("active");
       tim=index;
     }
       
    })

    let left = document.querySelector(".left");
    let right = document.querySelector(".right");

    left.onclick=function(){
      if (flag) {
        falg = false;
          fun('l');
          falg=true;
      }
    
    }

     right.onclick=function(){
    	fun();
    }


     let lis = document.querySelectorAll('.shouye>ul>li');
     // let len = lis[0].offsetHeight;
     // console.log(len)
     lis.forEach(function (value) {
        hover(value,function() {
           let last = this.lastElementChild;
            if(last.className=='hidde'){
                animate(last,{height:last.children.length*31},500);
            }

        },

        function() {
           let last = this.lastElementChild;
               if(last.className=='hidde'){
                   animate(last,{height:0},500);
               }
        });

       });





   let input = document.querySelector('.sousuo2>input');
    console.log(input)
        input.onfocus=function () {
            input.value="";
        }
        input.onblur=function () {
            if (input.value==""){
                input.value='搜“衬衫”体验与众不同';
            }
        }



      let  fh  = document.querySelector('.fanhui>.fh');
        fh.onclick=function(){
          animate(document.body,{scrollTop:0},500);
          animate(document.documentElement.body,{scrollTop:0},500);
        }     
     
 }

   
   