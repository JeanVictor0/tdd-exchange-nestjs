import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CurrenciesService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getCurrency(_currency: string): Promise<any> {}
}

@Injectable()
export class ExchangeService {
  constructor(private service: CurrenciesService) {}
  async convertAmount(arg0: {
    from: string;
    to: string;
    amount: number;
  }): Promise<void> {
    if (!arg0.from || !arg0.to || !arg0.amount) {
      throw new BadRequestException();
    }

    this.service.getCurrency(arg0.from);
    this.service.getCurrency(arg0.from);
  }
}
