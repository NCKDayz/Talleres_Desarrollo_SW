import { Serie } from "./serie.js";
import { series } from "./data.js";

var tablaSeries :HTMLElement = document.getElementById("tablaSeries")!;
var espacioPromedio :HTMLElement = document.getElementById("promedio")!;
var carta :HTMLElement = document.getElementById("carta")!;
var imagen :HTMLElement = document.getElementById("imagenCarta")!;
var titulo :HTMLElement = document.getElementById("titulo")!;
var sinopsis :HTMLElement = document.getElementById("sinopsis")!;
var link :HTMLElement = document.getElementById("link")!;

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
                                            <td class="text-primary" id = "${serie.id}" >${serie.nombre}</td>
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

if (series != null)
{
    for (let serie of series)
    {
        var show :HTMLElement|null = document.getElementById(serie.id.toString())!;
        if (show != null)
        {
            show.addEventListener("click", (e:Event)=>{mostrarCard(serie.id - 1);});   
        }
    }
    
}

function mostrarCard(iden: number)
    {
        imagen.setAttribute("src", series[iden].imagen);
        titulo.innerHTML = series[iden].nombre;
        sinopsis.innerHTML = series[iden].sinopsis;
        link.setAttribute("href", series[iden].enlace);
        link.innerHTML = series[iden].enlace;
        if (carta.style.display == "none")
        {
            carta.style.display = "block";
        }
    
    }