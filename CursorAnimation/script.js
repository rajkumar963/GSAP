const main = document.querySelector('#main')
const cursor = document.querySelector('#cursor');
const image = document.querySelector('#image');

main.addEventListener('mousemove', function(dets){

gsap.to(cursor, {
    duration: 0.5,
    x: dets.x,
    y: dets.y,
    scale: 1,
    ease: "power3.out",
 
})
});

image.addEventListener('mouseenter', function(){
    cursor.innerHTML="View More";
   gsap.to(cursor, {
    scale: 4,
    duration: 0.5,
    backgroundColor: "#ffffff7c",
   })
});

image.addEventListener('mouseleave', function(){
    cursor.innerHTML="";
   gsap.to(cursor, {
    scale: 1,
    duration: 0.5,
    backgroundColor: "#fff",
   })
})