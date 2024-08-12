import { Request, Response } from 'express';
import { FindAllDeliveriesUseCase } from '../../../clients/useCases/deliveries/FindAllDeliveriesUseCase'

export class FindAllDeliveriesDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request.body;

    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();
    const deliveries = await findAllDeliveriesUseCase.execute(id_deliveryman)

    return response.json(deliveries);
  }
}
