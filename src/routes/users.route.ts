import { Request, Response, Router } from 'express';
import userRepository from '../repositories/user.repository';

const usersRoute = Router();

usersRoute.get('/users', async (req: Request, res: Response) => {
  const users = await userRepository.findAllUsers()
  res.status(200).send(users);
})

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response) => {
  const uuid = req.params.uuid
  res.status(200).send({ uuid });
})

usersRoute.post('/users', (req: Request, res: Response) => {
  res.status(201).send(req.body)
})

usersRoute.put('/users/:uuid', (req: Request, res: Response) => {
  const modifiedUser = req.body
  res.status(200).send(modifiedUser)
})

usersRoute.delete('/users/:uuid', (req: Request, res: Response) => {
  res.status(200)
})

export default usersRoute;