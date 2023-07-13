<script setup>
import { useUserStore } from '../stores/user';

const userStore = useUserStore();

const logout = () => {
  userStore.logout();
};

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Secretaria").addEventListener('submit', validarFormulario); 
  });
function validarFormulario(evento){
    evento.preventDefault();
    var nombre = document.getElementById('nombred').value;
    if (nombre.length > 20 || !nombre.trim("")) {
        document.getElementById("n-error").innerHTML = "Nombre no válido";
        return;
    }
    else{
        document.getElementById("n-error").innerHTML = "";
    }
    var carrera = document.getElementById('carrera').value;
    if (carrera==0) {
        document.getElementById("c-error").innerHTML = "Opción no válida";
        return;
    }
    else{
        document.getElementById("c-error").innerHTML = "";
    }
    var nivel = document.getElementById('nivel').value;
    if (nivel==0) {
        document.getElementById("nv-error").innerHTML = "Opción no válida";
        return;
    }
    else{
        document.getElementById("nv-error").innerHTML = "";
    }
    var paralelo = document.getElementById('paralelo').value;
    if (paralelo==0) {
        document.getElementById("p-error").innerHTML = "Opción no válida";
        return;
    }
    else{
        document.getElementById("p-error").innerHTML = "";
    }
    
    var asignatura = document.getElementById('asignatura').value;
    if (asignatura==0) {
        document.getElementById("a-error").innerHTML = "Opción no válida";
        return;
    }
    else{
        document.getElementById("a-error").innerHTML = "";
    }
    this.submit();
}

</script>


<template>
        <body>
    <main>
        <h2>Seleccione una categoría:</h2>
        <section class="categorias">
            <div class="categoria">
                    <img src="https://www.viewsonic.com/library/wp-content/uploads/2019/04/school-computer-lab.jpg" alt="Imagen de la categoría 1">
                    <center><router-link to="/laboratorios" class="lab">LABORATORIOS</router-link></center>
            </div>
            <div class="categoria">
                    <img src="https://lcseguridadinformatica.files.wordpress.com/2017/01/auditoria-sistemas.jpg" alt="Imagen de la categoría 2">
                    <CENTER>
                        <router-link to="/observaciones" class="datos">OBSERVACIONES</router-link>
                    </CENTER>
            </div>
            <div class="categoria">
                    <img src="https://cdn.atrpresencia.com/atr/wp-content/uploads/2019/11/control-horario-04.gif" alt="Imagen de la categoría 3">
                    <CENTER>
                        <router-link to="/horarios" class="datos">ESTADISTICAS Y HORARIOS</router-link>
                    </CENTER>
                  </div>
            <div class="categoria">
                    <img src="https://e233z34kjho.exactdn.com/wp-content/uploads/2017/05/laboratorio-forense-digital.jpg" alt="Imagen de la categoría 4">
                    <CENTER>
                        <router-link to="/reservar" class="datos">RESERVAR</router-link>
                    </CENTER>
            </div>
            <div class="categoria">
                    <img src="https://storage.googleapis.com/el-auditor-assets/602e971c9252bf03fc7ca716/720.webp" alt="Imagen de la categoría 5">
                    <CENTER>
                        <router-link to="/datos" class="datos">MIS DATOS</router-link>
                    </CENTER>
            </div>
            <div class="categoria">
                    <img src="https://openclipart.org/image/800px/307612" alt="Imagen de la categoría 6" >
                    
                      <section class="buttons">
                 <button class="buttons__btn buttons__btn--logout" @click.prevent="logout">Cerrar Sesion</button>
                      </section>                    
                  
            </div>
        </section>
    </main>
    <footer>
        <p>Angelo Castillo © 2023</p>
    </footer>
</body>

  </template>

<style>

.buttons {
  display: flex;
  justify-content: space-evenly;
  
}

.buttons__btn {
    text-decoration: none;
  padding: 1.3em 3em;
  font-size: 12px;
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
  font-size: 15px
}

.buttons__btn--logout:hover {
  background-color: #db1f18;
  box-shadow: 0px 15px 20px rgba(41, 207, 141, 0.4);
  transform: translateY(-7px);
  font-size: 17px
}

.about {
    text-align: center;
}
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}

a {
	color: #333;
	text-decoration: none;
}

a:hover {
	color: #666;
}

/* Estilos para el header */
header {
	background-color: #2e86c1;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}

main {
    margin-top: 30px;
}

h2 {
    margin-top: 20px;
}

header .h1 {
	margin: 0;
	font-size: 32px;
}

header form {
	display: flex;
	flex-direction: row;
	align-items: center;
}

header input[type="text"] {
	padding: 10px;
	border: none;
	border-radius: 5px;
	margin-right: 10px;
}

header button[type="submit"] {
	padding: 10px;
	border: none;
	background-color: #ffffff;
	color: #000000;
	border-radius: 5px;
	cursor: pointer;
}

header button[type="submit"]:hover {
	background-color: #93dcd5;
}

/* Estilos para la sección de categorías */
.categorias {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
    margin-top: 20px;
}

.categoria {
    display: inline-block;
    width: 200px;
    height: 180px;
    margin: 10px;
    background-color: #f7f7f7;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .categoria a {
    text-decoration: none;
  }
  
  .categoria img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }
  
.lab {
    font-size: 16px;
    margin: 10px;
    text-align: center;
  }

  .datos {
    font-size: 16px;
    margin: 10px;
    text-align: center;
  }



footer p {
	margin: 0;
	font-size: 14px;
}
footer{
	background-color: #2e86c1;
}
</style>
