const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const { specs } = require('./config/swagger');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api', authRoutes);
app.use('/api', authenticateToken, bookRoutes);
app.use('/api', authenticateToken, orderRoutes);
app.use('/api', authenticateToken, reviewRoutes);

const PORT=process.env.PORT || 3000;
app.listen(POST,()=>{
    console.log(`server is running at the PORT ${PORT}`)
})