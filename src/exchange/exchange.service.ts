import { Injectable } from '@nestjs/common';

@Injectable()
export class ExchangeService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async convertAmount(arg0: { form: string; to: string, amount: number }): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
