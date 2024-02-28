// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnimation(){
    var t1 = gsap.timeline();

    t1.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        delay:-1,
        stagger:0.2
    })
    .from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut

    })
}

var timeout = 0;

function circlechaptakaro(){
     clearTimeout(timeout)

    var xdiff = 0;
    var ydiff = 0;

    var xprevious = 1;
    var yprevious = 1;


    window.addEventListener("mousemove",function(dets){
        xdiff = gsap.utils.clamp(0.8,1.2,dets.clientX - xprevious);
        ydiff = gsap.utils.clamp(0.8,1.2,dets.clientY - yprevious);

        xprevious = dets.clientX;
        yprevious = dets.clientY;

        circleMouseFollower(xdiff,ydiff);

        timeout = setTimeout(function(){
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${1},${1})`;
        })




    })
}

function viewcirclepointer(){
    document.querySelectorAll(".elem").forEach(function(second){
        second.addEventListener("mousemove", function(dets){
            document.querySelector("#view").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
            document.querySelector("#view").style.opacity = 1;
        })
    })
}


document.querySelectorAll(".elem").forEach(function(elem){
   elem.addEventListener("mouseleave",function(dets){
     rotate = dets.clientX;
          gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3,
            duration:0.5,


          })
   })
})

document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diffrotate = 0;
   elem.addEventListener("mousemove",function(dets){
     var diff = dets.clientY - elem.getBoundingClientRect().top;
     diff = diff - 100;

     diffrotate = rotate - dets.clientX ;
     rotate = dets.clientX; 
          gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power3,
            top:diff,
            left:dets.clientX - 100,
            rotate:gsap.utils.clamp(-20,20,diffrotate*0.5),

          })
          
   })
})



const circle = document.querySelector("#minicircle");
function circleMouseFollower(xdiff,ydiff){
    window.addEventListener("mousemove",function(dets){
        // console.log(dets.clientX,dets.clientY);
        // circle.addEventListener.clientX = dets.clientX;
        // circle.addEventListener.clientY = dets.clientY;
        circle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xdiff},${ydiff})`
    })
}
// viewcirclepointer();
circlechaptakaro();
circleMouseFollower() ;
firstPageAnimation();
