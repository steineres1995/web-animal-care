import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Button } from '../ui/index';

//TODO: Implementar el logout
const NavBar = () => {
  return (
    <nav className="bg-primary text-text p-4 fixed-top top-0 left-0 flex justify-between items-center h-16 w-full">
      <h1 className="text-xl font-bold ml-4">Dashboard</h1>
      <div className="flex space-x-4 mr-4">
        <>
          <span>test@email.com</span>
          <Button text="Cerrar sesión" onClick={() => console.log('logout')} />
        </>
      </div>
    </nav>
  );
};

const SideMenu = () => {
  return (
    <div className="bg-accent w-64 h-screen fixed top-16 left-0 shadow-lg text-text">
      <ul className="space-y-2 p-4">
        <li>
          <Link
            to="/dashboard/animal"
            className="block px-4 py-2 rounded hover:bg-primary"
          >
            Crear Animal
          </Link>
        </li>
        <li>
          <Link
            to="/crear-medicion"
            className="block px-4 py-2 rounded hover:bg-primary"
          >
            Crear Medición
          </Link>
        </li>
        <li>
          <Link
            to="/ver-mediciones"
            className="block px-4 py-2 rounded hover:bg-primary"
          >
            Ver Mediciones
          </Link>
        </li>
      </ul>
    </div>
  );
};

export const Dashboard = () => {
  return (
    <div className="h-screen w-screen bg-background">
      <NavBar />
      <SideMenu />
      <main className="ml-64 p-4">
        <Outlet />
      </main>
    </div>
  );
};
