import express from 'express';
const app = express();
import path from 'path';
import 'dotenv/config';
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public/')));

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.listen((port: number) => {
  console.log(`Listening on port ${port}`);
});

export default app;
