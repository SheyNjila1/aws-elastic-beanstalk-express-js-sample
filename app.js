const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! This is the change made by Shey Njila to test Webhook in the pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
