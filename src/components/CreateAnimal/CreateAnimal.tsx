import { Button, Input, Select, Container } from '../ui/index';
import { useNavigate } from 'react-router-dom';

export const CreateAnimal = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Button text="Volver" onClick={() => navigate('/dashboard')} />
      <form>
        <Input
          label="Nro Carabana"
          type="text"
          name="earringkey"
          value=""
          onChange={() => console.log('onChange')}
        />
        <Select label="Raza" options={['Olando', 'Hereford', 'Angus']} />
        <Button
          text="Crear Animal"
          onClick={() => console.log('Crear Animal')}
        />
      </form>
    </Container>
  );
};
