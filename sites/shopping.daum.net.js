var css = `
  .--oxy-blocker {
    {{css:item}}
    {{css:cover}}
  }

  .--oxy-blocker::after {
    {{css:image}}
  }

  ul.list_prod_type1 > li > * {
    {{css:transition}}
  }
  .--oxy-blocker > * {
    {{css:hide}}
  }
`;

// http://shopping.daum.net/search/%EC%98%A5%EC%8B%9C/&srchhow:Cexpo
OxyBlocker.initialize(css, {
  wrap: '#searchContent',
  list: 'ul.list_prod_type1 > li:not(.--oxy-blocker-processed)',
  title: '.tit_g a'
}, true);

