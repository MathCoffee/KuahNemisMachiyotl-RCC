import React, { useEffect, useRef, useState } from 'react'
import { tonalliSimbolos, numerosNombres, getImagePath } from '../funtions/funtions'
import '../styles/Estilos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const Inicio = () => {
    return (
        <>
            <div class="container text-center">
                <div class="row justify-content-md-center">
                    <div class="col-md-11">
                        <br></br>
                        <h1>KĀUHNEMISMACHIYOTL</h1>
                        <p style={{ textAlign: 'justify' }}>El <strong>Kāuhnemismachiyotl</strong> es una Plataforma Interactiva para el análisis de correlaciones Calendáricas Mesoamericanas. Es una forma de conocer y comprender el cómputo del tiempo precolonial, la matemática implícita y la cuenta del tiempo hasta nuestros días haciendo una reflexión del pasado hacia el futuro y del futuro hacia el pasado.</p>
                        <p style={{ textAlign: 'justify' }}>Este proyecto nace con el interés de compartir lo que hemos aprendido en la búsqueda del reconocimiento de otros sistemas de conocimientos para dar lugar a otras epistemologías inspiradas en la herencia que dejaron nuestros ancestros a través de generaciones, así como la reapropiación de los mismos recuperando nuestra propia identidad como una vía a la descolonización.</p>
                        <p style={{ textAlign: 'justify' }}>Para el cálculo de fechas nos basamos en dos correlaciones:
                            <ul>
                                <li>Correlación Alfonso Caso basada en la fecha día 1-Serpiente, año 3-Casa (13 de agosto de 1521).</li>
                                <li>Correlación Arturo Meza basada en la fecha día 1-lagarto, año 1-Conejo (12 de marzo de 2026 ).</li>
                            </ul>
                        </p>

                        <h4 style={{ textAlign: 'justify' }}> Secciones:</h4>
                        <h5 style={{ textAlign: 'justify' }}> Conversor:</h5>
                        <p style={{ textAlign: 'justify' }}>
                            Permite seleccionar cualquier fecha del calendario civil (Gregoriano o Juliano) con opción de colocar la hora, en caso de conocerla, y calcular al instante su correspondencia en el sistema calendárico precolonial:
                            <ul>
                                <li>Tonalpohualli (Tonalli / Cuenta Ritual - 260 días): Muestra el nombre del día tonalli de la fecha solicitada enunciando primero el numeral (1 al 13) seguido del signo/glifo (Lagarto, Serpiente, Flor, etc.) correspondiente.</li>
                                <li>Xihuitl (Xihuitl / Año Solar - 365 días): Calcula el cargador del año enunciando primero el numeral (1 al 13) seguido del signo/glifo (Caña, Pedernal, Casa, Conejo) correspondiente.</li>
                            </ul>
                            Se incluye el cálculo del Cempohuallapohualli o las veintenas y hora de inicio del día que corresponde a dicha fecha.<br></br>
                            Adicionalmente se presenta un modelo de representación gráfica giratorio sobre el engranaje de sistema calendárico precolonial de acuerdo a las correlaciones de Alfonso Caso y Arturo Meza el cual se detiene de acuerdo al resultado obtenido.<br></br>
                            El resultado se muestra por secciones contrastantes en ambas correlaciones. Para mayor comodidad del usuario el resultado se muestra en Español, Náhuatl y Ñu savi.</p>
                        <h5 style={{ textAlign: 'justify' }}> Inverso:</h5>
                        <p style={{ textAlign: 'justify' }}>
                            Permite realizar búsquedas en sentido opuesto, es decir , a partir de una fecha del calendario precolonial se muestra que fecha del año civil sería su equivalente.
                            <ul>
                                <li>Buscar por Tonalli: Dado un Tonalli (ej. 1-Serpiente) y un periodo de fechas en que consideramos se haya encontrado el tonalli, el programa presenta como resultado las fechas del calendario gregoriano/juliano, dentro del periodo solicitado, que cumplan que el nombre del día sea el Tonalli buscado.</li>
                                <li>Buscar por Xihuitl: Dado un Xihuitl (ej. 3-Casa) y un periodo de años, el programa presenta como resultado todos los años civiles del calendario gregoriano/juliano en los que coinciden con el nombre del xihuitl buscado.</li>
                                <li>Buscar por Tonalli y Xihuitl: Dado un tonalli, un xihuitl y un periodo de fechas, el programa permite realizar la búsqueda y mostrar las coincidencias encontradas en calendario gregoriano/juliano. El programa permite realizar la búsqueda por fechas o años civiles completos.</li>
                                <li>Buscar año civil: Permite consultar cuál sería el nombre Xihuitl de cualquier año civil.</li>
                            </ul>
                            Los resultados se muestran en tablas por secciones según cada correspondencia.</p><br></br>
                        <h5 style={{ textAlign: 'justify' }}> Tablero:</h5>
                        <p style={{ textAlign: 'justify' }}>
                            Es un catálogo visual completo basado en las 8 primeras láminas del Códice Borgia con la iconografía de los signos del Tonalpohualli, las trecenas y las orientaciones. Adicionalmente se muestra una clasificación por categorías (Animales, Naturales, Vegetales, Cosas, Abstractos) en las que el usuario al seleccionar alguna o algunas de ellas puede observar que signos corresponden a la categoría seleccionada.</p>
                        <h5 style={{ textAlign: 'justify' }}> Calculadora:</h5>
                        <p style={{ textAlign: 'justify' }}>
                            Herramienta orientada a calcular qué número de día dentro del ciclo de 18980 días o 52 años (Xiuhmolpilli) corresponde la fecha seleccionada por el usuario y de forma opcional seleccionando la hora.<br></br>
                            El resultado muestra el número de día y la hora de inicio de día de acuerdo a las correlaciones.
                        </p><br></br>
                        <h5 style={{ textAlign: 'justify' }}> Toro:</h5>
                        <p style={{ textAlign: 'justify' }}>
                            Es un componente matemático del programa sobre el recorrido de Tonalpohualli (260 días):
                            <ul>
                                <li>Modelo Geométrico Tridimensional: Representa gráficamente el recorrido del ciclo calendárico sobre la superficie de un Toro, muestra de forma tridimensional la distribución de las trecenas y los cuatro rumbos cosmogónicos (Tlahuiztlanpa - Este, Huitztlanpa - Sur, Cihuatlanpa - Oeste, Mictlanpa - Norte).</li>
                                <li>Animación e Interactividad: Del lado derecho se muestran los controles de reproducción con los que el usuario puede interactuar.
                                    En ellos se puede definir si la representación es a través de pares de números donde el numeral se representa del 1-13 (módulo 13) y el signo se representa del 1-20 (módulo 20), o a través de la representación visual de la combinación del numeral (1-13) y el signo del Tonalpohualli; así mismo elegir el modo de seguimiento “Al señalar” en el que el usuario al pasar el cursor en el gráfico puede identificar el nombre del día y otros datos del mismo y “Al animar” se puede observar el cambio del nombre del Tonalli de acuerdo al recorrido del gráfico; Se puede realizar el cambio de velocidad e identificar las coordenadas en el gráfico tridimensional, es decir, el numeral y signo que corresponde a cada Tonalli dentro del gráfico.</li>
                            </ul><br></br>
                            Adicionalmente se tiene un menú de herramientas de manipulación del gráfico que pueden usarse cuando el recorrido este en pausa.</p><br></br>
                        <h5 style={{ textAlign: 'justify' }}> Referencias:</h5>
                        <p style={{ textAlign: 'justify' }}>
                            <ul>
                                <li>Cano, L. R. (2014). Los signos y el lenguaje sagrado de los 20 días en el calendario ritual de la Mixteca y los códices del noroeste de Oaxaca. Desacatos. Revista de Ciencias Sociales, (27)</li>
                                <li>Caso, A. (1967). <i>Los Calendarios Prehispánicos. </i> México: Instituto de Investigaciones Históricas. Universidad Nacional Autónoma de México. </li>
                                <li>Díaz Álvarez, A. M. (2019). <i>El cuerpo del tiempo: Códices, cosmología y tradiciones cronográficas del centro de México. </i>Universidad Nacional Autónoma de México, Instituto de Investigaciones Estéticas; Bonilla Artigas Editores.</li>
                                <li>Díaz Álvarez, A. G. (2009). La forma del tiempo y las voces del calendario. Estudios de Cultura Náhuatl, 40, 65-94.</li>
                                <li>Díaz Álvarez, A. (2013). Tlapohualli, la cuenta de las cosas.  Reflexiones en torno a la reconstrucción de los calendarios nahuas. Estudios de Cultura Náhuatl, julio-diciembre(46), 159–197.</li>
                                <li>Durán, D. (2018).<i> Historia de las Indias de Nueva España y Islas de Tierra Firme  </i> (Vol. 2). London: Forgotten Books. (Obra original publicada en 1880).</li>
                                <li>Meza Gutiérrez, A. (2024). <i> Cauhpohualli. Collar de turquesas engarzado con oro de Sol.</i> (4a ed.) Colección Ometeotl. Editorial Altepetl. </li>
                                <li>Milbrath, S. (2013). <i>Heaven and earth in ancient Mexico: Astronomy and seasonal cycles in the Codex Borgia. </i> Austin: University of Texas Press.</li>
                                <li>Thouvenot M., Kruell G., Acevedo Frómeta O. (2024). <i>Tiempos superpuestos. Debates sobre el encuentro entre los calendarios náhuatl y europeo.</i>  Universidad Nacional Autónoma de México, Instituto de Investigaciones Históricas.</li>
                                <li>Anónimo. (s. f.). Códice Borgia [Manuscrito precolombino]. Biblioteca Apostólica Vaticana. https://digi.vatlib.it/view/MSS_Borg.mess.1</li>
                            </ul>
                        </p><br></br>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Inicio
