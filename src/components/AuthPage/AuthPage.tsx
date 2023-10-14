import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { config } from '../../config/config';
import { Button, Input, Select } from '../ui';
import { ErrorMessage } from '../Messages';

interface AuthPageProps {
  isLogin: boolean;
}

export const AuthPage = ({ isLogin }: AuthPageProps) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    isLogin: isLogin,
    error: {
      status: false,
      message: '',
    },
    credentials: {
      email: '',
      password: '',
    },
    registerForm: {
      name: '',
      lastName: '',
      email: '',
      company: '',
      password: '',
    },
  });

  const handleLogin = () => {
    fetch(`${config.api.baseUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: state.credentials.email,
        password: state.credentials.password,
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
        navigate('dashboard');
      })
      .catch((error) => {
        setState({
          ...state,
          error: {
            status: true,
            message: error.message,
          },
        });
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  const LoginForm = () => {
    return (
      <>
        <Input
          label="Email"
          type="email"
          name="email"
          value={state.credentials.email}
          onChange={handleChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={state.credentials.password}
          onChange={handleChange}
        />
        {state.error.status ? <ErrorMessage message="Error message" /> : null}
        <Button text="Login" onClick={handleLogin} />
      </>
    );
  };

  //TODO: Cambiar la funcion onChange para que funcione con el formulario de registro
  const RegisterForm = () => {
    return (
      <>
        <Input
          label="Nombre"
          type="text"
          name="name"
          value={state.registerForm.name}
          onChange={handleChange}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={state.registerForm.email}
          onChange={handleChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={state.registerForm.password}
          onChange={handleChange}
        />
        <Input
          label="Grupo"
          type="text"
          name="company"
          value={state.registerForm.company}
          onChange={handleChange}
        />
        <Select label="Rol" options={['Administrador', 'Usuario']} />
        {state.error.status ? <ErrorMessage message="Error message" /> : null}
        <Button text="Registrarse" onClick={handleLogin} />
      </>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg">
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};
