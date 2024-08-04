import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user: any) => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem('authenticated', 'true');
      navigate('/todo');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="E-mail"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Senha"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
        <Grid container spacing={2} marginTop={2}>
          <Grid item xs={12} display="flex" justifyContent="flex-end">
            <Button variant="text" color="primary" onClick={() => navigate('/register')}>
              Não tem uma conta? Cadastre-se
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default LoginPage;
