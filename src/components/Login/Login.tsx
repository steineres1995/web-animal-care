import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { config } from '../../config/config';
import { Button, Input } from '../ui';
import { ErrorMessage } from '../Messages';

export const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    fetch(`${config.api.baseUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Las credenciales son inválidas');
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem('token', data.accessToken);
        navigate('test');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      Login
      <Input
        label="Email"
        type="email"
        name="email"
        value={credentials.email}
        onChange={handleChange}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
      />
      {error ? <ErrorMessage message="Error message" /> : null}
      <Button text="Login" onClick={handleLogin} />
    </div>
  );
};
