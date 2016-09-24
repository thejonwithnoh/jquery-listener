jquery-listener
===============

Copyright (c) 2016 Jonathan Faulch

About
-----

Is some other jQuery library doing things behind your back?  Manipulating the
DOM without giving you proper events to respond to?  Worry no more!  With
jquery-listener, you can easily listen to any jQuery method and respond
accordingly!

Usage
-----

```javascript
var $ = require('jquery');
require('jquery-listener'); // === $.listener

$.listener.on('val');

// only listen to the one argument version
$('#some-input').on('listener:val:1', function()
{
	// so we don't overflow when using the zero argument version here
	console.log('#some-input changed value to: ' + $('#some-input').val());
});

$('#some-input').val('some text');
// outputs: '#some-input changed value to: some text'
```

Motivation
----------

One day, while working with jQuery UI's autocomplete widget, I was frustrated
while attempting to respond to changes to the underlying text input's value.  It
didn't seem to have enough events to respond to *all* changes.  Then I thought:
"But this is a jQuery library!  Surely they must be updating the value using
jQuery's `val` method!".  And so jquery-listener was born!

Is this the proper way to go about solving the problem?  Probably not... I don't
know.  But regardless, I feel as if this power is *useful*.  At the very least
as a debugging tool.  Remember young grasshopper: with great power, comes great
responsibility. \-\_\-

License
-------

jquery-listener is licensed under the MIT License.  See license.md.