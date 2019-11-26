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

/*app.get('/', (req, res) => {
	res.send(`<h1>Welcome</h1>`);
});*/

app.use('/routes/api/users', users);
app.use('/routes/api/questions', questions);
app.use('/routes/api/moods', moods);

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.resolve(__dirname, 'client/build')));
	//
	app.get('*', (req, res) => {
		res.sendfile(path.resolve((__dirname = 'client/build/index.html')));
	});
}

// Handling 404
app.use((req, res) => {
	res.status(404).send({ err: 'We can not find what you are looking for' });
});

const port = 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));