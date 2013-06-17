/**
 * Cookie Utility
 *
 * @author     Naoki Sekiguchi (RaNa gRam)
 * @url        https://github.com/seckie/cookie-util
 */

;(function(window, document, undefined) {

window.onload = function () {
	var cookieUtil = new CookieUtil();
	cookieUtil.debug = true;

	var el = {};
	el.set = document.getElementById('set');
	el.get = document.getElementById('get');
	el.delete = document.getElementById('delete');

	el.set.onclick = function () {
		var key = document.getElementById('setkey').value;
		var val = document.getElementById('setvalue').value;
		var result = cookieUtil.set(key, val);
		alert('document.cookie: ' + document.cookie);
	};

	el.get.onclick = function () {
		var key = document.getElementById('getkey').value;
		var result = cookieUtil.get(key);
		alert('cookie value: ' + result);
	};

	el.delete.onclick = function () {
		var key = document.getElementById('deletekey').value;
		var result = cookieUtil.delete(key);
		alert('document.cookie: ' + document.cookie);
	};
};

})(this, this.document);
