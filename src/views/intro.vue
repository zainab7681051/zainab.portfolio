<script setup>
import { onMounted } from "vue"
import { gsap } from 'gsap'

function animate_intro() {
  gsap.timeline().to(".strip_intro",{
    x:0,
    ease:"power2.inOut",
    duration:0.90
  },0)
  .to(".heading-block",{
    y:0,
    opacity: 1,
    duration: 0.75
  }, 0)
  .to(".block p",{
    y:0,
    opacity: 1,
    duration: 0.75
  }, 0)
  .to(".button-group",{
    y:0,
    opacity: 1,
    duration: 0.75
  }, 0)
}

onMounted(animate_intro);

</script>

<template>
  <section class="hero fullscreen">
    <span class="strip_intro"></span>
    <div class="block container">
      <div class="heading-block">
        <h1 class="huge-font">Zainab</h1>
        <h2 class="upper-text">Software Developer</h2>
      </div>
      <p class="upper-text">
        I am skilled in JavaScript, C#, C/C++ and more.
        <br>I create efficient and engaging
        web-based softwares and solutions
      </p>
      <div class="button-group">
        <a href="https://firebasestorage.googleapis.com/v0/b/zainab-portfolio.appspot.com/o/Resume.pdf?alt=media&token=b1a32688-8e90-49f5-8014-129dbcd561c6"
          target="_blank" title="downlaod my CV" class="btn primary">my CV &nbsp;
          <i class="bi bi-download"></i>
        </a>
        <router-link to="/projects" id="btn_border" href="#" title="Works & Projects" class="btn border">Works &
          Projects &nbsp;
          <i class="bi bi-card-list"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style>
.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-color: var(--black);
}
.strip_intro {
  position: absolute;
  top: 0;
  right: 0;
  width: 25%;
  bottom: 0;
  background-color: var(--first);
  transform: translateX(-100vw);
  /* transition: transform .4s ease-in-out, width .4s ease-in-out; */
}
.block.container{
  display: block;
  margin: auto 0;
}
.heading-block {
  transform: translateY(-100vh);
  opacity: 0;
  /* transition: transform .5s ease-in-out, opacity .5s ease-in-out */
}

.huge-font {
  font-family: 'bookmanBold';
}

.upper-text {
  text-transform: uppercase;
  letter-spacing: 0.2rem;
}

.block h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.block h1 {
  /* font-size: 5.5rem; */
  font-size: 3rem;
  margin-bottom: 2rem;
  letter-spacing: 4px;
}

.block h1:before {
  content: '';
  /* width: 1.5rem; */
  /* height: 3.6rem; */
  width: .8rem;
  height: 2.5rem;
  background: var(--first);
  margin-right: 0.5rem;
  display: inline-block;
}

.block p {
  font-size: .8rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: var(--white);
  opacity: 0;
  transform: translateY(50vh);
  /* transition: transform .5s ease-in-out, opacity .5s ease-in-out */
}

.btn {
  font-size: .8rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  padding: 0.6rem 2rem;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border: none;
  line-height: 1.5;
  border-bottom-right-radius: 1rem;
  display: inline-flex;
  flex-direction: row;
  width: fit-content;
  cursor: pointer;
  border: 1px solid transparent;
  color: var(--white);
  position: relative;
  transition: color .5s ease;
  z-index: 1;
}

.btn:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  z-index: -1;
  transition: width .5s ease;
  background: var(--first);
}

.btn:hover:before {
  width: 100%;
}

.btn.primary {
  background: var(--white);
  border-color: var(--black);
  color: var(--black);
}


.btn.border {
  color: var(--white);
  background-color: transparent;
  border-color: var(--white);
}

.button-group {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  opacity: 0;
  /* transition: transform .5s ease-in-out, opacity .5s ease-in-out */
}


@media (min-width: 600px) {
  .button-group {
    width: fit-content;
    flex-direction: row;
  }

  .button-group .btn {
    flex: auto;
  }
}

@media (min-width: 1024px) {
  .block {
    z-index: 1;
  }

  .block h2 {
    font-size: 3.5rem;
    margin-bottom: 2rem;
  }

  .block h1 {
    font-size: 8rem;
    margin-bottom: 2rem;
  }

  .block h1:before {
    width: 2rem;
    height: 6rem;
  }

  .block p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }

  .btn {
    font-size: 1rem;
  }
}
</style>