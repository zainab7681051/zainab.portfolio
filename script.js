//timeout fucntion
function set_time_out(time, func, param) {
    setTimeout(() => {
        if (param) {
            func(param)
        }
        else {
            func()
        }
    }, time)
}

//header menu actions
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
});

//**---Animations and transition effects---**
//triggers the transition effect for the strip_intro, heading-block, and other classes in the intro section when intro link is triggerd
function animate_intro() {
    const strip_intro = document.querySelector(".strip_intro")
    strip_intro.style.transitionDelay = "0s,0s"
    strip_intro.style.zIndex = "0"
    strip_intro.style.width = "25%"
    strip_intro.style.transform = "translateX(0)"
    document.querySelector(".heading-block").style.transform = "translateY(0)"
    document.querySelector(".heading-block").style.opacity = "1"
    document.querySelector(".block p").style.transform = "translateY(0)"
    document.querySelector(".block p").style.opacity = "1"
    document.querySelector(".button-group").style.opacity = "1"

}

//triggers the strip_intro class transition effects
function animate_intro_exit() {
    const strip_intro = document.querySelector(".strip_intro")
    strip_intro.style.transitionDelay = ".5s,0s"
    strip_intro.style.zIndex = "3"
    strip_intro.style.width = "200vw"
    strip_intro.style.transform = "translateX(-100vw)"
    document.querySelector(".heading-block").style.transform = "translateY(-100vh)"
    document.querySelector(".heading-block").style.opacity = "0"
    document.querySelector(".block p").style.transform = "translateY(50vh)"
    document.querySelector(".block p").style.opacity = "0"
    document.querySelector(".button-group").style.transform = "translateY(50vh)"
    document.querySelector(".button-group").style.opacity = "0"

}

function animate_skills(){
    const LEFT=document.querySelector(".strip_skills.left")
    const MID=document.querySelector(".strip_skills.mid")
    const RIGHT=document.querySelector(".strip_skills.right")
    LEFT.style.transform="translateX(0)"
    LEFT.style.opacity="1"
    MID.style.transform="translateY(0)"
    MID.style.transform="translateX(0)"
    MID.style.opacity="1"
    RIGHT.style.transform="translateX(0)"
    RIGHT.style.opacity="1"
}

function animate_skills_exit(){
}
//////////////////////////////////////////////////
//triggers each section's transition effect on load
function enter_section(id) {
    switch (id) {
        case "intro":
            {
                app.innerHTML = intro
                set_time_out(550, animate_intro)
                break;
            }
        case "skills":
            {
                app.innerHTML = skills;
                set_time_out(550, animate_skills)
                break;
            }
        default:
            break;
    }

}
//triggers each section's transition effects on exit--when user clicks another link
function exit_section(id, func) {
    switch (id) {
        case "intro":
            {
                set_time_out(550, animate_intro_exit)
                break;
            }
        case "skills":
            {
                set_time_out(550, animate_skills_exit)
                break;
            }
    }
    func()
}


////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//**---Page Sections---**
//
//intro section
var intro = `<section class="hero fullscreen">
         <span class="strip_intro"></span>
         <div class="block container">
             <div class="heading-block">
                <h1 class="huge-font">Zainab</h1>
                 <h2 class="upper-text">Software Developer</h2>
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
const all_skills = (v) => {
    const F = [["html", "./img/html.svg"], ["css", "./img/css.svg"], ["javascript", "./img/javascript.svg"], ["typescript", "./img/typescript.svg"], ["node js", "./img/node-js.svg"], ["vue", "./img/vue.svg"], ["tailwind css", "./img/tailwind.svg"]]

    const B = [["node js", "./img/node-js.svg"], ["express js","./img/express.svg"], ["c#" , "./img/cs.svg"], [".net core" , "./img/dot-net.svg"], [".net razor pages", "./img/dot-net.svg"], [".net entity framework", "./img/dot-net.svg"], ["C/C++" , "./img/c.svg"], ["pyhton", "./img/python.svg"], ["java", "./img/java.svg"], ["sql","./img/sql.svg"], ["no-sql","./img/nosql.svg"]]

    const O = [["shell scripts" , "./img/script.svg"], ["bash" , "./img/bash.svg"], ["batch", "./img/terminal.svg"], ["powershell", "./img/powershell.svg"], ["vim" , "./img/vim.svg"], ["git", "./img/git.svg"], ["github pages", "./img/github.svg"], ["unit testing", "./img/test.svg"], ["docker", "./img/docker.svg"]]

    var result = "<span></span>";
    switch (v) {
        case "frontend":
            {
                for (let i = 0; i < F.length; i++) {
                    result += `<p><img src="${F[i][1]}"/> ${F[i][0]} </p>`
                }
                break;
            }
        case "backend":
            {
                for (let i = 0; i < B.length; i++) {
                    result += `<p><img src="${B[i][1]}"/> ${B[i][0]} </p>`
                }
                break;
            }
        case "other":
            {
                for (let i = 0; i < O.length; i++) {
                    result += `<p><img src="${O[i][1]}"/> ${O[i][0]} </p>`
                }
                break;
            }
    }
    return result;
}
var skills = `<section class="hero fullscreen skills-section">
        <div class="strip_skills left">
            <h1>frontend</h1>
            ${all_skills("frontend")}
            </div>
        <div class="strip_skills mid">
            <h1>backend</h1>
            ${all_skills("backend")}
            </div>
        </div>
        <div class="strip_skills right">
            <h1>other</h1>
            ${all_skills("other")}
            </div>
        </div>
    </section>`

///////////////////////////////////////////////////////////////////
var app = document.getElementById("app");

//header links: changing the content of the page by triggering
//a click event for the link that has been clicked
const links = document.querySelectorAll('ul li a');

for (const link of links) {
    link.onclick = () => {
        const activeClass = document.querySelector('ul li a.active');
        activeClass.classList.remove('active');
        link.classList.add('active');

        exit_section(activeClass.id, () => set_time_out(1500, enter_section, link.id))

    }
}

document.addEventListener('DOMContentLoaded', async () => {
    //loading the page on the intro section
    app.innerHTML = intro;

    //starting the intro animation
    set_time_out(550, animate_intro)
})

