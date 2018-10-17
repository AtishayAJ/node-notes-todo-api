const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server');

	// db.collection('Todos').deleteMany({
	// 	text: 'much to do'
	// }).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Todos').deleteOne({
	// 	text: 'much to do'
	// }).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Todos').findOneAndDelete({
	// 	completed: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndDelete({
		_id: new ObjectID('5bc783c7f82a7cab70a5ac30')
	}).then((result) => {
		console.log(result);
	});
});
