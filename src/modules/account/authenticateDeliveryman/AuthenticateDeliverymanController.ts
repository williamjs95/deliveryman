import { Request, Response } from 'express';
import { AuthenticateDeliverymanUserCase } from './AuthenticateDeliverymanUseCase'

export class AuthenticateDeliverymanController {
  async handle (request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUserCase();

    const result = await authenticateDeliverymanUseCase.execute({
      username,
      password,
    })

    return response.json(result);
  }
}