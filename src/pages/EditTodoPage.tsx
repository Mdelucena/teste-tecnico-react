import React, { useState, useEffect } from 'react';
import { Container, Button, TextField, Grid, FormControl, InputLabel, Select, MenuItem, Snackbar, Alert } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const EditTodoPage: React.FC = () => {
  const { index } = useParams<{ index: string }>();
  const navigate = useNavigate();
  const [todos, setTodos] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const [color, setColor] = useState('#ffffff'); // Default color
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(storedTodos);
    if (index !== undefined && storedTodos[index]) {
      const todo = storedTodos[index];
      setTitle(todo.title);
      setDescription(todo.description);
      setDateTime(todo.dateTime);
      setIsImportant(todo.isImportant);
      setColor(todo.color);
    }
  }, [index]);

  const handleSave = () => {
    if (!title || !description || !dateTime) {
      alert('Todos os campos devem ser preenchidos');
      return;
    }
    const updatedTodos = todos.map((todo, i) =>
      i === parseInt(index || '') ? { title, description, dateTime, isImportant, color } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setOpenSnackbar(true); 
    setTimeout(() => navigate('/todo'), 2000); 
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container>
      <h1>Editar Atividade</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Título"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Descrição"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Data e Hora"
            type="datetime-local"
            fullWidth
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            InputLabelProps={{
              shrink: true, 
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Cor</InputLabel>
            <Select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              label="Cor"
            >
              <MenuItem value="#ffffff">Branco</MenuItem>
              <MenuItem value="#cc7722">Laranja</MenuItem>
              <MenuItem value="#98FB98">Verde Claro</MenuItem>
              <MenuItem value="#4169E1">Azul</MenuItem>
              {}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <label>
            <input
              type="checkbox"
              checked={isImportant}
              onChange={() => setIsImportant(!isImportant)}
            />
            Importante
          </label>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
          >
            Salvar Alterações
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Alterações salvas com sucesso!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default EditTodoPage;
