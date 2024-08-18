import "./style.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger.js"
import { intro } from './intro.js'
import { skills } from './skills.js'
import { projects } from './projects.js'
import { experience } from './experience.js'
import pinkSvg from '../assets/mandala.svg'
import pdf from '../assets/Resume.pdf'

document.querySelector('.pink').src = pinkSvg
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

let experience_wrapper = document.querySelector('.experience-wrapper');
experience.forEach(e => {
    let job_container = document.createElement('div');
    job_container.classList.add('job-container');
    experience_wrapper.appendChild(job_container);

    let timeline = document.createElement('div');
    timeline.classList.add('timeline');
    job_container.appendChild(timeline);
    let circle = document.createElement('span');
    circle.classList.add('circle');
    timeline.appendChild(circle);
    let bar = document.createElement('div');
    bar.classList.add('bar');
    timeline.appendChild(bar);

    let job = document.createElement('div');
    job.classList.add('job');
    job_container.appendChild(job);
    let work_title = document.createElement('h4');
    work_title.textContent = e.workTitle;
    job.appendChild(work_title);
    let company_name = document.createElement('h5');
    company_name.textContent = e.companyName;
    job.appendChild(company_name);
    if (e.companyDescription) {
        let company_description = document.createElement('p');
        company_description.innerHTML = e.companyDescription + '<br>';
        company_description.classList.add('company-description')
        job.appendChild(company_description);

        if (e.companyWebsite) {
            let company_website = document.createElement('a');
            company_website.href = e.companyWebsite;
            company_website.textContent = 'website';
            company_website.classList.add('company-website')
            company_description.appendChild(company_website);
        }
    }
    let job_date = document.createElement('p');
    job_date.textContent = e.date;
    job_date.classList.add('date');
    job.appendChild(job_date);

    let job_description = document.createElement('ul');
    job_description.classList.add('job-description');
    job.appendChild(job_description);
    e.jobDescription.forEach(desc => {
        let desc_li = document.createElement('li');
        desc_li.textContent = desc;
        job_description.appendChild(desc_li);
    })

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
    img_wrapper.appendChild(img)
    new_div.appendChild(img_wrapper)

    let title = document.createElement('p')
    title.textContent = p.title
    new_div.appendChild(title)

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
document.getElementById('linkedin').href = intro.linkedin
document.getElementById('github').href = intro.github
document.getElementById('email').href = "mailto:" + intro.email

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {

    let mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1
            }
        });

        tl.to('.blue', { left: -100, width: 300, height: 300, rotate: 135, top: 'calc(50% - 150px)', duration: 0.1 }, 0)
            .to('.green', { left: 'calc(100% - 200px)', top: '10%', rotate: 180, scale: 0.8, duration: 0.1 }, 0)
            .to('.pink', { width: 120, height: 120, top: 'calc(50% - 175px)', left: '1.5rem', duration: 0.1 }, 0)
            .to('h1', { color: '#fff', fontSize: '1.75rem', left: '2rem', top: 'calc(50% - 2.5rem)', duration: 0.1 }, 0)
            .to('h2', { left: '100%', duration: 0.1 }, 0)
            .to('.quote', { top: '100%', duration: 0.1 }, 0)
            .to('.menu', { display: 'flex', opacity: 1, duration: 0.1 }, 0)
            .to('.green', { rotate: 500, top: '70%' }, 0.1)
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
