import React, { useEffect, useRef, useState } from 'react'
import { tonalliSimbolos, numerosNombres, getImagePath } from '../funtions/funtions'
import '../styles/Estilos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const Inicio = () => {
    return (
        <>
            <div class="container text-center">
                <div class="row justify-content-md-center">
                    <div class="col-md-11 text-justify">
                        <br></br>
                        <h1 className='title-justify'>KĀUHNEMISMACHIYOTL</h1>
                        <br></br>
                        <p>El <strong>Kāuhnemismachiyotl</strong> es una Plataforma Interactiva para el análisis de correlaciones Calendáricas Mesoamericanas. Es una forma de conocer y comprender el cómputo del tiempo precolonial, la matemática implícita y la cuenta del tiempo hasta nuestros días haciendo una reflexión del pasado hacia el futuro y del futuro hacia el pasado.</p>
                        <p>Este proyecto nace con el interés de compartir lo que hemos aprendido en la búsqueda del reconocimiento de otros sistemas de conocimientos para dar lugar a otras epistemologías inspiradas en la herencia que dejaron nuestros ancestros a través de generaciones, así como la reapropiación de los mismos recuperando nuestra propia identidad como una vía a la descolonización.</p>
                        <p>Para el cálculo de fechas nos basamos en dos correlaciones:
                            <ul>
                                <li>Correlación Alfonso Caso basada en la fecha día 1-Serpiente, año 3-Casa (13 de agosto de 1521).</li>
                                <li>Correlación Arturo Meza basada en la fecha día 1-lagarto, año 1-Conejo (12 de marzo de 2026 ).</li>
                            </ul>
                        </p>

                        <h4> Secciones</h4><br></br>
                        <h5 > Conversor:</h5>
                        <p >
                            Permite seleccionar cualquier fecha del calendario civil (Gregoriano y Juliano) con opción de colocar la hora, en caso de conocerla, y calcular al instante su correspondencia en el sistema calendárico precolonial:
                            <ul>
                                <li><i className='text-color'>Tonalpohualli</i> (Tonalli / Cuenta Ritual - 260 días): Muestra el nombre del día tonalli de la fecha solicitada enunciando primero el numeral (1 al 13) seguido del signo/glifo (Lagarto, Viento, Casa, etc.) correspondiente.</li>
                                <li><i className='text-color'>Xihuitl</i> (Xihuitl / Año Solar - 365 días): Calcula el cargador del año enunciando primero el numeral (1 al 13) seguido del signo/glifo (Caña, Pedernal, Casa, Conejo) correspondiente.</li>
                            </ul>
                            Adicionalmente se incluye el cálculo del <i className='text-color'>Cempohuallapohualli</i> (18 Veintenas y los días nemontemi) y la hora de inicio del día correspondiente a la fecha.<br></br><br></br>
                            Se integra un <i className='text-color'>Modelo Gráfico Giratorio</i> sobre el engranaje de sistema calendárico precolonial de acuerdo a las correlaciones de Alfonso Caso y Arturo Meza el cual se detiene de acuerdo al resultado obtenido.<br></br><br></br>
                            El resultado se muestra por secciones contrastantes en ambas correlaciones. Para mayor comodidad del usuario el resultado se muestra en Español, Náhuatl y Ñu savi.</p>
                        <h5> Inverso:</h5>
                        <p>
                            Permite realizar búsquedas en sentido opuesto, es decir, a partir de una fecha del calendario precolonial se muestra que fecha del año civil sería su equivalente.
                            <ul>
                                <li><i className='text-color'>Buscar por Tonalli:</i> Dado un Tonalli (ej. 1-Serpiente) y un periodo de fechas, el programa presenta como resultado las fechas del calendario gregoriano/juliano que coinciden con el Tonalli buscado.</li>
                                <li><i className='text-color'>Buscar por Xihuitl:</i> Dado un Xihuitl (ej. 3-Casa) y un periodo de años, el programa presenta como resultado los años civiles del calendario gregoriano/juliano que coinciden con el nombre del Xihuitl buscado.</li>
                                <li><i className='text-color'>Buscar por Tonalli y Xihuitl:</i> Dado un Tonalli, un Xihuitl y un periodo de fechas, el programa busca y muestra las correspondencias encontradas en el calendario gregoriano/juliano. Las búsquedas pueden realizarse por rangos de fechas completas o por años civiles. </li>
                                <li><i className='text-color'>Buscar año civil:</i> Permite consultar cuál sería el nombre Xihuitl de cualquier año civil.</li>
                            </ul>
                            Los resultados se muestran en tablas por secciones según cada correspondencia.</p>
                        <h5> Tablero:</h5>
                        <p>
                            Es un catálogo visual completo basado en las 8 primeras láminas del Códice Borgia con la iconografía de los signos del Tonalpohualli, las Trecenas y las Orientaciones. Adicionalmente se muestra una clasificación por categorías (Animales, Naturales, Vegetales, Cosas y Abstractos) en las que el usuario al seleccionar una o varias de ellas puede observar qué signos corresponden a la categoría seleccionada.</p>
                        <h5> Calculadora:</h5>
                        <p>
                            Herramienta orientada a calcular qué número de día dentro del ciclo de <i className='text-color'>18980</i> días o 52 años (<i className='text-color'>Xiuhmolpilli</i>) corresponde la fecha seleccionada por el usuario y de forma opcional seleccionando la hora.<br></br>
                            El resultado muestra el número de día y la hora de inicio de día de acuerdo a las correlaciones.
                        </p>
                        <h5> Toro:</h5>
                        <p>
                            Es un componente matemático del programa sobre el recorrido de <i className='text-color'>Tonalpohualli</i> (260 días):
                            <ul>
                                <li><i className='text-color'>Modelo Geométrico Tridimensional:</i> Representa gráficamente el recorrido del ciclo calendárico sobre la superficie de un Toro, muestra de forma tridimensional la distribución de las trecenas y los cuatro rumbos cosmogónicos (<i>Tlahuiztlanpa - Este, Huitztlanpa - Sur, Cihuatlanpa - Oeste, Mictlanpa - Norte</i>).</li>
                                <li><i className='text-color'>Animación e Interactividad:</i> Del lado derecho se muestran los controles de reproducción con los que el usuario puede interactuar. En ellos se puede definir si la representación es través de la <i className='text-color'>Representación Visual</i> de la combinación del numeral (1-13) y el signo del Tonalpohualli o a través de <i className='text-color'>Pares de Números</i> donde el numeral se representa del 1-13 (módulo 13) y el signo se representa del 1-20 (módulo 20). Así mismo, permite elegir el modo de seguimiento: <i className='text-color'>“Al animar”</i> donde se puede observar el cambio del nombre del Tonalli de acuerdo al recorrido del gráfico y <i className='text-color'>“Al señalar”</i> en el que al pasar el cursor en el gráfico puede identificar el nombre del día y otros datos del mismo. Se puede realizar el cambio de <i className='text-color'>Velocidad</i> e identificar las <i className='text-color'>Coordenadas</i> en el gráfico tridimensional, es decir, el numeral y signo que corresponde a cada Tonalli dentro del gráfico.</li>
                            </ul>
                            Adicionalmente se tiene un menú de <i className='text-color'>Herramientas de Manipulación del Gráfico</i> que pueden usarse cuando el recorrido esté en pausa.</p><br></br>
                        <h5> Referencias:</h5>
                        <p>
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
