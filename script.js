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

////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//**---Page Sections---**
//
//intro section
let intro = `<section class="hero fullscreen">
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
                 <a href="https://firebasestorage.googleapis.com/v0/b/zainab-portfolio.appspot.com/o/Resume.pdf?alt=media&token=b1a32688-8e90-49f5-8014-129dbcd561c6" target="_blank" title="downlaod my CV" class="btn primary">my CV &nbsp;
                     <i class="bi bi-download"></i>
                 </a>
                 <a onclick='exit_section("intro", () => set_time_out(1500, enter_section, "projects"));document.getElementById("intro").classList.remove("active");document.getElementById("projects").classList.add("active");' id="btn_border" href="#" title="Works & Projects" class="btn border">Works & Projects &nbsp;
                     <i class="bi bi-card-list"></i>
                 </a>
             </div>
         </div>
     </section> `
////////////////////////////////////////////////////////////////////
//
//skills section
const all_skills = (v) => {
    const F = [["html", "./assets/icons/html.svg"], ["css", "./assets/icons/css.svg"], ["javascript", "./assets/icons/javascript.svg"], ["typescript", "./assets/icons/typescript.svg"], ["vue", "./assets/icons/vue.svg"], ["tailwind css", "./assets/icons/tailwind-css.svg"]]

    const B = [["node js", "./assets/icons/node-js.svg"], ["express js", "./assets/icons/express.svg"], ["c#", "./assets/icons/cs.svg"], [".net core", "./assets/icons/dot-net.svg"], ["C/C++", "./assets/icons/c.svg"], ["pyhton", "./assets/icons/python.svg"], ["java", "./assets/icons/java.svg"], ["sql", "./assets/icons/sql.svg"]]

    const O = [["bash", "./assets/icons/bash.svg"], ["powershell", "./assets/icons/powershell.svg"], ["vim", "./assets/icons/vim.svg"], ["git", "./assets/icons/git.svg"], ["unit testing", "./assets/icons/test.svg"], ["docker", "./assets/icons/docker.svg"]]

    let result = "<span></span>";
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
let skills = `<section class="hero fullscreen skills-section">
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

        <span class="_span s_span"></span>
    </section>`

///////////////////////////////////////////////////////////////////
//
//projects section
const PROJECTS = [

    {
        "title": "SimpleFreetube",
        "description": "a frontend project in Vue and the Invidious API for watching youtube",
        "imgSrc": "simplefreetube.png",
        "githubUrl": "https://github.com/zainab7681051/simpleFreeTube",
        "appUrl": "https://simplefreetube.web.app/"
    },
    {
        "title": "FileConverterTool",
        "description": "online tool for converting files from one type to another; word to pdf, jpeg to png, etc...",
        "imgSrc": "fileconvertertool.png",
        "githubUrl": "https://github.com/zainab7681051/OnlineFileConverterTool",
        "appUrl": "https://fileconvertertool.web.app"
    },
    {
        "title": "Invidious Instances",
        "description": "App for fetching the free and open-source Invidious instances using the invidious API",
        "imgSrc": "Invidious-Instances.png",
        "githubUrl": "https://github.com/zainab7681051/get-invidious-instances",
        "appUrl": "https://zainab7681051.github.io/get-invidious-instances/"
    },
    {
        "title": "DisneyMoviesWatchlist",
        "description": "DisneyMoviesWatchlist is a server-side web application in C# - ASP.NET Core, Entity Framework and Razor Pages",
        "imgSrc": "DisneyMoviesWatchlist.png",
        "githubUrl": "https://github.com/zainab7681051/DisneyMoviesWatchlist",
        "appUrl": "https://disneywatchlist.bsite.net/"
    },
    {
        "title": "DisneyMoviesApi",
        "description": "The Disney Animation Movies API allows you to retrieve information about Disney animation movies",
        "imgSrc": "DisneyMoviesApi1.png",
        "githubUrl": "https://github.com/zainab7681051/DisneyMoviesApi",
        "appUrl": "https://apidisneymovies.bsite.net/api/v1/movies/all"
    },
    {
        "title": "Landing Page With GSAP",
        "description": "a simple landing page template in html/css/js with GSAP tool for basic animation on load.",
        "imgSrc": "LandingPage.png",
        "githubUrl": "https://github.com/zainab7681051/GSAP-Landing-Page",
        "appUrl": "https://zainab7681051.github.io/GSAP-Landing-Page/"
    },
    {
        "title": "Hero Section Template",
        "description": "a template of a hero section for a web page in vanilla html and css.",
        "imgSrc": "here-section-template.png",
        "githubUrl": "https://github.com/zainab7681051/hero-section-template",
        "appUrl": "https://zainab7681051.github.io/hero-section-template/"
    },
    {
        "title": "PacMan-Game",
        "description": "A basic PacMan game in vanilla Javascript and HTML Canvas Element.",
        "imgSrc": "pacman.png",
        "githubUrl": "https://github.com/zainab7681051/basic-pac-man-game",
        "appUrl": "https://basic-pacman-game.web.app/"
    },
    {
        "title": "Image-Genreator",
        "description": "A node express app for generating input-based images using openAI technology.",
        "imgSrc": "open-ai-image-generator-api.png",
        "githubUrl": "https://github.com/zainab7681051/image-generation-app-with-openAI/",
        "appUrl": ""
    },
    {
        "title": "Pizza-Delivery",
        "description": "A wep app for pizzerias in vue and firebase firestore",
        "imgSrc": "pizza-delivery.png",
        "githubUrl": "https://github.com/zainab7681051/pizza-delivery",
        "appUrl": "https://pizza-delivery-5201d.web.app/"
    },
    {
        "title": "Free-Documentaries",
        "description": "A web App for viewing youtube documentaries",
        "imgSrc": "free-documentaries.png",
        "githubUrl": "https://github.com/zainab7681051/free-documentaries",
        "appUrl": ""
    },
    {
        "title": "todo app",
        "description": "simple todo app for keepig track of your tasks and objectives.",
        "imgSrc": "todolist.png",
        "githubUrl": "https://github.com/zainab7681051/simple-to-do-list-app",
        "appUrl": ""
    }
]

function get_proj() {
    let project = ``
    let img_tag;
    let url_tag;
    for (let i = 0; i < PROJECTS.length; i++) {
        if (PROJECTS[i].appUrl) {
            img_tag = `<a href="${PROJECTS[i].appUrl}" target="_blank">
                <div class="img_container">
                    <img src="./assets/img/${PROJECTS[i].imgSrc}" alt=""/>
                </div>
            </a>`
            url_tag = `<a href="${PROJECTS[i].appUrl}" target="_blank" title="Live URL">url</a>
`
        }
        else {
            img_tag = `<div class="img_container">
                    <img src="./assets/img/${PROJECTS[i].imgSrc}" alt=""/>
                </div>`
            url_tag = ''
        }
        project += `
        <div class="project">
           ${img_tag}
            <div class="title">
                <h1>${PROJECTS[i].title}</h1>
            </div>
            <div class="text">
                <div class="body_text">
                    <p>${PROJECTS[i].description}</p>
                </div>
                <div class="bottom_text">
                    <a href="${PROJECTS[i].githubUrl}" target="_blank" title="Source Code">source</a>
                    ${url_tag}
                </div>
            </div>
        </div>`
    }
    return project;
}

let projects = `<section class="hero fullscreen">
    <div class="loader">
        <div class="cascade">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <div class="projects_section">
        ${get_proj()}
    </div>

    <span class="_span p_span"></span>
</section>
`
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
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

function animate_skills() {
    const LEFT = document.querySelector(".strip_skills.left")
    const MID = document.querySelector(".strip_skills.mid")
    const RIGHT = document.querySelector(".strip_skills.right")
    LEFT.style.transform = "translateX(0)"
    LEFT.style.opacity = "1"
    MID.style.transform = "translateY(0)"
    MID.style.transform = "translateX(0)"
    MID.style.opacity = "1"
    RIGHT.style.transform = "translateX(0)"
    RIGHT.style.opacity = "1"
}

function animate_skills_exit() {
    const skills_span = document.querySelector(".s_span")
    const strip_skills = document.querySelectorAll(".strip_skills")

    skills_span.style.width = "100%"
    skills_span.style.transform = "translateX(-100vw)"

    strip_skills.forEach(e => {
        e.style.transition = "visibility .4s ease"
        e.style.visibility = "hidden"
    });
}

function animate_projects() {

    const session = sessionStorage.getItem('no_loading')
    if (session) {
        document.querySelector('.loader').style.display = "none"
        document.querySelector('.projects_section').style.display = 'flex'
    }
    else {
        set_time_out(2000, () => document.querySelector('.loader').style.display = "none")

        set_time_out(2000, () => document.querySelector('.projects_section').style.display = 'flex')
        sessionStorage.setItem('no_loading', true)
    }
}

function animate_projects_exit() {
    const p_span = document.querySelector('.p_span')
    const p_section = document.querySelector('.projects_section')

    p_span.style.width = "100%"
    p_span.style.transform = "translateX(-100vw)"
    p_section.style.visibility = 'hidden'


}
//////////////////////////////////////////////////
//triggers each section's transition effect on load
function enter_section(id) {
    switch (id) {
        case "intro":
            {
                setHash(id);
                app.innerHTML = intro
                set_time_out(550, animate_intro)
                break;
            }
        case "skills":
            {
                setHash(id);
                app.innerHTML = skills;
                set_time_out(550, animate_skills)
                break;
            }
        case "projects":
            {
                setHash(id);
                app.innerHTML = projects
                set_time_out(550, animate_projects)
                break;
            }
        case "cv":
            {
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
        case "projects":
            {
                set_time_out(550, animate_projects_exit)
                break;
            }
        case "cv":
            {
                break;
            }
        default:
            break;
    }
    func()
}

////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//**--- loading the 'app' ---**
//
let app = document.getElementById("app");

const setHash = (value) => {
    location.hash = value;
}
//header links: changing the content of the page by triggering
//a click event for the link that has been clicked
const links = document.querySelectorAll('ul li a');

for (const link of links) {
    if (link.id != 'cv') {
        link.onclick = () => {
            const activeClass = document.querySelector('ul li a.active');
            activeClass.classList.remove('active');
            link.classList.add('active');

            exit_section(activeClass.id, () => set_time_out(1500, enter_section, link.id))
        }
    }
}

//decreasing and increasing the opacity of the header on scroll
//note: the 'header_opacity' class is defined only for large screens in style.css
let lastScroll = 0;
const header_container = document.querySelector("header.container").classList
document.addEventListener('scroll', () => {

    let currentScroll = window.scrollY;

    if (currentScroll <= 0 || currentScroll <= lastScroll) //top of the page or scrolling up
    {
        if (header_container.contains('header_opacity'))
            header_container.remove('header_opacity')
    }
    if (currentScroll > lastScroll) //scrolling down
    {
        if (!header_container.contains('header_opacity'))
            header_container.add('header_opacity')
    }

    lastScroll = currentScroll
    return;
})
document.addEventListener('DOMContentLoaded', () => {
    if (!location.hash) {

        const activeClass = document.querySelector('ul li a.active');
        if (activeClass)
            activeClass.classList.remove('active');
        const newActiveClass = document.querySelector("#intro");
        newActiveClass.classList.add("active");
        //loading the page on the intro section
        app.innerHTML = intro;

        //starting the intro animation
        set_time_out(550, animate_intro)
    }
    else {
        const activeClass = document.querySelector('ul li a.active');
        if (activeClass)
            activeClass.classList.remove('active');
        const newActiveClass = document.querySelector(location.hash);
        newActiveClass.classList.add("active");
        switch (location.hash) {
            case "#intro":
                app.innerHTML = intro;
                set_time_out(550, animate_intro)
                break;
            case "#skills":
                app.innerHTML = skills;
                set_time_out(550, animate_skills)
                break;
            case "#projects":
                app.innerHTML = projects;
                set_time_out(550, animate_projects)
                break;
        }
    }
})

