import { Test, TestingModule } from '@nestjs/testing';
import { CurrenciesService, ExchangeService } from './exchange.service';
import { BadRequestException } from '@nestjs/common';

describe('ExchangeService', () => {
  let service: ExchangeService;
  let serviceCurrencies: CurrenciesService;

  beforeEach(async () => {
    const currenciesServiceMock = {
      getCurrency: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExchangeService,
        {
          provide: CurrenciesService,
          useFactory: () => currenciesServiceMock,
        },
      ],
    }).compile();

    service = module.get<ExchangeService>(ExchangeService);
    serviceCurrencies = module.get<CurrenciesService>(CurrenciesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('convertAmount()', () => {
    it('should be throw if called with invalid params', async () => {
      await expect(
        service.convertAmount({ from: '', to: '', amount: 0 }),
      ).rejects.toThrow(new BadRequestException());
    });

    it('should be called getCurrency() twice', async () => {
      await service.convertAmount({ from: 'USD', to: 'BRL', amount: 1 });
      await expect(serviceCurrencies.getCurrency).toHaveBeenCalledTimes(2);
    });
  });
});
