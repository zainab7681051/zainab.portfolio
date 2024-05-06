//header menu actions
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
});


//triggers the transition effect for the strip, heading-block, and other classes in the intro section
function animate_intro()
{

    document.querySelector(".strip").style.transform="translateX(0)"
    document.querySelector(".heading-block").style.transform="translateY(0)"
    document.querySelector(".heading-block").style.opacity="1"
    document.querySelector(".block p").style.transform="translateY(0)"
    document.querySelector(".block p").style.opacity="1"
    document.querySelector(".button-group").style.opacity="1"

}
///////////////////////////////////////////////////////////////////////
//intro section
//hidden elements: strip, heading block, block p, button group
 var intro = `<section class="hero fullscreen">
 <div class="bg fullscreen"></div>
 <span class="strip"></span>
 <div class="block container">
     <div class="heading-block">
         <h2 class="upper-text">Software Developer</h2>
         <h1 class="huge-font">Zainab</h1>
     </div>
     <p class="upper-text">
         I am skilled in JavaScript, C#, C/C++ and more.
         <br>I create efficient and engaging
   web-based softwares and solutions
     </p>
     <div class="button-group">
         <a href="#" class="btn primary">my CV &nbsp;
             <i class="bi bi-download"></i>
         </a>
         <a href="#" class="btn border">Works & Projects &nbsp;
             <i class="bi bi-card-list"></i>
         </a>
     </div>
 </div>
 </section> `
////////////////////////////////////////////////////////////////////
//skills section
var empty = `<section class="hero fullscreen"></section>`

///////////////////////////////////////////////////////////////////
var app = document.getElementById("app");

//header links: changing the content of the page by triggering
//a click event for the link that has been clicked
const activeLinks = document.querySelectorAll('ul li a');

for (const link of activeLinks) {
    link.onclick = () => {
        const activeClass = document.querySelectorAll('ul li a.active');
        activeClass[0].classList.remove('active');
        link.classList.add('active');
        switch(link.id)
        {
            case "intro":
            {
                app.innerHTML = intro
                animate_intro()
                break;
            }
            case "skills":
            {
                app.innerHTML=empty;
                break;
            }
            default:
                break;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    //loading the page on the intro section
	app.innerHTML = intro;
    //starting the intro animation
    //note: we have to wait 0.75 seconds before calling
    //the function in order to trigger the transition effects successfully
    setTimeout(()=>{
        animate_intro()
    },750)

})

