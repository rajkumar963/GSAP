// gsap.from("h1",{
//     y:100,
//     opacity:0,
//     duration:2,
//     color:"red",
//     delay:1,
//     stagger:1
// })

var tl=gsap.timeline()

tl.from("#part1",{
    y:-30,
    opacity:0,
    duration:1,
    delay:1,

})
tl.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.5
})