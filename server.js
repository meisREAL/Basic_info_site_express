const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'project', 'index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'project', 'about.html'))
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'project', 'contact-me.html'))
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'project', '404.html'))
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})