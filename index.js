var dust = require('dustjs-helpers')

function titlecase(value) {
    return value.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() 
	})
}

function uppercase(value) {
	return value.toUpperCase()
}

function lowercase(value) {
	return value.toLowerCase()
}

dust.filters.title = titlecase
dust.filters.upper = uppercase
dust.filters.lower = lowercase

module.exports = dust
