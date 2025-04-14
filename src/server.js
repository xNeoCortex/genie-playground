const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World! This is a basic Express server.');
});

// Sample API endpoint
app.get('/api/info', (req, res) => {
  res.json({
    message: 'This is a sample API endpoint',
    timestamp: new Date().toISOString()
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});