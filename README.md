# dustjs-filters

Augments dustjs-linkedin and dustjs-helpers with some filters.

## Filters

### title

**data**
	
	{
		"name" : "john"
	}
	
	
**template**	

	{name|title}

**result**

	John
	
### upper

**data**
	
	{
		"name" : "john"
	}
	
	
**template**	

	{name|upper}

**result**

	JOHN
	
### lower

**data**
	
	{
		"name" : "JOHN"
	}
	
	
**template**	

	{name|upper}

**result**

	john

## Helpers


### filter

Allows filtering lists:

**data**
	
	{
		"items" : [
			{
				"name" : "john",
				"visible": true
			},
			{
				"name" : "anthony",
				"visible": false
			}	
		]
	}
	
	
**template**	

	{@filter key=items isTrue="visible"}
	{name}{@sep},{/sep}
	{/filter}

**result**

john
	




