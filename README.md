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

Allows filtering lists by using isTrue or isFalse:

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
	

### Multiple conditions

**isTrue** and **isFalse** can be used at the same time:

**data**
	
	{
		"items" : [
			{
				"name" : "john",
				"visible": true,
				"deleted" : false,
			},
			{
				"name" : "anthony",
				"visible": false,
				"deleted" : false
			},
			{
				"name" : "james",
				"visible": true,
				"deleted" : true
			}
		]
	}
	
	
**template**	

	{@filter key=items isTrue="visible" isFalse="deleted"}
	{name}{@sep},{/sep}
	{/filter}

**result**

john

Finally, an array of conditions can be used by using a JSON string for each condition:

**data**
	
	{
		"items" : [
			{
				"name" : "john",
				"visible": true,
				"happy" : true,
			},
			{
				"name" : "anthony",
				"visible": false,
				"happy" : false
			},
			{
				"name" : "james",
				"visible": true,
				"happy" : false
			}
		]
	}
	
	
**template**	

	{@filter key=items isTrue="[ \"visible\", \"happy\" ]" }
	{name}{@sep},{/sep}
	{/filter}

**result**

john
