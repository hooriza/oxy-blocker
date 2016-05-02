(function() {

	var $ = function(s,d) { return (d||document).querySelector(s); };
	var $$ = function(s,d) { return (d||document).querySelectorAll(s); };

	var style = document.createElement('style');
	style.type = 'text/css';
	style.textContent = `
		.--oxy-blocker {
			position:relative;
			spointer-events:none;
		}

		.--oxy-blocker::after {
			position:absolute;
			left:50%; top:50px;
			width:48px; height:48px;
			margin:-15px;
			z-index:9;
			content:'';
			background:url(${OxyBlocker.path}oxy-blocker-overlay.png) no-repeat 50% 50%;
			background-size:contain;
		}

		ul.list_goods li a,
		ul.list_goods li dl {
			transition:opacity .3s ease;
		}

		.--oxy-blocker a,
		.--oxy-blocker dl { opacity:.2; }
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

	var wrap = $('#shopHowColl ul.list_goods');
	(function loop() {
		var list = Array.from($$('li:not(--oxy-blocker-processed)', wrap));
		list.forEach(function(item) {
			var title = $('.info dt b', item).textContent;
			item.classList.add('--oxy-blocker-processed');
			if (isOxy(title)) {
				item.classList.add('--oxy-blocker');
			}
		});

		setTimeout(loop, 500);
	})();

})();