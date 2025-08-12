const path = require('path');
const express = require('express');
const app = express();

// Set the views directory correctly
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});