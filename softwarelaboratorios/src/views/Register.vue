<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user"

const email = ref("");
const password = ref("");

const userStore = useUserStore();

const register = () => {
  userStore.register(email.value, password.value);
}
</script>

<template>
  <header>
  
    <div class="register">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div class="register__input">
        <input type="email" required v-model="email"/>
        <label>Email</label>
      </div>
      <div class="register__input">
        <input type="password" required v-model="password"/>
        <label>Password</label>
      </div>

      <button class="register__submit" type="submit">Register</button>
    </form>
  </div>
  </header>
  <img src="../assets/registro.jpg" alt="">
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
  margin-top: -60px;
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

.buttons__btn {
  text-decoration: none;
  padding: 1.3em 3em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  background-color: #282828;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.buttons__btn--login:hover {
  background-color: #18db28;
  box-shadow: 0px 15px 20px rgba(41, 207, 141, 0.4);
  transform: translateY(-7px);
}

.buttons__btn--Contactanos:hover {
  background-color: #fa1818;
  box-shadow: 0px 15px 20px rgba(229, 46, 46, 0.4);
  transform: translateY(-7px);
}

.buttons__btn--register:hover {
  background-color: #f5df1d;
  box-shadow: 0px 15px 20px rgba(229, 46, 46, 0.4);
  transform: translateY(-7px);
}

.buttons__btn:active {
  transform: translateY(-1px);
}

.nav__title {
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  text-align:center;
  font-weight: 700;
  text-shadow: 2px  1px 2px black,
             1px  1px 1px black,
            -2px  1px 2px black,
             2px -1px 2px black;
}


.about {
    text-align: center;
}

.footer__copyright {
    font-weight: 300;
}

.footer {
    background-color: #232325;
}

.footer__copy {
    --padding-container: 30px 0;
    text-align: center;
    color: #fff;
}

.footer__img {
    width: 30px;
}

.hero__paragraph {
    margin-bottom: 5px;
    margin-top: 10px;
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

.cta {
    display: inline-block;
    background-color: #7b9977;
    justify-self: center;
    color: #fff;
    text-decoration: none;
    padding: 13px 30px;
    border-radius: 32px;
}

.register {
  margin: 100px auto;
  width: 400px;
  padding: 40px;
  background: rgba(44, 189, 218, 0.384);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.register h2 {
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
}

.register .register__input {
  position: relative;
}

.register .register__input input {
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
.register .register__input label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.register .register__input input:focus ~ label,
.register .register__input input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.register__submit {
  color: #1b1c1b;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: none;
  cursor: pointer;
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


</style>
