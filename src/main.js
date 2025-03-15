import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { intro } from "./intro.js";
import { skills } from "./skills.js";
import { projects } from "./projects.js";
import pinkSvg from "../assets/mandala.svg";
import pdf from "../assets/Resume.pdf";

function updateMenu(){
  const menu = getElement(".menu");
  menu.classList.add("menu-transition");
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

function getElement(selector) {
  const Element = document.querySelector(selector);
  if (!Element)
    throw new Error(`element "${selector}" does not exist!`);
  return Element;
}

function getElementStyleValue(selector, styleProperty) {
  const Element = getElement(selector);
  return getComputedStyle(Element)[styleProperty];
}

function updateElementStyle(selector, styleProperty, styleValue) {
  const Element = getElement(selector);
  Element.style[styleProperty] = styleValue;  
}

class GsapAnimator {
  constructor() {
    this.timeline = gsap.timeline();
    this.matchMedia = gsap.matchMedia();
  }
  createAnimationTo({ selector, styles, duration = 0.5, ease = 'power1.in' }, timelinePosition = 0) {
    // const originalValue = getElementStyleValue(selector, styleProperty);
    // updateElementStyle(selector, styleProperty, newValue);
    const originalValues = {};
    for(const [styleProperty, styleValue] of Object.entries(styles)){
    // Object.keys(styles).forEach(styleProperty => {
      originalValues[styleProperty] = getElementStyleValue(selector, styleProperty);
      updateElementStyle(selector, styleProperty, styleValue);
    }
    // );
    console.log({originalValues});
    return () => {
      this.timeline.to(selector, {
       ...originalValues, 
        duration,
        ease,
      }, timelinePosition);
    };
  }

  addResponsiveAnimation(query, animationCallback) {
    this.matchMedia.add(query, animationCallback);
  }
}
const animator = new GsapAnimator();
const animations=[];
  
const animateName = animator.createAnimationTo({
  selector: ".name",
  styles:{
    right: "-100%"
  }
});
animations.push(animateName);

// const animateRole = animator.createAnimationTo({
//   selector: ".role",
//   styles:{
//     left: "-100%"
//   },
//   duration: 0.5
// }, 0.2);
// animations.push(animateRole);

// const animateShortDescription = animator.createAnimationTo({
//   selector: ".short-description",
//   styles:{
//       top: "100%",
//       opacity: 0
//     },
//   duration: 0.5
// }, 0.3);
// animations.push(animateShortDescription);

updateIntro();
populateSkills();
populateProjects();
addEventListener("load", () => {
  updateMenu();
  animator.addResponsiveAnimation("(min-width: 1024px)", () => {
      // animations.forEach(animationFunc => animationFuncn());
      for(const anim of animations){
        anim()
      }
  });
});