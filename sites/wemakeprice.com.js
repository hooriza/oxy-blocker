var css = `
  .--oxy-blocker {
    {{css:item}}
    background-color:#fff !important;
  }

  .--oxy-blocker::after {
    {{css:image}}
  }

  .--oxy-blocker > span {
    {{css:cover}}
  }

  ul.list_combine > li > span {
    {{css:transition}}
  }

  .--oxy-blocker > span {
    {{css:hide}}
  }
`;

// 2016년 5월 4일 현재, 위메프는 현재 옥시 제품을 안 파는 듯
OxyBlocker.initialize(css, {
  wrap: '#container',
  list: 'ul.list_combine > li:not(.--oxy-blocker-processed)',
  title: '.tit_desc'
}, true);