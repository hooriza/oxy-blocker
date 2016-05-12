var DEBUG = false;

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

    var timer = null;

    var wrap = $(selectors.wrap);
    var check = function() {
      if (timer) { clearTimeout(timer); }
      timer = setTimeout(function() {
        var list = Array.from($$(selectors.list, wrap));
        list.forEach(function(item) {
          if (typeof selectors.title == 'function') {
            var title = selectors.title(item);
            item.classList.add('--oxy-blocker-processed');
            if (isOxy(title)) {
              item.classList.add('--oxy-blocker');
            }
            return;
          }
          var title = $(selectors.title, item);
          if (!title) { return; }
          item.classList.add('--oxy-blocker-processed');
          if (isOxy(title.textContent)) {
            item.classList.add('--oxy-blocker');
          }
        });
        timer = null;
      }, 10);
    };

    if (wrap) {
      wrap.addEventListener('DOMNodeInserted', check, false);
      check();
    } else if (DEBUG) {
      console.warn(selectors.wrap);
    }

  }

  function isOxy(str) {
    str = str.trim();
    if (/(^|[\s\-_\[\(])옥시($|[\s\-_\]\)])/.test(str)) {
      return true;
    }

    str = str.replace(/\s/g, '');
    return (
      /파워크린|오투액션|옥시크린|쉐리|에어윅|물먹는하마|냄새먹는하마|하마로이드|이지오프뱅|옥시싹싹|하픽|데톨|개비스콘|스트렙실/.test(str) ||
      /비트|veet/i.test(str) && /제모|왁스|겨드랑이|크림/.test(str) ||
      /숄/.test(str) && /각질|네일|뒤꿈치|발|하이힐|케어|페디|풋|스무드/.test(str) ||
      /피니시/.test(str) && /세제|리필|탭스|텝스|세척|린스/.test(str) || 
      /듀렉스|durex/i.test(str) && /젤/.test(str) ||
      /ReckittBenckiser|레킷벤키저/i.test(str) ||
      DEBUG
    );
  }

  return {
    initialize: initialize
  };

})();

/*
  interpark
  tmon
*/