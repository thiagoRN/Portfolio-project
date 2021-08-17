$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });   

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });  

});

let indicator = document.querySelector('.indicator').children;
let main = document.querySelector('.container').children;


for (let i =0; i < indicator.length; i++){
    indicator[i].onclick = function(){
        
         const displayItems = this.getAttribute('data-filterer'); 
         for(let z=0; z < main.length; z++){
           main[z].style.transform = 'scale(0)';
           setTimeout(()=>{
                main[z].style.display = 'none';
           } ,500);
           if ((main[z].getAttribute('data-category') == displayItems) || 
           displayItems == 'all'){
            main[z].style.transform = 'scale(1)';
                setTimeout(()=>{
                    main[z].style.display = 'block';
            } ,500);
           }  
         }
    }
}









/*filterObjects("all");

function filterObjects(c){

    let x, i;
    x = document.getElementsByClassName("post");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++){
        removeClass(x[i],"show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

function addClass(element, name){
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i=0; i < arr2.length; i++){
        if (arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }
    }

}

function removeClass(element, name){
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i=0; i < arr2.length; i++){
        while (arr1.indexOf(arr2[i]) > -1){
           arr1.splice(arr1.indexOf(arr2[i]),1);
        }
    }
    element.className = arr1.join(" ");
}*/



