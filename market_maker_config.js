const config = {
  account: {
    address: '',
    privateKey: '',
  },
  pairs: [
    {
      pair: 'AMIS/ETH',
      expires: 1000,
      sellEnabled: 'onOrders/balance<0.25',
      sellNum: 5,
      sellVolume: 'Math.max(balance - onOrders, 0) / n * (0.9 + Math.random()*0.1)',
      sellPrice: '0.0125 + 0.0125 * i / n',
      buyEnabled: 'onOrders/balance<0.25',
      buyNum: 5,
      buyVolume: 'Math.max(balance - onOrders, 0) / n / price * (0.9 + Math.random()*0.1)',
      buyPrice: '0.0000011 - 0.000001 * i / n',
    },
  ],
};

module.exports = config;
