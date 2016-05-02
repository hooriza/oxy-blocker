(function() {

	var fileName = location.hostname;

	var common = document.createElement('script');
	common.charset = 'utf-8';
	common.textContent = 'var OxyBlocker = { path: "' + chrome.extension.getURL('/') + '" };';

	var script = document.createElement('script');
	script.charset = 'utf-8';
	script.src = chrome.extension.getURL('/') + fileName + '.js?' + Date.now();

	(function loop() {
		
		if (!document.body) {
			return setTimeout(loop, 100);
		}

		document.body.appendChild(common);
		document.body.appendChild(script);

	})();

})();