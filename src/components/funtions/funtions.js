const images = import.meta.glob('../images/*.png', { eager: true, import: 'default' });
export const getImagePath = (imageName) => {
    const path = `../images/${imageName}`;
    return images[path] || '';
};
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
export const xihuitlSimbolos = [
    { español: "Caña", nahuatl: "Acatl", nusavi: "Huiyo", image: "caña.png" },
    { español: "Pedernal", nahuatl: "Tecpatl", nusavi: "Cusi", image: "pedernal.png" },
    { español: "Casa", nahuatl: "Calli", nusavi: "Cuau", image: "casa.png" },
    { español: "Conejo", nahuatl: "Tochtli", nusavi: "Sayu", image: "conejo.png" }
]
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
export const orientation = ['Este', 'Norte', 'Oeste', 'Sur']
const bisiestoAnio = (year) => {
    if (year < 1582) {
        return year % 4 === 0;
    } else {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
}
export const getDiasMonth = (year, month) => {
    const diasInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (month === 1) {
        return bisiestoAnio(year) ? 29 : 28
    }
    return diasInMonth[month]
}
export const calcularDiasManual = (date) => {
    let dias = 0
    const referenceFecha = new Date(1521, 7, 12, 12, 0, 0)
    const fechaInicio = new Date(referenceFecha.getTime())
    const fechaFin = new Date(date.getTime())
    const fechaCambioCalendarioA = new Date(1582, 9, 4)
    const fechaCambioCalendarioB = new Date(1582, 9, 15)
    const diasSaltados = 10
    if (fechaInicio < fechaFin) {
        if (fechaFin > fechaCambioCalendarioA) {
            dias -= diasSaltados
        }
        for (let year = fechaInicio.getFullYear(); year < fechaFin.getFullYear(); year++) {
            dias += bisiestoAnio(year) ? 366 : 365
        }
        for (let month = 0; month < fechaInicio.getMonth(); month++) {
            dias -= getDiasMonth(fechaInicio.getFullYear(), month)
        }
        dias -= fechaInicio.getDate()
        for (let month = 0; month < fechaFin.getMonth(); month++) {
            dias += getDiasMonth(fechaFin.getFullYear(), month)
        }
        dias += fechaFin.getDate()
    } else if (fechaInicio > fechaFin) {
        for (let year = fechaFin.getFullYear(); year < fechaInicio.getFullYear(); year++) {
            dias += bisiestoAnio(year) ? 366 : 365
        }
        for (let month = 0; month < fechaFin.getMonth(); month++) {
            dias -= getDiasMonth(fechaFin.getFullYear(), month)
        }
        dias -= fechaFin.getDate()
        for (let month = 0; month < fechaInicio.getMonth(); month++) {
            dias += getDiasMonth(fechaInicio.getFullYear(), month)
        }
        dias += fechaInicio.getDate()
    }
    return dias
}
export const convertirTonalli = (date) => {
    const referenceFecha = new Date(1521, 7, 12, 12, 0, 0)
    const fechaInicial = new Date(referenceFecha.getTime())
    const fechaFinal = new Date(date.getTime())
    const digitoReferencia = 1
    const simboloReferencia = 4
    const hours = date.getHours();
    const minutes = date.getMinutes();
    let diferenciaDias;
    if (fechaInicial < fechaFinal) {
        diferenciaDias = (calcularDiasManual(date))
        if (hours < 12) {
            diferenciaDias -= 1;
        }
        const tonalliCiclo = 260
        const diaCiclo = ((diferenciaDias % tonalliCiclo) + tonalliCiclo) % tonalliCiclo
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
            simboloInv: tonalliSimbolos[simboloCal].español,
            usedTime: usedTime
        }
    } else if (fechaInicial > fechaFinal) {
        diferenciaDias = -(calcularDiasManual(date))
        if (hours < 12) {
            diferenciaDias -= 1;
        }
        const tonalliCiclo = 260
        const diaCiclo = ((diferenciaDias % tonalliCiclo) + tonalliCiclo) % tonalliCiclo
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
            simboloInv: tonalliSimbolos[simboloCal].español,
            usedTime: usedTime
        }
    } else {
        if (hours < 12) {
            diferenciaDias = -1;
            const tonalliCiclo = 260;
            const diaCiclo = ((diferenciaDias % tonalliCiclo) + tonalliCiclo) % tonalliCiclo;
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
export const convertirXihuitl = (date) => {
    const referenceAño = 1521
    const digitoReferencia = 3
    const simboloReferencia = 2
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const effectiveDate = new Date(date.getTime())
    if (hours < 12) {
        effectiveDate.setDate(effectiveDate.getDate() - 1)
    }
    const refInicioAnio = new Date(1521, 0, 24, 12, 0, 0)
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
    const obtenerInicioAño = (year) => {
        const fechaInicio = new Date(refInicioAnio.getTime())
        fechaInicio.setFullYear(year)
        if (year > referenceAño) {
            const bisiestos = contarBisisestos(referenceAño, year)
            fechaInicio.setDate(fechaInicio.getDate() - bisiestos)
        } else if (year < referenceAño) {
            const bisiestos = contarBisisestos(year, referenceAño)
            fechaInicio.setDate(fechaInicio.getDate() + bisiestos)
        } else {
            fechaInicio.setDate(24)
        }
        if (year > 1582) {
            fechaInicio.setDate(fechaInicio.getDate() + 10)
        }
        fechaInicio.setHours(12, 0, 0, 0)
        return fechaInicio
    }
    const currentAño = date.getFullYear()
    const inicioAñoNext = obtenerInicioAño(currentAño + 1)
    const inicioAñoCurr = obtenerInicioAño(currentAño)
    let xihuitlYear = currentAño
    let fechaInicioAñoSeleted = inicioAñoCurr
    if (date >= inicioAñoNext) {
        xihuitlYear = currentAño + 1
        fechaInicioAñoSeleted = inicioAñoNext
    } else if (date < inicioAñoCurr) {
        xihuitlYear = currentAño - 1
        fechaInicioAñoSeleted = obtenerInicioAño(xihuitlYear)
    } else {
        xihuitlYear = currentAño
        fechaInicioAñoSeleted = inicioAñoCurr
    }
    let numeroX = digitoReferencia
    let simboloCalXihuitl = simboloReferencia
    if (referenceAño < xihuitlYear) {
        const diferencia = xihuitlYear - referenceAño
        numeroX = ((digitoReferencia + diferencia) % 13)
        numeroX = numeroX <= 0 ? numeroX + 13 : numeroX
        simboloCalXihuitl = ((simboloReferencia + diferencia) % 4)
        simboloCalXihuitl = simboloCalXihuitl < 0 ? simboloCalXihuitl + 4 : simboloCalXihuitl
    } else if (referenceAño > xihuitlYear) {
        const diferencia = referenceAño - xihuitlYear
        numeroX = ((digitoReferencia - diferencia) % 13)
        numeroX = numeroX <= 0 ? numeroX + 13 : numeroX
        simboloCalXihuitl = ((simboloReferencia - diferencia) % 4)
        simboloCalXihuitl = simboloCalXihuitl < 0 ? simboloCalXihuitl + 4 : simboloCalXihuitl
    } else {
        numeroX = digitoReferencia
        simboloCalXihuitl = simboloReferencia
    }
    const opcionFechaFormat = { day: 'numeric', month: 'long', year: 'numeric' }
    const inicioAñoText = `${fechaInicioAñoSeleted.toLocaleDateString('es-MX', opcionFechaFormat)}, 12:00 pm`
    const meridiem = hours >= 12 ? 'pm' : 'am'
    const hoursMeridiem = hours % 12 || 12
    const inicioTime = `${hoursMeridiem}:${minutes < 10 ? '0' + minutes : minutes} ${meridiem}`
    return {
        numeroX: numerosNombres[numeroX - 1],
        simboloX: xihuitlSimbolos[simboloCalXihuitl],
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
    const hours = date.getHours()
    const effectiveDate = new Date(date)
    const diferenciaTime = effectiveDate.getTime() - inicioXihuitl.getTime()
    let diferenciaDias = Math.floor(diferenciaTime / (1000 * 60 * 60 * 24))
    while (diferenciaDias < 0) diferenciaDias += 365
    diferenciaDias = diferenciaDias % 365
    const diaAño = diferenciaDias + 1
    if (diferenciaDias >= 360) {
        return {
            veintena: "Nemontemi",
            dia: diaAño,
            mesIndex: -1
        }
    } else {
        const mesIndex = (17 + Math.floor(diferenciaDias / 20)) % 18
        const veintenaName = cempohuallapohualli[mesIndex].nahuatl;
        return {
            veintena: veintenaName,
            dia: diaAño,
            mesIndex: mesIndex
        };
    }
}
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
    let h = 12;
    let min = 0;
    if (time) {
        const [hStr, minStr] = time.split(':');
        h = parseInt(hStr);
        min = parseInt(minStr);
    }
    const targetDate = new Date(y, m - 1, d, h, min, 0, 0);
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
    let yearInBlock = ((xihuitlYear - 1507) % 52);
    if (yearInBlock < 0) yearInBlock += 52;
    yearInBlock += 1;
    let effectiveTarget = new Date(targetDate.getTime());
    if (h < 12) {
        effectiveTarget.setDate(effectiveTarget.getDate() - 1);
    }
    effectiveTarget.setHours(12, 0, 0, 0);
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
    const finalDay = ((yearInBlock - 1) * 365) + diffDays + 1;
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
export const obtenerDiaRitual = (sdate, time) => {
    if (!sdate) return null;
    const [yStr, mStr, dStr] = sdate.split('-');
    let y = parseInt(yStr);
    const m = parseInt(mStr);
    const d = parseInt(dStr);
    const REF_YEAR = 2026;
    const isJuliano = y <= 1582;
    const baseDay = isJuliano ? 2 : 12;
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
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const getAbsDays = (month, day) => {
        let total = 0;
        for (let i = 0; i < month - 1; i++) total += daysInMonth[i];
        return total + day;
    };
    let targetAbsDays = getAbsDays(m, d);
    let params = getYearParams(y);
    let startAbsDays = getAbsDays(3, params.sDay);
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
    if (isBeforeStart) {
        y -= 1;
        params = getYearParams(y);
        startAbsDays = getAbsDays(3, params.sDay);
        targetAbsDays += 365;
    }
    if (!time) {
        h = params.sHour;
        min = params.sMin;
    }
    let yearInBlock = ((y - 1974) % 52) + 1;
    if (yearInBlock <= 0) yearInBlock += 52;
    const inputTotalMins = (h * 60) + min;
    const startTotalMins = (params.sHour * 60) + params.sMin;
    let diffDays = targetAbsDays - startAbsDays;
    if (inputTotalMins < startTotalMins) {
        diffDays -= 1;
    }
    if (diffDays >= 365) {
        diffDays = 364;
    }
    const finalDay = ((yearInBlock - 1) * 365) + diffDays + 1;
    return {
        day: finalDay,
        year: yearInBlock,
        cycle: params.cyclePos + 1,
        cal: isJuliano ? "Juliano" : "Gregoriano",
        startTime: `${params.sDay} de marzo, ${params.sHour}:${params.sMin < 10 ? '0' + params.sMin : params.sMin}`,
        usedTime: `${h % 12 || 12}:${min < 10 ? '0' + min : min} ${h >= 12 ? 'p.m.' : 'a.m.'}`
    };
};
export const convertirTonalliMeza = (sdate, time) => {
    if (sdate instanceof Date) {
        const y = sdate.getFullYear();
        const m = String(sdate.getMonth() + 1).padStart(2, '0');
        const d = String(sdate.getDate()).padStart(2, '0');
        sdate = `${y}-${m}-${d}`;
    }
    const numDay = (obtenerDiaRitual(sdate, time))
    const day = numDay.day
    let coincide = false;
    let k = Math.floor((day - 1) / 365)
    for (let base = 361; base <= 365; base++) {
        let nem = base + (365 * k)
        if (day === nem) {
            coincide = true
            break
        }
    }
    let numeroTonal = 0
    let signoTonal = 0
    if (coincide) {
        let i = Math.ceil(day / 365)
        numeroTonal = ((day - (360 * i)) % 13 + 13) % 13
        numeroTonal = numeroTonal <= 0 ? numeroTonal + 13 : numeroTonal
        signoTonal = ((day - (360 * i)) % 20 + 20) % 20
        signoTonal = signoTonal <= 0 ? signoTonal + 20 : signoTonal
    } else {
        numeroTonal = ((((((day % 13) + 13) % 13) - (5 * k)) % 13) + 13) % 13;
        numeroTonal = numeroTonal <= 0 ? numeroTonal + 13 : numeroTonal
        signoTonal = ((((((day % 20) + 20) % 20) - (5 * k)) % 20) + 20) % 20;
        signoTonal = signoTonal <= 0 ? signoTonal + 20 : signoTonal
    }
    return {
        numeroT: numerosNombres[numeroTonal - 1],
        signoT: tonalliSimbolos[signoTonal - 1],
        numberTonalImage: getImagePath(numerosNombres[numeroTonal - 1].image),
        signTonalImage: getImagePath(tonalliSimbolos[signoTonal - 1].image),
        signoTonalInv: tonalliSimbolos[signoTonal - 1].español,
        usedTime: numDay.usedTime,
        startTime: numDay.startTime
    }
}
export const convertirXihuitlMeza = (sdate, time) => {
    if (sdate instanceof Date) {
        const y = sdate.getFullYear();
        const m = String(sdate.getMonth() + 1).padStart(2, '0');
        const d = String(sdate.getDate()).padStart(2, '0');
        sdate = `${y}-${m}-${d}`;
    }
    const ritualData = obtenerDiaRitual(sdate, time);
    if (!ritualData) return null;
    const yearInBlock = ritualData.year;
    let numeroMeza = ((yearInBlock - 1) % 13) + 1;
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
    if (sdate instanceof Date) {
        const y = sdate.getFullYear();
        const m = String(sdate.getMonth() + 1).padStart(2, '0');
        const d = String(sdate.getDate()).padStart(2, '0');
        sdate = `${y}-${m}-${d}`;
    }
    const ritualData = obtenerDiaRitual(sdate, time);
    if (!ritualData) return null;
    const dInYear = (ritualData.day - 1) % 365;
    if (dInYear < 360) {
        const index = Math.floor(dInYear / 20);
        return cempohuallapohualli[index].nahuatl;
    } else {
        return "Nemontemi";
    }
}
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
        for (let year = fechaInicio.getFullYear(); year <= fechaFin.getFullYear(); year++) {
            if (year === 0) continue
            const startMonth = (year === fechaInicio.getFullYear()) ? fechaInicio.getMonth() : 0
            const endMonth = (year === fechaFin.getFullYear()) ? fechaFin.getMonth() : 11
            for (let month = startMonth; month <= endMonth; month++) {
                const diasInMonth = getDiasMonth(year, month)
                const startDay = (year === fechaInicio.getFullYear() && month === fechaInicio.getMonth()) ? fechaInicio.getDate() : 1
                const endDay = (year === fechaFin.getFullYear() && month === fechaFin.getMonth()) ? fechaFin.getDate() : diasInMonth
                for (let day = startDay; day <= endDay; day++) {
                    if (year === 1582 && month === 9 && day >= 5 && day <= 14) continue;
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
            const fechaInicioCaso = obtenerInicioAñoCaso(year)
            const xihuitl = convertirXihuitl(fechaInicioCaso)
            const xihuitlMeza = convertirXihuitlMeza(`${year}-03-12`)
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
export const formatDate = (date) => {
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}
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
        const yA = parseInt(yearStart);
        const yB = parseInt(yearEnd);
        const yMin = Math.min(yA, yB);
        const yMax = Math.max(yA, yB);
        fechaA = new Date(yMin, 0, 1, 0, 0, 0);
        fechaB = new Date(yMax, 11, 31, 23, 59, 59);
    }
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
        for (let year = fechaInicio.getFullYear(); year <= fechaFin.getFullYear(); year++) {
            if (year === 0) continue;
            const startMonth = (year === fechaInicio.getFullYear()) ? fechaInicio.getMonth() : 0;
            const endMonth = (year === fechaFin.getFullYear()) ? fechaFin.getMonth() : 11;
            for (let month = startMonth; month <= endMonth; month++) {
                const diasEnMes = getDiasMonth(year, month);
                const startDay = (year === fechaInicio.getFullYear() && month === fechaInicio.getMonth()) ? fechaInicio.getDate() : 1;
                const endDay = (year === fechaFin.getFullYear() && month === fechaFin.getMonth()) ? fechaFin.getDate() : diasEnMes;
                for (let day = startDay; day <= endDay; day++) {
                    if (year === 1582 && month === 9 && day >= 5 && day <= 14) continue;
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
        matches.sort((a, b) => new Date(b.date) - new Date(a.date));
        setAmbosResults(matches);
        setLoadingAmbos(false);
    }, 100);
}
export const revOrientation = [...orientation].toReversed()
export const handleCategoryChange = (category, setSelectedCategories) => {
    setSelectedCategories(prev => ({
        ...prev,
        [category]: !prev[category]
    }));
};
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]
export const revNumbers = [...numbers].toReversed()
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
export const numberM = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
export const signos = [
    "Lagarto", "Viento", "Casa", "Lagartija", "Serpiente",
    "Muerte", "Venado", "Conejo", "Agua", "Perro",
    "Mono", "Hierba", "Caña", "Jaguar", "Águila",
    "Zopilote", "Movimiento", "Pedernal", "Lluvia", "Flor"
];
export const RUMBO_COLORS = {
    tlahuiztlanpa: '#F1C40F',
    huitztlanpa: '#0984E3',
    cihuatlanpa: '#D63031',
    mictlanpa: '#7F8C8D',
    base: '#64748B'
};
export const TRACE_KEYS = ['base', 'familia_q_1', 'tlahuiztlanpa', 'huitztlanpa', 'cihuatlanpa', 'mictlanpa'];
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
export const getSlidersSteps = (trajectory) => trajectory.map((_, i) => ({
    label: (i + 1).toString(),
    method: 'skip'
}));
export const buildCatContainers = (toroData) => {
    const containers = {
        base: { x: [], y: [], z: [], text_num: [], text_img: [], hover: [], n: [], size: 5, color: '#94A3B8', symbol: 'circle', name: 'Día Regular' },
        familia_q_1: { x: [], y: [], z: [], text_num: [], text_img: [], hover: [], n: [], size: 7, color: '#00B5B5', symbol: 'diamond', name: 'Inicio Veintena' },
        tlahuiztlanpa: { x: [], y: [], z: [], text_num: [], text_img: [], hover: [], n: [], size: 9, color: RUMBO_COLORS.tlahuiztlanpa, symbol: 'circle', name: 'Tlahuiztlanpa (Oriente)' },
        huitztlanpa: { x: [], y: [], z: [], text_num: [], text_img: [], hover: [], n: [], size: 9, color: RUMBO_COLORS.huitztlanpa, symbol: 'circle', name: 'Huitztlanpa (Sur)' },
        cihuatlanpa: { x: [], y: [], z: [], text_num: [], text_img: [], hover: [], n: [], size: 9, color: RUMBO_COLORS.cihuatlanpa, symbol: 'circle', name: 'Cihuatlanpa (Poniente)' },
        mictlanpa: { x: [], y: [], z: [], text_num: [], text_img: [], hover: [], n: [], size: 9, color: RUMBO_COLORS.mictlanpa, symbol: 'circle', name: 'Mictlanpa (Norte)' }
    };
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
export const getRumboSegments = (maxDay, toroData) => {
    const segments = { tlahuiztlanpa: [], huitztlanpa: [], cihuatlanpa: [], mictlanpa: [] };
    const activeTrajectory = toroData.trajectory.slice(0, maxDay);
    let currentRumbo = null;
    for (let i = 0; i < activeTrajectory.length; i++) {
        const pt = toroData.points[activeTrajectory[i].n];
        if (pt && ['tlahuiztlanpa', 'huitztlanpa', 'cihuatlanpa', 'mictlanpa'].includes(pt.classKey)) {
            currentRumbo = pt.classKey;
            break;
        }
    }
    if (!currentRumbo) currentRumbo = 'tlahuiztlanpa';
    for (let i = 0; i < activeTrajectory.length; i++) {
        const t = activeTrajectory[i];
        const pt = toroData.points[t.n];
        if (pt && ['tlahuiztlanpa', 'huitztlanpa', 'cihuatlanpa', 'mictlanpa'].includes(pt.classKey)) {
            if (pt.classKey !== currentRumbo) {
                if (segments[currentRumbo] && segments[currentRumbo].length > 0) {
                    segments[currentRumbo].push(t);
                    segments[currentRumbo].push({ x: null, y: null, z: null, n: null });
                }
                currentRumbo = pt.classKey;
            }
        }
        if (segments[currentRumbo]) {
            segments[currentRumbo].push(t);
        }
    }
    return segments;
};
export const handleLoadPrevious = (
    paramsOrHistory,
    currentIndexParam,
    setCurrentIndexParam,
    setSelectedDateParam,
    setSelectedTimeParam,
    runConversionParam,
    mostrarAlertaParam,
    alertaTimeoutRefParam,
    setAlertaMensajeParam
) => {
    let history, currentIndex, setCurrentIndex, setSelectedDate, setSelectedTime, runConversion, mostrarAlerta, alertaTimeoutRef, setAlertaMensaje;
    if (paramsOrHistory && typeof paramsOrHistory === 'object' && !Array.isArray(paramsOrHistory)) {
        ({
            history,
            currentIndex,
            setCurrentIndex,
            setSelectedDate,
            setSelectedTime,
            runConversion,
            mostrarAlerta,
            alertaTimeoutRef,
            setAlertaMensaje
        } = paramsOrHistory);
    } else {
        history = paramsOrHistory;
        currentIndex = currentIndexParam;
        setCurrentIndex = setCurrentIndexParam;
        setSelectedDate = setSelectedDateParam;
        setSelectedTime = setSelectedTimeParam;
        runConversion = runConversionParam;
        mostrarAlerta = mostrarAlertaParam;
        alertaTimeoutRef = alertaTimeoutRefParam;
        setAlertaMensaje = setAlertaMensajeParam;
    }
    try {
        let targetIndex = -1;
        if (currentIndex === -1) {
            targetIndex = (history && history.length) ? history.length - 1 : -1;
        } else {
            targetIndex = currentIndex - 1;
        }
        if (history && targetIndex >= 0 && targetIndex < history.length) {
            const query = history[targetIndex];
            if (query && query.date) {
                if (alertaTimeoutRef && alertaTimeoutRef.current) clearTimeout(alertaTimeoutRef.current);
                if (setAlertaMensaje) setAlertaMensaje('');
                if (setSelectedDate) setSelectedDate(query.date);
                if (setSelectedTime) setSelectedTime(query.time || '');
                if (runConversion) runConversion(query.date, query.time || '');
                if (setCurrentIndex) setCurrentIndex(targetIndex);
                return;
            }
        }
        if (mostrarAlerta) {
            mostrarAlerta('Lo siento no existe ninguna consulta anterior');
        }
    } catch (e) {
        console.error("Error al cargar la consulta anterior", e);
        if (mostrarAlerta) {
            mostrarAlerta('Lo siento no existe ninguna consulta anterior');
        }
    }
};
