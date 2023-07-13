<template>
    <body>
     <header>
     </header>
     <main>
         <section class="filtros">
             <h1>Filtrar por laboratorio y fecha:</h1>
             <form>
                 <div class="filtro-laboratorio">
                     <label for="laboratorio">Código del laboratorio:</label>
                     <input type="text" id="laboratorio" name="laboratorio">
                 </div>
                 <div class="filtro-fecha">
                     <label for="fecha">Fecha:</label>
                     <input type="date" id="fecha" name="fecha">
                 </div>
                 <br>
                 <input type="submit" value="Filtrar" onclick="filtrarMuestras(); return false;">
             </form>
         </section>
         <section class="muestras">
             <h2>Historial de uso de los Laboratorios</h2>
             <table>
                 <thead>
                     <tr>
                         <th>Laboratorio</th>
                         <th>Encargado del laboratorio</th>
                         <th>Fecha</th>
                         <th>Hora de inicio</th>
                         <th>Hora de fin</th>
                         <th>Acciones</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td>201</td>
                         <td>Luis Lopez</td>
                         <td>2023-06-18</td>
                         <td>09:00 AM</td>
                         <td>10:30 AM</td>
                         <td><a href="../Observaciones/detalle.html?id=001">Ver detalles</a></td>
                     </tr>
                     <tr>
                         <td>202</td>
                         <td>Angelo Mero</td>
                         <td>2023-06-18</td>
                         <td>11:00 AM</td>
                         <td>12:30 PM</td>
                         <td><a href="../Observaciones/detalle.html?id=002">Ver detalles</a></td>
                     </tr>
                     <tr>
                         <td>203</td>
                         <td>Emiliano Moreira</td>
                         <td>2023-06-19</td>
                         <td>02:00 PM</td>
                         <td>04:00 PM</td>
                         <td><a href="../Observaciones/detalle.html?id=003">Ver detalles</a></td>
                     </tr>
                     <tr>
                         <td>301</td>
                         <td>Angel Lopez</td>
                         <td>2023-06-18</td>
                         <td>09:00 AM</td>
                         <td>10:30 AM</td>
                         <td><a href="../Observaciones/detalle.html?id=001">Ver detalles</a></td>
                     </tr>
                     <tr>
                         <td>302</td>
                         <td>Zair Castillo</td>
                         <td>2023-06-18</td>
                         <td>11:00 AM</td>
                         <td>12:30 PM</td>
                         <td><a href="../Observaciones/detalle.html?id=002">Ver detalles</a></td>
                     </tr>
                     <tr>
                         <td>103</td>
                         <td>Omar Moreira</td>
                         <td>2023-06-19</td>
                         <td>02:00 PM</td>
                         <td>04:00 PM</td>
                         <td><a href="../Observaciones/detalle.html?id=003">Ver detalles</a></td>
                     </tr>
                 </tbody>
             </table>
         </section>
     </main>
     <br>
 </body>
 
 
 
  </template>
    
  
    <script>
    export default {
      name: "HelloWorld",
      mounted() {
        const form = document.querySelector('.filtros form');
        const muestras = document.querySelectorAll('.muestras tbody tr');
    
        form.addEventListener('submit', (event) => {
          event.preventDefault(); // Prevenir el envío del formulario
          const codigoLaboratorio = document.getElementById('laboratorio').value;
          const fecha = document.getElementById('fecha').value;
    
          muestras.forEach((muestra) => {
            const codigoMuestra = muestra.querySelector('td:nth-child(1)').textContent;
            const fechaMuestra = muestra.querySelector('td:nth-child(3)').textContent;
    
            if (codigoMuestra.includes(codigoLaboratorio) && fechaMuestra === fecha) {
              muestra.style.display = 'table-row';
            } else {
              muestra.style.display = 'none';
            }
          });
        });
      }
    }
    </script>
    
    
    
  
  
  
  <style>
  body {
     font-family: Arial, sans-serif;
     margin: 0;
     padding: 0;
 }
 
 
 
 h1 {
     margin: 0;
     font-weight: normal;
     margin-bottom: 15px;
     margin-top: -35px;
 }
 
 
 h2 {
     margin: 0;
     font-weight: normal;
     margin-bottom: 15px;
 }
 
 table {
     border-collapse: collapse;
     width: 100%;
 }
 
 th,
 td {
     text-align: left;
     padding: 8px;
 }
 
 th {
     background-color: #2e86c1;
     color: #FFFFFF;
 }
 
 tr:nth-child(even) {
     background-color: #f2f2f2;
 }
 
 a {
     color: #1E90FF;
 }
 
 a:hover {
     text-decoration: underline;
 }
 
 /* Estilos de filtros */
 
 /* Estilos de filtros */
 
 .filtros {
     margin-top: 15px;
     margin-left: 1rem;
     
     margin-bottom: 10px;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
 }
 
 .filtros label {
     margin-right: 10px;
     margin-bottom: 10px;
     display: block;
 }
 
 .filtros input[type="text"],
 .filtros select {
     padding: 6px;
     border-radius: 4px;
     border: 1px solid #ccc;
     margin-right: 10px;
 }
 
 .filtros input[type="submit"] {
     background-color: #4383d6;
     color: #FFFFFF;
     border: none;
     padding: 8px 16px;
     border-radius: 4px;
     cursor: pointer;
     margin-left: 0;
     display: block;
 }
 
 
 /* Estilos de tabla */
 
 .resultados {
     overflow-x: auto;
 }
 
 .resultados table {
     border: 1px solid #ccc;
 }
 
 .resultados thead {
     background-color: #1E90FF;
     color: #FFFFFF;
 }
 
 .resultados th,
 .resultados td {
     padding: 8px;
     border: 1px solid #ccc;
 }
 
 .resultados tr:nth-child(even) {
     background-color: #f2f2f2;
 }
 
 .resultados .acciones {
     display: flex;
     justify-content: space-between;
 }
 
 .resultados .acciones a {
     margin-right: 10px;
 }
 
   
  </style>
    