<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <div class="texts">
           <section class="buttons">
            <router-link class="buttons__btn buttons__btn--login" to="/login"
           >Iniciar Sesion</router-link>
           <router-link class="buttons__btn buttons__btn--register" to="/register"
           >Registrarse</router-link>
          </section>
    </div>
  </header>
        <br><br><br><br>
    <img src="../assets/principal.jpg" alt="">
</template>

<style scoped>
header {
  width: 100%;
  height: 80px;
  margin-top: 10px;
}
img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
.texts {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.buttons {
  display: flex;
  justify-content: space-evenly;
}

.buttons__btn {
  text-decoration: none;
  padding: 1.3em 3em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  background-color: #4eeadd93;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.buttons__btn--login:hover {
  background-color: #31d6f4;
  box-shadow: 0px 15px 20px rgba(41, 207, 141, 0.4);
  transform: translateY(-7px);
}

.buttons__btn--Contactanos:hover {
  background-color: #fa1818;
  box-shadow: 0px 15px 20px rgba(229, 46, 46, 0.4);
  transform: translateY(-7px);
}

.buttons__btn--register:hover {
  background-color: #1db1f5;
  box-shadow: 0px 15px 20px rgba(229, 46, 46, 0.4);
  transform: translateY(-7px);
}

.buttons__btn:active {
  transform: translateY(-1px);
}
.about {
    text-align: center;
    font-size: 20px
}


.footer {
    background-color: #232325;
}

.footer__img {
    width: 30px;
}

.logo2 img{
    align-content: center;
    height:60px;
    width: 190px;
}

.navv a{
    text-decoration: none;
    color: rgb(231, 228, 228);
    display:contents;
    padding: 15px;
    margin: auto;
    text-align: center;
    cursor: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;

}
p {
  color: rgb(7, 7, 7);
  font-family: Helvetica, Arial, sans-serif;
}
</style>
