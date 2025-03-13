import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { intro } from "./intro.js";
import { skills } from "./skills.js";
import { projects } from "./projects.js";
import pinkSvg from "../assets/mandala.svg";
import pdf from "../assets/Resume.pdf";
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

function updateIntro() {
    const cubeElement = document.querySelector(".cube-1");
    if (cubeElement) cubeElement.src = pinkSvg;

    const nameElement = document.getElementById("name");
    const roleElement = document.getElementById("role");
    const shortDescElement = document.getElementById("short_description");
    if (nameElement) nameElement.textContent = intro.name;
    if (roleElement) roleElement.textContent = intro.role;
    if (shortDescElement) shortDescElement.textContent = intro.short_description;

    const resumeLink = document.getElementById("resume");
    const liResumeLink = document.getElementById("li-resume");
    if (resumeLink) resumeLink.href = pdf;
    if (liResumeLink) liResumeLink.href = pdf;  

    updateLink("github", intro.github);
    updateLink("email", intro.email);
}

function updateLink(elementId, linkHref) {
    const linkElement = document.getElementById(elementId);
    if (linkElement) linkElement.href = linkHref;
}

function populateSkillList(elementId, skillArray) {
  const listElement = document.getElementById(elementId);
  if (listElement) {
    skillArray.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill;
      listElement.appendChild(li);
    });
  }
}

function populateSkills() {
  populateSkillList("frontend", skills.frontend);
  populateSkillList("backend", skills.backend);
  populateSkillList("other", skills.other);
}

function populateProjects() {
  const projectsWrapper = document.querySelector(".projects-wrapper");
  if (!projectsWrapper) return;

  projects.forEach((project) => {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");

    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("project-img-wrapper");
    const img = document.createElement("img");

    import(`../assets/img/${project.imgSrc}`).then((module) => {
      img.src = module.default;
    });
    img.loading = "eager";
    img.draggable = false;
    imgWrapper.appendChild(img);
    projectContainer.appendChild(imgWrapper);

    const titleEl = document.createElement("p");
    titleEl.textContent = project.title;
    titleEl.classList.add("title");
    projectContainer.appendChild(titleEl);

    const descriptionEl = document.createElement("p");
    descriptionEl.textContent = project.description;
    descriptionEl.classList.add("project-description");
    projectContainer.appendChild(descriptionEl);

    if (project.githubUrl) {
      const sourceLink = document.createElement("a");
      sourceLink.href = project.githubUrl;
      sourceLink.target = "_blank";
      sourceLink.textContent = "source";
      projectContainer.appendChild(sourceLink);
    }

    if (project.appUrl) {
      const appLink = document.createElement("a");
      appLink.href = project.appUrl;
      appLink.target = "_blank";
      appLink.textContent = "url";
      projectContainer.appendChild(appLink);
    }

    projectsWrapper.appendChild(projectContainer);
  });
}

function handleGsapAnimation() {
    // gsap.from(".name, .role, .short-description", {
    //   x:500,
    //   duration:.5,
    //   stagger:.5
    // }, 0)
    // gsap.from(".cube-1-container", {
    //   y:-200,
    //   rotate: 135,
    //   duration: .5
    // }, .5)
    // let tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: 'body',
    //         start: 'top top',
    //         end: 'bottom bottom',
    //         scrub: 1
    //     }
    // });
    // tl.to("#role",{
    //     left:"100%",
    //     duration: 0.1,
    // },0)
    //     tl.to('.cube-2', { left: -100, width: 300, height: 300, rotate: 135, top: 'calc(50% - 150px)', duration: 0.1 }, 0)
    //         .to('.cube-3', { left: 'calc(100% - 200px)', top: '10%', rotate: 180, scale: 0.8, duration: 0.1 }, 0)
    //         .to('.cube-1', { width: 120, height: 120, top: 'calc(50% - 175px)', left: '1.5rem', duration: 0.1 }, 0)
    //         .to('h1', { color: '#fff', fontSize: '1.75rem', left: '2rem', top: 'calc(50% - 2.5rem)', duration: 0.1 }, 0)
    //         .to('h2', { left: '100%', duration: 0.1 }, 0)
    //         .to('.quote', { top: '100%', duration: 0.1 }, 0)
    //         .to('.menu', { display: 'flex', opacity: 1, duration: 0.1 }, 0)
    //         .to('.cube-3', { rotate: 500, top: '70%' }, 0.1)
    // });
}

function initializeGsapAnimations() {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
        handleGsapAnimation();
    });
}

addEventListener("load", () => {
  updateIntro();
  populateSkills();
  populateProjects();
  initializeGsapAnimations();
});
