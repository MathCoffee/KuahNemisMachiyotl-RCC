import React, { useEffect, useRef, useState } from 'react'
import { tonalliSimbolos, numerosNombres, getImagePath } from '../funtions/funtions'
import '../styles/Estilos.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Inicio = () => {
    return (
        <>
            <h1>inicio</h1>
            <p>El <strong>Kāuhnemismachiyotl</strong>tiene como proposito... Este proyecto nace con el interés de compartir lo que hemos aprendido en la búsqueda por reconocer otras formas de conocimientos empleados por nuestros ancestros y que dejaron en herencia a través de las generaciones, así como la reapropiación de los mismos recuperando nuestra propia identidad a través de la descolonización.
                Este programa es una forma de conocer y comprender el cómputo del tiempo precolonial, la matemática implícita y la cuenta del tiempo hasta nuestros días. Es una reflexión del pasado hacia el futuro y el futuro hacia el pasado.
                Utilizando herramientas tecnológicas y comprendiendo la matemática en la estructura de la cuenta de los días, compartimos con ustedes una propuesta dedicada a aquellos interesados en sumergirse en la lectura e interpretación de los códices y otras investigaciones....
            </p>
            <p>Para el cálculo de correlación de fechas se utilizan dos metodologías clave de estudio:
                Cuenta Alfonso Caso: Correlación histórica basada en la referencia del 13 de agosto de 1521 (día 1-Serpiente, año 3-Casa).
                Cuenta Arturo Meza: Correlación astronómica/ritual basada en ciclos continuos de 18,980 días con ajuste dinámico de horas e inicio de año ritual 12 de marzo de 2026 (día 1-lagarto, año 1-Tochtli, veintena Atlacahualo, hora de inicio del día 06:43 am).

                El proyecto ha sido desarrollado por TLACUATZIN CODEX LAB (Investigación Transdisciplinaria de la Matemática en los Códices Prehispánicos de México).

                Secciones:
                Conversor:

                Permite seleccionar cualquier fecha del calendario civil (Gregoriano o Juliano) con opción de colocar la hora, en caso de conocerla, y calcular al instante su correspondencia en el sistema calendárico precolonial:
                Tonalpohualli (Tonalli / Cuenta Ritual - 260 días): Muestra el nombre del día tonalli de la fecha solicitada enunciando primero el numeral (1 al 13) seguido del signo/glifo (Lagarto, Serpiente, Flor, etc.) correspondiente. Para la correlación de Meza se incluye el cálculo del Cempohuallapohualli o la veintenas y hora de inicio del día que corresponde a dicha fecha.
                Xihuitl (Xihuitl / Año Solar - 365 días): Calcula el cargador del año enunciando primero el numeral (1 al 13) seguido del signo/glifo (Caña, Pedernal, Casa, Conejo) correspondientes.

                Se presenta un modelo de representación gráfica giratorio sobre el engranaje de sistema calendárico precolonial de acuerdo a la cuenta de Arturo Meza el cual se detiene de acuerdo al resultado obtenido (elaboración propia).

                El resultado se muestra por secciones contrastivas: Según la correspondencia de Meza y Según la correspondencia de Caso. Para mayor comodidad del usuario el resultado se muestra en Español, Náhuatl y Nusavi (Mixteco).

                Inverso:

                Permite realizar búsquedas en sentido opuesto, es decir , a partir de una fecha del calendario precolonial se muestra que fecha del año civil sería su equivalencia.

                Buscar por Tonalli: Dado un nombre del día Tonalli (ej. 1-Serpiente) y un periodo aproximado de fechas en que consideramos se haya encontrado el día tonalli, el programa presenta como resultado las fechas exactas del calendario gregoriano/juliano, dentro del periodo solicitado, que cumplan que el nombre del día sea el Tonalli buscado.
                Buscar por Xihuitl: Dado un nombre del año Xihuitl (ej. 3-Casa) y un periodo de años que sea del interés del usuario, el programa presenta como resultado todos los años civiles exactos del calendario gregoriano/juliano en los que ocurre dicha coincidencia del nombre del año xihuitl buscado dentro de un periodo de años seleccionado.
                Buscar por Tonalli y Xihuitl: Pensando en que el usuario cuente con una fecha completa compuesta por el tonalli y el xihuitl e introduciendo un rango/periodo en que se considere que se encuentre dicha fecha, el programa permite realizar la búsqueda y mostrar las coincidencias encontradas dentro del periodo seleccionado. Adicionalmente el programa permite realizar la búsqueda ya sea que para el rango o periodo se introduzcan fechas civiles completa o solo años civiles
                Buscar año civil: Permite consultar cuál sería el nombre Xihuitl de cualquier año civil que se introduzca
                Los resultados se muestran en tablas por secciones: Según la correspondencia de Meza y Según la correspondencia de Caso.

                Tablero:

                Es un catálogo visual completo basado en las 8 primeras láminas del Códice Borgia  con la iconografía de los signos del Tonalpohualli, las trecenas y las orientaciones. Adicionalmente se muestra una clasificación por categorías (Animales, Naturales, Vegetales, Cosas, Abstractos) en las que el usuario al seleccionar alguna o algunas de ellas puede observar que signos corresponden a la categoría seleccionada.

                Toro:

                Es un componente matemático del programa sobre el recorrido de Tonalpohualli (260 días):
                Modelo Geométrico Tridimensional: Representa gráficamente el recorrido del ciclo calendárico sobre la superficie de un Toro, muestra de forma tridimensional la distribución de las trecenas y los cuatro rumbos cosmogónicos (Tlahuiztlanpa - Este, Huitztlanpa - Sur, Cihuatlanpa - Oeste, Mictlanpa - Norte).
                Animación e Interactividad: Del lado derecho se muestran los controles de reproducción con los que el usuario puede interactuar.
                En ellos se puede definir si la representación esa través de pares de números donde el numeral se representa del 1-13 (módulo 13) y el signo se representa del 1-20 (módulo 20), o a través de la representación visual de la combinación del numeral (1-13) y el signo del Tonalpohualli; así mismo elegir el modo de seguimiento “Al señalar” en el que el usuario al pasar el cursor en el gráfico puede identificar el nombre del día y otros datos de este y “Al animar” puede observar el cambio del nombre del día Tonalli de acuerdo al recorrido del gráfico; Se puede realizar el cambio de velocidad e identificar las coordenadas en el gráfico tridimensional, es decir, el numeral y signo que corresponde a cada día Tonalli dentro del gráfico.
                Adicionalmente se tiene un menú de herramientas de manipulación del gráfico que pueden usarse cuando el recorrido del gráfico está en pausa.



                Calculadora:

                Herramienta orientada a calcular qué número de día dentro del ciclo de 18980 días o 52 años (Xiuhmolpilli) corresponde la fecha seleccionada por el usuario y de forma opcional seleccionando la hora.
                El resultado muestra el número de día y la hora de inicio de día de acuerdo a la correspondencia de Arturo Meza.
            </p>
        </>
    )

}
export default Inicio