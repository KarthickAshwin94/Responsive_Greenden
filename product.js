var sidenav=document.getElementById("sidenav");
var menuicon=document.getElementById("menu_icon"); 
var closenav=document.getElementById('closenav')
menuicon.addEventListener("click",function(){
    sidenav.style.right=0;
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%";
})

// we have all the plants listed in h1 tag under the div tag named plants_sold
//id of search is search_products


var search=document.getElementById("search_products");
var plants=document.getElementById("plants_sold");
var h1List=plants.querySelectorAll("h1");
var content=plants.querySelectorAll("div");
search.addEventListener("keyup",function(){
    for(var i=0;i<h1List.length;i++)
    {
        if(h1List[i].textContent.toUpperCase().indexOf(event.target.value.toUpperCase())<0)
        {        
            content[i].style.display="none"
        }
        else {
            content[i].style.display="inline";
        }
    }
})
