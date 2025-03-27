const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const schoolRoutes = require('./routes/schools');

const app = express();
const swaggerDocument = YAML.load('./swagger.yaml');

//smol logging
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', schoolRoutes);

module.exports = app;

//smol error handling
app.use((err, req, res, next) => {
    console.error(`[${new Date().toISOString()}] Error:`, err);
    res.status(500).json({ error: 'Internal Server Error' });
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));