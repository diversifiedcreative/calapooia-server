const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripReportSchema = new Schema(
	{
		userName: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		visitType: {
			type: String,
			required: true,
		},
		visitDate: {
			type: String,
			required: true,
		},
		recommend: {
			type: String,
			required: true,
		},
		tripText: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('TripReport', tripReportSchema);