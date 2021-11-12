const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recSiteSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			default: false,
		},
		description: {
			type: String,
			required: true,
		},
		credit: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('RecSite', recSiteSchema);
