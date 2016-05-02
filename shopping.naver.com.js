(function() {

	var $ = function(s,d) { return (d||document).querySelector(s); };
	var $$ = function(s,d) { return (d||document).querySelectorAll(s); };

	var style = document.createElement('style');
	style.type = 'text/css';
	style.textContent = `
		.--oxy-blocker {
			pointer-events:none;
		}

		.--oxy-blocker .img_area a.img {
			position:relative;
		}

		.--oxy-blocker .img_area a.img::after {
			position:absolute;
			left:50%; top:50%;
			width:48px; height:48px;
			margin:-15px;
			z-index:9;
			content:'';
			background:url(${OxyBlocker.path}oxy-blocker-overlay.png) no-repeat 50% 50%;
			background-size:contain;
		}

		.img_area a > :not(.mask),
		div.info,
		div.info_mall { transition:opacity .3s ease; }

		.--oxy-blocker .img_area a > :not(.mask),
		.--oxy-blocker div.info,
		.--oxy-blocker div.info_mall { opacity:.1; }

		.--oxy-blocker .img_box a {
			position:relative;
		}

		.--oxy-blocker .img_box a::after {
			position:absolute;
			left:50%; top:50%;
			width:48px; height:48px;
			margin:-15px;
			z-index:9;
			content:'';
			background:url(${OxyBlocker.path}oxy-blocker-overlay.png) no-repeat 50% 50%;
			background-size:contain;
		}

		.img_box a > *,
		.info_box > * { transition:opacity .3s ease; }

		.--oxy-blocker .img_box a > *,
		.--oxy-blocker .info_box > * { opacity:.1; }


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

	// http://shopping.naver.com/search/all_search.nhn?where=all&frm=NVSCTAB&query=%ED%95%98%EB%A7%88
	(function(wrap) {
		if (!wrap) { return; }

		(function loop() {
			var list = Array.from($$('.goods_list > li:not(.--oxy-blocker-processed)', wrap));
			list.forEach(function(item) {
				var title = $('.info a', item).textContent;
				item.classList.add('--oxy-blocker-processed');
				if (isOxy(title)) {
					item.classList.add('--oxy-blocker');
				}
			});

			setTimeout(loop, 500);
		})();
	})($('#content'));

	// http://shopping.naver.com/hotdeal/search.nhn?query=%ED%95%98%EB%A7%88&frm=NVSCHOT
	(function(wrap) {
		if (!wrap) { return; }
		
		(function loop() {
			var list = Array.from($$('li:not(.--oxy-blocker-processed)', wrap));
			list.forEach(function(item) {
				var title = $('.info_box a', item).textContent;
				item.classList.add('--oxy-blocker-processed');
				if (isOxy(title)) {
					item.classList.add('--oxy-blocker');
				}
			});

			setTimeout(loop, 500);
		})();
	})($('#hotdeal_list'));

})();