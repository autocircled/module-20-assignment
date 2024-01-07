const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({

	date: {
		type: Date,
		required: true
	},
	product: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	department: {
		type: String,
		required: true
	},
	salary: {
		type: Number,
		required: true
	}
})

module.exports = mongoose.model('sales', salesSchema)