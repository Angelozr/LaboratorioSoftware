<template>
    <body>
      <h1>Reservar Laboratorio</h1>
      <form action="/">
        <label for="codigo">Laboratorio:</label>
        <input type="text" id="codigo" name="codigo"><br><br>
  
        <label for="fecha">Fecha de reserva:</label>
        <input type="date" id="fecha" name="fecha"><br><br>
  
        <label for="hora_inicio">Hora de inicio:</label>
        <input type="time" id="hora_inicio" name="hora_inicio"><br><br>
  
        <label for="hora_fin">Hora de fin:</label>
        <input type="time" id="hora_fin" name="hora_fin"><br><br>
  
        <label for="responsable">Responsable:</label>
        <input type="text" id="responsable" name="responsable" value="PATRICIA ALEXANDRA QUIROZ PALMA" readonly>
        <br><br>
  
  
        <label for="descripcion">Descripción:</label>
        <textarea id="descripcion" name="descripcion"></textarea><br><br>
  
        <input type="submit" value="Reservar">
      </form>
    </body>
  </template>
     
  
  <script>
  export default {
    name: "HelloWorld",
    props: {
      msg: String,
    },
  };
  </script>
   
   
   
  <style>
  /* Estilos para el cuerpo de la página */
  body {
    background-color: #f5f5f5;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  
  form {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 40rem;
  }
  
  /* Estilos para el encabezado de la página */
  h1 {
    background-color: #2e86c1;
    color: #fff;
    font-size: 28px;
    margin: 0;
    padding: 20px;
    text-align: center;
  }
  
  /* Estilos para el formulario */
  form {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
  }
  
  /* Estilos para las etiquetas */
  label {
    display: block;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  /* Estilos para los campos de entrada */
  input[type=text],
  input[type=email],
  input[type=date],
  select,
  textarea {
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    margin-bottom: 20px;
    padding: 10px;
    width: 99%;
  }
  
  /* Estilos para el botón */
  input[type=submit] {
    background-color: #2e86c1;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px;
  }
  
  /* Estilos para el botón cuando se pasa el mouse sobre él */
  input[type=submit]:hover {
    background-color: #1d2d44;
  }
  </style>