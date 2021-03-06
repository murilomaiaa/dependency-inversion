import "dotenv/config"
import express from 'express';
import 'express-async-errors';

import routes from './routes';

const app = express();
app.use(express.json())
app.use((req, res, next) => {
  res.set('access-control-allow-origin', '*');
  res.set('access-control-allow-headers', '*');
  res.set('access-control-allow-methods', '*');
  next();
})

app.use(routes)

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});