var OxyBlocker = (function() {

  var $ = function(s,d) { return (d||document).querySelector(s); };
  var $$ = function(s,d) { return (d||document).querySelectorAll(s); };

  var path = chrome.extension.getURL('/');

  var defaultCSS = {
    item: 'pointer-events:none;',
    cover: 'position:relative;',
    image: `
      position:absolute;
      left:50%; top:50%;
      width:48px; height:48px;
      margin:-15px;
      z-index:9;
      content:'';
      background:url(${path}oxy-blocker-overlay.png) no-repeat 50% 50%;
      background-size:contain;
    `,
    transition: 'transition:opacity .3s ease;',
    hide: 'opacity:.1;'
  };

  function initialize(css, selectors, shouldWatch) {

    var style = document.createElement('style');
    style.type = 'text/css';
    style.textContent = css.replace(/{{css:(\w+)}}/gi, function(_, key) {
      return defaultCSS[key];
    });

    document.body.appendChild(style);

    var wrap = $(selectors.wrap);
    (function loop() {
      var list = Array.from($$(selectors.list, wrap));
      list.forEach(function(item) {
        var title = $(selectors.title, item).textContent;
        item.classList.add('--oxy-blocker-processed');
        if (isOxy(title)) {
          item.classList.add('--oxy-blocker');
        }
      });

      if (shouldWatch) {
        setTimeout(loop, 500);
      }
    })();

  }

  function isOxy(str) {
    str = str.replace(/\s/g, '');
    return (
      /파워크린|오투액션|옥시크린|쉐리|에어윅|물먹는하마|냄새먹는하마|하마로이드|이지오프뱅|옥시싹싹|하픽|데톨|개비스콘|스트렙실/i.test(str) ||
      /비트|veet/i.test(str) && /제모/.test(str) ||
      /옥시/.test(str) && /피니시/.test(str) ||
      /옥시/.test(str) && /숄/.test(str) ||
      /옥시/.test(str) && /표백제/.test(str) ||
      /옥시/.test(str) && /제습제/.test(str) ||
      /옥시/.test(str) && /섬유\s*유연제/.test(str) ||
      /Reckitt\s*Benckiser/i.test(str) || 
      /레킷\s*벤키저/.test(str)
    );
  }

  return {
    initialize: initialize
  };

})();

