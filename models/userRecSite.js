const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recSiteSchema = new Schema(
	{
		userName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		location: {
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

module.exports = mongoose.model('UserRecSite', recSiteSchema);