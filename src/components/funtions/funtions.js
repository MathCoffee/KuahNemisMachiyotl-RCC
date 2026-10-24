// Mapa de imágenes usando import.meta.glob para asegurar que Vite las incluya en el build
const images = import.meta.glob('../images/*.png', { eager: true, import: 'default' });

/**
 * Función auxiliar para obtener la URL de una imagen desde el mapa de Vite
 * @param {string} imageName - nombre del archivo (ej: 'lagarto.png')
 * @returns {string} URL de la imagen procesada por Vite
 */
export const getImagePath = (imageName) => {
    const path = `../images/${imageName}`;
    return images[path] || '';
};
//Categias para tablero
//Simbolos del calendario Tonalli
export const tonalliSimbolos = [
    { español: "Lagarto", nahuatl: "Cipactli", nusavi: "Quevui", category: 'animales', image: "lagarto.png" },
    { español: "Viento", nahuatl: "Echecatl", nusavi: "Chi", category: 'naturales', image: "viento.png" },
    { español: "Casa", nahuatl: "Calli", nusavi: "Cuau", category: 'cosas', image: "casa.png" },
    { español: "Lagartija", nahuatl: "Cuetzpalli", nusavi: "Q, Que", category: 'animales', image: "lagartija.png" },
    { español: "Serpiente", nahuatl: "Coatl", nusavi: "Yo", category: 'animales', image: "serpiente.png" },
    { español: "Muerte", nahuatl: "Miquiztli", nusavi: "Mahu", category: 'abstractos', image: "muerte.png" },
    { español: "Venado", nahuatl: "Mazatl", nusavi: "Cuaa", category: 'animales', image: "venado.png" },
    { español: "Conejo", nahuatl: "Tochtli", nusavi: "Sayu", category: 'animales', image: "conejo.png" },
    { español: "Agua", nahuatl: "Atl", nusavi: "Agua", category: 'naturales', image: "agua.png" },
    { español: "Perro", nahuatl: "Itzcuintli", nusavi: "Hua", category: 'animales', image: "perro.png" },
    { español: "Mono", nahuatl: "Ozomatli", nusavi: "Ñuu", category: 'animales', image: "mono.png" },
    { español: "Hierba", nahuatl: "Malinalli", nusavi: "Cuañe", category: 'vegetales', image: "hierba.png" },
    { español: "Caña", nahuatl: "Acatl", nusavi: "Huiyo", category: 'vegetales', image: "caña.png" },
    { español: "Jaguar", nahuatl: "Ocelotl", nusavi: "Huidzu", category: 'animales', image: "jaguar.png" },
    { español: "Águila", nahuatl: "Cuauhtli", nusavi: "Sa", category: 'animales', image: "aguila.png" },
    { español: "Zopilote", nahuatl: "Cozcacuauhtli", nusavi: "Cuii", category: 'animales', image: "zopilote.png" },
    { español: "Movimiento", nahuatl: "Ollin", nusavi: "Qhi", category: 'abstractos', image: "movimiento.png" },
    { español: "Pedernal", nahuatl: "Tecpatl", nusavi: "Cusi", category: 'cosas', image: "pedernal.png" },
    { español: "Lluvia", nahuatl: "Quiahuitl", nusavi: "Co", category: 'naturales', image: "lluvia.png" },
    { español: "Flor", nahuatl: "Xochitl", nusavi: "Huaco", category: 'vegetales', image: "flor.png" }
]
//Simbolos del Xihuitl
export const xihuitlSimbolos = [
    { español: "Caña", nahuatl: "Acatl", nusavi: "Huiyo", image: "caña.png" },
    { español: "Pedernal", nahuatl: "Tecpatl", nusavi: "Cusi", image: "pedernal.png" },
    { español: "Casa", nahuatl: "Calli", nusavi: "Cuau", image: "casa.png" },
    { español: "Conejo", nahuatl: "Tochtli", nusavi: "Sayu", image: "conejo.png" }
]
//Funcion para obtener la imagen del numero
//export const numerosNombres = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]
export const numerosNombres = [
    { español: "1", nahuatl: "Ce", nusavi: "Ca, co", image: "1.png" },
    { español: "2", nahuatl: "Ome", nusavi: "Ca, co", image: "2.png" },
    { español: "3", nahuatl: "Yei", nusavi: "Co", image: "3.png" },
    { español: "4", nahuatl: "Nahui", nusavi: "Qui", image: "4.png" },
    { español: "5", nahuatl: "Macuilli", nusavi: "Q, qhu", image: "5.png" },
    { español: "6", nahuatl: "Chicuace", nusavi: "Ñu", image: "6.png" },
    { español: "7", nahuatl: "Chicome", nusavi: "Sa", image: "7.png" },
    { español: "8", nahuatl: "Chicueyi", nusavi: "Na", image: "8.png" },
    { español: "9", nahuatl: "Chicnahui", nusavi: "Q, qhu", image: "9.png" },
    { español: "10", nahuatl: "Matlacti", nusavi: "Si", image: "10.png" },
    { español: "11", nahuatl: "Matlacti ihuan ce", nusavi: "Si, sii", image: "11.png" },
    { español: "12", nahuatl: "Matlacti ihuan ome", nusavi: "Ca", image: "12.png" },
    { español: "13", nahuatl: "Matlacti ihuan yei", nusavi: "Si", image: "13.png" }]
/* const getNumberoImage = (numero) => { */
/* const numerosNombres=[
    "1","2","3","4","5","6","7","8","9","10","11","12","13"
] */
/*     return `${numerosNombres.español[numero - 1]}.png`
} */
//Veintenas
export const cempohuallapohualli = [
    { nahuatl: "Atlacahualo" },
    { nahuatl: "Tlacaxipehualiztli" },
    { nahuatl: "Tozoztontli" },
    { nahuatl: "Ueitozoztli" },
    { nahuatl: "Toxcatl" },
    { nahuatl: "Etzalcualiztli" },
    { nahuatl: "Tecuilhuitontli" },
    { nahuatl: "Ueitecuilhuitl" },
    { nahuatl: "Tlaxochimaco" },
    { nahuatl: "Xocotl Uetzi" },
    { nahuatl: "Ochpaniztli" },
    { nahuatl: "Teotlehco" },
    { nahuatl: "Tepeilhuitl" },
    { nahuatl: "Quecholli" },
    { nahuatl: "Panquetzaliztli" },
    { nahuatl: "Atemoztli" },
    { nahuatl: "Tititl" },
    { nahuatl: "Izcalli" }
]
//Orientaciones
export const orientation = ['Este', 'Norte', 'Oeste', 'Sur']
// Función para verificar si un año es bisiesto según las reglas correspondientes

const bisiestoAnio = (year) => {
    if (year < 1582) {
        // Calendario juliano: divisible entre 4
        return year % 4 === 0;
    } else {
        // Calendario gregoriano: divisible entre 4 pero no entre 100, excepto si es divisible entre 400
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
}
// Funcion Días por mes, considerando años bisiestos
export const getDiasMonth = (year, month) => {
    const diasInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (month === 1) {
        return bisiestoAnio(year) ? 29 : 28
    }
    return diasInMonth[month]

}
//CUENTA CASO
// Función para calcular días transcurridos manualmente 
export const calcularDiasManual = (date) => {
    let dias = 0
    const referenceFecha = new Date(1521, 7, 12, 12, 0, 0)//fecha referencia 13-Ago-1521
    const fechaInicio = new Date(referenceFecha.getTime())
    const fechaFin = new Date(date.getTime())
    // Ajustar por el cambio de calendario (5-15 de octubre de 1582 no existieron)
    const fechaCambioCalendarioA = new Date(1582, 9, 4)
    const fechaCambioCalendarioB = new Date(1582, 9, 15)
    const diasSaltados = 10
    // Si la fecha elegida es posterior a la fecha de referencia
    if (fechaInicio < fechaFin) {
        //Salto de días por el cambio del calendario juliano al gregoriano en 1582
        if (fechaFin > fechaCambioCalendarioA) {
            dias -= diasSaltados
        }
        // Calcular días año por año
        for (let year = fechaInicio.getFullYear(); year < fechaFin.getFullYear(); year++) {
            dias += bisiestoAnio(year) ? 366 : 365
        }
        // Restar meses del año inicial que ya pasaron (01-1521 al 07-1521)
        for (let month = 0; month < fechaInicio.getMonth(); month++) {
            dias -= getDiasMonth(fechaInicio.getFullYear(), month)
        }
        // Restar días del mes inicial que ya pasaron (01-08-1521 al 12-08-1521)
        dias -= fechaInicio.getDate()
        // Sumar meses del año final que han pasado (01-añoFinal hasta el mes anterior al mes elegido del añoFinal)
        for (let month = 0; month < fechaFin.getMonth(); month++) {
            dias += getDiasMonth(fechaFin.getFullYear(), month)
        }
        // Sumar días del mes final que han pasado (01-mes-añoFinal hasta el dia-mes-año final)
        dias += fechaFin.getDate()
    } else if (fechaInicio > fechaFin) {// Si la fecha elegida es anterior a la fecha de referencia
        // Calcular días año por año
        for (let year = fechaFin.getFullYear(); year < fechaInicio.getFullYear(); year++) {
            dias += bisiestoAnio(year) ? 366 : 365
        }
        // Restar meses del año final que ya pasaron (01-añoFinal hasta el mes anterior al mes elegido del añoFinal)
        for (let month = 0; month < fechaFin.getMonth(); month++) {
            dias -= getDiasMonth(fechaFin.getFullYear(), month)
        }
        // Restar días del mes final que ya pasaron (01-mes-añoFinal hasta el dia-mes-añofinal)
        dias -= fechaFin.getDate()
        // Sumar meses del año inicial (fecha referencia) (01-1521 al 07-1521)
        for (let month = 0; month < fechaInicio.getMonth(); month++) {
            dias += getDiasMonth(fechaInicio.getFullYear(), month)
        }
        // Sumar días del mes Inicial (fecha referencia) (01-08-1521 al 13-08-1521)
        dias += fechaInicio.getDate()
    }
    return dias
}
//Funcion para convertir la fecha al calendario Tonalli
export const convertirTonalli = (date) => {
    // Fecha de referencia: 13 de agosto de 1521 (1-serpiente)
    const referenceFecha = new Date(1521, 7, 12, 12, 0, 0)
    const fechaInicial = new Date(referenceFecha.getTime())
    const fechaFinal = new Date(date.getTime())
    const digitoReferencia = 1 // índice para digito tomado del 1 al 13
    const simboloReferencia = 4 // índice para serpiente tomado del 0 al 19
    const hours = date.getHours();
    const minutes = date.getMinutes();
    let diferenciaDias; // diferencia en días (con signo, puede ser negativa)
    // Si la fecha elegida es posterior a la fecha de referencia
    if (fechaInicial < fechaFinal) {
        diferenciaDias = (calcularDiasManual(date))
        // Ajuste por hora: si es antes de las 12:00, se resta un día
        if (hours < 12) {
            diferenciaDias -= 1;
        }
        //El ciclo tonalli es de 260 dias (13*20)
        const tonalliCiclo = 260
        const diaCiclo = ((diferenciaDias % tonalliCiclo) + tonalliCiclo) % tonalliCiclo //operacion modulas num mod 260
        //Calcular el numero (1-13) y simbolo (0-19)
        let numero = ((digitoReferencia + diaCiclo) % 13)
        numero = numero <= 0 ? numero + 13 : numero
        let simboloCal = ((simboloReferencia + diaCiclo) % 20)
        simboloCal = simboloCal < 0 ? simboloCal + 20 : simboloCal
        const ampm = hours >= 12 ? 'p.m.' : 'a.m.';
        const h12 = hours % 12 || 12;
        const usedTime = `${h12}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;

        return {
            /* numero, */
            numero: numerosNombres[numero - 1],
            simbolo: tonalliSimbolos[simboloCal],
            /* numberImage: new URL(`../images/${getNumberoImage(numero)}`, import.meta.url).href, */
            numberImage: getImagePath(numerosNombres[numero - 1].image),
            symbolImage: getImagePath(tonalliSimbolos[simboloCal].image),
            diaCiclo,
            simboloInv: tonalliSimbolos[simboloCal].español, //se integra para acceder a la propiedad en español en el codigo Inverso.jsx            
            usedTime: usedTime
        }
    } else if (fechaInicial > fechaFinal) {// Si la fecha elegida es anterior a la fecha dereferencia
        diferenciaDias = -(calcularDiasManual(date))
        // Ajuste por hora: si es antes de las 12:00, se resta un día
        if (hours < 12) {
            diferenciaDias -= 1;
        }
        /* console.log(diferenciaDias) */
        //El ciclo tonalli es de 260 dias (13*20)
        const tonalliCiclo = 260
        const diaCiclo = ((diferenciaDias % tonalliCiclo) + tonalliCiclo) % tonalliCiclo
        /* console.log(diaCiclo) */
        //Calcular el numero (1-13) y simbolo (0-19)
        let numero = ((digitoReferencia + diaCiclo) % 13)
        numero = numero <= 0 ? numero + 13 : numero
        let simboloCal = ((simboloReferencia + diaCiclo) % 20)
        simboloCal = simboloCal < 0 ? simboloCal + 20 : simboloCal

        const ampm = hours >= 12 ? 'p.m.' : 'a.m.';
        const h12 = hours % 12 || 12;
        const usedTime = `${h12}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;

        return {
            numero: numerosNombres[numero - 1],
            simbolo: tonalliSimbolos[simboloCal],
            numberImage: getImagePath(numerosNombres[numero - 1].image),
            symbolImage: getImagePath(tonalliSimbolos[simboloCal].image),
            diaCiclo,
            simboloInv: tonalliSimbolos[simboloCal].español,//se integra para acceder a la propiedad en español en el codigo Inverso.jsx 
            usedTime: usedTime
        }
    } else {// Si la fecha elegida es la fecha de referencia
        // Si la hora es anterior a las 12:00, en realidad es el día anterior del ciclo
        if (hours < 12) {
            // Calculamos como si fuera un día antes de la referencia
            // Diferencia = -1 día (ya que es antes del mediodía)
            diferenciaDias = -1;
            const tonalliCiclo = 260;
            const diaCiclo = ((diferenciaDias % tonalliCiclo) + tonalliCiclo) % tonalliCiclo; // 259

            let numero = ((digitoReferencia + diaCiclo) % 13);
            numero = numero <= 0 ? numero + 13 : numero;

            let simboloCal = ((simboloReferencia + diaCiclo) % 20);
            simboloCal = simboloCal < 0 ? simboloCal + 20 : simboloCal;

            const ampm = hours >= 12 ? 'p.m.' : 'a.m.';
            const h12 = hours % 12 || 12;
            const usedTime = `${h12}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;

            return {
                numero: numerosNombres[numero - 1],
                simbolo: tonalliSimbolos[simboloCal],
                numberImage: getImagePath(numerosNombres[numero - 1].image),
                symbolImage: getImagePath(tonalliSimbolos[simboloCal].image),
                diaCiclo,
                simboloInv: tonalliSimbolos[simboloCal].español,
                usedTime: usedTime
            }
        } else {
            // Es exactamente la referencia (12:00 o después)
            let numero = digitoReferencia;
            let simboloCal = simboloReferencia;

            const ampm = hours >= 12 ? 'p.m.' : 'a.m.';
            const h12 = hours % 12 || 12;
            const usedTime = `${h12}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;

            return {
                numero: numerosNombres[numero - 1],
                simbolo: tonalliSimbolos[simboloCal],
                numberImage: getImagePath(numerosNombres[numero - 1].image),
                symbolImage: getImagePath(tonalliSimbolos[simboloCal].image),
                simboloInv: tonalliSimbolos[simboloCal].español,
                usedTime: usedTime
            }
        }
    }
}
//Funcion para convertir la fecha al calendario xihuitl (Caso con desplazamiento de inicios de año)
export const convertirXihuitl = (date) => {
    // Fecha de referencia: 13 de agosto de 1521 (3-Casa en xihuitl)
    const referenceAño = 1521
    // Fecha de referencia: 13 de agosto de 1521 (3-casa)
    const digitoReferencia = 3 // índice para digito tomado del 1 al 13
    const simboloReferencia = 2 // índice para casa tomado del 0 al 3
    //Manejo de hora seleccionada
    const hours = date.getHours()
    const minutes = date.getMinutes()
    //Si la hora ingresada es menor a 12 pm se resta un día
    const effectiveDate = new Date(date.getTime())
    if (hours < 12) {
        effectiveDate.setDate(effectiveDate.getDate() - 1)
    }
    //Fecha de referencia de inicio de año en 1521 de acuerdo a Caso
    const refInicioAnio = new Date(1521, 0, 24, 12, 0, 0)
    //Funcion auxiliar para contar años bisiestos civiles entre dos años
    const contarBisisestos = (y1, y2) => {
        let count = 0
        const min = Math.min(y1, y2)
        const max = Math.max(y1, y2)
        for (let y = min; y < max; y++) {
            if (bisiestoAnio(y)) {
                count++
            }
        }
        return count
    }
    // Función auxiliar para obtener la fecha de inicio del año de cualquier año civil
    const obtenerInicioAño = (year) => {
        const fechaInicio = new Date(refInicioAnio.getTime())
        fechaInicio.setFullYear(year)
        // Estructura condicional sobre cómo realizar el ajuste si el año es mayor, menor o igual a 1521
        if (year > referenceAño) {
            //Si el año es mayor a 1521, restamos los bisiestos acumulados
            const bisiestos = contarBisisestos(referenceAño, year)
            fechaInicio.setDate(fechaInicio.getDate() - bisiestos)
        } else if (year < referenceAño) {
            //Si el año es menor a 1521, sumanos los bisiestos acumulados
            const bisiestos = contarBisisestos(year, referenceAño)
            fechaInicio.setDate(fechaInicio.getDate() + bisiestos)
        } else {//Si es el año de referencia (1521), el inicio es el 24 de enero
            fechaInicio.setDate(24)
        }
        if (year > 1582) {
            fechaInicio.setDate(fechaInicio.getDate() + 10)
        }
        //fijar el inicio de año a 12 pm
        fechaInicio.setHours(12, 0, 0, 0)
        return fechaInicio
    }
    // Obtener el año de la fecha seleccionada
    const currentAño = date.getFullYear()
    // Determinar a qué año Xihuitl pertenece la fecha seleccionada comparando con los inicios de año
    const inicioAñoNext = obtenerInicioAño(currentAño + 1)
    const inicioAñoCurr = obtenerInicioAño(currentAño)

    let xihuitlYear = currentAño
    let fechaInicioAñoSeleted = inicioAñoCurr

    if (date >= inicioAñoNext) {
        // Si la fecha y hora seleccionada es igual o posterior al inicio del año xihuitl del año civil siguiente
        xihuitlYear = currentAño + 1
        fechaInicioAñoSeleted = inicioAñoNext
    } else if (date < inicioAñoCurr) {
        // Si la fecha y hora seleccionada es anterior al inicio del año xihuitl del año actual civil
        xihuitlYear = currentAño - 1
        fechaInicioAñoSeleted = obtenerInicioAño(xihuitlYear)
    } else {
        xihuitlYear = currentAño
        fechaInicioAñoSeleted = inicioAñoCurr
    }
    let numeroX = digitoReferencia
    let simboloCalXihuitl = simboloReferencia
    if (referenceAño < xihuitlYear) {//Si el año de referencia (1521) es menor al añoseleccionado 
        //Calcular diferencia
        const diferencia = xihuitlYear - referenceAño
        // Calcular el número cíclico (1-13)
        numeroX = ((digitoReferencia + diferencia) % 13)
        numeroX = numeroX <= 0 ? numeroX + 13 : numeroX
        // Calcular el símbolo (0-3)
        simboloCalXihuitl = ((simboloReferencia + diferencia) % 4)
        simboloCalXihuitl = simboloCalXihuitl < 0 ? simboloCalXihuitl + 4 : simboloCalXihuitl
    } else if (referenceAño > xihuitlYear) {//Si el año de referencia (1521) es mayor al añoseleccionado
        //Calcular diferencia
        const diferencia = referenceAño - xihuitlYear
        // Calcular el número cíclico (1-13)
        numeroX = ((digitoReferencia - diferencia) % 13)
        numeroX = numeroX <= 0 ? numeroX + 13 : numeroX
        // Calcular el símbolo (0-3)
        simboloCalXihuitl = ((simboloReferencia - diferencia) % 4)
        simboloCalXihuitl = simboloCalXihuitl < 0 ? simboloCalXihuitl + 4 : simboloCalXihuitl
    } else {//Si el año de referencia (1521) es el año seleccionado
        numeroX = digitoReferencia
        simboloCalXihuitl = simboloReferencia
    }
    // Formato de texto de la fecha de inicio del año en español
    const opcionFechaFormat = { day: 'numeric', month: 'long', year: 'numeric' }
    const inicioAñoText = `${fechaInicioAñoSeleted.toLocaleDateString('es-MX', opcionFechaFormat)}, 12:00 pm`
    //formatear la hora de fecha seleccionada
    const meridiem = hours >= 12 ? 'pm' : 'am'
    const hoursMeridiem = hours % 12 || 12
    const inicioTime = `${hoursMeridiem}:${minutes < 10 ? '0' + minutes : minutes} ${meridiem}`
    return {
        /* numeroX, */
        numeroX: numerosNombres[numeroX - 1],
        simboloX: xihuitlSimbolos[simboloCalXihuitl],
        /* numberImageX: new URL(`../images/${getNumberoImage(numeroX)}`, import.meta.url).href, */
        numberImageX: getImagePath(numerosNombres[numeroX - 1].image),
        symbolImageX: getImagePath(xihuitlSimbolos[simboloCalXihuitl].image),
        simboloXInv: xihuitlSimbolos[simboloCalXihuitl].español,
        simboloCalXihuitl,
        inicioAñoFecha: fechaInicioAñoSeleted,
        inicioAñoText: inicioAñoText,
        inicioTime: inicioTime
    }
}
export const cempohualliCaso = (date) => {
    const xihuitlDate = convertirXihuitl(date)
    const inicioXihuitl = xihuitlDate.inicioAñoFecha
    //ajustar fecha de restar un día
    const hours = date.getHours()
    const effectiveDate = new Date(date)
    /* if (hours < 12) {
        effectiveDate.setDate(effectiveDate.getDate() - 1)
    } */
    //diferencia de dias completos entre fecha efectiva e inicio de año
    const diferenciaTime = effectiveDate.getTime() - inicioXihuitl.getTime()
    let diferenciaDias = Math.floor(diferenciaTime / (1000 * 60 * 60 * 24))
    //asegurar el rango de 0-364
    while (diferenciaDias < 0) diferenciaDias += 365
    diferenciaDias = diferenciaDias % 365
    const diaAño = diferenciaDias + 1
    //determinar si es nemon
    if (diferenciaDias >= 360) {
        return {
            veintena: "Nemontemi",
            dia: diaAño,
            mesIndex: -1
        }
    } else {//mes de inicio izcalli tiene el index 17 en la lista
        const mesIndex = (17 + Math.floor(diferenciaDias / 20)) % 18
        const veintenaName = cempohuallapohualli[mesIndex].nahuatl;
        return {
            veintena: veintenaName,
            dia: diaAño,
            mesIndex: mesIndex
        };
    }

}

/**
 * Calcula la posición de una fecha dentro del ciclo ritual de 18,980 días (52 años) según Alfonso Caso.
 * Referencia: El ciclo inicia en el año 2-Caña cada 52 años (ej. 1507-01-28 12:00 pm, 2026-10-03 12:00 pm).
 * Los días comienzan a las 12:00 pm.
 * @param {string|Date} sdate - Fecha en formato 'YYYY-MM-DD' o Date
 * @param {string} [time] - Hora en formato 'HH:MM' (opcional, por defecto 12:00 pm)
 * @returns {object|null} Resultado del cálculo o null si no hay fecha.
 */
export const obtenerDiaRitualCaso = (sdate, time) => {
    if (!sdate) return null;

    let y, m, d;
    if (sdate instanceof Date) {
        y = sdate.getFullYear();
        m = sdate.getMonth() + 1;
        d = sdate.getDate();
    } else {
        const [yStr, mStr, dStr] = sdate.split('-');
        y = parseInt(yStr);
        m = parseInt(mStr);
        d = parseInt(dStr);
    }

    // Si no se selecciona hora, se toma por defecto 12:00 pm
    let h = 12;
    let min = 0;
    if (time) {
        const [hStr, minStr] = time.split(':');
        h = parseInt(hStr);
        min = parseInt(minStr);
    }

    const targetDate = new Date(y, m - 1, d, h, min, 0, 0);

    // Funciones auxiliares para el cálculo del inicio de año según Caso
    const refInicioAnio = new Date(1521, 0, 24, 12, 0, 0);
    const contarBisiestosLocal = (y1, y2) => {
        let count = 0;
        const minYear = Math.min(y1, y2);
        const maxYear = Math.max(y1, y2);
        for (let yr = minYear; yr < maxYear; yr++) {
            if (bisiestoAnio(yr)) {
                count++;
            }
        }
        return count;
    };

    const obtenerInicioAñoLocal = (year) => {
        const fechaInicio = new Date(refInicioAnio.getTime());
        fechaInicio.setFullYear(year);
        if (year > 1521) {
            const bisiestos = contarBisiestosLocal(1521, year);
            fechaInicio.setDate(fechaInicio.getDate() - bisiestos);
        } else if (year < 1521) {
            const bisiestos = contarBisiestosLocal(year, 1521);
            fechaInicio.setDate(fechaInicio.getDate() + bisiestos);
        } else {
            fechaInicio.setDate(24);
        }
        if (year > 1582) {
            fechaInicio.setDate(fechaInicio.getDate() + 10);
        }
        fechaInicio.setHours(12, 0, 0, 0);
        return fechaInicio;
    };

    // Determinar a qué año Xihuitl pertenece la fecha seleccionada
    const currentAño = targetDate.getFullYear();
    const inicioAñoNext = obtenerInicioAñoLocal(currentAño + 1);
    const inicioAñoCurr = obtenerInicioAñoLocal(currentAño);

    let xihuitlYear = currentAño;
    let fechaInicioAñoSelected = inicioAñoCurr;

    if (targetDate >= inicioAñoNext) {
        xihuitlYear = currentAño + 1;
        fechaInicioAñoSelected = inicioAñoNext;
    } else if (targetDate < inicioAñoCurr) {
        xihuitlYear = currentAño - 1;
        fechaInicioAñoSelected = obtenerInicioAñoLocal(xihuitlYear);
    } else {
        xihuitlYear = currentAño;
        fechaInicioAñoSelected = inicioAñoCurr;
    }

    // Año dentro del bloque de 52 años (1 a 52) tomando como referencia el año 2-Caña (1507)
    let yearInBlock = ((xihuitlYear - 1507) % 52);
    if (yearInBlock < 0) yearInBlock += 52;
    yearInBlock += 1;

    // Ajuste de hora: los días en Caso inician a las 12:00 pm.
    // Si la hora es menor a las 12:00 pm, pertenece al día ritual que inició a las 12:00 pm del día anterior civil.
    let effectiveTarget = new Date(targetDate.getTime());
    if (h < 12) {
        effectiveTarget.setDate(effectiveTarget.getDate() - 1);
    }
    effectiveTarget.setHours(12, 0, 0, 0);

    // Calcular días transcurridos tomando en cuenta el cambio Juliano a Gregoriano (1582) y bisiestos
    const calcularDiasEntreLocal = (dInicio, dFin) => {
        if (dFin < dInicio) return 0;
        if (dInicio.getFullYear() === dFin.getFullYear() &&
            dInicio.getMonth() === dFin.getMonth() &&
            dInicio.getDate() === dFin.getDate()) {
            return 0;
        }
        let dias = 0;
        const y1 = dInicio.getFullYear();
        const y2 = dFin.getFullYear();
        for (let yr = y1; yr < y2; yr++) {
            dias += bisiestoAnio(yr) ? 366 : 365;
        }
        for (let mo = 0; mo < dInicio.getMonth(); mo++) {
            dias -= getDiasMonth(y1, mo);
        }
        dias -= dInicio.getDate();
        for (let mo = 0; mo < dFin.getMonth(); mo++) {
            dias += getDiasMonth(y2, mo);
        }
        dias += dFin.getDate();
        const fechaCambioA = new Date(1582, 9, 4, 12, 0, 0);
        const fechaCambioB = new Date(1582, 9, 15, 12, 0, 0);
        if (dInicio <= fechaCambioA && dFin >= fechaCambioB) {
            dias -= 10;
        }
        return dias;
    };

    let diffDays = calcularDiasEntreLocal(fechaInicioAñoSelected, effectiveTarget);
    if (diffDays < 0) diffDays = 0;
    if (diffDays >= 365) diffDays = 364;

    // Cálculo del día final dentro del ciclo de 18,980 días
    const finalDay = ((yearInBlock - 1) * 365) + diffDays + 1;

    // Formateo de resultados
    const isJuliano = targetDate < new Date(1582, 9, 15);
    const opcionFechaFormat = { day: 'numeric', month: 'long', year: 'numeric' };
    const startTime = `${fechaInicioAñoSelected.toLocaleDateString('es-MX', opcionFechaFormat)}, 12:00 pm`;
    const ampm = h >= 12 ? 'p.m.' : 'a.m.';
    const h12 = h % 12 || 12;
    const usedTime = `${h12}:${min < 10 ? '0' + min : min} ${ampm}`;

    return {
        day: finalDay,
        year: yearInBlock,
        cal: isJuliano ? "Juliano" : "Gregoriano",
        startTime: startTime,
        usedTime: usedTime
    };
};

//CUENTA MEZA

/**
 * Calcula la posición de una fecha dentro del ciclo ritual de 18,980 días.
 * @param {string} sdate - Fecha en formato 'YYYY-MM-DD'
 * @param {string} time - Hora en formato 'HH:MM' (opcional)
 * @returns {object|null} Resultado del cálculo o null si no hay fecha.
 */
export const obtenerDiaRitual = (sdate, time) => {
    if (!sdate) return null;
    const [yStr, mStr, dStr] = sdate.split('-');

    let y = parseInt(yStr);
    const m = parseInt(mStr);
    const d = parseInt(dStr);

    // Referencia Maestra: 12 de Marzo 2026, 06:43 AM = Bloque 1, Año 1, Día 1
    const REF_YEAR = 2026;

    // 1. Determinar el Calendario (Juliano <= 1582)
    const isJuliano = y <= 1582;
    const baseDay = isJuliano ? 2 : 12;

    // Función para obtener parámetros del año ritual
    const getYearParams = (year) => {
        let cyclePos = (year - REF_YEAR) % 4;
        if (cyclePos < 0) cyclePos += 4;

        let sDay = baseDay;
        let sHour = 6;
        let sMin = 43;

        if (cyclePos === 1) sHour = 12;
        if (cyclePos === 2) { sDay = baseDay - 1; sHour = 18; }
        if (cyclePos === 3) { sHour = 0; }

        return { cyclePos, sDay, sHour, sMin };
    };

    // 2. Calcular días transcurridos desde el 1 de Enero (Cuenta fija 365)
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const getAbsDays = (month, day) => {
        let total = 0;
        for (let i = 0; i < month - 1; i++) total += daysInMonth[i];
        return total + day;
    };

    let targetAbsDays = getAbsDays(m, d);
    let params = getYearParams(y);
    let startAbsDays = getAbsDays(3, params.sDay);

    // 3. Manejo de Hora y Comparación Ritual
    let h, min;
    let isBeforeStart = false;

    if (time) {
        const [hStr, minStr] = time.split(':');
        h = parseInt(hStr);
        min = parseInt(minStr);
        const inputTotalMins = (h * 60) + min;
        const startTotalMins = (params.sHour * 60) + params.sMin;

        if (targetAbsDays < startAbsDays || (targetAbsDays === startAbsDays && inputTotalMins < startTotalMins)) {
            isBeforeStart = true;
        }
    } else {
        if (targetAbsDays < startAbsDays) {
            isBeforeStart = true;
        }
    }

    // 4. ¿Estamos antes del inicio del año ritual de este año civil?
    if (isBeforeStart) {
        y -= 1;
        params = getYearParams(y);
        startAbsDays = getAbsDays(3, params.sDay);
        targetAbsDays += 365;
    }

    // 5. Resolver hora por defecto si no se proporcionó
    if (!time) {
        h = params.sHour;
        min = params.sMin;
    }

    // 6. Determinar el Año dentro del Bloque (1 a 52)
    let yearInBlock = ((y - 1974) % 52) + 1;
    if (yearInBlock <= 0) yearInBlock += 52;

    const inputTotalMins = (h * 60) + min;
    const startTotalMins = (params.sHour * 60) + params.sMin;

    // Diferencia de días nominales
    let diffDays = targetAbsDays - startAbsDays;

    if (inputTotalMins < startTotalMins) {
        diffDays -= 1;
    }

    // Cap para asegurar que el año ritual solo tiene 365 días (del día 0 al 364)
    // Esto absorbe el desfase de 6 horas al final del año anterior.
    if (diffDays >= 365) {
        diffDays = 364;
    }

    // 7. CÁLCULO FINAL
    const finalDay = ((yearInBlock - 1) * 365) + diffDays + 1;

    return {
        day: finalDay,
        year: yearInBlock,
        cycle: params.cyclePos + 1,
        cal: isJuliano ? "Juliano" : "Gregoriano",
        startTime: `${params.sDay} de marzo, ${params.sHour}:${params.sMin < 10 ? '0' + params.sMin : params.sMin}`,
        usedTime: `${h % 12 || 12}:${min < 10 ? '0' + min : min} ${h >= 12 ? 'p.m.' : 'a.m.'}`
        /* usedTime: `${h}:${min < 10 ? '0' + min : min}` */
    };
};
export const convertirTonalliMeza = (sdate, time) => {
    //Detecta si el valor recibido en sdate es un objeto Date (usando inverso.jsx). Si lo es, extrae el año, mes y día en formato local y lo convierte en una cadena "YYYY-MM-DD", si es una cadena (usando conversor.jsx) el if se ignora
    if (sdate instanceof Date) {
        const y = sdate.getFullYear();
        const m = String(sdate.getMonth() + 1).padStart(2, '0');
        const d = String(sdate.getDate()).padStart(2, '0');
        sdate = `${y}-${m}-${d}`;
    }
    //fin de admitir objeto Date
    const numDay = (obtenerDiaRitual(sdate, time))
    const day = numDay.day//numero de día de los 18980

    let coincide = false;
    let k = Math.floor((day - 1) / 365)//redondeo al numero entero inferior, k= 0 a 51, se puede conocer en que vuelta completa del calendario 365 nos encontramos, por ejemplo la primera vuelta se completa al transcurrir los primeros 365 días
    // Revisamos si day es múltiplo de 361 a 365, ya que estos son nemontemi
    /*  for (let nem = 361; nem <= 365; nem++) {//nem =>nemontemi
         let i = day / nem
         //Revisamos si existe modulo 0 y si i esta entre 1 y 52 que son los multiplos de 361-365
         if (day % nem === 0 && i >= 1 && i <= 52) {
             coincide = true
             break // Si ya encontramos uno, no hace falta seguir buscando
         }
 
     } */
    //Revisamos si el numero de día corresponde a un nemontemi
    for (let base = 361; base <= 365; base++) { //tomamos 361 a 365 como numeros base para calcular nemontemi
        let nem = base + (365 * k)//calculamos el nemontemi sumando el número base al producto de 365 por k (0 a 51, numero de vuelta del calendario)
        if (day === nem) {//comparamos si el numero de día es igual a un nemontemi
            coincide = true
            break//si coincide salimos del bucle
        }
    }

    let numeroTonal = 0
    let signoTonal = 0
    if (coincide) {
        let i = Math.ceil(day / 365)// redondeo al numero entero superior, i= 1 a 52, sirve para saber en que numero del ciclo de 52 años nos encontramos, por ejemplo los primeros 365 días corresponden al ciclo 1 de 52 años. 
        //numeroTonal = (day - (360 * i)) % 13 //formula original
        numeroTonal = ((day - (360 * i)) % 13 + 13) % 13//formula  asegurando que el resultado siempre sera positivo (incluso si day fuera negativo)
        numeroTonal = numeroTonal <= 0 ? numeroTonal + 13 : numeroTonal//asegurar que si el resultado es 0 se vuelve 13; si es 1..12 → queda igual 
        //signoTonal = (day - (360 * i)) % 20//formula original
        signoTonal = ((day - (360 * i)) % 20 + 20) % 20//formula  asegurando que el resultado siempre sera positivo (incluso si day fuera negativo)
        signoTonal = signoTonal <= 0 ? signoTonal + 20 : signoTonal//asegurar que si el resultado es 0 se vuelve 20; si es 1..19 → queda igual
    } else {
        numeroTonal = ((((((day % 13) + 13) % 13) - (5 * k)) % 13) + 13) % 13;//numero tonal meza
        numeroTonal = numeroTonal <= 0 ? numeroTonal + 13 : numeroTonal
        //numeroTonal = numeroTonal === 0 ? 13 : numeroTonal;
        signoTonal = ((((((day % 20) + 20) % 20) - (5 * k)) % 20) + 20) % 20;
        signoTonal = signoTonal <= 0 ? signoTonal + 20 : signoTonal
    }
    return {
        numeroT: numerosNombres[numeroTonal - 1],
        signoT: tonalliSimbolos[signoTonal - 1],
        /* numberTonalImage: new URL(`../images/${getNumberoImage(numero)}`, import.meta.url).href, */
        numberTonalImage: getImagePath(numerosNombres[numeroTonal - 1].image),
        signTonalImage: getImagePath(tonalliSimbolos[signoTonal - 1].image),
        signoTonalInv: tonalliSimbolos[signoTonal - 1].español, //se integra para acceder a la propiedad en español en el codigo Inverso.jsx            
        usedTime: numDay.usedTime,
        startTime: numDay.startTime
    }
}

export const convertirXihuitlMeza = (sdate, time) => {
    //Detecta si el valor recibido en sdate es un objeto Date (usando inverso.jsx). Si lo es, extrae el año, mes y día en formato local y lo convierte en una cadena "YYYY-MM-DD", si es una cadena (usando conversor.jsx) el if se ignora
    if (sdate instanceof Date) {
        const y = sdate.getFullYear();
        const m = String(sdate.getMonth() + 1).padStart(2, '0');
        const d = String(sdate.getDate()).padStart(2, '0');
        sdate = `${y}-${m}-${d}`;
    }
    //fin de admitir objeto Date
    const ritualData = obtenerDiaRitual(sdate, time);
    if (!ritualData) return null;

    const yearInBlock = ritualData.year; // 1 a 52

    // numeroMeza 1-13
    let numeroMeza = ((yearInBlock - 1) % 13) + 1;

    // signoMeza (índice en xihuitlSimbolos)
    // Año 1: Conejo (índice 3)
    // Año 2: Caña (índice 0)
    // Año 3: Pedernal (índice 1)
    // Año 4: Casa (índice 2)
    // Fórmula: (yearInBlock - 1 + 3) % 4
    let signoMezaIndex = (yearInBlock - 1 + 3) % 4;

    return {
        numeroX: numerosNombres[numeroMeza - 1],
        simboloX: xihuitlSimbolos[signoMezaIndex],
        numberImageX: getImagePath(numerosNombres[numeroMeza - 1].image),
        symbolImageX: getImagePath(xihuitlSimbolos[signoMezaIndex].image),
        simboloXInv: xihuitlSimbolos[signoMezaIndex].español,
        usedTime: ritualData.usedTime,
        startTime: ritualData.startTime
    };
};

export const cempohualliMeza = (sdate, time) => {
    //Detecta si el valor recibido en sdate es un objeto Date (usando inverso.jsx). Si lo es, extrae el año, mes y día en formato local y lo convierte en una cadena "YYYY-MM-DD", si es una cadena (usando conversor.jsx) el if se ignora
    if (sdate instanceof Date) {
        const y = sdate.getFullYear();
        const m = String(sdate.getMonth() + 1).padStart(2, '0');
        const d = String(sdate.getDate()).padStart(2, '0');
        sdate = `${y}-${m}-${d}`;
    }
    //fin de admitir objeto Date
    const ritualData = obtenerDiaRitual(sdate, time);
    if (!ritualData) return null;

    // Calculamos dInYear (día del año ritual 0-364)
    // dInYear = (day - 1) % 365
    const dInYear = (ritualData.day - 1) % 365;

    if (dInYear < 360) {
        const index = Math.floor(dInYear / 20);
        return cempohuallapohualli[index].nahuatl;
    } else {
        return "Nemontemi";
    }
}
//FUNCIONES INVERSO

// Funcion para buscar coincidencias en Tonalli
export const encuentraCoincidence = (
    selectedStartDate,
    selectedEndDate,
    numero,
    simbolo,
    setResults,
    setTonalliMessage,
    setLoading
) => {
    const fechaA = new Date(selectedStartDate + 'T00:00:00')
    const fechaB = new Date(selectedEndDate + 'T23:59:59')
    const fechaInicio = fechaA <= fechaB ? fechaA : fechaB
    const fechaFin = fechaA <= fechaB ? fechaB : fechaA

    setLoading(true)
    setTonalliMessage("")
    setResults([])

    setTimeout(() => {
        const matches = []
        const fechaJuliano = new Date(1582, 9, 4, 23, 59, 59)

        // Recorrer años, meses y días desde la fecha inicio hasta la fecha fin
        for (let year = fechaInicio.getFullYear(); year <= fechaFin.getFullYear(); year++) {
            if (year === 0) continue//el año 0 no existe en el calendario civil

            const startMonth = (year === fechaInicio.getFullYear()) ? fechaInicio.getMonth() : 0 //Condición ? Valor_si_es_verdadero : Valor_si_es_falso
            const endMonth = (year === fechaFin.getFullYear()) ? fechaFin.getMonth() : 11

            for (let month = startMonth; month <= endMonth; month++) {
                const diasInMonth = getDiasMonth(year, month)
                const startDay = (year === fechaInicio.getFullYear() && month === fechaInicio.getMonth()) ? fechaInicio.getDate() : 1
                const endDay = (year === fechaFin.getFullYear() && month === fechaFin.getMonth()) ? fechaFin.getDate() : diasInMonth

                for (let day = startDay; day <= endDay; day++) {
                    // Considerar los días quitados del cambio de calendario juliano a gregoriano (5 al 14 de octubre de 1582)
                    if (year === 1582 && month === 9 && day >= 5 && day <= 14) continue;

                    // Instanciar a las 00:00:00 (12:00 a.m. / medianoche) para que convertirTonalli considere las 12 am y reste las 12 horas (hours < 12)
                    const currentDate = new Date(year, month, day, 0, 0, 0)
                    if (currentDate > fechaFin) break

                    const tonalli = convertirTonalli(currentDate)
                    const xihuitl = convertirXihuitl(currentDate)
                    const tonalliMeza = convertirTonalliMeza(currentDate)
                    const xihuitlMeza = convertirXihuitlMeza(currentDate)

                    const matchCaso = tonalli && tonalli.numero && tonalli.numero.español === numero.toString() && tonalli.simbolo && tonalli.simbolo.español === simbolo;
                    const matchMeza = tonalliMeza && tonalliMeza.numeroT && tonalliMeza.numeroT.español === numero.toString() && tonalliMeza.signoT && tonalliMeza.signoT.español === simbolo;

                    if (matchCaso || matchMeza) {
                        matches.push({
                            date: currentDate,
                            calendar: currentDate <= fechaJuliano ? 'Juliano' : 'Gregoriano',
                            tonalli: tonalli,
                            xihuitl: xihuitl,
                            tonalliMeza: tonalliMeza,
                            xihuitlMeza: xihuitlMeza,
                            matchCaso: matchCaso,
                            matchMeza: matchMeza
                        })
                    }
                }
            }
        }

        if (matches.length === 0) {
            setTonalliMessage("En este periodo no existen coincidencias con el nombre Tonalli indicado, por favor introduzca un periodo distinto")
        }
        setResults(matches)
        setLoading(false)
    }, 100)
}

// Funcion para buscar coincidencias del Xihuitl
export const buscarXihuitl = (
    yearStart,
    yearEnd,
    numeroX,
    simboloX,
    setXihuitlResults,
    setXihuitlMessage,
    setLoadingX
) => {
    if (yearStart === yearEnd) {
        setXihuitlResults([])
        setXihuitlMessage("En este periodo no existen coincidencias con el nombre de Xihutil indicado, por favor introduzca un periodo distinto")
        return
    }

    setLoadingX(true)
    setXihuitlMessage("")
    setXihuitlResults([])

    setTimeout(() => {
        const matches = []
        const firstYear = Math.min(yearStart, yearEnd)
        const lastYear = Math.max(yearStart, yearEnd)

        // Función auxiliar para obtener la fecha de inicio de año según Caso
        const obtenerInicioAñoCaso = (year) => {
            if (year >= 1654) {
                return new Date(year, 0, 1, 12, 0, 0);
            }
            const refInicioAnio = new Date(1521, 0, 24, 12, 0, 0);
            const fechaInicio = new Date(refInicioAnio.getTime());
            fechaInicio.setFullYear(year);
            if (year > 1521) {
                let bisiestos = 0;
                for (let y = 1521; y < year; y++) {
                    if (bisiestoAnio(y)) bisiestos++;
                }
                fechaInicio.setDate(fechaInicio.getDate() - bisiestos);
            } else if (year < 1521) {
                let bisiestos = 0;
                for (let y = year; y < 1521; y++) {
                    if (bisiestoAnio(y)) bisiestos++;
                }
                fechaInicio.setDate(fechaInicio.getDate() + bisiestos);
            } else {
                fechaInicio.setDate(24);
            }
            if (year > 1582) {
                fechaInicio.setDate(fechaInicio.getDate() + 10);
            }
            fechaInicio.setHours(12, 0, 0, 0);
            return fechaInicio;
        };

        for (let year = firstYear; year <= lastYear; year++) {
            if (year === 0) continue

            // Obtener la fecha de inicio de año según la cuenta Caso:
            // Para años >= 1654 es el 1 de enero; para años anteriores (< 1654) es su inicio de año correspondiente
            const fechaInicioCaso = obtenerInicioAñoCaso(year)
            const xihuitl = convertirXihuitl(fechaInicioCaso)

            // Se pasa el año como string 'YYYY-01-01' para que obtenerDiaRitual calcule la cuenta Meza
            const xihuitlMeza = convertirXihuitlMeza(`${year}-01-01`)

            if (xihuitl && xihuitl.numeroX && xihuitl.numeroX.español === numeroX.toString() && xihuitl.simboloX && xihuitl.simboloX.español === simboloX) {
                const inicioFecha = xihuitl.inicioAñoFecha
                const inicioAno = inicioFecha ? inicioFecha.getFullYear() : year
                const diaMes = inicioFecha ? inicioFecha.toLocaleDateString('es-MX', { day: '2-digit', month: 'long' }) : ''
                const textoDia = (inicioFecha && inicioAno !== year) ? `${diaMes} de ${inicioAno}` : `${diaMes}`
                const calCaso = (inicioFecha && inicioFecha < new Date(1582, 9, 15)) ? 'Juliano' : 'Gregoriano'

                matches.push({
                    year: year,
                    calendar: year < 1582 ? 'Juliano' : 'Gregoriano',
                    xihuitl: xihuitl,
                    xihuitlMeza: xihuitlMeza,
                    xihuitlMezaStartTime: xihuitlMeza ? xihuitlMeza.startTime : null,
                    xihuitlMezaCal: xihuitlMeza ? (year <= 1582 ? 'Juliano' : 'Gregoriano') : null,
                    xihuitlCasoStartTime: `${textoDia}, 12 pm`,
                    xihuitlCasoCal: calCaso
                })
            }
        }

        if (matches.length === 0) {
            setXihuitlMessage("En este periodo no existen coincidencias con el nombre de Xihutil indicado, por favor introduzca un periodo distinto")
        }
        setXihuitlResults(matches)
        setLoadingX(false)
    }, 100)
}

/**
 * Busca el Xihuitl de un año civil dado.
 * - Usa convertirXihuitl con la fecha de inicio de año según Caso.
 * - Usa convertirXihuitlMeza con el día y hora de inicio de año según Meza.
 * @param {number} year - Año civil a consultar
 * @param {Function} setCivilResults - Setter del estado de resultados
 * @param {Function} setCivilMessage - Setter del estado de mensaje
 * @param {Function} setLoading - Setter del estado de carga
 */
export const buscarAnioCivil = (year, setCivilResults, setCivilMessage, setLoading) => {
    setCivilResults([])
    setCivilMessage("")
    setLoading(true)

    setTimeout(() => {
        if (year === 0) {
            setCivilMessage("El año 0 no existe en el calendario civil.")
            setLoading(false)
            return
        }

        // 1. Xihuitl Caso: determinar la fecha de inicio del año a buscar
        const refInicioAnio = new Date(1521, 0, 24, 12, 0, 0);
        const contarBisiestos = (y1, y2) => {
            let count = 0;
            const min = Math.min(y1, y2);
            const max = Math.max(y1, y2);
            for (let y = min; y < max; y++) {
                if (bisiestoAnio(y)) {
                    count++;
                }
            }
            return count;
        };
        const obtenerInicioAñoCaso = (y) => {
            const fechaInicio = new Date(refInicioAnio.getTime());
            fechaInicio.setFullYear(y);
            if (y > 1521) {
                const bisiestos = contarBisiestos(1521, y);
                fechaInicio.setDate(fechaInicio.getDate() - bisiestos);
            } else if (y < 1521) {
                const bisiestos = contarBisiestos(y, 1521);
                fechaInicio.setDate(fechaInicio.getDate() + bisiestos);
            } else {
                fechaInicio.setDate(24);
            }
            if (y > 1582) {
                fechaInicio.setDate(fechaInicio.getDate() + 10);
            }
            fechaInicio.setHours(12, 0, 0, 0);
            return fechaInicio;
        };

        const fechaInicioCaso = obtenerInicioAñoCaso(year);
        const xihuitlCaso = convertirXihuitl(fechaInicioCaso);

        const fechaInicioCasoDate = xihuitlCaso?.inicioAñoFecha || fechaInicioCaso;
        const diaMesAno = fechaInicioCasoDate.toLocaleDateString('es-MX', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
        const xihuitlCasoStartTime = `${diaMesAno} a las 12 pm`;
        const calCaso = fechaInicioCasoDate < new Date(1582, 9, 15) ? 'Juliano' : 'Gregoriano';

        // 2. Xihuitl Meza: determinar el inicio del año según la hora y día de inicio que corresponda
        const isJuliano = year <= 1582;
        const baseDay = isJuliano ? 2 : 12;
        let cyclePos = (year - 2026) % 4;
        if (cyclePos < 0) cyclePos += 4;

        let sDay = baseDay;
        let sHour = 6;
        let sMin = 43;

        if (cyclePos === 1) sHour = 12;
        if (cyclePos === 2) { sDay = baseDay - 1; sHour = 18; }
        if (cyclePos === 3) { sHour = 0; }

        const sDayStr = String(sDay).padStart(2, '0');
        const dateMezaStr = `${year}-03-${sDayStr}`;
        const timeMezaStr = `${String(sHour).padStart(2, '0')}:${String(sMin).padStart(2, '0')}`;
        const xihuitlMeza = convertirXihuitlMeza(dateMezaStr, timeMezaStr);

        const calendar = year < 1582 ? 'Juliano' : 'Gregoriano';

        setCivilResults([{
            year: year,
            calendar: calendar,
            xihuitl: xihuitlCaso,
            xihuitlMeza: xihuitlMeza,
            xihuitlMezaStartTime: xihuitlMeza ? xihuitlMeza.startTime : null,
            xihuitlMezaCal: xihuitlMeza ? (year <= 1582 ? 'Juliano' : 'Gregoriano') : null,
            xihuitlCasoStartTime: xihuitlCasoStartTime,
            xihuitlCasoCal: calCaso
        }]);
        setLoading(false);
    }, 100);
};

// Formatear fecha para mostrar
export const formatDate = (date) => {
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

// Funcion para buscar coincidencias de Tonalli y Xihuitl combinados
export const buscarAmbos = (
    selectedStartDate,
    selectedEndDate,
    modoAmbos,
    yearStart,
    yearEnd,
    numero,
    simbolo,
    numeroX,
    simboloX,
    setAmbosResults,
    setAmbosMessage,
    setLoadingAmbos
) => {
    // Determinar fechaInicio y fechaFin según modoAmbos
    let fechaA, fechaB;

    if (modoAmbos === 'fecha') {
        let dateStrA = selectedStartDate;
        let dateStrB = selectedEndDate;
        if (dateStrA > dateStrB) {
            [dateStrA, dateStrB] = [dateStrB, dateStrA];
        }
        fechaA = new Date(dateStrA + 'T00:00:00');
        fechaB = new Date(dateStrB + 'T23:59:59');
    } else {
        // Año inicio y año fin: se usa del 01 de enero del año inicial al 31 de diciembre del año final
        const yA = parseInt(yearStart);
        const yB = parseInt(yearEnd);
        const yMin = Math.min(yA, yB);
        const yMax = Math.max(yA, yB);
        fechaA = new Date(yMin, 0, 1, 0, 0, 0);
        fechaB = new Date(yMax, 11, 31, 23, 59, 59);
    }

    // Normalizar: fechaInicio siempre es la menor, fechaFin la mayor (permite ingreso invertido)
    const fechaInicio = fechaA <= fechaB ? fechaA : fechaB;
    const fechaFin = fechaA <= fechaB ? fechaB : fechaA;

    if (isNaN(fechaInicio.getTime()) || isNaN(fechaFin.getTime())) {
        setAmbosResults([]);
        setAmbosMessage("En este periodo no existen coincidencias con los nombres indicados, por favor introduzca un periodo distinto");
        return;
    }

    setLoadingAmbos(true);
    setAmbosMessage("");
    setAmbosResults([]);

    setTimeout(() => {
        const matches = [];
        const fechaJuliano = new Date(1582, 9, 4, 23, 59, 59);

        // Recorrer todos los días del periodo
        for (let year = fechaInicio.getFullYear(); year <= fechaFin.getFullYear(); year++) {
            if (year === 0) continue; // El año 0 no existe en el calendario civil

            const startMonth = (year === fechaInicio.getFullYear()) ? fechaInicio.getMonth() : 0;
            const endMonth = (year === fechaFin.getFullYear()) ? fechaFin.getMonth() : 11;

            for (let month = startMonth; month <= endMonth; month++) {
                const diasEnMes = getDiasMonth(year, month);
                const startDay = (year === fechaInicio.getFullYear() && month === fechaInicio.getMonth()) ? fechaInicio.getDate() : 1;
                const endDay = (year === fechaFin.getFullYear() && month === fechaFin.getMonth()) ? fechaFin.getDate() : diasEnMes;

                for (let day = startDay; day <= endDay; day++) {
                    // Considerar los días quitados del cambio de calendario juliano a gregoriano (5 al 14 de octubre de 1582)
                    if (year === 1582 && month === 9 && day >= 5 && day <= 14) continue;

                    // Instanciar a las 00:00:00 (12:00 a.m. / medianoche) para que convertirTonalli considere las 12 am y reste las 12 horas (hours < 12)
                    const currentDate = new Date(year, month, day, 0, 0, 0);
                    if (currentDate > fechaFin) break;

                    const tonalli = convertirTonalli(currentDate);
                    const xihuitl = convertirXihuitl(currentDate);
                    const tonalliMeza = convertirTonalliMeza(currentDate);
                    const xihuitlMeza = convertirXihuitlMeza(currentDate);

                    const matchTonalliCaso = tonalli && tonalli.numero && tonalli.numero.español === numero.toString() && tonalli.simbolo && tonalli.simbolo.español === simbolo;
                    const matchXihuitlCaso = xihuitl && xihuitl.numeroX && xihuitl.numeroX.español === numeroX.toString() && xihuitl.simboloX && xihuitl.simboloX.español === simboloX;
                    const matchCaso = matchTonalliCaso && matchXihuitlCaso;

                    const matchTonalliMeza = tonalliMeza && tonalliMeza.numeroT && tonalliMeza.numeroT.español === numero.toString() && tonalliMeza.signoT && tonalliMeza.signoT.español === simbolo;
                    const matchXihuitlMeza = xihuitlMeza && xihuitlMeza.numeroX && xihuitlMeza.numeroX.español === numeroX.toString() && xihuitlMeza.simboloX && xihuitlMeza.simboloX.español === simboloX;
                    const matchMeza = matchTonalliMeza && matchXihuitlMeza;

                    if (matchCaso || matchMeza) {
                        matches.push({
                            date: currentDate,
                            calendar: currentDate <= fechaJuliano ? 'Juliano' : 'Gregoriano',
                            tonalli: tonalli,
                            xihuitl: xihuitl,
                            tonalliMeza: tonalliMeza,
                            xihuitlMeza: xihuitlMeza,
                            matchCaso: matchCaso,
                            matchMeza: matchMeza,
                            matchTonalliCaso: matchTonalliCaso,
                            matchXihuitlCaso: matchXihuitlCaso,
                            matchTonalliMeza: matchTonalliMeza,
                            matchXihuitlMeza: matchXihuitlMeza
                        });
                    }
                }
            }
        }

        if (matches.length === 0) {
            setAmbosMessage("En este periodo no existen coincidencias con los nombres indicados, por favor introduzca un periodo distinto");
        }
        // Ordenar de más actual a más antiguo
        matches.sort((a, b) => new Date(b.date) - new Date(a.date));
        setAmbosResults(matches);
        setLoadingAmbos(false);
    }, 100);
}

//FUNCIONES TABLERO

export const revOrientation = [...orientation].toReversed()//invertir el orden
/**
 * Manejo de cambio de checkbox de categorías para Tablero
 * @param {string} category 
 * @param {Function} setSelectedCategories 
 */
export const handleCategoryChange = (category, setSelectedCategories) => {
    setSelectedCategories(prev => ({
        ...prev,
        [category]: !prev[category]
    }));
};

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]
export const revNumbers = [...numbers].toReversed()//invertir el orden

/**
 * Función para destacar celda CSS según la categoría
 * @param {object} cell 
 * @param {Set} featuredCells 
 * @param {Array} revNumbers 
 * @returns {string} Clase CSS para la celda
 */
export const getCellClass = (cell, featuredCells, revNumbers) => {
    const cellId = `${cell.row}-${cell.col}`;
    const isFeatured = featuredCells ? featuredCells.has(cellId) : false;
    if (isFeatured) {
        switch (cell.category) {
            case 'animales':
                return 'cell-animales';
            case 'naturales':
                return 'cell-naturales';
            case 'cosas':
                return 'cell-cosas';
            case 'abstractos':
                return 'cell-abstractos';
            case 'vegetales':
                return 'cell-vegetales';
            default:
                return '';
        }
    }
    const isColOne = revNumbers && revNumbers[cell.col % revNumbers.length] === '1';
    if (isColOne) {
        return 'bg-column-one';
    }
    return '';
};

// ============================================================================
// FUNCIONES Y CONSTANTES PARA CALENDARIO GIRATORIO
// ============================================================================

// 18 veintenas (20 días) + 1 Nemontemi (5 días) = 365 días en total
export const SEGDATOS_VEINTENAS = [
    { id: 'Atlacahualo', dias: 20 },
    { id: 'Tlacaxipehualiztli', dias: 20 },
    { id: 'Tozoztontli', dias: 20 },
    { id: 'Ueitozoztli', dias: 20 },
    { id: 'Toxcatl', dias: 20 },
    { id: 'Etzalcualiztli', dias: 20 },
    { id: 'Tecuilhuitontli', dias: 20 },
    { id: 'Ueitecuilhuitl', dias: 20 },
    { id: 'Tlaxochimaco', dias: 20 },
    { id: 'Xocotl Uetzi', dias: 20 },
    { id: 'Ochpaniztli', dias: 20 },
    { id: 'Teotlehco', dias: 20 },
    { id: 'Tepeilhuitl', dias: 20 },
    { id: 'Quecholli', dias: 20 },
    { id: 'Panquetzaliztli', dias: 20 },
    { id: 'Atemoztli', dias: 20 },
    { id: 'Tititl', dias: 20 },
    { id: 'Izcalli', dias: 20 },
    { id: 'Nemontemi', dias: 5 },
];

// 18 veintenas (20 días) + 1 Nemontemi (5 días) = 365 días en total
export const SEGDATOS_VEINTENASCaso = [
    { id: 'Izcalli', dias: 20 },
    { id: 'Atlacahualo', dias: 20 },
    { id: 'Tlacaxipehualiztli', dias: 20 },
    { id: 'Tozoztontli', dias: 20 },
    { id: 'Ueitozoztli', dias: 20 },
    { id: 'Toxcatl', dias: 20 },
    { id: 'Etzalcualiztli', dias: 20 },
    { id: 'Tecuilhuitontli', dias: 20 },
    { id: 'Ueitecuilhuitl', dias: 20 },
    { id: 'Tlaxochimaco', dias: 20 },
    { id: 'Xocotl Uetzi', dias: 20 },
    { id: 'Ochpaniztli', dias: 20 },
    { id: 'Teotlehco', dias: 20 },
    { id: 'Tepeilhuitl', dias: 20 },
    { id: 'Quecholli', dias: 20 },
    { id: 'Panquetzaliztli', dias: 20 },
    { id: 'Atemoztli', dias: 20 },
    { id: 'Tititl', dias: 20 },
    { id: 'Nemontemi', dias: 5 },
];

// Función matemática para describir los arcos de las máscaras interactivas
export const describirArcoInteractivo = (x, y, radioInt, radioExt, anguloInicio, anguloFin) => {
    const gradRad = (g) => (g - 90) * Math.PI / 180.0;

    const extInicio = { x: x + radioExt * Math.cos(gradRad(anguloInicio)), y: y + radioExt * Math.sin(gradRad(anguloInicio)) };
    const extFin = { x: x + radioExt * Math.cos(gradRad(anguloFin)), y: y + radioExt * Math.sin(gradRad(anguloFin)) };

    const intInicio = { x: x + radioInt * Math.cos(gradRad(anguloInicio)), y: y + radioInt * Math.sin(gradRad(anguloInicio)) };
    const intFin = { x: x + radioInt * Math.cos(gradRad(anguloFin)), y: y + radioInt * Math.sin(gradRad(anguloFin)) };

    const grande = (anguloFin - anguloInicio) <= 180 ? "0" : "1";

    return [
        "M", extInicio.x, extInicio.y,
        "A", radioExt, radioExt, 0, grande, 1, extFin.x, extFin.y,
        "L", intFin.x, intFin.y,
        "A", radioInt, radioInt, 0, grande, 0, intInicio.x, intInicio.y,
        "Z"
    ].join(" ");
};

// Engrane 13: Gira a la derecha (CW). 195px.
export const numberM = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];

// Engrane 20: Gira a la izquierda (CCW). 300px.
export const signos = [
    "Lagarto", "Viento", "Casa", "Lagartija", "Serpiente",
    "Muerte", "Venado", "Conejo", "Agua", "Perro",
    "Mono", "Hierba", "Caña", "Jaguar", "Águila",
    "Zopilote", "Movimiento", "Pedernal", "Lluvia", "Flor"
];

// ============================================================================
// CONSTANTES Y FUNCIONES PARA TORO 3D
// ============================================================================

// Mapeo de colores estéticos por rumbo de Trecena para los trazos segmentados
export const RUMBO_COLORS = {
    tlahuiztlanpa: '#F1C40F', // Oriente / Amarillo
    huitztlanpa: '#0984E3',    // Sur / Azul
    cihuatlanpa: '#D63031',    // Poniente / Rojo
    mictlanpa: '#7F8C8D',      // Norte / Gris
    base: '#64748B'            // Regular / Gris Base'
};
export const TRACE_KEYS = ['base', 'familia_q_1', 'tlahuiztlanpa', 'huitztlanpa', 'cihuatlanpa', 'mictlanpa'];

// Generación estática de la superficie del Toro (Traza 0)
const R_major = 5;
const r_minor = 1.5;
const u_arr = Array.from({ length: 40 }, (_, i) => (2 * Math.PI * i) / 39);
const v_arr = Array.from({ length: 40 }, (_, i) => (2 * Math.PI * i) / 39);

let x_surf = [], y_surf = [], z_surf = [];
for (let i = 0; i < v_arr.length; i++) {
    let x_row = [], y_row = [], z_row = [];
    for (let j = 0; j < u_arr.length; j++) {
        x_row.push((R_major + r_minor * Math.cos(u_arr[j])) * Math.cos(v_arr[i]));
        y_row.push((R_major + r_minor * Math.cos(u_arr[j])) * Math.sin(v_arr[i]));
        z_row.push(r_minor * Math.sin(u_arr[j]));
    }
    x_surf.push(x_row); y_surf.push(y_row); z_surf.push(z_row);
}

export const surfaceTrace = {
    type: 'surface',
    x: x_surf, y: y_surf, z: z_surf,
    opacity: 0.12,
    colorscale: 'Jet',
    showscale: false,
    hoverinfo: 'skip'
};

// Pasos estáticos para el slider inferior de Plotly
export const getSlidersSteps = (trajectory) => trajectory.map((_, i) => ({
    label: (i + 1).toString(),
    method: 'skip'
}));

// ============================================================================
// OPTIMIZACIÓN: buildCatContainers construye y llena los contenedores UNA SOLA VEZ.
// Moverlo aquí evita recalcular los ~260 puntos en cada re-render de React,
// lo que causaba llamadas innecesarias a Plotly.react() y congelamientos.
// ============================================================================
export const buildCatContainers = (toroData) => {
    const containers = {
        base: { x: [], y: [], z: [], text_num: [], text_img: [], hover: [], n: [], size: 5, color: '#94A3B8', symbol: 'circle', name: 'Día Regular' },
        familia_q_1: { x: [], y: [], z: [], text_num: [], text_img: [], hover: [], n: [], size: 7, color: '#00B5B5', symbol: 'diamond', name: 'Inicio Veintena' },
        tlahuiztlanpa: { x: [], y: [], z: [], text_num: [], text_img: [], hover: [], n: [], size: 9, color: RUMBO_COLORS.tlahuiztlanpa, symbol: 'circle', name: 'Tlahuiztlanpa (Oriente)' },
        huitztlanpa: { x: [], y: [], z: [], text_num: [], text_img: [], hover: [], n: [], size: 9, color: RUMBO_COLORS.huitztlanpa, symbol: 'circle', name: 'Huitztlanpa (Sur)' },
        cihuatlanpa: { x: [], y: [], z: [], text_num: [], text_img: [], hover: [], n: [], size: 9, color: RUMBO_COLORS.cihuatlanpa, symbol: 'circle', name: 'Cihuatlanpa (Poniente)' },
        mictlanpa: { x: [], y: [], z: [], text_num: [], text_img: [], hover: [], n: [], size: 9, color: RUMBO_COLORS.mictlanpa, symbol: 'circle', name: 'Mictlanpa (Norte)' }
    };
    // Distribuir la data geométrica dentro de las 6 categorías estructurales (una sola vez al cargar el módulo)
    toroData.trajectory.forEach((t) => {
        const pt = toroData.points[t.n];
        const container = containers[pt.classKey] || containers.base;
        container.x.push(t.x); container.y.push(t.y); container.z.push(t.z); container.n.push(t.n);
        container.text_num.push(`(${pt.q},${pt.r})`);
        container.text_img.push(`${pt.numeral}-${pt.symName}`);
        container.hover.push(`Día n=${t.n}<br>Tonal: ${pt.numeral} ${pt.symName}<br>Coord: (${pt.q},${pt.r})`);
    });
    return containers;
};

// --- COMPONENTE LÓGICO CON CAMBIO DE COLOR EXACTO EN EL VÉRTICE ---
// --- NUEVA LOGICA: TRAZAS DE TRAYECTORIA SEPARADAS POR RUMBO (ELIMINA DEGRADADOS) ---
export const getRumboSegments = (maxDay, toroData) => {
    const segments = { tlahuiztlanpa: [], huitztlanpa: [], cihuatlanpa: [], mictlanpa: [] };
    const activeTrajectory = toroData.trajectory.slice(0, maxDay);

    let currentRumbo = null;

    // 1. Encontrar el rumbo inicial real de la trayectoria activa
    for (let i = 0; i < activeTrajectory.length; i++) {
        const pt = toroData.points[activeTrajectory[i].n];
        if (pt && ['tlahuiztlanpa', 'huitztlanpa', 'cihuatlanpa', 'mictlanpa'].includes(pt.classKey)) {
            currentRumbo = pt.classKey;
            break;
        }
    }
    if (!currentRumbo) currentRumbo = 'tlahuiztlanpa';

    // 2. Construir trayectorias insertando rupturas nulas (null) para levantar el lápiz de Plotly
    for (let i = 0; i < activeTrajectory.length; i++) {
        const t = activeTrajectory[i];
        const pt = toroData.points[t.n];

        if (pt && ['tlahuiztlanpa', 'huitztlanpa', 'cihuatlanpa', 'mictlanpa'].includes(pt.classKey)) {

            // Si hay un cambio de rumbo auténtico
            if (pt.classKey !== currentRumbo) {
                // A) Cerramos de forma exacta el vértice en el rumbo anterior
                if (segments[currentRumbo] && segments[currentRumbo].length > 0) {
                    segments[currentRumbo].push(t);

                    // B) ¡SOLUCIÓN CRUCIAL!: Insertamos un nodo null en el rumbo que se apaga.
                    // Esto le dice a Plotly: "Cuando este color vuelva a abrirse en el futuro, NO lo unas con este punto".
                    segments[currentRumbo].push({ x: null, y: null, z: null, n: null });
                }

                // Cambiamos al nuevo rumbo
                currentRumbo = pt.classKey;
            }
        }

        // Añadimos el punto al rumbo que está corriendo actualmente
        if (segments[currentRumbo]) {
            segments[currentRumbo].push(t);
        }
    }

    return segments;
};

