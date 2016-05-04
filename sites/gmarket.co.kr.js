var css = `
  .--oxy-blocker {
    {{css:item}}
    {{css:cover}}
  }

  .--oxy-blocker::after {
    {{css:image}}
  }

  li > * {
    {{css:transition}};
  }

  .--oxy-blocker > * {
    {{css:hide}}
  }

  .item_list.type_list li.--oxy-blocker {
    float:left;
  }
`;

// http://www.gmarket.co.kr/
// http://category.gmarket.co.kr/listview/L100000103.aspx
OxyBlocker.initialize(css, {
  wrap: '#container',
  list: [
    'ul.item_list > li:not(--oxy-blocker-processed)',
    'div.goods-list li:not(--oxy-blocker-processed)',
    'div.best-list li:not(--oxy-blocker-processed)',
    'div.power_item li:not(--oxy-blocker-processed)'
  ].join(','),
  title: '.title, .goods-name, .name'
}, true);
