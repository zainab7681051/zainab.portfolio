import "./style.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger.js"
import { intro } from './intro.js'
import { skills } from './skills.js'
import { projects } from './projects.js'
import pinkSvg from '../assets/mandala.svg'
import pdf from '../assets/Resume.pdf'

document.querySelector('.cube-1').src = pinkSvg
document.getElementById('name').textContent = intro.name;
document.getElementById('role').textContent = intro.role;
document.getElementById('short_description').textContent = intro.short_description;

document.getElementById('resume').href = pdf
document.getElementById('li-resume').href = pdf


const frontend_skills = document.getElementById('frontend')
skills.frontend.forEach(s => {
    const li = document.createElement('li')
    li.textContent = s
    frontend_skills.appendChild(li)
})

const backend_skills = document.getElementById('backend')
skills.backend.forEach(s => {
    const li = document.createElement('li')
    li.textContent = s
    backend_skills.appendChild(li)
})

const other_skills = document.getElementById('other')
skills.other.forEach(s => {
    const li = document.createElement('li')
    li.textContent = s
    other_skills.appendChild(li)
})

const projects_wrapper = document.querySelector('.projects-wrapper')
projects.forEach(p => {
    let new_div = document.createElement('div')
    new_div.classList.add('project-container')
    projects_wrapper.appendChild(new_div)

    let img_wrapper = document.createElement('div')
    img_wrapper.classList.add('project-img-wrapper')
    let img = document.createElement('img')
    import(`../assets/img/${p.imgSrc}`).then(e => img.src = e.default)
    img.loading="eager";
    img.draggable="false";
    img_wrapper.appendChild(img)
    new_div.appendChild(img_wrapper)

    let title = document.createElement('p')
    title.textContent = p.title
    title.classList.add('title')
    new_div.appendChild(title)

    let description = document.createElement('p')
    description.textContent = p.description
    description.classList.add('project-description')
    new_div.appendChild(description)

    if (p.githubUrl) {
        let source = document.createElement('a')
        source.href = p.githubUrl
        source.target = '_blank'
        source.textContent = 'source'
        new_div.appendChild(source)
    }
    if (p.appUrl) {
        let url = document.createElement('a')
        url.href = p.appUrl
        url.target = '_blank'
        url.textContent = 'url'
        new_div.appendChild(url)
    }

})
document.getElementById('github').href = intro.github
document.getElementById('email').href = "mailto:" + intro.email

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {

    let mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
        console.log("gsap animation");
    });
    
    // let sections = document.querySelectorAll('section:not(#intro)')
    // let menuLinks = document.querySelectorAll('.menu li a')
    // window.addEventListener('scroll', () => {
    //     sections.forEach((section, i) => {
    //         if (section.getBoundingClientRect().y < window.innerHeight - window.innerHeight / 2) {
    //             menuLinks.forEach(link => link.removeAttribute('class'))
    //             menuLinks[i].setAttribute('class', 'active')
    //         }
    //     })
    // });
})
