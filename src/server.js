const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const users = [
  { id: 1, firstName: "John", lastName: "Doe", username: "johndoe" },
  { id: 2, firstName: "Jane", lastName: "Doe", username: "janedoe" },
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});