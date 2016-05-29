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

OxyBlocker.initialize(css, {
  wrap: '#container_sm',
  list: 'li.csm_li',
  title: function(el) {
     return el.querySelector('.csm_tit').textContent;
  }
},true);

// emart mall Brand
OxyBlocker.initialize(css, {
  wrap: '#item_list',
  list: 'tr.item_emall',
  title: function(el) {
     return el.querySelectorAll('.title a')[4].textContent;
  }
},true);

// emart mall Brand
OxyBlocker.initialize(css, {
  wrap: '#item_list',
  list: 'tr.item_emall',
  title: function(el) {
     return el.querySelector('#search_result_brand').textContent
  }
},true);
