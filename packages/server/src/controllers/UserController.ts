import { Request, Response } from 'express'

class UserController {
  async store(request: Request, response: Response): Promise<any> {}

  async index(request: Request, response: Response): Promise<any> {}

  async show(request: Request, response: Response): Promise<any> {}

  async update(request: Request, response: Response): Promise<any> {}

  async delete(request: Request, response: Response): Promise<any> {}
}

export default new UserController()
