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

const readParam = param => {
	let result = ""
	try {
		result = JSON.parse(param)
	} catch (e) {
		result = param	
	}
	
	return result
}

function filter(chunk, context, bodies, params) {
	
	let isTrue = readParam(params.isTrue)	
	let isFalse = readParam(params.isFalse)
	
	let list = context.resolve(params.key)

	if (!Array.isArray(list)) {
		return context //chunk.render(bodies.block, context)
	}

	let results = []

	for (let i = list.length - 1; i >= 0; i--) {
		const item = list[i]
		
		let pushItem = true
		
		if (isTrue) {
			if (Array.isArray(isTrue)) {
				for (let i = isTrue.length - 1; i >= 0; i--) {
					const conditionKey = isTrue[i]
					if (!item[conditionKey]) {
						pushItem = false
					}
				}
			}
			else {
				if (!item[isTrue]) {
					pushItem = false
				}
			}
		}
		
		if (isFalse) {
			if (Array.isArray(isFalse)) {
				for (let i = isFalse.length - 1; i >= 0; i--) {
					const conditionKey = isFalse[i]
					if (item[conditionKey]) {
						pushItem = false
					}
				}
			}
			else {
				if (item[isFalse]) {
					pushItem = false
				}
			}
		}
		
		if (pushItem) {
			results.push(item)
		}	
	}
		
	return results
}

dust.helpers.filter = filter

dust.filters.title = titlecase
dust.filters.upper = uppercase
dust.filters.lower = lowercase

module.exports = dust
