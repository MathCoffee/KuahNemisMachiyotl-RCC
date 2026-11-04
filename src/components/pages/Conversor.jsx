import React, { useState, useRef } from 'react'
import { convertirTonalli, convertirXihuitl, convertirTonalliMeza, convertirXihuitlMeza, cempohualliMeza, obtenerDiaRitual, cempohualliCaso, handleLoadPrevious } from '../funtions/funtions';
import CalendarioGiratorio from './CalendarioGiratorio';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Estilos.css'
const Conversor = () => {
    const [selectedDate, setSelectedDate] = useState('')
    const [selectedTime, setSelectedTime] = useState('')
    const [tonalliDia, setTonalliDia] = useState(null)
    const [xihuitlAnio, setXihuitlAnio] = useState(null)
    const [tonalliDiaMeza, setTonalliDiaMeza] = useState(null)
    const [xihuitlAnioMeza, setXihuitlAnioMeza] = useState(null)
    const [veintenaMeza, setVeintenaMeza] = useState(null)
    const [ritualDay, setRitualDay] = useState(null)
    const [hasPrevious, setHasPrevious] = useState(() => {
        try {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('conversionHistory')
                localStorage.removeItem('lastConversionQuery')
            }
            return typeof window !== 'undefined' && !!sessionStorage.getItem('lastConversionQuery')
        } catch (e) {
            return false
        }
    })
    const [tonalliMediodia, setTonalliMediodia] = useState(null)
    const [veintenaCaso, setVeintenaCaso] = useState(null)
    const [history, setHistory] = useState(() => {
        try {
            const savedHistory = sessionStorage.getItem('conversionHistory')
            if (savedHistory) {
                const parsed = JSON.parse(savedHistory)
                if (Array.isArray(parsed)) return parsed
            }
            const single = sessionStorage.getItem('lastConversionQuery')
            if (single) {
                return [JSON.parse(single)]
            }
            return []
        } catch (e) {
            return []
        }
    })
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [alertaMensaje, setAlertaMensaje] = useState('')
    const alertaTimeoutRef = useRef(null)
    const mostrarAlerta = (mensaje) => {
        setAlertaMensaje(mensaje)
        if (alertaTimeoutRef.current) {
            clearTimeout(alertaTimeoutRef.current)
        }
        alertaTimeoutRef.current = setTimeout(() => {
            setAlertaMensaje('')
        }, 5000)
    }
    const runConversion = (dateStr, timeStr) => {
        const timeCaso = timeStr ? timeStr : '00:00'
        const dateObj = new Date(`${dateStr}T${timeCaso}`)
        const tonalliResult = convertirTonalli(dateObj)
        const xihuitlResult = convertirXihuitl(dateObj)
        const veintenaResultCaso = cempohualliCaso(dateObj)
        const tonalliResultMeza = convertirTonalliMeza(dateStr, timeStr)
        const xihuitlResultMeza = convertirXihuitlMeza(dateStr, timeStr)
        const veintenaResultMeza = cempohualliMeza(dateStr, timeStr)
        const dateMediodia = new Date(`${dateStr}T12:00:00`)
        const tonalliMediodiaResult = convertirTonalli(dateMediodia)
        setTonalliDia(tonalliResult)
        setXihuitlAnio(xihuitlResult)
        setVeintenaCaso(veintenaResultCaso)
        setTonalliDiaMeza(tonalliResultMeza)
        setXihuitlAnioMeza(xihuitlResultMeza)
        setVeintenaMeza(veintenaResultMeza)
        setTonalliMediodia(tonalliMediodiaResult)
        const ritualData = obtenerDiaRitual(dateStr, timeStr)
        if (ritualData) {
            setRitualDay(((ritualData.day - 1) % 365) + 1)
        } else {
            setRitualDay(null)
        }
    }
    const handleConvert = () => {
        if (!selectedDate) return
        if (alertaTimeoutRef.current) clearTimeout(alertaTimeoutRef.current)
        setAlertaMensaje('')
        runConversion(selectedDate, selectedTime)
        const newQuery = { date: selectedDate, time: selectedTime }
        try {
            setHistory(prevHistory => {
                const baseHistory = currentIndex >= 0 ? prevHistory.slice(0, currentIndex + 1) : prevHistory
                const last = baseHistory[baseHistory.length - 1]
                let updatedHistory
                if (last && last.date === newQuery.date && (last.time || '') === (newQuery.time || '')) {
                    updatedHistory = baseHistory
                } else {
                    updatedHistory = [...baseHistory, newQuery]
                }
                sessionStorage.setItem('conversionHistory', JSON.stringify(updatedHistory))
                setCurrentIndex(updatedHistory.length - 1)
                return updatedHistory
            })
            sessionStorage.setItem('lastConversionQuery', JSON.stringify(newQuery))
            setHasPrevious(true)
        } catch (e) {
            console.error("Error al guardar en sessionStorage", e)
        }
    }
    const handlePrevious = () => {
        handleLoadPrevious({
            history,
            currentIndex,
            setCurrentIndex,
            setSelectedDate,
            setSelectedTime,
            runConversion,
            mostrarAlerta,
            alertaTimeoutRef,
            setAlertaMensaje
        })
    }
    return (
        <>
            <div className="container text-center">
                <h1 className="text-center mb-4">Correlaciones Calendarícas Precoloniales</h1>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                Selecciona una fecha y hora
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-7 mb-3">
                                        <label className="form-label text-start d-block" htmlFor="input-fecha">Fecha:</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="bi bi-calendar-event"></i></span>
                                            <input id="input-fecha" type="date" className="form-control" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} style={{ colorScheme: 'dark' }} />
                                        </div>
                                    </div>
                                    <div className="col-md-5 mb-3">
                                        <label className="form-label text-start d-block" htmlFor="input-hora">Hora (opcional):</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="bi bi-clock"></i></span>
                                            <input id="input-hora" type="time" className="form-control" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} style={{ colorScheme: 'dark' }} />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <button id="btn-mostrar-conversion" type="button" className="btn btn-secondary me-2" onClick={handleConvert} disabled={!selectedDate}>Mostrar conversión</button>
                                <button id="btn-consulta-anterior" type="button" className="btn btn-outline-info" onClick={handlePrevious}>Consulta anterior</button>
                                {alertaMensaje && (
                                    <div className="alert alert-light mt-3 mb-0 text-center" role="alert">
                                        {alertaMensaje}
                                    </div>
                                )}
                                {(!tonalliDiaMeza || !tonalliDia) ? (
                                    <CalendarioGiratorio
                                        tipo="meza"
                                        tonalliDiaMeza={tonalliDiaMeza}
                                        veintenaMeza={veintenaMeza}
                                        ritualDay={ritualDay}
                                    />
                                ) : (
                                    <div className="row justify-content-center mt-3 g-4">
                                        <div className="col-12 col-xl-6 d-flex justify-content-center">
                                            <CalendarioGiratorio
                                                tipo="meza"
                                                tonalliDiaMeza={tonalliDiaMeza}
                                                veintenaMeza={veintenaMeza}
                                                ritualDay={ritualDay}
                                            />
                                        </div>
                                        <div className="col-12 col-xl-6 d-flex justify-content-center">
                                            <CalendarioGiratorio
                                                tipo="caso"
                                                tonalliDia={tonalliDia}
                                                veintenaCaso={veintenaCaso}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            {tonalliDia && tonalliDiaMeza && xihuitlAnio && xihuitlAnioMeza && (
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <p className="text-theme-muted">* Correlación de Meza</p>
                        <div className="col-md-6">
                            <div className="card" >
                                <div className="d-flex justify-content-center align-items-center gap-3 pt-3">
                                    <img
                                        src={tonalliDiaMeza.numberTonalImage}
                                        alt="Numeral Tonalli"
                                        className="img-com"
                                    />
                                    <img
                                        src={tonalliDiaMeza.signTonalImage}
                                        alt="Signo Tonalli"
                                        className="img-com"
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Tonalli</h5>
                                    <small className="text-secondary" style={{ fontSize: '11px' }}>* Según la correlación de Meza</small>
                                    <p className="card-text text-subtitle">Día:</p>
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Idioma</th>
                                                <th scope="col">Numeral</th>
                                                <th scope="col">Signo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Español</td>
                                                <td>{tonalliDiaMeza.numeroT.español}</td>
                                                <td>{tonalliDiaMeza.signoT.español}</td>
                                            </tr>
                                            <tr>
                                                <td>Nahuatl</td>
                                                <td>{tonalliDiaMeza.numeroT.nahuatl}</td>
                                                <td>{tonalliDiaMeza.signoT.nahuatl}</td>
                                            </tr>
                                            <tr>
                                                <td>Ñu savi Ceremonial</td>
                                                <td>{tonalliDiaMeza.numeroT.nusavi}</td>
                                                <td>{tonalliDiaMeza.signoT.nusavi}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <small className="text-secondary" style={{ fontSize: '12px', color: '#adb5bd' }}>Hora procesada: {tonalliDiaMeza.usedTime}</small><br></br>
                                    <div className="alert alert-success py-1 small">Esta fecha pertenece a la veintena: {veintenaMeza}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card" >
                                <div className="d-flex justify-content-center align-items-center gap-3 pt-3">
                                    <img src={xihuitlAnioMeza.numberImageX} alt={xihuitlAnioMeza.numberImageX} className="img-com" />
                                    <img src={xihuitlAnioMeza.symbolImageX} alt={xihuitlAnioMeza.symbolImageX} className="img-com" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Xihuitl</h5>
                                    <small className="text-secondary" style={{ fontSize: '11px', color: '#adb5bd' }}>* Según la correlación de Meza</small>
                                    <p className="card-text text-subtitle">Año:</p>
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Idioma</th>
                                                <th scope="col">Numeral</th>
                                                <th scope="col">Signo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Español</td>
                                                <td>{xihuitlAnioMeza.numeroX.español}</td>
                                                <td>{xihuitlAnioMeza.simboloX.español}</td>
                                            </tr>
                                            <tr>
                                                <td>Nahuatl</td>
                                                <td>{xihuitlAnioMeza.numeroX.nahuatl}</td>
                                                <td>{xihuitlAnioMeza.simboloX.nahuatl}</td>
                                            </tr>
                                            <tr>
                                                <td>Ñu savi Ceremonial</td>
                                                <td>{xihuitlAnioMeza.numeroX.nusavi}</td>
                                                <td>{xihuitlAnioMeza.simboloX.nusavi}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <small className="text-secondary" style={{ fontSize: '12px', color: '#adb5bd' }}>Inicio del año: {tonalliDiaMeza.startTime}</small>
                                </div>
                            </div>
                        </div>
                        <small className="text-secondary" style={{ fontSize: '13px' }}>* Correlación de Meza basado en la fecha: día 1-Cipactli, año 1-Tochtli (12 de marzo de 2026)</small><br /><br />
                        <p className="text-theme-muted">* Correlación de Caso</p>
                        <div className="col-md-6">
                            <div className="card" >
                                <div className="d-flex justify-content-center align-items-center gap-3 pt-3">
                                    <img src={tonalliDia.numberImage} alt={tonalliDia.numberImage} className="img-com" />
                                    <img src={tonalliDia.symbolImage} alt={tonalliDia.symbolImage} className="img-com" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Tonalli</h5>
                                    <small className="text-secondary" style={{ fontSize: '11px' }}>* Según la correlación de Caso</small>
                                    <p className="card-text text-subtitle">Día:</p>
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Idioma</th>
                                                <th scope="col">Numeral</th>
                                                <th scope="col">Signo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Español</td>
                                                <td>{tonalliDia.numero.español}</td>
                                                <td>{tonalliDia.simbolo.español}</td>
                                            </tr>
                                            <tr>
                                                <td>Nahuatl</td>
                                                <td>{tonalliDia.numero.nahuatl}</td>
                                                <td>{tonalliDia.simbolo.nahuatl}</td>
                                            </tr>
                                            <tr>
                                                <td>Ñu savi Ceremonial</td>
                                                <td>{tonalliDia.numero.nusavi}</td>
                                                <td>{tonalliDia.simbolo.nusavi}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <small className="text-secondary" style={{ fontSize: '12px', color: '#adb5bd' }}>Hora procesada: {tonalliDia.usedTime}</small><br />
                                    {tonalliMediodia && (<small className="text-secondary" style={{ fontSize: '12px', color: '#adb5bd' }}>Al medio día el Tonalli es:  <b> {tonalliMediodia.numero.español}-{tonalliMediodia.simbolo.español}</b></small>)}
                                    {veintenaCaso && (<div className="alert alert-success py-1 small">Esta fecha pertenece a la veintena: {veintenaCaso.veintena}</div>)}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card" >
                                <div className="d-flex justify-content-center align-items-center gap-3 pt-3">
                                    <img src={xihuitlAnio.numberImageX} alt={xihuitlAnio.numberImageX} className="img-com" />
                                    <img src={xihuitlAnio.symbolImageX} alt={xihuitlAnio.symbolImageX} className="img-com" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Xihuitl</h5>
                                    <small className="text-secondary" style={{ fontSize: '11px', color: '#adb5bd' }}>* Según la correlación de Caso</small>
                                    <p className="card-text text-subtitle">Año:</p>
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Idioma</th>
                                                <th scope="col">Numeral</th>
                                                <th scope="col">Signo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Español</td>
                                                <td>{xihuitlAnio.numeroX.español}</td>
                                                <td>{xihuitlAnio.simboloX.español}</td>
                                            </tr>
                                            <tr>
                                                <td>Nahuatl</td>
                                                <td>{xihuitlAnio.numeroX.nahuatl}</td>
                                                <td>{xihuitlAnio.simboloX.nahuatl}</td>
                                            </tr>
                                            <tr>
                                                <td>Ñu savi Ceremonial</td>
                                                <td>{xihuitlAnio.numeroX.nusavi}</td>
                                                <td>{xihuitlAnio.simboloX.nusavi}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <small className="text-secondary" style={{ fontSize: '12px', color: '#adb5bd' }}>Inicio del año: {xihuitlAnio.inicioAñoText}</small>
                                </div>
                            </div>
                        </div>
                        <small className="text-secondary" style={{ fontSize: '13px' }}>* Correlación de Caso basado en la fecha: día 1-Coatl, año 3-Calli (13 de agosto de 1521)</small>
                    </div>
                </div>
            )}
        </>
    )
}
export default Conversor
