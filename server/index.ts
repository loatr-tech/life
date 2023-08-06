import express, { Express } from 'express';
import cors from 'cors';
import lifeApi from './life';
const cookieParser = require('cookie-parser');

const app: Express = express();
const port = process.env.PORT || 3211;

// CORS-enabled for whitelist routes
app.use(
  cors({
    origin: [
      'http://localhost:3210',
      'http://localhost:1234',
      'https://life.loatr.tech',
      'https://budget.loatr.tech',
      'https://ktv.loatr.tech',
    ],
    credentials: true,
  })
);

// Body parser
app.use(express.urlencoded({ extended: true }));
// Allow our application to accept json when doing POST request
app.use(express.json());
app.use(cookieParser());

lifeApi(app);

app.get('/', (req, res) => {
  res.send('Welcome to loatr.tech');
});

app.listen(port, () => {
  console.log(`Load succeed on port ${port}`);
});
