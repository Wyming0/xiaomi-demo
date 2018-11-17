/*
* @Author: 少女心
* @Date:   2018-11-12 19:55:11
* @Last Modified by:   少女心
* @Last Modified time: 2018-11-12 21:04:51
*/

'use strict';
window.addEventListener("load",function(){
   var ul = document.querySelector(".nav ul");
   console.log(ul);
var x =0;
    ul.addEventListener("touchstart",function(e){
        e = e || window.event;
        console.log("我点上了");
        // console.log(e);
         console.log(e.targetTouches[0].pageX);
        x = e.targetTouches[0].pageX;
        console.log(ul.offsetWidth);
        
    });
    ul.addEventListener("touchmove",function(e){
        e = e || window.event;
        console.log("我按住了");

        console.log(e.targetTouches[0].pageX);
        var newx = x-e.targetTouches[0].pageX;
        console.log(newx); 
        
        
        // ul.style.left = newx +"px";
        
        
    });
    ul.addEventListener("touchend",function(e){
        e = e || window.event;
        console.log("我离开了");
        // ul.style.left = -x+"px";
        
    });
});