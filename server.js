const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// const fs = require('fs');
// const path = require('path');
// const { animals } = require('./data/animals');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// app.use(express.static('public'));

// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);
// parse incoming string or array data
// app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
// app.use(express.json());

// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);
// lesson said here, but joseph said up there below public - both work apparently


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
