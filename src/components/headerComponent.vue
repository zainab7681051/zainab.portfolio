<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

let showMenu = ref(false)
function toggleMenu() {
    showMenu.value = !showMenu.value;
}

</script>

<template>
    <header class="container">
        <span class="logo"></span>
        <span @click="toggleMenu" :class="showMenu ? 'toggle active' : 'toggle'">
            <span></span>
            <span></span>
        </span>
        <div :class="showMenu ? 'menu active' : 'menu'">
            <ul>
                <li><router-link to="/" id="intro">Intro</router-link></li>
                <li><router-link to="/skills" id="skills">Skills</router-link></li>
                <li><router-link to="/projects" id="projects">Projects</router-link></li>
                <li><a id="cv"
                        href="https://firebasestorage.googleapis.com/v0/b/zainab-portfolio.appspot.com/o/Resume.pdf?alt=media&token=b1a32688-8e90-49f5-8014-129dbcd561c6"
                        target="_blank">CV</a></li>
            </ul>
        </div>
    </header>
</template>

<style scoped>
header {
    position: fixed;
    z-index: 50;
    width: 100%;
    top: 0;
    padding-top: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.logo {
    width: 4rem;
}

.toggle {
    width: 2rem;
    height: 1.5rem;
    cursor: pointer;
    position: relative;
}

.toggle span {
    width: 100%;
    display: block;
    border-bottom: 2px solid var(--white);
    position: absolute;
    z-index: 51;
    transition: top 0.3s ease, transform 0.3s ease;
}

.toggle span:first-child {
    top: 0.4rem;
}

.toggle span:last-child {
    top: 0.9rem;
}

.toggle.active span {
    top: 0.75rem;
}

.toggle.active span:first-child {
    transform: rotate(45deg);
}

.toggle.active span:last-child {
    transform: rotate(-45deg);
}

.menu {
    position: fixed;
    top: 5rem;
    right: -15rem;
    width: 15rem;
    height: 15rem;
    font-size: 1rem;
    background: var(--third);
    opacity: 0;
    padding: 1rem;
    border-radius: 10px;
    transition: right 0.3s ease, opacity 0.3s ease;
}

.menu ul {
    list-style: none;
}

.menu ul li {
    text-transform: uppercase;
    font-weight: 300;
}

.menu ul li a {
    color: var(--white);
    display: block;
    padding: 0.5rem;
    letter-spacing: 0.1rem;
    transition: color 0.3s ease;
}

.menu ul li a:hover {
    color: var(--second);
}

.menu ul li+li {
    border-top: 1px solid var(--first);
}

.menu ul li a.router-link-active {
    color: var(--second);
    pointer-events: none;
}

.menu.active {
    right: var(--containerXPadding);
    opacity: 1;
}

@media (min-width: 1024px) {
    .logo {
        width: 6rem;
    }

    .toggle {
        display: none;
    }

    .menu {
        background: transparent;
        position: static;
        top: auto;
        right: auto;
        opacity: 1;
        width: auto;
        padding: 0;
    }

    .menu ul {
        display: flex;
        gap: 3rem;
    }

    .menu ul li a {
        color: var(--white);
        padding: 0;
        font-size: 1.5rem;
    }

    .menu ul li+li {
        border-top: none;
    }
}
</style>