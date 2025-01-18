const express = require('express');

const quoteRoutes = require('./routes/quotes.routes');

const app = express();

app.use('/routes', quoteRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});