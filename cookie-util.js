/**
 * Cookie Utility
 *
 * @author     Naoki Sekiguchi (RaNa gRam)
 * @url        https://github.com/seckie/cookie-util
 * @license    MIT License
 */

;(function(global) {

var CookieUtil = function () {
	this.debug = false;
};

CookieUtil.prototype = {
	get: function (key) {
		if (!key) {
			if (this.debug) {
				alert('1st argument (key) is required.');
			}
			return;
		}
		var cs = document.cookie.split(';');
		var holder = {};
		var c, name, value, result;
		for (var i=0,l=cs.length; i<l ; i++) {
			c = cs[i].replace(/ /g, '').split('=');
			name = c[0];
			value = c[1];
			holder[name] = value;
		}
		switch (true) {
			case key instanceof RegExp:
				result = {};
				for (var i in holder) {
					if (holder.hasOwnProperty(i) && key.test(i)) {
						result[i] = holder[i];
					}
				}
				break;
			case typeof key === 'string':
				result = holder[key];
				break;
			default:
				result = null;
		}
		return result;
	},
	set: function (key, value, opt) {
		if (!key || value === undefined) {
			if (this.debug) {
				alert('1st (key) & 2nd (value) arguments are required.');
			}
			return;
		}
		var expires, opt = opt || {};
		if (typeof opt.expires === 'number') {
			var days = opt.expires;
			var time = new Date();
			time.setDate(time.getDate() + days);
			expires = time.toUTCString();
		}
		value = value.toString();
		return (document.cookie = [
			encodeURIComponent(key), '=', encodeURIComponent(value),
			expires ? '; expires=' + expires : '',
			opt.path ? '; path=' + opt.path : '',
			opt.domain ? '; domain=' + opt.domain : '',
			opt.secure ? '; secure' : '',
		 ].join(''));
	},
	del: function (key, opt) {
		if (!key) {
			if (this.debug) {
				alert('1st argument (key) is required.');
			}
			return;
		}
		// set時にpathを指定した場合、remove時にも同じ指定をしないと削除されないので注意
		var opt = opt || {};
		opt.expires = -1;
		return this.set(key, '', opt);
	}
};

if (module) {
  module.exports = new CookieUtil();
} else {
  global.cookieUtil = new CookieUtil();
}
})(this);
