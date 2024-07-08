import "../static/style.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger.js"
import { intro } from './intro.js'
import { skills } from './skills.js'
import { projects } from './projects.js'
import pinkSvg from '../assets/mandala.svg'

document.querySelector('.pink').src = pinkSvg
document.getElementById('name').textContent = intro.name;
document.getElementById('role').textContent = intro.role;
document.getElementById('short_description').textContent = intro.short_description;

document.getElementById('resume').href = intro.resume_pdf_link

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
    projects_wrapper.appendChild(new_div)

    let img = document.createElement('img')
    import(`../assets/img/${p.imgSrc}`).then(e => img.src = e.default)
    new_div.appendChild(img)

    let title = document.createElement('p')
    title.textContent = p.title
    new_div.appendChild(title)

    let source = document.createElement('a')
    source.href = p.githubUrl
    source.textContent = 'source'
    new_div.appendChild(source)

    if (p.appUrl) {
        let url = document.createElement('a')
        url.href = p.appUrl
        url.target = '_blank'
        url.textContent = 'url'
        new_div.appendChild(url)
    }

})
document.getElementById('linkedin').href = intro.linkedin
document.getElementById('github').href = intro.github
document.getElementById('email').href = "mailto:" + intro.email

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {

    let mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.intro',
                start: 'top top',
                end: '+=300%',
                scrub: 1
            }
        });

        tl.to('.blue', { left: -100, width: 300, height: 300, rotate: 135, top: 'calc(50% - 150px)', duration: 0.2 }, 0)
            .to('.green', { left: 'calc(100% - 200px)', top: '10%', rotate: 180, scale: 0.8, duration: 0.2 }, 0)
            .to('.pink', { width: 120, height: 120, top: 'calc(50% - 175px)', left: '1.5rem', duration: 0.2 }, 0)
            .to('h1', { color: '#fff', fontSize: '1.75rem', left: '2rem', top: 'calc(50% - 2.5rem)', duration: 0.2 }, 0)
            .to('h2', { left: '100%', duration: 0.2 }, 0)
            .to('.quote', { top: '100%', duration: 0.2 }, 0)
            .to('.menu', { display: 'flex', opacity: 1, duration: 0.2 }, 0.1)
            .to('.green', { rotate: 500, top: '70%' }, 0.2)
    });

    let sections = document.querySelectorAll('section:not(#intro)')
    let menuLinks = document.querySelectorAll('.menu li a')
    window.addEventListener('scroll', () => {
        sections.forEach((section, i) => {
            if (section.getBoundingClientRect().y < window.innerHeight - window.innerHeight / 2) {
                menuLinks.forEach(link => link.removeAttribute('class'))
                menuLinks[i].setAttribute('class', 'active')
            }
        })
    });
})