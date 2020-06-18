
const express = require('express');
const app = express();

const port = 30000;

app.use('/api/users', require('./routes/users'));

app.listen(port, () => {
   console.log(`API listening on port ${port}`);
});

module.exports = app;
