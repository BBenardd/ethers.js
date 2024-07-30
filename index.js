const express = require('express');
const { ethers } = require('ethers');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from ethers.js API');
});

app.get('/balance/:address', async (req, res) => {
  const address = req.params.address;
  const provider = new ethers.providers.InfuraProvider('homestead', process.env.INFURA_PROJECT_ID);
  const balance = await provider.getBalance(address);
  res.json({ address, balance: ethers.utils.formatEther(balance) });
});

app.listen(port, () => {
  console.log(`ethers.js API listening at http://localhost:${port}`);
});
