/**
 * Created by dell on 2017/6/21.
 */


    function $(selector,flag=false) {
        if(typeof selector=='function'){
            window.onload=function() {
                selector();
            }
        }else if(typeof selector=='string'){
            if(flag){
                return document.querySelectorAll(selector);
            }else{
                return document.querySelector(selector);
            }
        }
    }



