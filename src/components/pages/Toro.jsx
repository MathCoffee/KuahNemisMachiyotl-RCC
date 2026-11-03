import React, { useState, useEffect, useRef, useMemo } from 'react';
import Plotly from 'plotly.js-dist-min';
import _reactPlotly from 'react-plotly.js';
import createPlotlyComponent from 'react-plotly.js/factory';
import toroData from '../data/toroData.json';
import MenuLat from './MenuLat';
import { useTheme } from '../../context/ThemeContext';
const PlotComponent = _reactPlotly.default || _reactPlotly;
const Plot = typeof createPlotlyComponent === 'function'
    ? createPlotlyComponent(Plotly)
    : PlotComponent;
import { getImagePath, RUMBO_COLORS, TRACE_KEYS, surfaceTrace, getSlidersSteps, buildCatContainers, getRumboSegments as _getRumboSegments } from '../funtions/funtions';
import 'bootstrap/dist/css/bootstrap.min.css';
const slidersSteps = getSlidersSteps(toroData.trajectory);
const catContainers = buildCatContainers(toroData);
const getRumboSegments = (maxDay) => _getRumboSegments(maxDay, toroData);
const Toro = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [currentRepresentation, setCurrentRepresentation] = useState('imagenes');
    const [followMode, setFollowMode] = useState('trayectoria');
    const [speed, setSpeed] = useState(300);
    const [activeDayData, setActiveDayData] = useState(() => {
        const data = toroData.points[1];
        return data ? { day: 1, ...data } : null;
    });
    const plotRef = useRef(null);
    const plotAreaRef = useRef(null);
    const followModeRef = useRef('trayectoria');
    const representationRef = useRef('imagenes');
    const [labelsVisibility, setLabelsVisibility] = useState('none');
    const currentDayRef = useRef(1);
    const isAnimatingRef = useRef(false);
    const animationIntervalRef = useRef(null);
    const updateSidebar = (day) => {
        const data = toroData.points[day];
        if (data) {
            setActiveDayData({ day, ...data });
        }
    };
    const layout = useMemo(() => ({
        uirevision: 'toro-view',
        paper_bgcolor: '#F8FAFC',
        plot_bgcolor: '#F8FAFC',
        margin: { l: 10, r: 10, b: 10, t: 10 },
        scene: {
            xaxis: { visible: false },
            yaxis: { visible: false },
            zaxis: { visible: false },
            bgcolor: '#FFFFFF',
            aspectmode: 'data',
            uirevision: 'toro-view',
            camera: { projection: { type: 'orthographic' } }
        },
        showlegend: false,
        modebar: {
            orientation: 'h',
            bgcolor: 'transparent',
            color: '#94A3B8',
            activecolor: '#383b44ff'
        },
        sliders: [{
            active: 0,
            yanchor: 'top',
            xanchor: 'left',
            currentvalue: { font: { size: 13, color: '#0284C7' }, prefix: 'Día Actual (n): ', visible: true, xanchor: 'right' },
            transition: { duration: 0 },
            pad: { b: 10, t: 10 },
            len: 0.9,
            x: 0.05,
            y: 0,
            font: { color: '#475569', size: 10 }, bgcolor: '#E2E8F0', bordercolor: '#CBD5E1',
            steps: slidersSteps
        }]
    }), []);
    const layoutRef = useRef(layout);
    useEffect(() => {
        followModeRef.current = followMode;
    }, [followMode]);
    useEffect(() => {
        representationRef.current = currentRepresentation;
    }, [currentRepresentation]);
    useEffect(() => {
        Object.keys(toroData.points).forEach((key) => {
            const data = toroData.points[key];
            const symImg = new Image();
            symImg.src = getImagePath(data.symFile);
            const numeralFile = data.q === 0 ? '13.png' : `${data.q}.png`;
            const numImg = new Image();
            numImg.src = getImagePath(numeralFile);
        });
        currentDayRef.current = 1;
        return () => {
            if (animationIntervalRef.current) clearInterval(animationIntervalRef.current);
        };
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            const plotDiv = plotRef.current?.el;
            if (plotDiv) {
                Plotly.Plots.resize(plotDiv);
            }
        }, 100);
        let resizeObserver;
        if (plotAreaRef.current) {
            resizeObserver = new ResizeObserver(() => {
                const plotDiv = plotRef.current?.el;
                if (plotDiv) {
                    Plotly.Plots.resize(plotDiv);
                }
            });
            resizeObserver.observe(plotAreaRef.current);
        }
        return () => {
            clearTimeout(timer);
            if (resizeObserver) resizeObserver.disconnect();
        };
    }, []);
    const lastFrameTimeRef = useRef(0);
    const animationFrameIdRef = useRef(null);
    const isUserInteractingRef = useRef(false);
    const runFrameStep = (timestamp) => {
        if (!isAnimatingRef.current) return;
        const plotDiv = plotRef.current?.el;
        if (!plotDiv) {
            animationFrameIdRef.current = requestAnimationFrame(runFrameStep);
            return;
        }
        if (isUserInteractingRef.current) {
            lastFrameTimeRef.current = timestamp;
            animationFrameIdRef.current = requestAnimationFrame(runFrameStep);
            return;
        }
        if (!lastFrameTimeRef.current) lastFrameTimeRef.current = timestamp;
        const elapsed = timestamp - lastFrameTimeRef.current;
        if (elapsed >= speed) {
            lastFrameTimeRef.current = timestamp;
            const totalPoints = toroData.trajectory.length;
            if (currentDayRef.current >= totalPoints) {
                handlePause();
                return;
            }
            currentDayRef.current += 1;
            const targetDay = currentDayRef.current;
            const currentPt = toroData.trajectory[targetDay - 1];
            const ptMeta = toroData.points[currentPt.n];
            const textLabel = representationRef.current === 'numeros'
                ? `(${ptMeta.q},${ptMeta.r})`
                : `${ptMeta.numeral}-${ptMeta.symName}`;
            const segments = getRumboSegments(targetDay);
            const currentCamera = plotDiv._fullLayout?.scene?.camera || plotDiv.layout?.scene?.camera;
            if (currentCamera) {
                layoutRef.current.scene.camera = {
                    up: { x: currentCamera.up.x, y: currentCamera.up.y, z: currentCamera.up.z },
                    center: { x: currentCamera.center.x, y: currentCamera.center.y, z: currentCamera.center.z },
                    eye: { x: currentCamera.eye.x, y: currentCamera.eye.y, z: currentCamera.eye.z },
                    projection: { type: 'orthographic' }
                };
            }
            Plotly.restyle(plotDiv, {
                x: [
                    segments.tlahuiztlanpa.map(s => s.x),
                    segments.huitztlanpa.map(s => s.x),
                    segments.cihuatlanpa.map(s => s.x),
                    segments.mictlanpa.map(s => s.x),
                    [currentPt.x]
                ],
                y: [
                    segments.tlahuiztlanpa.map(s => s.y),
                    segments.huitztlanpa.map(s => s.y),
                    segments.cihuatlanpa.map(s => s.y),
                    segments.mictlanpa.map(s => s.y),
                    [currentPt.y]
                ],
                z: [
                    segments.tlahuiztlanpa.map(s => s.z),
                    segments.huitztlanpa.map(s => s.z),
                    segments.cihuatlanpa.map(s => s.z),
                    segments.mictlanpa.map(s => s.z),
                    [currentPt.z]
                ],
                text: [null, null, null, null, [textLabel]],
                'textfont.size': [null, null, null, null, [representationRef.current === 'numeros' ? 28 : 16]]
            }, [7, 8, 9, 10, 11]);
            layoutRef.current.sliders[0].active = targetDay - 1;
            Plotly.relayout(plotDiv, {
                'sliders[0].active': targetDay - 1,
                'scene.camera': layoutRef.current.scene.camera
            });
            if (followModeRef.current === 'trayectoria') {
                updateSidebar(targetDay);
            }
        }
        animationFrameIdRef.current = requestAnimationFrame(runFrameStep);
    };
    const handlePlay = () => {
        if (isAnimatingRef.current) return;
        isAnimatingRef.current = true;
        lastFrameTimeRef.current = 0;
        animationFrameIdRef.current = requestAnimationFrame(runFrameStep);
    };
    const handlePause = () => {
        isAnimatingRef.current = false;
        if (animationFrameIdRef.current) {
            cancelAnimationFrame(animationFrameIdRef.current);
            animationFrameIdRef.current = null;
        }
        const plotDiv = plotRef.current?.el;
        if (plotDiv) {
            layoutRef.current.sliders[0].active = currentDayRef.current - 1;
            Plotly.relayout(plotDiv, { 'sliders[0].active': currentDayRef.current - 1 });
        }
    };
    const bindPlotlyEvents = (el) => {
        el.removeAllListeners?.('plotly_hover');
        el.removeAllListeners?.('plotly_click');
        el.removeAllListeners?.('plotly_sliderchange');
        el.on('plotly_hover', (data) => {
            if (followModeRef.current === 'cursor' && !isAnimatingRef.current) {
                const pt = data.points[0];
                if (pt && pt.customdata) updateSidebar(pt.customdata);
            }
        });
        el.on('plotly_click', (data) => {
            if (followModeRef.current === 'cursor') {
                const pt = data.points[0];
                if (pt && pt.customdata) updateSidebar(pt.customdata);
            }
        });
        el.on('plotly_sliderchange', (data) => {
            if (data.step && data.step.label && !isAnimatingRef.current) {
                const day = parseInt(data.step.label);
                if (!isNaN(day)) {
                    currentDayRef.current = day;
                    updateSidebar(day);
                    const currentPt = toroData.trajectory[day - 1];
                    const ptMeta = toroData.points[currentPt.n];
                    const textLabel = representationRef.current === 'numeros' ? `(${ptMeta.q},${ptMeta.r})` : `${ptMeta.numeral}-${ptMeta.symName}`;
                    const segments = getRumboSegments(day);
                    if (el.layout && el.layout.scene && el.layout.scene.camera) {
                        layoutRef.current.scene.camera = el.layout.scene.camera;
                    }
                    layoutRef.current.sliders[0].active = day - 1;
                    const updatedData = [...el.data];
                    updatedData[7] = { ...updatedData[7], x: segments.tlahuiztlanpa.map(s => s.x), y: segments.tlahuiztlanpa.map(s => s.y), z: segments.tlahuiztlanpa.map(s => s.z) };
                    updatedData[8] = { ...updatedData[8], x: segments.huitztlanpa.map(s => s.x), y: segments.huitztlanpa.map(s => s.y), z: segments.huitztlanpa.map(s => s.z) };
                    updatedData[9] = { ...updatedData[9], x: segments.cihuatlanpa.map(s => s.x), y: segments.cihuatlanpa.map(s => s.y), z: segments.cihuatlanpa.map(s => s.z) };
                    updatedData[10] = { ...updatedData[10], x: segments.mictlanpa.map(s => s.x), y: segments.mictlanpa.map(s => s.y), z: segments.mictlanpa.map(s => s.z) };
                    updatedData[11] = {
                        ...updatedData[11], x: [[currentPt.x]], y: [[currentPt.y]], z: [[currentPt.z]], text: [[textLabel]],
                        textfont: { ...updatedData[11].textfont, size: representationRef.current === 'numeros' ? 28 : 16 }
                    };
                    Plotly.react(el, updatedData, layoutRef.current);
                }
            }
        });
        const targetContainer = el.querySelector('.gl-container') || el.querySelector('canvas') || el;
        if (targetContainer) {
            targetContainer.onmousedown = () => {
                isUserInteractingRef.current = true;
            };
            targetContainer.onmouseup = () => {
                isUserInteractingRef.current = false;
            };
            targetContainer.onmouseleave = () => {
                isUserInteractingRef.current = false;
            };
        }
        const handleWheelCapture = (e) => {
            const currentDragmode = el._fullLayout?.scene?.dragmode || el.layout?.scene?.dragmode;
            if (currentDragmode !== 'zoom') {
                e.stopImmediatePropagation();
                e.preventDefault();
                return;
            }
            isUserInteractingRef.current = true;
            clearTimeout(el._wheelTimeout);
            el._wheelTimeout = setTimeout(() => {
                isUserInteractingRef.current = false;
            }, 150);
        };
        el.removeEventListener('wheel', el._wheelCaptureHandler, true);
        el._wheelCaptureHandler = handleWheelCapture;
        el.addEventListener('wheel', handleWheelCapture, true);
    };
    const categoryTraces = useMemo(() => TRACE_KEYS.map((cat_key) => {
        const cat = catContainers[cat_key];
        const isBase = cat_key === 'base';
        const traceMode = 'markers+text';
        let textColor = 'rgba(0,0,0,0)';
        if (labelsVisibility === 'all') {
            textColor = '#334155';
        } else if (labelsVisibility === 'highlights') {
            textColor = ['base', 'familia_q_1'].includes(cat_key) ? 'rgba(0,0,0,0)' : '#334155';
        }
        return {
            type: 'scatter3d',
            x: cat.x, y: cat.y, z: cat.z,
            mode: traceMode,
            marker: {
                size: cat.size, color: cat.color, symbol: cat.symbol,
                line: { color: isBase ? '#E2E8F0' : '#0F172A', width: isBase ? 0.5 : 1 }
            },
            text: currentRepresentation === 'numeros' ? cat.text_num : cat.text_img,
            textposition: 'top center',
            textfont: {
                color: textColor,
                size: currentRepresentation === 'numeros'
                    ? (['base', 'familia_q_1'].includes(cat_key) ? 28 : 28)
                    : (['base', 'familia_q_1'].includes(cat_key) ? 16 : 16),
                family: 'Arial, sans-serif'
            },
            hovertext: cat.hover,
            customdata: cat.n,
            name: cat.name
        };
    }), [labelsVisibility, currentRepresentation]);
    const initialSegments = getRumboSegments(currentDayRef.current);
    const initialPt = toroData.trajectory[currentDayRef.current - 1] || toroData.trajectory[0];
    const initialMeta = toroData.points[initialPt.n];
    const trailTraces = [
        { type: 'scatter3d', mode: 'lines', name: 'Trayectoria Oriente', hoverinfo: 'skip', opacity: 1.0, x: initialSegments.tlahuiztlanpa.map(s => s.x), y: initialSegments.tlahuiztlanpa.map(s => s.y), z: initialSegments.tlahuiztlanpa.map(s => s.z), line: { color: RUMBO_COLORS.tlahuiztlanpa, width: 5.5 } },
        { type: 'scatter3d', mode: 'lines', name: 'Trayectoria Sur', hoverinfo: 'skip', opacity: 1.0, x: initialSegments.huitztlanpa.map(s => s.x), y: initialSegments.huitztlanpa.map(s => s.y), z: initialSegments.huitztlanpa.map(s => s.z), line: { color: RUMBO_COLORS.huitztlanpa, width: 5.5 } },
        { type: 'scatter3d', mode: 'lines', name: 'Trayectoria Poniente', hoverinfo: 'skip', opacity: 1.0, x: initialSegments.cihuatlanpa.map(s => s.x), y: initialSegments.cihuatlanpa.map(s => s.y), z: initialSegments.cihuatlanpa.map(s => s.z), line: { color: RUMBO_COLORS.cihuatlanpa, width: 5.5 } },
        { type: 'scatter3d', mode: 'lines', name: 'Trayectoria Norte', hoverinfo: 'skip', opacity: 1.0, x: initialSegments.mictlanpa.map(s => s.x), y: initialSegments.mictlanpa.map(s => s.y), z: initialSegments.mictlanpa.map(s => s.z), line: { color: RUMBO_COLORS.mictlanpa, width: 5.5 } }
    ];
    const tracerTrace = {
        type: 'scatter3d',
        x: [initialPt.x], y: [initialPt.y], z: [initialPt.z],
        mode: 'markers+text',
        marker: { size: 10, color: '#EF4444', symbol: 'circle', line: { color: '#FFFFFF', width: 1.5 } },
        text: [currentRepresentation === 'numeros' ? `(${initialMeta.q},${initialMeta.r})` : `${initialMeta.numeral}-${initialMeta.symName}`],
        textposition: 'top center',
        textfont: { color: '#022249ff', size: currentRepresentation === 'numeros' ? 28 : 16, family: 'Arial, sans-serif' },
        name: 'Generador Activo',
        hoverinfo: 'skip'
    };
    const toggleLabelsRepresentation = (mode) => {
        setCurrentRepresentation(mode);
        const plotDiv = plotRef.current?.el;
        if (!plotDiv) return;
        const textMatrix = TRACE_KEYS.map((key) => catContainers[key][mode === 'numeros' ? 'text_num' : 'text_img']);
        const fontSizes = mode === 'numeros'
            ? [10, 10, 11, 11, 11, 11]
            : [12, 13, 16, 16, 16, 16];
        Plotly.restyle(plotDiv, {
            text: textMatrix,
            'textfont.size': fontSizes
        }, [1, 2, 3, 4, 5, 6]);
        const currentPtData = toroData.trajectory[currentDayRef.current - 1];
        if (currentPtData) {
            const currentMeta = toroData.points[currentPtData.n];
            if (currentMeta) {
                const updatedLabel = mode === 'numeros' ? `(${currentMeta.q},${currentMeta.r})` : `${currentMeta.numeral}-${currentMeta.symName}`;
                Plotly.restyle(plotDiv, {
                    text: [[updatedLabel]],
                    'textfont.size': mode === 'numeros' ? 28 : 16
                }, [11]);
            }
        }
    };
    const toggleLabelsVisibility = (visibilityMode) => {
        setLabelsVisibility(visibilityMode);
        const plotDiv = plotRef.current?.el;
        if (!plotDiv) return;
        const targetIndices = [1, 2, 3, 4, 5, 6];
        if (visibilityMode === 'none') {
            Plotly.restyle(plotDiv, { 'textfont.color': 'rgba(0,0,0,0)' }, targetIndices);
        }
        else if (visibilityMode === 'highlights') {
            const colorsArray = ['rgba(0,0,0,0)', 'rgba(0,0,0,0)', '#334155', '#334155', '#334155', '#334155'];
            Plotly.restyle(plotDiv, { 'textfont.color': colorsArray }, targetIndices);
        }
        else if (visibilityMode === 'all') {
            Plotly.restyle(plotDiv, { 'textfont.color': '#334155' }, targetIndices);
        }
    };
    const updatePlaySpeed = (val) => {
        const newSpeed = parseInt(val);
        setSpeed(newSpeed);
        if (isAnimatingRef.current) {
            clearInterval(animationIntervalRef.current);
            animationIntervalRef.current = setInterval(runFrameStep, newSpeed);
        }
    };
    return (
        <div id="app-container" style={{ display: 'flex', width: '100vw', height: '100vh', backgroundColor: isDark ? '#0F172A' : '#F8FAFC', color: isDark ? '#F8FAFC' : '#0F172A', fontFamily: 'Arial, sans-serif', overflow: 'hidden', transition: 'background-color 0.3s ease, color 0.3s ease' }}>
            <MenuLat />
            <div id="plot-area" style={{ flex: 1, height: '100%', position: 'relative', backgroundColor: '#F8FAFC' }}>
                <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '240px',
                    zIndex: 10,
                    fontSize: '13px',
                    color: '#64748B',
                    fontWeight: '300',
                    fontFamily: 'Arial, sans-serif',
                    pointerEvents: 'none',
                    backgroundColor: 'rgba(248, 250, 252, 0.85)',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                    <span style={{ color: '#2563EB' }}>🛈</span> Usa estas herramientas para manipular la cámara 3D cuando la reproducción del gráfico este en pausa→
                </div>
                <Plot
                    ref={plotRef}
                    data={[surfaceTrace, ...categoryTraces, ...trailTraces, tracerTrace]}
                    layout={layout}
                    config={{
                        responsive: true,
                        displayModeBar: true,
                        displaylogo: false,
                        modeBarButtonsToAdd: ['orbitRotation', 'turntableRotation', 'pan3d', 'zoom3d', 'resetCameraDefault']
                    }}
                    style={{ width: '100%', height: '100%' }}
                    onInitialized={(figure, el) => bindPlotlyEvents(el)}
                    onUpdate={(figure, el) => bindPlotlyEvents(el)}
                />
            </div>
            <div id="sidebar" style={{
                width: '22%',
                minWidth: '280px',
                maxWidth: '380px',
                height: '100%',
                backgroundColor: isDark ? '#1E293B' : '#FFFFFF',
                borderLeft: isDark ? '1px solid #334155' : '1px solid #E2E8F0',
                padding: '1.5vh 1.2vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1vh',
                boxSizing: 'border-box',
                overflowY: 'auto',
                transition: 'background-color 0.3s ease, border-color 0.3s ease'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1 style={{ margin: '0', fontSize: 'clamp(1vw, 2.1vh, 20px)', fontWeight: 800, color: isDark ? '#F8FAFC' : '#0F172A', lineHeight: '1.2', transition: 'color 0.3s ease' }}>Kāuhnemismachiyotl</h1>
                    <h5 style={{ margin: '0', fontSize: 'clamp(1.3vw, 2.2vh, 16px)', fontWeight: 790, color: isDark ? '#F8FAFC' : '#0F172A', lineHeight: '1', transition: 'color 0.3s ease' }}>Tonalpohualli</h5>
                    <div className="subtitle" style={{ fontSize: 'clamp(0.7vw, 1.1vh, 10px)', color: '#64748B', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginTop: '2px' }}>Toro Interactivo 3D - Modelo Z₁₃ ⊕ Z₂₀</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="section-label" style={{ fontSize: 'clamp(9px, 1.2vh, 11px)', fontWeight: 700, textTransform: 'uppercase', color: isDark ? '#94A3B8' : '#475569', marginBottom: '0.4vh', transition: 'color 0.3s ease' }}>Controles de Reproducción</div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button onClick={handlePlay} style={{ flex: 1, padding: 'clamp(0.9vw, 0.8vh, 8px)', backgroundColor: '#10B981', color: '#0F172A', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: 'clamp(10px, 1.3vh, 12px)' }}>► Play</button>
                        <button onClick={handlePause} style={{ flex: 1, padding: 'clamp(0.9vw, 0.8vh, 8px)', backgroundColor: '#EF4444', color: '#FFFFFF', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: 'clamp(10px, 1.3vh, 12px)' }}>⏸ Pause</button>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="section-label" style={{ fontSize: 'clamp(9px, 1.2vh, 11px)', fontWeight: 700, textTransform: 'uppercase', color: isDark ? '#94A3B8' : '#475569', marginBottom: '0.4vh', transition: 'color 0.3s ease' }}>Representación</div>
                    <div className="selector-container" style={{ display: 'flex', backgroundColor: isDark ? '#0F172A' : '#F1F5F9', borderRadius: '8px', padding: '3px', transition: 'background-color 0.3s ease' }}>
                        <button className={`selector-btn ${currentRepresentation === 'numeros' ? 'active' : ''}`} onClick={() => toggleLabelsRepresentation('numeros')} style={{ flex: 1, padding: 'clamp(0.9vw, 0.7vh, 7px) 3px', fontSize: 'clamp(9px, 1.2vh, 11px)', fontWeight: 600, border: 'none', borderRadius: '6px', cursor: 'pointer', backgroundColor: currentRepresentation === 'numeros' ? (isDark ? '#38BDF8' : '#2563EB') : 'transparent', color: currentRepresentation === 'numeros' ? (isDark ? '#0F172A' : '#FFFFFF') : (isDark ? '#94A3B8' : '#64748B'), transition: 'all 0.3s ease' }}>
                            Pares (q, r)
                        </button>
                        <button className={`selector-btn ${currentRepresentation === 'imagenes' ? 'active' : ''}`} onClick={() => toggleLabelsRepresentation('imagenes')} style={{ flex: 1, padding: 'clamp(0.9vw, 0.7vh, 7px) 3px', fontSize: 'clamp(9px, 1.2vh, 11px)', fontWeight: 600, border: 'none', borderRadius: '6px', cursor: 'pointer', backgroundColor: currentRepresentation === 'imagenes' ? (isDark ? '#38BDF8' : '#2563EB') : 'transparent', color: currentRepresentation === 'imagenes' ? (isDark ? '#0F172A' : '#FFFFFF') : (isDark ? '#94A3B8' : '#64748B'), transition: 'all 0.3s ease' }}>
                            (Numeral, Glifo)
                        </button>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="section-label" style={{ fontSize: 'clamp(9px, 1.2vh, 11px)', fontWeight: 700, textTransform: 'uppercase', color: isDark ? '#94A3B8' : '#475569', marginBottom: '0.4vh', transition: 'color 0.3s ease' }}>Modo de Seguimiento</div>
                    <div className="selector-container" style={{ display: 'flex', backgroundColor: isDark ? '#0F172A' : '#F1F5F9', borderRadius: '8px', padding: '3px', transition: 'background-color 0.3s ease' }}>
                        <button className={`selector-btn ${followMode === 'cursor' ? 'active' : ''}`} onClick={() => setFollowMode('cursor')} style={{ flex: 1, padding: 'clamp(0.9vw, 0.7vh, 7px) 3px', fontSize: 'clamp(9px, 1.2vh, 11px)', fontWeight: 600, border: 'none', borderRadius: '6px', cursor: 'pointer', backgroundColor: followMode === 'cursor' ? (isDark ? '#2563EB' : '#1D4ED8') : 'transparent', color: followMode === 'cursor' ? '#F8FAFC' : (isDark ? '#94A3B8' : '#64748B'), transition: 'all 0.3s ease' }}>
                            Al Señalar
                        </button>
                        <button className={`selector-btn ${followMode === 'trayectoria' ? 'active' : ''}`} onClick={() => setFollowMode('trayectoria')} style={{ flex: 1, padding: 'clamp(0.9vw, 0.7vh, 7px) 3px', fontSize: 'clamp(9px, 1.2vh, 11px)', fontWeight: 600, border: 'none', borderRadius: '6px', cursor: 'pointer', backgroundColor: followMode === 'trayectoria' ? (isDark ? '#2563EB' : '#1D4ED8') : 'transparent', color: followMode === 'trayectoria' ? '#F8FAFC' : (isDark ? '#94A3B8' : '#64748B'), transition: 'all 0.3s ease' }}>
                            Al Animar
                        </button>
                    </div>
                </div>
                <div id="details-card" style={{
                    backgroundColor: isDark ? '#0F172A' : '#F8FAFC',
                    borderRadius: '16px',
                    padding: '1.5vh 1.2vw',
                    border: isDark ? '1px solid #334155' : '1px solid #E2E8F0',
                    flex: '1 1 28%',
                    minHeight: '135px',
                    maxHeight: '220px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxSizing: 'border-box',
                    transition: 'all 0.3s ease'
                }}>
                    {activeDayData ? (
                        <div id="details-content" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8vh' }}>
                                <span style={{ fontSize: 'clamp(0.6vw, 1.2vh, 11px)', fontWeight: 800, backgroundColor: isDark ? '#334155' : '#E2E8F0', padding: '2px 10px', borderRadius: '12px', color: isDark ? '#38BDF8' : '#2563EB', fontFamily: 'monospace', transition: 'all 0.3s ease' }}>Día {activeDayData.day}</span>
                                <span style={{ fontSize: 'clamp(0.6vw, 1.1vh, 9px)', fontWeight: 700, textTransform: 'uppercase', padding: '2px 9px', borderRadius: '12px', color: '#0F172A', backgroundColor: RUMBO_COLORS[activeDayData.classKey] || '#FFF' }}>{activeDayData.className}</span>
                            </div>
                            {currentRepresentation === 'numeros' ? (
                                <div className="visual-numeros" style={{ display: 'flex', gap: '8px', flexGrow: 1, alignItems: 'center' }}>
                                    <div style={{ flex: 1, backgroundColor: isDark ? '#1E293B' : '#FFFFFF', border: isDark ? '1px solid #334155' : '1px solid #E2E8F0', borderRadius: '8px', padding: '0.6vh 2px', display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', transition: 'background-color 0.3s ease, border-color 0.3s ease' }}>
                                        <span style={{ fontSize: 'clamp(3vw, 3.5vh, 28px)', fontWeight: 800, color: isDark ? '#F87171' : '#DC2626', lineHeight: '1.1', transition: 'color 0.3s ease' }}>{activeDayData.q}</span>
                                        <span style={{ fontSize: 'clamp(8px, 1.1vh, 10px)', color: isDark ? '#adb7c6ff' : '#64748B', textTransform: 'uppercase', marginTop: '2px', transition: 'color 0.3s ease' }}>módulo 13</span>
                                    </div>
                                    <div style={{ flex: 1, backgroundColor: isDark ? '#1E293B' : '#FFFFFF', border: isDark ? '1px solid #334155' : '1px solid #E2E8F0', borderRadius: '8px', padding: '0.6vh 2px', display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', transition: 'background-color 0.3s ease, border-color 0.3s ease' }}>
                                        <span style={{ fontSize: 'clamp(3vw, 3.5vh, 28px)', fontWeight: 800, color: isDark ? '#34D399' : '#16A34A', lineHeight: '1.1', transition: 'color 0.3s ease' }}>{activeDayData.r}</span>
                                        <span style={{ fontSize: 'clamp(8px, 1.1vh, 10px)', color: isDark ? '#adb7c6ff' : '#64748B', textTransform: 'uppercase', marginTop: '2px', transition: 'color 0.3s ease' }}>módulo 20</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="visual-imagenes" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', flexGrow: 1 }}>
                                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', width: '100%', flexGrow: 1, alignItems: 'center' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '45%' }}>
                                            <div style={{ width: '100%', height: '10vh', minHeight: '35px', maxHeight: '1000px', backgroundColor: isDark ? '#334155' : '#F1F5F9', border: isDark ? '1px solid #606772ff' : '1px solid #CBD5E1', borderRadius: '8px', padding: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', transition: 'all 0.3s ease' }}>
                                                <img src={getImagePath(activeDayData.q === 0 ? '13.png' : `${activeDayData.q}.png`)} alt={`Numeral ${activeDayData.numeral}`} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                                            </div>
                                            <span style={{ fontSize: 'clamp(11px, 1.1vh, 10px)', color: isDark ? '#adb7c6ff' : '#475569', marginTop: '2px', textAlign: 'center', whiteSpace: 'nowrap', transition: 'color 0.3s ease' }}>Num. {activeDayData.numeral}</span>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '45%' }}>
                                            <div style={{ width: '100%', height: '10vh', minHeight: '35px', maxHeight: '100px', backgroundColor: isDark ? '#334155' : '#F1F5F9', border: isDark ? '1px solid #606772ff' : '1px solid #CBD5E1', borderRadius: '8px', padding: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', transition: 'all 0.3s ease' }}>
                                                <img src={getImagePath(activeDayData.symFile)} alt={`Signo ${activeDayData.symName}`} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                                            </div>
                                            <span style={{ fontSize: 'clamp(11px, 1.1vh, 10px)', color: isDark ? '#adb7c6ff' : '#475569', marginTop: '2px', textAlign: 'center', whiteSpace: 'nowrap', transition: 'color 0.3s ease' }}>Signo: {activeDayData.symName}</span>
                                        </div>
                                    </div>
                                    <div style={{ fontSize: 'clamp(15px, 1.5vh, 14px)', fontWeight: 700, color: isDark ? '#38BDF8' : '#2563EB', marginTop: '2px', textTransform: 'capitalize', textAlign: 'center', transition: 'color 0.3s ease' }}>{activeDayData.numeral} - {activeDayData.symName}</div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div style={{ color: isDark ? '#94A3B8' : '#475569', fontSize: 'clamp(10px, 1.3vh, 12px)', textAlign: 'center', transition: 'color 0.3s ease' }}>
                            Usa los controles o interactúa con el modelo 3D para ver su recorrido.
                        </div>
                    )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="section-label" style={{ fontSize: 'clamp(9px, 1.2vh, 11px)', fontWeight: 700, textTransform: 'uppercase', color: isDark ? '#94A3B8' : '#475569', marginBottom: '0.4vh', transition: 'color 0.3s ease' }}>Velocidad de Animación</div>
                    <div style={{ backgroundColor: isDark ? '#0F172A' : '#F8FAFC', border: isDark ? '1px solid #334155' : '1px solid #E2E8F0', borderRadius: '12px', padding: 'clamp(6px, 1vh, 10px) 10px', transition: 'all 0.3s ease' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4vh' }}>
                            <span style={{ fontSize: 'clamp(9px, 1.2vh, 11px)', color: '#64748B', fontWeight: 600 }}>Intervalo:</span>
                            <span style={{ fontSize: 'clamp(9px, 1.2vh, 11px)', color: isDark ? '#38BDF8' : '#2563EB', fontWeight: 800, transition: 'color 0.3s ease' }}>{speed} ms</span>
                        </div>
                        <input type="range" id="speed-slider" min="50" max="1000" step="50" value={speed} onChange={(e) => updatePlaySpeed(e.target.value)} style={{ width: '100%', cursor: 'pointer', accentColor: isDark ? '#38BDF8' : '#2563EB' }} />
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="section-label" style={{ fontSize: 'clamp(9px, 1.2vh, 11px)', fontWeight: 700, textTransform: 'uppercase', color: isDark ? '#94A3B8' : '#475569', marginBottom: '0.4vh', transition: 'color 0.3s ease' }}>Etiquetas de Coordenadas</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <button
                            onClick={() => toggleLabelsVisibility('none')}
                            style={{
                                width: '100%',
                                padding: 'clamp(5px, 0.8vh, 8px)',
                                fontSize: 'clamp(9px, 1.2vh, 11px)',
                                fontWeight: 600,
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                textAlign: 'left',
                                backgroundColor: labelsVisibility === 'none' ? (isDark ? '#2563EB' : '#1D4ED8') : (isDark ? '#0F172A' : '#F1F5F9'),
                                color: labelsVisibility === 'none' ? '#F8FAFC' : (isDark ? '#94A3B8' : '#64748B'),
                                transition: 'all 0.3s ease'
                            }}
                        >
                            • Ocultar Coordenadas
                        </button>
                        <button
                            onClick={() => toggleLabelsVisibility('highlights')}
                            style={{
                                width: '100%',
                                padding: 'clamp(5px, 0.8vh, 8px)',
                                fontSize: 'clamp(9px, 1.2vh, 11px)',
                                fontWeight: 600,
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                textAlign: 'left',
                                backgroundColor: labelsVisibility === 'highlights' ? (isDark ? '#2563EB' : '#1D4ED8') : (isDark ? '#0F172A' : '#F1F5F9'),
                                color: labelsVisibility === 'highlights' ? '#F8FAFC' : (isDark ? '#94A3B8' : '#64748B'),
                                transition: 'all 0.3s ease'
                            }}
                        >
                            • Mostrar Solo Destacados
                        </button>
                        <button
                            onClick={() => toggleLabelsVisibility('all')}
                            style={{
                                width: '100%',
                                padding: 'clamp(5px, 0.8vh, 8px)',
                                fontSize: 'clamp(9px, 1.2vh, 11px)',
                                fontWeight: 600,
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                textAlign: 'left',
                                backgroundColor: labelsVisibility === 'all' ? (isDark ? '#2563EB' : '#1D4ED8') : (isDark ? '#0F172A' : '#F1F5F9'),
                                color: labelsVisibility === 'all' ? '#F8FAFC' : (isDark ? '#94A3B8' : '#64748B'),
                                transition: 'all 0.3s ease'
                            }}
                        >
                            • Mostrar Todas
                        </button>
                    </div>
                </div><br />
            </div>
        </div>
    );
};
export default Toro;
