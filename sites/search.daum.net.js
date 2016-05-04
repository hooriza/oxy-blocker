var css = `
  .--oxy-blocker {
    {{css:item}}
    {{css:cover}}
  }

  .--oxy-blocker::after {
    {{css:image}}
    top:50px;
  }

  ul.list_goods li a,
  ul.list_goods li dl {
    {{css:transition}}
  }

  .--oxy-blocker a,
  .--oxy-blocker dl {
    {{css:hide}}
  }
`;

// http://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=%EC%98%A5%EC%8B%9C&tltm=1
OxyBlocker.initialize(css, {
  wrap: '#shopHowColl ul.list_goods',
  list: 'li:not(--oxy-blocker-processed)',
  title: '.info dt a'
}, true);