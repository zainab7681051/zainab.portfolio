<script setup>
import HeaderComp from "./components/headerComponent.vue"
</script>

<template>
  <header-comp />
  <router-view />

  <div class="social">
    <a href="https://github.com/zainab7681051/zainab.portfolio" target="_blank"><i class="bi bi-github"></i></a>
    <a href="https://linkedin.com/in/zainab-sanar" target="_blank"><i class="bi bi-linkedin"></i></a>
  </div>
</template>

<style>
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --first: #00B295;
  --second: #FB3640;
  --third: #302c2d;
  --black: #191516;
  --white: #F8FFE5;
  --containerXPadding: 1.5rem;
  --unit: 16px;
}

@font-face {
  font-family: bookmanBold;
  src: url('./assets/fonts/BOOKmanOpti-Bold.otf');
}

@font-face {
  font-family: bookmanLight;
  src: url('./assets/fonts/BOOKmanOpti-Light.otf');
}

body {
  font-size: var(--unit);
  line-height: 1.3;
  font-family: 'bookmanLight';
  background-color: var(--black);
  color: var(--white)
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  color: var(--white);
}

a:hover {
  text-decoration: none;
}

.container {
  padding-left: var(--containerXPadding);
  padding-right: var(--containerXPadding);
  opacity: 1;
  transition: opacity .2s ease-in-out;
}

.social {
  position: fixed;
  bottom: 0;
  right: var(--containerXPadding);
  bottom: 1.5rem;
  display: flex;
  font-size: 2rem;
  z-index: 3
}

.social a {
  color: var(--white);
  display: block;
  transition: color 0.3s ease;
}

.social a:hover {
  color: var(--second);
}

.social a i.bi.bi-github {
  margin-right: 1rem;
}

.hero {
  position: relative;
  overflow: hidden;
}

.fullscreen {
  min-height: 100vh;
  width: 100%;
  display: flex;
}

@media (min-width: 600px) {
  :root {
    --containerXPadding: 2rem;
  }
}

@media (min-width: 1024px) {
  :root {
    --containerXPadding: 3rem;
  }

  .social {
    bottom: 2rem;
  }
}
</style>