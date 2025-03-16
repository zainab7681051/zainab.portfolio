import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { intro } from "./intro.js";
import { skills } from "./skills.js";
import { projects } from "./projects.js";
import pinkSvg from "../assets/mandala.svg";
import pdf from "../assets/Resume.pdf";

gsap.registerPlugin(ScrollTrigger);

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

function updateCube1(){
  const Cube1 = getElement(".cube-1-container");
  Cube1.classList.add("cube-rotate");
}
class GsapAnimator {
  constructor() {
    this.timeline = gsap.timeline();
    this.matchMedia = gsap.matchMedia();
  }
  createAnimation({ selector, styles, duration = 0.5, ease = 'power1.in', timeline = true, stagger, scrollTrigger}, timelinePosition = 0) {
    const originalValues = {};
    
    for(const [styleProperty, styleValue] of Object.entries(styles)){
      originalValues[styleProperty] = getElementStyleValue(selector, styleProperty);
      updateElementStyle(selector, styleProperty, styleValue);
    }
    return () => {
      if(!timeline){
        return gsap.to(selector, {
         ...originalValues, 
          duration,
          ease,
          stagger,
          scrollTrigger
        }, 0); 
      }
      return this.timeline.to(selector, {
       ...originalValues, 
        duration,
        ease,
        stagger,
        scrollTrigger
      }, timelinePosition);
    };
  }
  addResponsiveAnimation(query, animationCallback) {
    this.matchMedia.add(query, animationCallback);
  }
}
const animator = new GsapAnimator();
const animations=[];
  
const AnimateName = animator.createAnimation({
  selector: ".name",
  styles:{
    right: "-100%"
  }
});
animations.push(AnimateName);

const AnimateRole = animator.createAnimation({
  selector: ".role",
  styles:{
    right: "-100%"
  },
}, 0.2);
animations.push(AnimateRole);

const AnimateShortDescription = animator.createAnimation({
  selector: ".short-description",
  styles:{
      top: "100%",
      opacity: 0
    },
}, 0.3);
animations.push(AnimateShortDescription);

const AnimateCube1 = animator.createAnimation({
  selector: ".cube-1-container",
  styles:{
    transform: "translate(-100%,-100%) scale(0.6)",
    opacity: 0,
    ease: "power3.in"
  },
}, 0.5);
animations.push(AnimateCube1);

const AnimateCube2 = animator.createAnimation({
  selector: ".cube-2",
  styles:{
    transform: "translateX(-100%) scale(0.6)",
    opacity: 0,
    ease: "power3.in"
  },
}, 0.8);
animations.push(AnimateCube2);

const AnimateCube3 = animator.createAnimation({
  selector: ".cube-3",
  styles:{
    transform: "translateY(-100%) scale(0.6)",
    opacity: 0,
    ease: "power3.in"
  },
}, 0.8);
animations.push(AnimateCube3);

// the issue is in selector. it retrurs by querSelector and not queryselectorAll which is what should be used for ".skills li" since we have more than one
setTimeout(() =>{
  const AnimaeSkills = animator.createAnimation({
    selector: ".skills li",
    styles:{
      transform: "translateX(-100%)",
      opacity: 0,
    },
      timeline: false,
      stagger: 0.2,
      scrollTrigger:{
        trigger:".list-container",
        start: "top center",
        // once: true,
        scrub: true,
        markers: true,
      }
  });
  animations.push(AnimaeSkills);
}, 0);

updateIntro();
populateSkills();
populateProjects();

addEventListener("load", () => {
  updateMenu();
  animator.addResponsiveAnimation("(min-width: 1024px)", () => {
      for(const anim of animations){
        anim()
      }
  });
});