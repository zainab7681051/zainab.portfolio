import projects from "../data/allProjects.js"

export function get_projects() {
    return projects;
}

export function get_image(imgSrc) {
    return import(`../assets/img/${imgSrc}`).then(p => {
        return new URL(p.default, import.meta.url).href
    })
}