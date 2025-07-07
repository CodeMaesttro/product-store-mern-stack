// Import the dotenv dep to load environment variables
import dotnev from 'dotenv';
dotnev.config();

// Import express
import express from 'express';

// Get the expressapp instance
const app = express();

// Create a get request handler for the root route
app.get('/', (req, res) => {
    res.send('Hello from the backend server!');
});

app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
    ]);
});

const PORT = process.env.PORT;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
