const express = require('express');

const app = express();

app.get('/quote', function(req, res, next) {
    res.json({
        quote: 'As you dive deeper into web development, web development dives deeper into you!'    //api endpoint
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});