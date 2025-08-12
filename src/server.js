const path = require('path');
const express = require('express');
const app = express();

// Views directory
app.set('views', path.join(__dirname, 'src', 'views')); // adjust if views are inside src/views
app.set('view engine', 'ejs');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

// Port binding for Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
