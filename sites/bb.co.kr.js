var css = `
  .--oxy-blocker {
    {{css:item}}
    position:relative;
  }

  .--oxy-blocker::after {
    {{css:image}}
  }

  li.type1.--oxy-blocker,
  .--oxy-blocker > tbody {
    {{css:cover}}
  }

  table.goods_list > tbody {
    {{css:transition}}
  }

  .--oxy-blocker > * {
    {{css:hide}}
  }
`;

OxyBlocker.initialize(css, {
  wrap: '#container',
  list: 'table.goods_list:not(.--oxy-blocker-processed)',
  title: '.tit'
}, true);

OxyBlocker.initialize(css, {
  wrap: '#container',
  list: 'li.type1:not(.--oxy-blocker-processed)',
  title: '.tit'
}, true);
