import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from './components/ui/index.tsx';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Router>
        <Container>
          <App />
        </Container>
      </Router>
    </React.StrictMode>
  );
} else {
  console.error('El elemento con id "root" no se encontró en el DOM.');
}
