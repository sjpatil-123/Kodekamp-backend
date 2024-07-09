const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
port=3000
const userRoute = require('./src/routes/userRoute');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.use('/api', userRoute);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });