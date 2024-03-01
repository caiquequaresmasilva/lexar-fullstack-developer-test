import express from 'express';
import 'dotenv/config'

const app = express();
const port = process.env.API_PORT

app.get('/', (req, res) => res.json('Hello World!'));

app.listen(port, () => console.log(`API Running on port ${port}!`));
