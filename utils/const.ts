export const SOCKET_URL = `wss://ws.finnhub.io?token=${process.env.EXPO_PUBLIC_API_KEY}`;

export const CRYPTO_LIST_DROPDOWN = [
  {
    label: 'ALL',
    value: 'all',
  },
  {
    label: 'BTC/USD',
    value: 'BINANCE:BTCUSDT',
  },
  {
    label: 'ETH/USD',
    value: 'BINANCE:ETHUSDC',
  },
];
