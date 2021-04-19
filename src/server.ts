import express, { request } from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.send('Nlw 05');
});

app.post('/', (request, response) => {
  return response.json({ message: 'Usuário salvo com sucesso!' });
});

app.listen(1337, () => console.log('Server running on port 1337'));
