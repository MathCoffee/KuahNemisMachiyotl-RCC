import React, { useState } from 'react'
import { obtenerDiaRitual, obtenerDiaRitualCaso } from '../funtions/funtions'
import { useTheme } from '../../context/ThemeContext'
const Calculadora = () => {
    const [correlacion, setCorrelacion] = useState('meza');
    const [sdate, setSdate] = useState('2026-03-12');
    const [time, setTime] = useState('');
    const [result, setResult] = useState(null);
    const { theme } = useTheme();
    const REF_YEAR = 2026;
    const calcularPosicion = () => {
        const res = correlacion === 'meza'
            ? obtenerDiaRitual(sdate, time)
            : obtenerDiaRitualCaso(sdate, time);
        if (res) {
            setResult(res);
        }
    }
    const handleCorrelacionChange = (tipo) => {
        setCorrelacion(tipo);
        setResult(null);
        if (tipo === 'meza' && sdate === '2026-10-03') {
            setSdate('2026-03-12');
            setTime('');
        } else if (tipo === 'caso' && sdate === '2026-03-12') {
            setSdate('2026-10-03');
            setTime('');
        }
    };
    return (
        <>
            <div className="container py-5">
                <div className="card shadow-lg border-0 mx-auto" style={{ maxWidth: '500px' }}>
                    <div className="card-header text-center">
                        <h5 className="mb-0">Calculadora de 18,980 Días</h5>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-center gap-4 mb-4">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="correlacion"
                                    id="correlacionMeza"
                                    value="meza"
                                    checked={correlacion === 'meza'}
                                    onChange={() => handleCorrelacionChange('meza')}
                                />
                                <label className="form-check-label fw-bold" htmlFor="correlacionMeza">
                                    Correlación Meza
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="correlacion"
                                    id="correlacionCaso"
                                    value="caso"
                                    checked={correlacion === 'caso'}
                                    onChange={() => handleCorrelacionChange('caso')}
                                />
                                <label className="form-check-label fw-bold" htmlFor="correlacionCaso">
                                    Correlación Caso
                                </label>
                            </div>
                        </div>
                        {correlacion === 'meza' ? (
                            <>
                                <div className="row g-2 mb-3">
                                    <div className="col-12">
                                        <label className="small fw-bold">Selecciona una Fecha</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={sdate}
                                            onChange={e => setSdate(e.target.value)}
                                            style={{ colorScheme: theme }}
                                        />
                                    </div>
                                </div>
                                <div className="row g-2 mb-4">
                                    <div className="col-12">
                                        <label className="small fw-bold">Selecciona una Hora (Opcional)</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            value={time}
                                            onChange={e => setTime(e.target.value)}
                                            style={{ colorScheme: theme }}
                                        />
                                        <small className="text-theme-muted" style={{ fontSize: '11px' }}>* Si desconoce la hora puede omitirla. Se usará la hora de inicio del año que corresponda a la fecha seleccionada.</small>
                                    </div>
                                </div>
                                <button className="btn btn-primary w-100 fw-bold shadow-sm" onClick={calcularPosicion}>CALCULAR NÚMERO DE DÍA</button>
                            </>
                        ) : (
                            <>
                                <div className="row g-2 mb-3">
                                    <div className="col-12">
                                        <label className="small fw-bold">Selecciona una Fecha</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={sdate}
                                            onChange={e => setSdate(e.target.value)}
                                            style={{ colorScheme: theme }}
                                        />
                                    </div>
                                </div>
                                <div className="row g-2 mb-4">
                                    <div className="col-12">
                                        <label className="small fw-bold">Selecciona una Hora (Opcional)</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            value={time}
                                            onChange={e => setTime(e.target.value)}
                                            style={{ colorScheme: theme }}
                                        />
                                        <small className="text-theme-muted" style={{ fontSize: '11px' }}>*Si desconoce la hora puede omitirla. Se usará la hora de inicio del año que corresponda a la fecha seleccionada.</small>
                                    </div>
                                </div>
                                <button className="btn btn-primary w-100 fw-bold shadow-sm" onClick={calcularPosicion}>CALCULAR NÚMERO DE DÍA</button>
                            </>
                        )}
                        {result && (
                            <div className={`mt-4 p-3 rounded border text-center ${theme === 'dark' ? 'bg-dark border-secondary' : 'bg-white'}`}>
                                <span className="badge bg-secondary mb-2">{result.cal}</span>
                                <h1 className="display-4 fw-bold text-primary mb-0">Día {result.day}</h1>
                                <p className="text-theme-muted small">Año {result.year} del Bloque de 52 años</p>
                                <div className="alert alert-secondary py-1 small mb-1">Hora procesada: {result.usedTime}</div>
                                <div className="alert alert-info py-1 small">Inicio del año: {result.startTime}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Calculadora
