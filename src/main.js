import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { intro } from "./intro.js";
import { skills } from "./skills.js";
import { projects } from "./projects.js";
import pinkSvg from "../assets/mandala.svg";
import pdf from "../assets/Resume.pdf";

function updateMenu(){
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-transition");
}
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
  const projectsContainer = document.querySelector(".projects-container");
  if (!projectsContainer) return;

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

function handleGsapAnimation() {
  const tl = gsap.timeline();
  tl.from(".name", {
    right:'-100%',
    duration: 0.5,
    ease: 'power1.in'
  },0)
  tl.from(".role", {
    right:'-100%',
    duration: 0.5,
    ease: 'power1.in'
  },0.5)
  tl.from(".short-description", {
    top:'100%',
    duration: 0.5,
    ease: 'power1.in'
  },0.5)
}

function initializeGsapAnimations() {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
        // handleGsapAnimation();
    });
}

updateIntro();
populateSkills();
populateProjects();
addEventListener("load", () => {
  updateMenu();
  initializeGsapAnimations();
});
