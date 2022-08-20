const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const { DB_HOST } = process.env;

app.listen(3000, () => {
  console.log('Server running. Use our API on port: 3000');
});

mongoose
  .connect(DB_HOST)
  .then(() => console.log('Database connect'))
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
