require('dotenv').config();
const express = require('express');
const cors = require('cors');

const loginRoutes = require('./routes/login');
const dadosRoutes = require('./routes/dados');
const missoesRoutes = require('./routes/missoes');
const plantasRoutes = require('./routes/plantas');
const processImageRoutes = require('./routes/processImage');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/login', loginRoutes);
app.use('/dados', dadosRoutes);
app.use('/missoes', missoesRoutes);
app.use('/plantas', plantasRoutes);
app.use('/process-image', processImageRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
