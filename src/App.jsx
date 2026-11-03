import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Menu from './components/pages/Menu'
import Inicio from './components/pages/Inicio'
import Conversor from './components/pages/Conversor'
import Inverso from './components/pages/Inverso'
import Tablero from './components/pages/Tablero'
import Toro from './components/pages/Toro'
import Calculadora from './components/pages/Calculadora'
import { getImagePath } from './components/funtions/funtions'
import { ThemeProvider, useTheme } from './context/ThemeContext'
function AppContent() {
  const location = useLocation();
  const esPaginaToro = location.pathname === '/toro';
  const { theme } = useTheme();
  const BarraDecorativa = (
    <div style={{ display: 'flex', width: '100%', margin: 0, padding: '5px 0', backgroundColor: theme === 'dark' ? '#121212' : '#ffffff', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.3s ease' }}>
      <img src={getImagePath('prueba2.png')} alt="Barra decorativa" style={{ width: '100%', maxWidth: '3000px', minWidth: '100px', height: 'auto', objectFit: 'contain', objectPosition: 'center' }} />
    </div>
  );
  return (
    <>
      {!esPaginaToro && BarraDecorativa}
      {!esPaginaToro && <Menu />}
      <div className={esPaginaToro ? "layout-toro-container" : ""}>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path="/conversor" element={<Conversor />} />
          <Route path="/inverso" element={<Inverso />} />
          <Route path="/tablero" element={<Tablero />} />
          <Route path="/toro" element={null} />
          <Route path="/calculadora" element={<Calculadora />} />
        </Routes>
      </div>
      {esPaginaToro && (
        <div className="layout-toro-container">
          <Toro />
        </div>
      )}
      {esPaginaToro && BarraDecorativa}
      <footer className="text-center mt-5 p-4" style={{ borderTop: theme === 'dark' ? '1px solid #334155' : '1px solid #e2e8f0', color: theme === 'dark' ? '#94a3b8' : '#475569', fontSize: '0.9rem', transition: 'all 0.3s ease' }}>
        <p className="mb-0">Créditos. © 2026 KĀUHNEMISMACHIYOTL. Diseñado y desarrollado por Flor de Maria Cruz Reyes y Ramiro Carrillo Catalán. Todos los derechos reservados.</p>
        <p>⤟ TLACUACHE CODEX LAB ⤠</p>
      </footer>
    </>
  )
}
function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <AppContent />
        </Router>
      </ThemeProvider>
    </>
  )
}
export default App
