var css = `
  .--oxy-blocker {
    {{css:item}}
    background-color:#fff !important;
  }

  .--oxy-blocker::after {
    {{css:image}}
  }

  .--oxy-blocker > .detail-link > img,
  .--oxy-blocker > .detail-link > .thumbnail {
    {{css:cover}}
  }

  #productList > li > * {
    {{css:transition}}
  }

  .--oxy-blocker > * {
    {{css:hide}}
  }
`;

// Traders
OxyBlocker.initialize(css, {
  wrap: '#item_list',
  list: 'tr.item_traders',
  title: function(el) {
     return el.querySelectorAll('.title')[0].textContent;
  }
},true);


// Traders 추천
OxyBlocker.initialize(css, {
  wrap: '#container',
  list: 'td.item_traders',
  title: function(el) {
     return el.querySelector('.title a').textContent;
  }
},true);


