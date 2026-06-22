const express = require('express');
const app = express();
app.use(express.json());

const orders = [
  { id: 101, userId: 1, item: "Laptop", status: "Paid" },
  { id: 102, userId: 2, item: "Mouse", status: "Pending" }
];

app.get('/health', (req, res) => res.json({ status: 'ok', service: 'order-service' }));

app.get('/orders', (req, res) => res.json(orders));

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`order-service running on ${PORT}`));
