var css = `
  .--oxy-blocker {
    {{css:item}}
    {{css:cover}}
    background-color:#fff;
  }

  .--oxy-blocker::after {
    {{css:image}}
  }

  li > * {
    {{css:transition}};
  }

  .--oxy-blocker > *, .--oxy-blocker .thumb_prd {
    {{css:hide}}
  }
`;

// http://deal.11st.co.kr/browsing/ShockingDealAction.tmall?method=getSearch&kwd=%BF%C1%BD%C3
OxyBlocker.initialize(css, {
  wrap: '#layBody',
  list: '.prd_wrap > ul > li:not(--oxy-blocker-processed)',
  title: 'a > strong'
}, true);

OxyBlocker.initialize('', {
  wrap: 'div.total_search_wrap_v2',
  list: 'ul > li:not(--oxy-blocker-processed)',
  title: '.pub_title'
}, true);

// http://deal.11st.co.kr/html/nc/deal/main.html
OxyBlocker.initialize('', {
  wrap: '#layBody',
  list: 'li:not(--oxy-blocker-processed)',
  title: 'div.prd_info p'
}, true);

OxyBlocker.initialize('', {
  wrap: '#prd_list',
  list: 'li:not(--oxy-blocker-processed)',
  title: '.thumb_info p'
}, true);
