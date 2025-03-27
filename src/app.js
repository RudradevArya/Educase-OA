const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const schoolRoutes = require('./routes/schools');

const app = express();
const swaggerDocument = YAML.load('./swagger.yaml');

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));