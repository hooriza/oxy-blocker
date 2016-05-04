var css = `
  .--oxy-blocker {
    {{css:item}}
    {{css:cover}}
  }

  .--oxy-blocker::after {
    {{css:image}}
  }

  .prd_wrap > ul > li > * {
    {{css:transition}}
  }

  .--oxy-blocker > * {
    {{css:hide}}
  }
`;

// http://www.11st.co.kr/html/category/2396.html
OxyBlocker.initialize(css, {
  wrap: '#layBody',
  list: [
    '.prd_wrap > ul > li:not(--oxy-blocker-processed)',
    '.prd_list li:not(--oxy-blocker-processed)',
    '.cateconts_wrap li:not(--oxy-blocker-processed)',
    '#mdPick_wrap li:not(--oxy-blocker-processed)'
  ].join(','),
  title: '.pub_title'
}, true);

OxyBlocker.initialize(`
  div.dlp_shocking_deal li > * {
    {{css:transition}}
  }
`, {
  wrap: 'div.dlp_shocking_deal',
  list: 'ul.deal_li li:not(--oxy-blocker-processed)',
  title: 'div.pub_info em'
}, false);
