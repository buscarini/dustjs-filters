const dust = require("dustjs-helpers")

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

function filter(chunk, context, bodies, params) {
	
	let isTrue = params.isTrue
	let isFalse = params.isFalse
	let list = context.resolve(params.key)

	if (!Array.isArray(list)) {
		return context //chunk.render(bodies.block, context)
	}

	let results = []
	if (isTrue) {
		for (let i = list.length - 1; i >= 0; i--) {
			const item = list[i]
			if (item[isTrue]) {
				results.push(item)
			}
		}
		
		return results
	}
	
	if (isFalse) {
		for (let i = list.length - 1; i >= 0; i--) {
			const item = list[i]
			if (!item[isFalse]) {
				results.push(item)
			}
		}
		
		return results
	}
		
	return context
}

dust.helpers.filter = filter

dust.filters.title = titlecase
dust.filters.upper = uppercase
dust.filters.lower = lowercase

module.exports = dust
