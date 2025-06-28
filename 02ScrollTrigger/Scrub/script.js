gsap.from("#page1 #box1",{
    scale:0,
    duration:1,
    delay:1,
    rotate:360  
})
gsap.from("#page2 #box1",{
    scale:0,
    duration:1,
    delay:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #box1",
        scroller:"body",
        markers:true,
        start:"top 60%",
    }
})
gsap.from("#page3 #box1",{
    scale:0,
    duration:1,
    delay:1,
    rotate:720,
    scrollTrigger:{
        trigger:"#page3 #box1",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:3,
    }
})

gsap.from("#page h2",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#page h2",
        scroller:"body",
        markers:true,
        start:"top 70%",
    }
})
gsap.from("#page h1",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:"#page h1",
        scroller:"body",
        markers:true,
        start:"top 70%",
    }
})