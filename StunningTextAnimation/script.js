function breakText(){
    var h1=document.querySelector("h1");
    var h1Text=h1.textContent;
    var h1Array=h1Text.split("");

    var halfvalues=(h1Array.length/2);

    var clutter=""

    h1Array.forEach(function(elem,index){
        if(index<halfvalues){
            clutter+= `<span class="letter">${elem}</span>`;
        }else{
            clutter+= `<span class="letter2">${elem}</span>`;
        }

    })

     h1.innerHTML=clutter;
}
breakText();

gsap.from("h1 .letter", {
    duration: 0.6,
    y: 70,
    opacity: 0,
    delay: 0.5,
    stagger: 0.15
});

gsap.from("h1 .letter2", {
    duration: 0.6,
    y:70,
    delay: 0.5,
    stagger: -0.15,
    opacity: 0,
});