<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';

const email = ref("");
const password = ref("");

const userStore = useUserStore();

const login = () => {
  userStore.login(email.value, password.value);
};

</script>

<template>
<header>
  <div class="login">
    <h2>Inicio Sesion</h2>
    <form @submit.prevent="login">
      <div class="login__input">
        <input type="text" required v-model="email"/>
        <label>Usuario</label>
      </div>
      <div class="login__input">
        <input type="password" required v-model="password"/>
        <label>Contraseña</label>
      </div>

      <button class="login__submit" type="submit">Iniciar Sesion</button>
    </form>
  </div>
</header>
  <img src="../assets/princi.jpg" alt="">
</template>


<style scoped>
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
.login {
  margin: 100px auto;
  width: 400px;
  padding: 40px;
  background: #86bbda98;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login h2 {
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
}

.login .login__input {
  position: relative;
}

.login .login__input input {
  font-size: 18px;
  width: 100%;
  padding: 10px 0;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login .login__input label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login .login__input input:focus ~ label,
.login .login__input input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.login__submit {
  color: #1b1c1b;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: none;
  cursor: pointer;
}

header {
  width: 100%;
  height: 750px;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  margin-bottom: 50px;
  margin-top: -10px;
}

.texts {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.texts__title {
  font-size: 3.5rem;
  text-shadow: 2px  1px 2px black,
             1px  1px 1px black,
            -2px  1px 2px black,
             2px -1px 2px black;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
  
}

.about {
    text-align: center;
}


.footer {
    background-color: #232325;
}


.footer__img {
    width: 35px;
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
    font-size: 20px
}

p {
  color: rgb(0, 0, 0);
  font-family: Helvetica, Arial, sans-serif;
  font-size: 20px
}
</style>
