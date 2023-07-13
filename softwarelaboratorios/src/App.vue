<script>
import { RouterView } from "vue-router";
</script>
<template>
    <div class=bar-nav>
      <header class="hero">
        <nav class="nav container">
          <div class="nav__logo">
            <router-link to="/" class="nav__title">Software de Gestion de Laboratorios</router-link>
          </div>
        </nav>
      </header>
      <router-view />
    </div>
  </template>
  
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  
  .hero {
    width: 100%;
    position: relative;
    display: grid;
    grid-template-rows: 100px 1fr;
    color: #fff;
  }
  
  .hero::before {
    content: "";
    position: absolute;
    z-index: -1;
  }
  
  .hero__container {
    max-width: 800px;
    --padding-container: 0;
    display: grid;
    grid-auto-rows: max-content;
    align-content: center;
    gap: 2em;
    padding-bottom: 50px;
    text-align: center;
  }
  
  .hero__title {
    font-size: 3rem;
  }
  
  .hero__paragraph {
    margin-bottom: 5px;
    margin-top: 10px;
  }
  
  .nav {
    --padding-container: 0;
    height: 100%;
    display: flex;
    align-items: center;
  }
  
  .nav__title {
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    margin-right: 40rem;  /*ajustar los botones*/
    text-align: center;
    font-weight: 700;
    text-shadow: 2px 1px 2px black,
      1px 1px 1px black,
      -2px 1px 2px black,
      2px -1px 2px black;
  }
  </style>
  