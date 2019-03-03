module.exports = {
	epochToDate: function (epoch) {
		return new Date(epoch).valueOf()
	}
	dateToEpoch: function (date) {
		return new Date(date).toLocaleString();
	}
}
