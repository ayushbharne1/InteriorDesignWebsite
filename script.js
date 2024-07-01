
var tl = gsap.timeline();
tl.from("#section1 #nav #np1 a,#section1 #nav h3",{
    x:-100,
    duration:.5,
    opacity:0,
    stagger:.1
})
tl.from("#section1 #left #maintext h1,#section1 #left #maintext img,#section1 #left #bttext",{
    x:-400,
    duration:.5,
    opacity:0,
    stagger:.2
})
tl.from("#section1 #text-image #right img",{
   scale:3,
   duration:.5,
   opacity:0,
   stagger:.2
})
tl.from("#section1 #right #text2,#section1 #right #text1",{
    x: 400,
    duration:.4,
    opacity:0,
    stagger:.2,
})
tl.from("#section5 h1",{
    y: 200,
    duration:.4,
    stagger:.4,
    scrollTrigger:{
        trigger:"#section5 h1",
        scroller:"body",
        // markers: true,
        start:"top 85%",
        end:"top 10%",
        scrub:true
    }
})
var crsr = document.querySelector("#cursor")
var main = document.querySelector("#main")
main.addEventListener("mousemove", function(dets){
    crsr.style.left = `${dets.x}px`
    crsr.style.top = `${dets.y}px` 
})
document.querySelectorAll("#elem").forEach(function(elem){
    elem.addEventListener("mousemove", function(dets){
    var diff = dets.clientX - elem.getBoundingClientRect().top;
    // console.log(dets.clientY - elem.getBoundingClientRect().top)
        gsap.to(elem.querySelector("#image"),{
            opacity: 1,
            ease: Power1,
            top: diff,
            left: dets.clientY
        })
    })
})

var elem = document.querySelectorAll("#elem")
elem.forEach(function(e){
    console.log(e.childNodes)
    var img = e.childNodes[1];
    e.addEventListener("mousemove", function(dets){
        console.log(dets.target)
        gsap.to(img,{
            left:dets.x,
            // top:dets.y
        })
    })
    e.addEventListener("mouseenter", function(){
        gsap.to(img,{
            opacity:1,
            transform: 'translate(-50%)'

        })
    })
    e.addEventListener("mouseleave", function(){
    gsap.to(img, {
        opacity:0,
        transform: 'translate(-50%) '
    })
  }) 
})


