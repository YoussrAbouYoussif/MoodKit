const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const questions = require('./routes/api/questions');
const moods = require('./routes/api/moods');
const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to mongo
mongoose
	.connect(db)
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.log(err));

// Init middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/routes/api/users', users);
app.use('/routes/api/questions', questions);
app.use('/routes/api/moods', moods);

// Handling 404
app.use((req, res) => {
	res.status(404).send({ err: 'We can not find what you are looking for' });
});

const port = 5000;
console.log(port);
app.listen(port, () => console.log(`Server up and running on port ${port}`));