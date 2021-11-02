const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userRouteSchema = new Schema(
	{
		userName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		startLoc: {
			type: String,
			required: true,
		},
		endLoc: {
			type: String,
			required: true,
		},
		rapidClass: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('UserRoute', userRouteSchema);