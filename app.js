const navbar=document.querySelector(".navbar");

const navBtn=document.querySelector(".nav-btn");

const closeBtn=document.querySelector(".nav-close");


navBtn.addEventListener("click",function(){

  navbar.classList.toggle("showNav");
});

closeBtn.addEventListener("click",function (){

navbar.classList.remove("showNav");

});
