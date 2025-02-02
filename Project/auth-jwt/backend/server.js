const express = require('express');
const jwt = require('jwt-simple');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const SECRET_KEY = 'mysecretkey';

// mock users
const users = {
  user1: { username: 'user1', email: 'user1@email.com', role: 'USER' },
  admin1: { username: 'admin1', email: 'admin@email.com', role: 'ADMIN' }
};

// Generate JWT Token
const generateToken = (user) => {
  const payload = { name: user.username, email: user.email, role: user.role };
  return jwt.encode(payload, SECRET_KEY);
};

// Login Route
app.post('/login', (req, res) => {
  const { username } = req.body;
  const user = users[username];
  
  if (!user) {
    return res.status(401).send('User not found');
  }

  const token = generateToken(user);
  res.json({ token });
});

// Verify JWT Route
app.post('/verify', (req, res) => {
  const token = req.body.token;

  try {
    const decoded = jwt.decode(token, SECRET_KEY);
    res.json({ valid: true, user: decoded });
  } catch (e) {
    res.status(401).json({ valid: false });
  }
});

app.listen(5001, () => console.log('Server running on http://localhost:5001'));
