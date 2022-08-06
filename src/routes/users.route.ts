import { Request, Response, Router } from 'express';
import userRepository from '../repositories/user.repository';

const usersRoute = Router();

usersRoute.get('/users', async (req: Request, res: Response) => {
  const users = await userRepository.findAllUsers()
  res.status(200).send(users);
})

usersRoute.get('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response) => {
  const uuid = req.params.uuid
  const user = await userRepository.findUserById(uuid)
  res.status(200).send(user);
})

usersRoute.post('/users', async (req: Request, res: Response) => {
  const newUser = req.body
  const uuid = await userRepository.createUser(newUser)
  res.status(201).send(uuid);
})

usersRoute.put('/users/:uuid', async (req: Request, res: Response) => {
  const uuid = req.params.uuid
  const modifiedUser = req.body

  modifiedUser.uuid = uuid

  await userRepository.updateUser(modifiedUser)
  res.status(200).send()
})

usersRoute.delete('/users/:uuid', async (req: Request, res: Response) => {
  const uuid = req.params.uuid
  await userRepository.deleteUser(uuid)
  res.sendStatus(200)
})

export default usersRoute;