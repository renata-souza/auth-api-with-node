import { Router, Request, Response } from 'express'

const statusRoute = Router()

statusRoute.get('/status', (req: Request, res: Response) => {
  res.status(200).send('Status ok :3')
});

export default statusRoute
