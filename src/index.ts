import express, { Request, Response } from 'express';
import usersRoute from './routes/users.route'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(usersRoute);

app.get('/status', (req: Request, res: Response) => {
  res.status(200).send({ foo: 'bar' })
});

app.listen(3000, () => {
  console.log('server is up!')
});