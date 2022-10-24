import { series } from "./data.js";
var tablaSeries = document.getElementById("tablaSeries");
var espacioPromedio = document.getElementById("promedio");
cargarSeries(series);
calcularPromedio(series);
function cargarSeries(series) {
    console.log("Cargando series...");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        console.log(serie);
        tablaSeries.insertAdjacentHTML('beforeend', "<tr class= \"table-secondary\"> \n                                            <th scope=\"row\"> ".concat(serie.id, " </th> \n                                            <td class=\"text-primary\">").concat(serie.nombre, "</td>\n                                            <td>").concat(serie.canal, "</td>\n                                            <td>").concat(serie.temporadas, "</td> </tr>"));
    }
    console.log("Series cargadas");
}
function calcularPromedio(series) {
    var suma = 0;
    var promedio = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        suma += serie.temporadas;
    }
    promedio = suma / series.length;
    espacioPromedio.insertAdjacentHTML('beforeend', "<p> Seasons Average: ".concat(promedio, " </p>"));
}
