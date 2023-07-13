<template>
    <body>
        <section class="muestras">
            <h2>Horarios de Mayor y Menor Demanda</h2>
            <table>
                <thead>
                    <tr>
                        <th>Laboratorio</th>
                        <th>Piso</th>
                        <th>Horario de mayor demanda</th>
                        <th>Horario de menor demanda</th>
                        <th>Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>101</td>
                        <td>Piso 1</td>
                        <td>08:00 - 12:00</td>
                        <td>13:00 - 16:00</td>
                        <td><a href="../resultados/resultados.html" onclick="verDetalleMuestra('001')">Ver detalle</a></td>
                    </tr>
                    <tr>
                        <td>201</td>
                        <td>Piso 2</td>
                        <td>10:00 - 13:00</td>
                        <td>17:00 - 19:00</td>
                        <td><a href="../resultados/resultados.html" onclick="verDetalleMuestra('002')">Ver detalle</a></td>
                    </tr>
                    <tr>
                        <td>202</td>
                        <td>Piso 2</td>
                        <td>08:00 - 13:00</td>
                        <td>16:00 - 19:00</td>
                        <td><a href="../resultados/resultados.html" onclick="verDetalleMuestra('003')">Ver detalle</a></td>
                    </tr>
                    <tr>
                        <td>203</td>
                        <td>Piso 2</td>
                        <td>08:00 - 13:00</td>
                        <td>16:00 - 19:00</td>
                        <td><a href="../resultados/resultados.html" onclick="verDetalleMuestra('004')">Ver detalle</a></td>
                    </tr>
                    <tr>
                        <td>207</td>
                        <td>Piso 2</td>
                        <td>08:00 - 11:00</td>
                        <td>13:00 - 17:00</td>
                        <td><a href="../resultados/resultados.html" onclick="verDetalleMuestra('005')">Ver detalle</a></td>
                    </tr>
                    <tr>
                        <td>301</td>
                        <td>Piso 3</td>
                        <td>14:00 - 18:00</td>
                        <td>08:00 - 10:00</td>
                        <td><a href="../resultados/resultados.html" onclick="verDetalleMuestra('006')">Ver detalle</a></td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="disponibilidad">
            <h2>Disponibilidad de Laboratorios</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>08:00 - 09:00</th>
                        <th>09:00 - 10:00</th>
                        <th>10:00 - 11:00</th>
                        <th>11:00 - 12:00</th>
                        <th>12:00 - 13:00</th>
                        <th>13:00 - 14:00</th>
                        <th>14:00 - 15:00</th>
                        <th>15:00 - 16:00</th>
                        <th>16:00 - 17:00</th>
                        <th>18:00 - 19:00</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lab1</td>
                        <td class="ocupado"></td>
                        <td class="ocupado"></td>
                        <td class="ocupado"></td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                        <td class="ocupado"></td>
                    </tr>
                    <tr>
                        <td>Lab2</td>
                        <td class="ocupado"></td>
                        <td class="ocupado"></td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                    </tr>
                    <tr>
                        <td>Lab3</td>
                        <td class="libre"></td>
                        <td class="libre"></td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                    </tr>
                    <tr>
                        <td>Lab4</td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                        <td class="ocupado"></td>
                        <td class="ocupado"></td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                        <td class="libre"></td>
                        <td class="ocupado"></td>
                    </tr>
                    <tr>
                        <td>Lab5</td>
                        <td class="ocupado"></td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                        <td class="libre"></td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                    </tr>
                    <tr>
                        <td>Lab6</td>
                        <td class="ocupado"></td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                        <td class="libre"></td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                        <td class="ocupado"></td>
                        <td class="libre"></td>
                    </tr>
                </tbody>
            </table>
        </section>
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
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #64aee2;
}

tr:hover {
    background-color: #f5f5f5;
}

.disponibilidad table {
    width: 100%;
    border-collapse: collapse;
}

.disponibilidad th,
.disponibilidad td {
    padding: 8px;
    text-align: center;
    border: 1px solid #ccc;
}

.disponibilidad .libre {
    background-color: green;
    color: white;
}

.disponibilidad .ocupado {
    background-color: red;
    color: white;
}
</style>
  