var sidenav=document.getElementById("sidenav");
var menuicon=document.getElementById("menu_icon"); 
var closenav=document.getElementById('closenav')
menuicon.addEventListener("click",function(){
    sidenav.style.right=0;
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%";
})