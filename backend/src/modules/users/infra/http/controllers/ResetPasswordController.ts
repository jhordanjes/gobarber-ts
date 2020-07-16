import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ResetPasswordEmailService from '@modules/users/services/ResetPasswordService';

export default class ResetPasswordController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { password, token } = req.body;

    const resetPasswordEmail = container.resolve(ResetPasswordEmailService);

    await resetPasswordEmail.execute({ password, token });

    return res.status(204).json();
  }
}
