import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthPage } from './components/AuthPage/AuthPage';
import { Dashboard } from './components/Dashboard/Dashboard';
import { CreateAnimal } from './components/CreateAnimal/CreateAnimal';
import { Meassure } from './components/Meassure/CreateMeassure';
import { Meassures } from './components/Meassure/Meassures';
import { Session } from './components/Meassure/Session';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage isLogin={true} />}></Route>
      <Route path="/singup" element={<AuthPage isLogin={false} />}></Route>
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="animal" element={<CreateAnimal />} />
        <Route path="meassure/create" element={<Meassure />} />
        <Route path="meassure" element={<Meassures />} />
        <Route path="session" element={<Session />} />
      </Route>
    </Routes>
  );
}

export default App;
