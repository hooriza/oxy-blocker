var css = `
  .--oxy-blocker {
    {{css:item}}
  }

  .--oxy-blocker .img_area a.img {
    {{css:cover}}
  }

  .--oxy-blocker .img_area a.img::after {
    {{css:image}}
  }

  .img_area a > :not(.mask),
  div.info,
  div.info_mall {
    {{css:transition}}
  }

  .--oxy-blocker .img_area a > :not(.mask),
  .--oxy-blocker div.info,
  .--oxy-blocker div.info_mall {
    {{css:hide}}
  }
`;

// http://shopping.naver.com/search/all_search.nhn?query=%EC%98%A5%EC%8B%9C&pagingIndex=1&pagingSize=40&productSet=total&viewType=list&sort=price_asc&frm=NVSCTAB
OxyBlocker.initialize(css, {
  wrap: '#content',
  list: '.goods_list > li:not(.--oxy-blocker-processed)',
  title: '.info a'
}, true);

