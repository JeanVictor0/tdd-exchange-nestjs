import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class ExchangeService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async convertAmount(arg0: {
    from: string;
    to: string;
    amount: number;
  }): Promise<void> {
    if (!arg0.from || !arg0.to || !arg0.amount) {
      throw new BadRequestException();
    }
  }
}
