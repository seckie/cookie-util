cookie-util
===========

JavaScript cookie utility (to set, get, delete)

See demo: 
- http://seckie.github.io/cookie-util/

## How to use

You have to initialize this utility.

	var util = new CookieUtil();

To get cookie, write like below.

	util.get('somekey');

To set cookie, write like below.

	util.set('somekey', 'somevalue', {
		expires: 10
	});

To delete cookie, write like below.

	util.del('somekey');

## Documentation of methods 

### get()

You can get cookie value by passing **keyname** in 1st argument.

### set()

You can set cookie value by passing **keyname** in 1st argument (required),
**value** in 2nd argument (required)
and some options in 3rd argument (optional).

#### options in 3rd argument

<table>
<thead>
<tr><th>name</th><th>type</th><th>default value</th></tr>
</thead>
<tbody>
<tr><td>expires</td><td>number</td><td>none (current session only)</td></tr>
<tr><td>path</td><td>string</td><td>none</td></tr>
<tr><td>domain</td><td>string</td><td>none</td></tr>
<tr><td>secure</td><td>boolean</td><td>false</td></tr>
</tbody>
</table>

#### example

	util.get('somekey', 'somevalue', {
		expires: 10,
		path: '/somedirectory/',
		domain: 'www.somedomain.com',
		secure: true
	});


### del()

You can delete cookie by passing **keyname** in 1st argument (required)
and some options in 2nd argument (optional).

#### options in 2nd argument

<table>
<thead>
<tr><th>name</th><th>type</th><th>default value</th></tr>
</thead>
<tbody>
<tr><td>path</td><td>string</td><td>none</td></tr>
<tr><td>domain</td><td>string</td><td>none</td></tr>
</tbody>
</table>

#### Note:
When you want to delete cookie created with **path** option, you have to pass same **path** option.
