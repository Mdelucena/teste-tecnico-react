import React, { useState, useEffect } from 'react';
import { Container, Button, List, ListItem, ListItemText, IconButton, Paper, TextField, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const TodoListPage: React.FC = () => {
  const [todos, setTodos] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const [color, setColor] = useState('#ffffff'); 

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(storedTodos);
  }, []);

  const handleDelete = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleAdd = () => {
    if (!title || !description || !dateTime) {
      alert('Todos os campos devem ser preenchidos');
      return;
    }
    const newTodo = { 
      title, 
      description, 
      dateTime, 
      isImportant, 
      color: isImportant ? '#FF0000' : color 
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTitle('');
    setDescription('');
    setDateTime('');
    setIsImportant(false);
    setColor('#ffffff');
  };

  const formatDateTime = (dateTime: string) => {
    if (!dateTime) return '';
    const date = new Date(dateTime);
    return date.toLocaleDateString('pt-BR') + ' ' + date.toLocaleTimeString('pt-BR');
  };

  return (
    <Container>
      <h1>Lista de Atividades</h1>
      <Grid container spacing={2} style={{ marginBottom: '16px' }}>
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
            type="datetime-local"
            fullWidth
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
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
            onClick={handleAdd}
          >
            Adicionar Atividade
          </Button>
        </Grid>
      </Grid>
      <List>
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            component={Paper}
            style={{
              backgroundColor: todo.color || '#ffffff', 
              marginBottom: '8px',
              padding: '16px',
            }}
          >
            <ListItemText
              primary={todo.title}
              secondary={
                <div style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '4px' }}>Descrição: {todo.description}</div>
                  <div>Data e Hora: {formatDateTime(todo.dateTime)}</div>
                </div>
              }
            />
            <IconButton edge="end" aria-label="edit" component={Link} to={`/todo/edit/${index}`}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TodoListPage;
