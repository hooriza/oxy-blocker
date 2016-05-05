var css = `
  .--oxy-blocker {
    {{css:item}}
    {{css:cover}}
    background-color:#fff !important;
  }

  .--oxy-blocker::after {
    {{css:image}}
  }

  .--oxy-blocker > .a-product-container > .product-image-search,
  .--oxy-blocker > .a-product-container > .product-info-container-search {
    {{css:cover}}
  }

  .clearfix > li > * {
    {{css:transition}}
  }

  .--oxy-blocker > * {
    {{css:hide}}
  }
`;


// 오늘의 딜
OxyBlocker.initialize(css, {
  wrap: '#searchDealPrd',
  list: '.clearfix > li:not(.--oxy-blocker-processed)',
  title: '.product-title'
}, true);


// 상품 리스트
OxyBlocker.initialize(css, {
  wrap: '#searchPrdList',
  list: '.clearfix > li:not(.--oxy-blocker-processed)',
  title: '.product-title'
}, true);

// 많이 본 상품
OxyBlocker.initialize(css, {
  wrap: '#searchPrdRecommend',
  list: '.clearfix > li:not(.--oxy-blocker-processed)',
  title: '.product-title'
}, true);

