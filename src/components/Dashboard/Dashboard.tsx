import { useNavigate } from 'react-router-dom';
import { Button, Container } from '../ui/index';

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Button text="Crear Animal " onClick={() => navigate('/animal')} />
        </li>
        <li>Dashboard</li>
        <li>Dashboard</li>
      </ul>
    </Container>
  );
};
