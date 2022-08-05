import { Router, Request, Response } from 'express';

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response) => {
  const users = [{'userName': 'John Doe'}]
  res.status(200).json({users});
})

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response) => {
  const uuid = req.params.uuid
  res.status(200).send({ uuid });
})

usersRoute.post('/users', (req: Request, res: Response) => {
  res.status(201).send(req.body)
})

usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response) => {
  const modifiedUser = req.body
  res.status(200).send(modifiedUser)
})

usersRoute.delete('/users/:uuid', (req: Request, res: Response) => {
  res.status(200)
})

export default usersRoute;