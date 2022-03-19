const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
var router = require('./router.js');

app.use(express.static('client/dist'));
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});