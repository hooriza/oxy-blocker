var css = `
  .--oxy-blocker {
    {{css:item}}
  }

  .--oxy-blocker .img_box a {
    {{css:cover}}
  }

  .--oxy-blocker .img_box a::after {
    {{css:image}}
  }

  .img_box a > *,
  .info_box > * {
    {{css:transition}}
  }

  .--oxy-blocker .img_box a > *,
  .--oxy-blocker .info_box > * {
    {{css:hide}}
  }
`;

// http://shopping.naver.com/hotdeal/search.nhn?query=%ED%95%98%EB%A7%88&frm=NVSCHOT
OxyBlocker.initialize(css, {
  wrap: '#hotdeal_list',
  list: 'li:not(.--oxy-blocker-processed)',
  title: '.info_box a'
}, true);

