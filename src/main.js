import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { intro } from "./intro.js";
import { skills } from "./skills.js";
import { projects } from "./projects.js";
import pinkSvg from "../assets/mandala.svg";
import pdf from "../assets/Resume.pdf";

gsap.registerPlugin(ScrollTrigger);


function getElement(selector) {
  const Element = document.querySelector(selector);
  if (!Element)
    throw new Error(`element "${selector}" does not exist!`);
  return Element;
}

function getElements(selector){
  const Elements = document.querySelectorAll(selector);
  if (Elements.length === 0)
    throw new Error(`elements "${selector}" do not exist!`);
  return Elements;
}

function updateMenu(){
  const menu = getElement(".menu");
  menu.classList.add("menu-transition");
}

function handleMenuLinkEvent(){
  const menuBtn = getElement("#menu-btn");
  const menuLinks = getElements(".menu li a");

  menuLinks.forEach(li => {
    li.addEventListener('click', () => {
      menuBtn.checked = false;
    })
  })
}

function updateIntro() {
    const cubeElement = getElement(".cube-1");
    cubeElement.src = pinkSvg;

    const nameElement = getElement("#name");
    const roleElement = getElement("#role");
    const shortDescElement = getElement("#short_description");
    nameElement.textContent = intro.name;
    roleElement.textContent = intro.role;
    shortDescElement.textContent = intro.short_description;

    const resumeLink = getElement("#resume");
    const liResumeLink = getElement("#li-resume");
    resumeLink.href = pdf;
    liResumeLink.href = pdf;  

    updateLink("github", intro.github);
    updateLink("email", intro.email);
}

function updateLink(elementId, linkHref) {
    const linkElement = getElement("#" + elementId);
    linkElement.href = linkHref;
}

function populateSkillList(elementId, skillArray) {
  const listElement = getElement("#" + elementId);
  skillArray.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    listElement.appendChild(li);
  });
}

function populateSkills() {
  populateSkillList("frontend", skills.frontend);
  populateSkillList("backend", skills.backend);
  populateSkillList("other", skills.other);
}

function populateProjects() {
  const projectsContainer = getElement(".projects-container");

  projects.forEach((project) => {
    const projectWrapper = document.createElement("div");
    projectWrapper.classList.add("project-wrapper");

    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("project-img-wrapper");
    const img = document.createElement("img");

    import(`../assets/img/${project.imgSrc}`).then((module) => {
      img.src = module.default;
    });
    img.loading = "eager";
    img.draggable = false;
    imgWrapper.appendChild(img);
    projectWrapper.appendChild(imgWrapper);

    const titleEl = document.createElement("p");
    titleEl.textContent = project.title;
    titleEl.classList.add("title");
    projectWrapper.appendChild(titleEl);

    const descriptionEl = document.createElement("p");
    descriptionEl.textContent = project.description;
    descriptionEl.classList.add("project-description");
    projectWrapper.appendChild(descriptionEl);

    const projectLinks = document.createElement("div");
    projectLinks.classList.add("project-links");

    if (project.githubUrl) {
      const sourceLink = document.createElement("a");
      sourceLink.href = project.githubUrl;
      sourceLink.target = "_blank";
      sourceLink.textContent = "source";
      projectLinks.appendChild(sourceLink);
    }

    if (project.appUrl) {
      const appLink = document.createElement("a");
      appLink.href = project.appUrl;
      appLink.target = "_blank";
      appLink.textContent = "url";
      projectLinks.appendChild(appLink);
    }

    projectWrapper.appendChild(projectLinks);

    projectsContainer.appendChild(projectWrapper);
  });
}

let animations = [];

const tl = gsap.timeline({
  duration: 0.5,
  ease: "power3.in"      
});

const AnimateName = () => {
  tl.to(".name",{
    transform: "translateX(0)",
  }, 0.1);
} 
animations.push(AnimateName);

const AnimateRole = () => {
  tl.to(".role",{
    transform: "translateX(0)",
  }, 0.3);
} 
animations.push(AnimateRole);

const AnimateShortDescription = () => {
  tl.to(".short-description",{
    transform: "translateY(0)",
    opacity: 1,
  }, 0.4);
} 
animations.push(AnimateShortDescription);

const AnimateCube1 = () => {
  tl.to(".cube-1-container",{
    transform: "translate(0,0) scale(1)",
    opacity: 1,
  }, 0.6);
} 
animations.push(AnimateCube1);

const AnimateCube2 = () => {
  tl.to(".cube-2",{
    transform: "translateX(0) scale(1)",
    opacity: 1,
  }, 0.9);
} 
animations.push(AnimateCube2);

const AnimateCube3 = () => {
  tl.to(".cube-3",{
    transform: "translateY(0) scale(1)",
    opacity: 1,
  }, 0.9);
} 
animations.push(AnimateCube3);

 const AnimateSkills = () => {
  gsap.to(".skills li",{
    transform: "translateX(0)",
    opacity: 1,
    stagger: 0.1,
    duration: 0.2,
    ease: "power3,in",
    scrollTrigger:{
      trigger:".list-container",
      start: "top center",
      once: true,
    }
  });
}
animations.push(AnimateSkills);

const AnimateProjects = () => {
  const ProjectsWrappers = getElements(".project-wrapper");
  let count = 0;
  ProjectsWrappers.forEach(p => {
    p.style.transform = `translateX(${count++ % 2 === 0 ? '-':''}100%)`;
    const options = {
        transform: "translateX(0)",
        opacity: 1,
        duration: 0.7,
        ease: "power1,in",
        scrollTrigger:{
          trigger:p,
          start: "top center",
          once: true,
        }
      };
    gsap.to(p,options);
  })
}
animations.push(AnimateProjects);

updateIntro();
populateSkills();
populateProjects();
handleMenuLinkEvent()

addEventListener("load", () => {
  updateMenu();
  gsap.matchMedia().add("(min-width: 1024px)", () => {
      for(const anim of animations){
        anim()
      }
  });
});
