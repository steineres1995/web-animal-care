import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login/Login';
import { Dashboard } from './components/Dashboard/Dashboard';
import { CreateAnimal } from './components/CreateAnimal/CreateAnimal';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="animal" element={<CreateAnimal />} />
    </Routes>
  );
}

export default App;
