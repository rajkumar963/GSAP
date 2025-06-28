gsap.to("#box",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    ease:"bounce",
    borderRadius:"50%",
    
    
})
gsap.to("#box1",{
    x:300,
    y:300,
    duration:2,
    delay:3,
    rotate:120,
    backgroundColor:"blue",
    ease:"bounce",
    scale:1.5
    
})
gsap.from("#box2",{
    x:1000,
    duration:2,
    delay:5,
    ease:"bounce",
    
    
})

gsap.to("#box3",{
    x:1000,
    duration:2,
    delay:7,
    rotate:360,
    repeat:-1,
    yoyo:true
    
})
