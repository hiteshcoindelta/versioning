const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [];

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Add a new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Get a single user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }
  res.json(user);
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }
  const { name, email } = req.body;
  user.name = name || user.name;
  user.email = email || user.email;
  res.json(user);
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
  users = users.filter((u) => u.id != req.params.id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`User API running at http://localhost:${port}`);
});
