import { Serie } from "./serie.js";
import { series } from "./data.js";

var tablaSeries :HTMLElement = document.getElementById("tablaSeries")!;
var espacioPromedio :HTMLElement = document.getElementById("promedio")!;

cargarSeries(series);
calcularPromedio(series);

function cargarSeries(series: Serie[]) 
{
    console.log("Cargando series...");
    for (let serie of series) 
    {
        console.log(serie);
        tablaSeries.insertAdjacentHTML('beforeend', `<tr class= "table-secondary"> 
                                            <th scope="row"> ${serie.id} </th> 
                                            <td class="text-primary">${serie.nombre}</td>
                                            <td>${serie.canal}</td>
                                            <td>${serie.temporadas}</td> </tr>`);
    }
    console.log("Series cargadas");
}

function calcularPromedio(series: Serie[])
{
    var suma = 0;
    var promedio = 0;
    for (let serie of series) 
    {
        suma += serie.temporadas;
    }
    promedio = suma / series.length;
    espacioPromedio.insertAdjacentHTML('beforeend', `<p> Seasons Average: ${promedio} </p>`);
}