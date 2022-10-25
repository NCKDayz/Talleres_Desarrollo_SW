import { series } from "./data.js";
var tablaSeries = document.getElementById("tablaSeries");
var espacioPromedio = document.getElementById("promedio");
var carta = document.getElementById("carta");
var imagen = document.getElementById("imagenCarta");
var titulo = document.getElementById("titulo");
var sinopsis = document.getElementById("sinopsis");
var link = document.getElementById("link");
cargarSeries(series);
calcularPromedio(series);
function cargarSeries(series) {
    console.log("Cargando series...");
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        console.log(serie);
        tablaSeries.insertAdjacentHTML('beforeend', "<tr class= \"table-secondary\"> \n                                            <th scope=\"row\"> ".concat(serie.id, " </th> \n                                            <td class=\"text-primary\" id = \"").concat(serie.id, "\" >").concat(serie.nombre, "</td>\n                                            <td>").concat(serie.canal, "</td>\n                                            <td>").concat(serie.temporadas, "</td> </tr>"));
    }
    console.log("Series cargadas");
}
function calcularPromedio(series) {
    var suma = 0;
    var promedio = 0;
    for (var _i = 0, series_3 = series; _i < series_3.length; _i++) {
        var serie = series_3[_i];
        suma += serie.temporadas;
    }
    promedio = suma / series.length;
    espacioPromedio.insertAdjacentHTML('beforeend', "<p> Seasons Average: ".concat(promedio, " </p>"));
}
if (series != null) {
    var _loop_1 = function (serie) {
        show = document.getElementById(serie.id.toString());
        if (show != null) {
            show.addEventListener("click", function (e) { mostrarCard(serie.id - 1); });
        }
    };
    var show;
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
}
function mostrarCard(iden) {
    imagen.setAttribute("src", series[iden].imagen);
    titulo.innerHTML = series[iden].nombre;
    sinopsis.innerHTML = series[iden].sinopsis;
    link.setAttribute("href", series[iden].enlace);
    link.innerHTML = series[iden].enlace;
    if (carta.style.display == "none") {
        carta.style.display = "block";
    }
}
