(function() {

	var $ = function(s,d) { return (d||document).querySelector(s); };
	var $$ = function(s,d) { return (d||document).querySelectorAll(s); };

	var style = document.createElement('style');
	style.type = 'text/css';
	style.textContent = `
		.--oxy-blocker {
			pointer-events:none;
			position:relative;
		}

		.--oxy-blocker::after {
			position:absolute;
			left:50%; top:50%;
			width:48px; height:48px;
			margin:-15px;
			z-index:9;
			content:'';
			background:url(${OxyBlocker.path}oxy-blocker-overlay.png) no-repeat 50% 50%;
			background-size:contain;
		}

		ul.list_prod_type1 > li > * { transition:opacity .3s ease; }
		.--oxy-blocker > * { opacity:.1; }
	`;

	document.body.appendChild(style);

	var isOxy = function(str) {
		str = str.replace(/\s/g, '');
		return (
			/파워크린|오투액션|옥시크린|쉐리|에어윅|물먹는하마|냄새먹는하마|하마로이드|이지오프뱅|옥시싹싹|하픽|데톨|개비스콘|스트렙실/i.test(str) ||
			/비트|veet/i.test(str) && /제모/.test(str) ||
			/옥시/i.test(str) && /피니시/.test(str) ||
			/옥시/i.test(str) && /숄/.test(str)
		);
	};

	var wrap = $('#searchContent');
	(function loop() {
		var list = Array.from($$('ul.list_prod_type1 > li:not(.--oxy-blocker-processed)', wrap));
		list.forEach(function(item) {
			var title = $('.tit_g a', item).textContent;
			item.classList.add('--oxy-blocker-processed');
			if (isOxy(title)) {
				item.classList.add('--oxy-blocker');
			}
		});

		setTimeout(loop, 1000);
	})();

})();