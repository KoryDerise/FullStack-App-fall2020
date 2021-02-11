const express = require('express');

const app = express();
const PORT = 5000;

// --- MIDDLE WARE ---
app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));