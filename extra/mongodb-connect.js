const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err,res) => {
	// 	if(err) {
	// 		return console.log('Unable to insert todo',err);
	// 	}

	// 	console.log(JSON.stringify(res.ops, undefined, 2));
	// });

	db.collection('Users').insertOne({
		name: 'Atishay',
		age: 19,
		location: 'KKR'
	}, (err, res) => {
		if(err) {
			return console.log('Unable to insert in Users',err);
		}

		console.log(JSON.stringify(res.ops, undefined, 3));
	});

	db.close();
});