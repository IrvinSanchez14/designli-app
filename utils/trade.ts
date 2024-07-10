export const tradeList = [
  {
    id: 'BINANCE:ETHUSDC',
    title: 'ETH/USD',
  },
  {
    id: 'BINANCE:BTCUSDT',
    title: 'BTC/USD',
  },
];

export const createSuscribe = (type: string) => {
  switch (type) {
    case 'all': {
      return [
        { type: 'subscribe', symbol: 'BINANCE:BTCUSDT' },
        { type: 'subscribe', symbol: 'BINANCE:ETHUSDC' },
      ];
    }
    case 'BINANCE:BTCUSDT': {
      return [{ type: 'subscribe', symbol: 'BINANCE:BTCUSDT' }];
    }
    case 'BINANCE:ETHUSDC': {
      return [{ type: 'subscribe', symbol: 'BINANCE:ETHUSDC' }];
    }
    default: {
      return [];
    }
  }
};
