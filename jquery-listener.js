var $ = require('jquery');

var originals = {};

module.exports = $.listener =
{
	original: function(functionName)
	{
		return originals[functionName] ? originals[functionName] : $.fn[functionName];
	},
	
	on: function(functionName)
	{
		if (!originals[functionName])
		{
			originals[functionName] = $.fn[functionName];
			$.fn[functionName] = function()
			{
				this.trigger('listener:pre:' + functionName + ':' + arguments.length);
				this.trigger('listener:pre:' + functionName);
				var result = originals[functionName].apply(this, arguments);
				this.trigger('listener:' + functionName + ':' + arguments.length);
				this.trigger('listener:' + functionName);
				this.trigger('listener:post:' + functionName + ':' + arguments.length);
				this.trigger('listener:post:' + functionName);
				return result;
			};
		}
		return $;
	},
	
	off: function(functionName)
	{
		if (originals[functionName])
		{
			$.fn[functionName] = originals[functionName];
			delete originals[functionName];
		}
		return $;
	}
};