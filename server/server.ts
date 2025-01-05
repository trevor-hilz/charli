import express from 'express';
const app = express();
import path from 'path';

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public/')));

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

export default app;
