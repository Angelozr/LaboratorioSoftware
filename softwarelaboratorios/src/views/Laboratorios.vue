<template>
    <body>
        <main>
            <form class="busqueda">
                <label for="codigo">Buscar por aula:</label>
                <input type="text" id="codigo" name="codigo" placeholder="Código del laboratorio">
                <button type="submit">Buscar</button>
            </form>
            <section class="lista-laboratorios" id="laboratorios">
                <article class="laboratorio" data-codigo="001">
                    <h2>laboratorio 1</h2>
                    <ul>
                        <li><strong>Código:</strong> 202</li>
                        <li><strong>Piso:</strong> Segundo</li>
                        <li><strong>Capacidad:</strong> 35 estudiantes</li>
                        <li><strong>Estado:</strong> Libre</li>
                    </ul>
                </article>

                <article class="laboratorio" data-codigo="002">
                    <h2>laboratorio 2</h2>
                    <ul>
                        <li><strong>Código:</strong> 203</li>
                        <li><strong>Piso:</strong> Segundo</li>
                        <li><strong>Capacidad:</strong> 30 estudiantes</li>
                        <li><strong>Estado:</strong> Ocupado</li>
                    </ul>
                </article>

                <article class="laboratorio" data-codigo="003">
                    <h2>laboratorio 3</h2>
                    <ul>
                        <li><strong>Código:</strong> 206</li>
                        <li><strong>Piso:</strong> Segundo</li>
                        <li><strong>Capacidad:</strong> 25 estudiantes</li>
                        <li><strong>Estado:</strong> Ocupado</li>
                    </ul>
                </article>

                <article class="laboratorio" data-codigo="004">
                    <h2>laboratorio 4</h2>
                    <ul>
                        <li><strong>Código:</strong> 302</li>
                        <li><strong>Piso:</strong> Tercero</li>
                        <li><strong>Capacidad:</strong> 35 estudiantes</li>
                        <li><strong>Estado:</strong> Ocupado</li>
                    </ul>
                </article>

                <article class="laboratorio" data-codigo="005">
                    <h2>laboratorio 5</h2>
                    <ul>
                        <li><strong>Código:</strong> 303</li>
                        <li><strong>Piso:</strong> Tercero</li>
                        <li><strong>Capacidad:</strong> 40 estudiantes</li>
                        <li><strong>Estado:</strong> Libre</li>
                    </ul>
                </article>

                <article class="laboratorio" data-codigo="006">
                    <h2>laboratorio 6</h2>
                    <ul>
                        <li><strong>Código:</strong> 301</li>
                        <li><strong>Piso:</strong> Tercero</li>
                        <li><strong>Capacidad:</strong> 40 estudiantes</li>
                        <li><strong>Estado:</strong> Libre</li>
                    </ul>
                </article>

            </section>
        </main>
        <footer>
            <p>Angelo Castillo &copy; 2023</p>
        </footer>
    </body>
</template>
  

<script>
export default {
  name: "HelloWorld",
  mounted() {
    const form = document.querySelector('.busqueda');
    const laboratorios = document.querySelectorAll('.laboratorio');

    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevenir el envío del formulario
      const codigo = document.getElementById('codigo').value;

      laboratorios.forEach((laboratorio) => {
        const codigoLaboratorio = laboratorio.dataset.codigo;

        if (codigoLaboratorio === codigo) {
          laboratorio.style.display = 'block';
        } else {
          laboratorio.style.display = 'none';
        }
      });
    });
  }
}
</script>


<style>
   body {
    margin: 0;
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  
  
  input[type="text"],
  button[type="submit"] {
    font-family: inherit;
    font-size: inherit;
    border: none;
    padding: 0.5rem;
  }
  
  button[type="submit"] {
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }
  
  main {
    padding: 2rem;
  }
  
  .pacientes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .paciente {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .paciente:hover {
    transform: translateY(-5px);
    transition: transform 0.2s ease-in-out;
  }
  
  .paciente .imagen {
    margin-right: 1rem;
  }
  
  .paciente h3 {
    margin-bottom: 0.5rem;
  }
  
  .paciente p {
    margin: 0;
  }
  
</style>
  