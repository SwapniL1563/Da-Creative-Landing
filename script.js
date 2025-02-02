const menu = document.querySelector(".menubar");
const menuItems = document.querySelector(".hidebar")
menu.addEventListener("click" , function () {
    menuItems.classList.toggle("show");
    console.log("hi")
})

gsap.from(['.navbar h1','.nav-links a ','.menubar'],2,{
    top:"30px",
    opacity:0,
    delay:1,
    ease:"power4.inOut",
    stagger:{
        amount:0.3,
    }
})

gsap.from(['.hero-wrapper-left h1'],2,{
    y:50,
    opacity:0,
    delay:1.5,
    ease:"power4.inOut",
    stagger:{
        amount:0.3,
    }
})

gsap.from(['.right-img'],2,{
    scaleY:0,
    delay:2.5,
    ease:"power4.inOut",
    stagger:{
        amount:0.3,
    }
})

gsap.from(['.hero-wrapper-right p'],2,{
    y:50,
    opacity:0,
    delay:2.5,
    ease:"power4.inOut",
    stagger:{
        amount:0.3,
    }
})

gsap.from(['.line'],2,{
    width:"0",
    delay:3,
    ease:"power3.inOut",
})

gsap.from(['.arrow'],2,{
    scaleY:0,
    delay:2.5,
    ease:"power4.inOut",
})

gsap.from(['.hero-content-box'],2,{
    x:50,
    opacity:0,
    delay:3,
    ease:"power3.inOut",
})

gsap.from(['.hero-img'],2,{
    width:"0px",
    opacity:0,
    delay:3,
    ease:"power4.inOut",
})

gsap.from(['.marquee'],2,{
    width:"0",
    opacity:0,
    delay:3,
    ease:"power3.inOut",
})

gsap.from(['.services'],2,{
    opacity:0,
    delay:3.5,
    ease:"power3.inOut",
    stagger:{
        amount:0.5
    }
})

gsap.from(['.footer'],2,{
    opacity:0,
    delay:3.5,
    ease:"power3.inOut",
    stagger:{
        amount:0.3
    }
})


