import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login/Login';
import { Dashboard } from './components/Dashboard/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="test" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
